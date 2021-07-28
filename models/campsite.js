const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentSchema]
}, {
    //automatically add update at time and created at time
    timestamps: true,
});

//automatically look for the lowercase first argument
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;