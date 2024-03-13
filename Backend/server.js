const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Passport middleware
app.use(passport.initialize());

// MongoDB connection
const dbURL = require('./config/keys').mongoURI;

mongoose.connect('mongodb+srv://sridhar:sC94jzdb30XAhKhL@cluster0.rlfwo.mongodb.net/organization_management', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


// API Routes
const organizations = require('./routes/organizations');
const users = require('./routes/users');

app.use('/api/organizations', organizations);
app.use('/api/users', users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
