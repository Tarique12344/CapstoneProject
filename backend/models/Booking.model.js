const mongoose = require("mongoose");
const {isEmail} = require('validator');
const Schema= mongoose.Schema;

const bookingSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'Please enter first name']
    },
    lastname: {
        type: String,
        required: [true, 'Please enter last name']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    phonenumber: {
        type: String,
        required: [true, 'Please enter phone number'],
        minLength: [10, 'Mininum is 10 numbers']
    },
    date: {
        type: Date,
        required: true
    },
    // time: {
    //     type: Date,
    //     required: true
    // },
    comment: {type: String}
})
// }, {
//     timestamps: true,
// });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports= Booking; 