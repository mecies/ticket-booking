const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/user')
//create user
router.post('/signup', (req, res) => {
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
//login
router.post('/login', (req, res, next) => {
    User.find({email: req.body.email})
    .exec()
    .then(usersArray => {
        if(usersArray.length < 1) {//no users scenario
            return res.status(401).json({
                message: 'Auth failed'
            })
        }
        bcrypt.compare(req.body.password, usersArray[0].password, (err, result) => {// comparing passwords for authentication
            if (err) {
                return res.status(401).json({
                    message: 'Auth failed'
                })
            }
            if (result) { //result returns true if succeed
                const token = jwt.sign({ // jwt token
                    username: usersArray[0].username,
                    email: usersArray[0].email,
                    userId: usersArray[0]._id
                }, 
                process.env.JWT_KEY,
                {
                  expiresIn: "1h"//token expires in 1hour  
                })

                return res.status(200).json({
                    message: "auth succesful",
                    token: token
                })
            } 
            return res.status(401).json({
                message: 'Auth wrong email or password'
            })
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})
//delete user
router.delete('/:email', (req, res, next) => {
    User.deleteOne({
            email: req.params.email
        })
        .exec()
        .then(result => {
            console.log(`user ${req.params.username} deleted`)
            res.status(200).json({
                message: "user deleted"
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router