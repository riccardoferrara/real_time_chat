// Import Packages
const express = require('express')
const router = express.Router()


// routes
router.get('/', (req, res) => {
    res.render('chat/chat')
})

module.exports = router