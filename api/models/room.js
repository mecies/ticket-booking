const mongoose = require('mongoose');
const Space = require('./Space');


const roomSchema = mongoose.Schema({
    spaces: {
        type: [Space]
    },
    maxSpaces: {
        type: Number,
    }// add space number
})

module.exports = mongoose.model('Room', roomSchema);