// server.js

const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const Property = require('./models/property');
const cors = require('cors');
const helmet = require('helmet');

app.use(cors({
  origin: 'http://localhost:5173' // Allow requests from this origin
}));

app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "script-src": ["'self'", "'unsafe-inline'"], // Allows inline scripts
      },
    },
  })
);

mongoose.connect(process.env.MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Municipal Revenue Management System!');
});

app.post('/addProperty', async (req, res) => {
  try {
    const newProperty = new Property(req.body);
    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/verifyPropertyAndSendOtp', async (req, res) => {
  const { phoneNumber, propertyId } = req.body;

  try {
    // Verify if the property ID exists
    const property = await Property.findOne({ propertyId });

    if (!property) {
      return res.status(404).json({ success: false, message: 'Property not found' });
    }

    if (property.mobile !== phoneNumber) {
      return res.status(400).json({ success: false, message: 'Phone number does not match' });
    }

    // Generate a random 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    // Simulate sending OTP (for example, log it)
    console.log(`OTP for property ${propertyId}: ${otp}`);

    // Respond with success and the OTP (for testing)
    res.status(200).json({ success: true, otp: otp,property });
  } catch (error) {
    res.status(500).json({ success: false, message: 'An error occurred', error: error.message });
  }
});

app.get('/getPropertyTax/:propertyId', async (req, res) => {
  try {
    const propertyId = req.params.propertyId;
    const property = await Property.findOne({ propertyId });

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    if (property.propertyTax) {
      return res.status(200).json({ paid: true });
    } else {
      return res.status(200).json({ paid: false, amount: calculatePropertyTax(property) });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/getWaterTax/:propertyId', async (req, res) => {
  try {
    const propertyId = req.params.propertyId;
    const property = await Property.findOne({ propertyId });

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    if (property.waterTax) {
      return res.status(200).json({ paid: true });
    } else {
      return res.status(200).json({ paid: false, amount: calculateWaterTax(property) });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/getGarbageTax/:propertyId', async (req, res) => {
  try {
    const propertyId = req.params.propertyId;
    const property = await Property.findOne({ propertyId });

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    if (property.garbageTax) {
      return res.status(200).json({ paid: true });
    } else {
      return res.status(200).json({ paid: false, amount: calculateGarbageTax(property) });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

function calculatePropertyTax(property) {
  const ratePerSqFt = 5; // Example rate per square foot
  return property.size * ratePerSqFt * property.propertyMonths;
}

function calculateWaterTax(property) {
  const ratePerMonth = 2; // Example rate per month
  return ratePerMonth * property.waterMonths;
}

function calculateGarbageTax(property) {
  const ratePerMonth = 1; // Example rate per month
  return ratePerMonth * property.garbageMonths;
}
