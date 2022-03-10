// Import Packages
const express = require('express')
const router = express.Router()


// routes
router.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

module.exports = router