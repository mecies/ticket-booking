const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const User = require('../models/user')

router.post('/', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => { // 10 is for salting
        if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash
            });
            user
                .save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'user created'
                    })
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    })
                });
        }
    }) 
})


module.exports = router