// Import Packages
const express = require('express')
const router = express.Router()


//control
router.get('/', (req, res) => {

    // use socket.io
    let socket_id = [];
    var io = req.app.get('socketio')

    io.on('connection', (socket) => {

        //prevent duplicate msf from many sessions
        socket_id.push(socket.id);
        if (socket_id[0] === socket.id) {
            // remove the connection listener for any subsequent 
            // connections with the same ID
            io.removeAllListeners('connection');
        }

        //update front msgs
        socket.on('chat message', (msg) => {
            io.emit('chat message', msg);
        });
    });

    // render page
    res.render('chat/chat')

})


module.exports = router