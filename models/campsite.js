const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    }
}, {
    //automatically add update at time and created at time
    timestamps: true,
});

//automatically look for the lowercase first argument
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;