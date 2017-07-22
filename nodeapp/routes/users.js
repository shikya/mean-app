const express = require('express');
const router = express.Router();
const passport = require('passport');
const gwt = require('jsonwebtoken');

const User = require('../models/user');
/**
 * GET register
 */
router.post('/register', (req, res, next) => {
    console.log("Body", req.body);
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    console.log("NEW User", newUser);    
    User.addUser(newUser, (err, user)=>{
        if(err){
            res.json({
                sucess: false,
                msg: 'Failed to register user',
                err: err
            })
        } else {
            res.json({
                sucess: true,
                msg: 'User registered'
            })
        }
    });
});

/**
 * POST Authenticate
 */
router.post('/authenticate', (req, res, next)=>{
    res.send('AUTHENTICATE');
});

/**
 * GET profile
 */
router.get('/profile', (req, res, next)=>{
    res.send('PROFILE');
});

module.exports = router;