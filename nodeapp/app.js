const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');

/**
 * Connect to database
 */
mongoose.connect(config.database);
mongoose.connection.on("connected", ()=> {
    console.log("Connected to MongoDB", config.database);
});
mongoose.connection.on("error", (error)=>{
    console.error("Error in coonecting database", error);
});

/**
 * Application object created
 * initialized by express()
 */
const app  = express();

/**
 * Import user routes
 */
const users = require('./routes/users');

/**
 * Application port
 */
const port = 3000;

/**
 * Enabled cors requests
 */
app.use(cors());

/**
 * Set static folder
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Body parser to access request body as an object
 */
app.use(bodyParser.json());

/**
 * Subroute integration
 */
app.use('/users', users);

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
