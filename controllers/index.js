// Import Packages
const express = require('express')
const router = express.Router()


//control
router.get('/', (req, res) => {

    // use socket.io
    var io = req.app.get('socketio')
    io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
            io.emit('chat message', msg);
        });
    });

    // render page
    res.render('chat/chat')

})


module.exports = router