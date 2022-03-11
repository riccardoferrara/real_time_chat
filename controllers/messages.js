// Import Packages
const express = require('express')
const router = express.Router()

// Import Models
const Messages = require('../models/messages')


//control
router.get('/', async(req, res, next) => {
    try {

        // use socket.io
        let socket_id = [];
        var io = req.app.get('socketio')

        //on user connection:
        io.on('connection', async(socket) => {

            //prevent duplicate msgs from many sessions
            socket_id.push(socket.id);
            if (socket_id[0] === socket.id) {
                // remove the connection listener for any subsequent 
                // connections with the same ID
                io.removeAllListeners('connection');
            }

            //update front real-time msgs
            socket.on('chat message', async(msg) => {

                // save msg to the db
                console.log('msg: ', msg)
                msg_db = await Messages.create({ 'text': msg })
                if (msg_db) { console.log('msg created in db') }

                // emit realt-time msg
                io.emit('chat message', msg);
            });
        });

        // render page
        res.render('messages/list')

    } catch {
        next(err)
    }

})

//request to get all messages from db
router.get('/db_messages', async(req, res, next) => {
    try {
        //get all msgs from db
        //(API sends data to client-side)
        res.setHeader("Content-Type", "application/json")
        res.statusCode = 200;
        let db_msgs = await Messages.find().sort({ "create_date": 1 })
        if (db_msgs.length > 0) {
            res.json(db_msgs)
            console.log('db_msgs from api: ', db_msgs)
        }
    } catch {
        next(err)
    }
})

module.exports = router