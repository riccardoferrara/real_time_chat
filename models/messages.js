const mongoose = require('mongoose')

// Create the messages moodel
module.exports = mongoose.model('messages', {
    text: {
        type: String,
        required: true
    }
})