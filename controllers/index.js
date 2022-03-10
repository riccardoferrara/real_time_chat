// Import Packages
const express = require('express')
const router = express.Router()
    // const www = require('../bin/www')

//control
router.get('/', (req, res) => {
    res.render('chat/chat')
})

// wwww.io.on('connection', (socket) => {
//     console.log('a user connected');
// });

module.exports = router