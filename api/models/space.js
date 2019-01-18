const mongoose = require('mongoose')

const spaceSchema = mongoose.Schema({
    userId: {
        type: 'ObjectId',
    }
});

module.exports = spaceSchema