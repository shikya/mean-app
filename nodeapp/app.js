const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

/**
 * Application object created
 * initialized by express()
 */
const app  = express();

/**
 * Application port
 */
const port = 3000;

/**
 * Enabled cors requests
 */
app.use(cors());

/**
 * Body parser to access request body as an object
 */
app.use(bodyParser.json());

/**
 * GET index
 */
app.get('/', (req, res)=>{
    res.send('Valid Endpoint');
});

/**
 * Start the application
 */
app.listen(port, () => {
    console.log("Server start at 3000");
})
