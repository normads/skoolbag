const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    name: String,
    address: {
        street: String,
        suburb: String,
        postcode: Number,
        state: String
    },
    students: Number
});

module.exports = mongoose.model('School', schoolSchema);
