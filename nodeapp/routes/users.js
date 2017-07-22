const express = require('express');
const router = express.Router();

/**
 * GET register
 */
router.get('/register', (req, res, next) => {
    res.send("REGISTER");
});

/**
 * GET Authenticate
 */
router.get('/authenticate', (req, res, next)=>{
    res.send('AUTHENTICATE');
});

/**
 * GET profile
 */
router.get('/profile', (req, res, next)=>{
    res.send('PROFILE');
});

/**
 * GET validate
 */
router.get('/validate', (req, res, next)=>{
    res.send('VALIDATE');
});

module.exports = router;