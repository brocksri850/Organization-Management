const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const Organization = require('../models/Organization');

// Create organization (POST)
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // Check if the user has 'admin' role
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized: Only admins can create organizations' });
    }

    const newOrganization = new Organization({
      name: req.body.name,
      // Add other fields as needed
    });

    newOrganization.save()
      .then(organization => res.json(organization))
      .catch(err => res.status(500).json({ error: err.message }));
  }
);

// Read organizations (GET)
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // Check if the user has 'user' or 'admin' role
    if (req.user.role === 'user') {
      return res.status(403).json({ message: 'Unauthorized: Users cannot view all organizations' });
    }

    Organization.find()
      .then(organizations => res.json(organizations))
      .catch(err => res.status(500).json({ error: err.message }));
  }
);

// Update organization (PUT)
router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // Check if the user has 'admin' role
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized: Only admins can update organizations' });
    }

    Organization.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(organization => res.json(organization))
      .catch(err => res.status(500).json({ error: err.message }));
  }
);

// Delete organization (DELETE)

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized: Only admins can delete organizations' });
    }

    try {
      const deletedOrganization = await Organization.findOneAndDelete({ _id: req.params.id });

      if (!deletedOrganization) {
        return res.status(404).json({ message: 'Organizations not found' });
      }

      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

module.exports = router;
