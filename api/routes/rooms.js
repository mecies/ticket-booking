const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Room = require('../models/room')
const Space = require('../models/space')
//create user  5c3f918e72705928147006ba
router.post('/rooms/reserve', (req, res) => {
    const { roomId, userId } = req.body;

    if (!roomId) {
        console.log(req.body, !roomId)
        new Room({
            spaces: [{
                spaceId: 1,
                userId: new mongoose.Types.ObjectId("5c3f918e72705928147006ba")
                // space number
            }],
            maxSpaces: 32,
        })
        .save()
        .then(result => {
            res.sendStatus(201)
        })
        .catch(error => {
            res.sendStatus(401)
        })
    } else {
        const foundRoom = Room.findByIdAndUpdate(roomId, {
            $addToSet: {
                spaces: {
                    userId: new mongoose.Types.ObjectId(userId),
                }
            }
             //$ wewnetrzna skladnia mongo
        })
        .then(result => {
            res.json(result);
        })
    }
})

router.get("/", (req, res) => {
    const foundRooms = Room.find({}).then(result => {
        res.json(result)
    })
})

module.exports = router;
