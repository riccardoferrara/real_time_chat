// Import Packages
const express = require('express')
const router = express.Router()

// Import Models
const Messages = require('../models/messages')


//control
router.get('/', async(req, res, next) => {

    // use socket.io
    let socket_id = [];
    var io = req.app.get('socketio')



    io.on('connection', async(socket) => {

        //get all msgs from db
        let db_msgs = await Messages.find()
        console.log(db_msgs)
        db_msgs.forEach((msg, i) => {
            console.log(`text_${i}:`, msg.txt)
            io.emit('chat message', msg.text)
        })

        //prevent duplicate msgs from many sessions
        socket_id.push(socket.id);
        if (socket_id[0] === socket.id) {
            // remove the connection listener for any subsequent 
            // connections with the same ID
            io.removeAllListeners('connection');
        }

        //update front msgs
        socket.on('chat message', async(msg) => {

            // save msg to the db
            console.log('msg: ', msg)
            msg_db = await Messages.create({ 'text': msg })
            if (msg_db) { console.log('msg created') }

            // emit 
            io.emit('chat message', msg);
        });
    });

    // render page
    res.render('messages/list')

})


module.exports = router