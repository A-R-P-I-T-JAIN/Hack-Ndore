const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    propertyId: {
        type: String,
        unique: true,
        required:[true,"enter Property Id"]
    },
    aadhar: {
        type: String,
        required: true,
    },
    ownedBy: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    }, 
    type: {
        type: String,
        required: true
    },
    propertyTax: {
        type: Boolean,
        required: true
    },
    waterTax: {
        type: Boolean,
        required: true
    },
    garbageTax: {
        type: Boolean,
        required: true
    },
    propertyMonths: {
        type: Number,
        required: true,
        default: 1
    },
    waterMonths: {
        type: Number,
        required: true,
        default: 1
    },
    garbageMonths: {
        type: Number,
        required: true,
        default: 1
    },
    noOfConnection: {
        type: Number,
        required: true,
        default: 1
    }
})

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
