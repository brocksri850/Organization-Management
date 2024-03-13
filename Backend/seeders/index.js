const mongoose = require('mongoose');
const Organization = require('../models/Organization');
const User = require('../models/User');
const { mongoURI } = require('../config/keys');

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const seedData = async () => {
  // Seed organizations
  const organizations = await Organization.create([
    { name: 'Tech Solutions Inc.' },
    { name: 'Creative Designs Ltd.' },
    { name: 'Global Enterprises' },
    { name: 'Innovative Solutions Group' },
    { name: 'Digital Innovations Corporation' },
  ]);

  
  // Seed users

  await User.create([
    { 
      username: 'admin', 
      email: 'admin@gmail.com', 
      name: 'Admin User', 
      password: 'admin123', 
      role: 'admin', 
      organization: organizations[0]._id 
    },
    { 
      username: 'sridhar', 
      email: 'sridhar@gmail.com', 
      name: 'Sridhar', 
      password: 'password123', 
      role: 'user', 
      organization: organizations[1]._id 
    },
    { 
      username: 'yuvaraj', 
      email: 'yuvaraj@gmail.com', 
      name: 'Yuvaraj', 
      password: 'password123', 
      role: 'user', 
      organization: organizations[1]._id 
    },
    { 
      username: 'mohan', 
      email: 'mohan@gmail.com', 
      name: 'Mohan', 
      password: 'password123', 
      role: 'user', 
      organization: organizations[2]._id 
    },
    { 
      username: 'udhaya suriyan', 
      email: 'udhaya@gmail.com', 
      name: 'Udhaya Suriyan', 
      password: 'password123', 
      role: 'user', 
      organization: organizations[2]._id 
    },
  ]);
  
  console.log('Seeding completed.');
};


seedData();
