const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const User = require('../models/User');
const Organization = require('../models/Organization');
const jwt = require('jsonwebtoken');

// Create user (POST)
router.post(
  '/signup',
  passport.authenticate('jwt', { session: false }),

  async (req, res) => {
    // Check if the user has 'admin' role
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized: Only admins can create users' });
    }

    try {
      const organization = await Organization.findById(req.body.organization);

      if (!organization) {
        return res.status(404).json({ message: 'Organization not found' });
      }

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        organization: organization._id,
      });

      await newUser.save();

      res.json(newUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password is correct (In a production environment, use bcrypt for password hashing)
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Create a token with user details and role
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      'MysecretKey@123',
      { expiresIn: '1h' }
    );

    res.json({ user, token, status: 200 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Read users (GET)
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      let users;
      if (req.user.role === 'user') {
        users = await User.find(req.user._id).populate('organization', 'name')
      } else {
        users = await User.find().populate('organization', 'name');
      }


      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      // Find the user by ID
      const user = await User.findById(req.params.id).populate('organization', 'name');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// Update user (PUT)
router.put(
  '/:id',
  // passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    // if (req.user.role !== 'admin') {
    //   return res.status(403).json({ message: 'Unauthorized: Only admins can update users' });
    // }

    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// Delete user (DELETE)
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized: Only admins can delete users' });
    }

    try {
      const deletedUser = await User.findOneAndDelete({ _id: req.params.id });

      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);


module.exports = router;
