
// modules
const express = require("express");
const helmet = require("helmet");
const {cpus} = require('os');
const cors = require('cors');
const auth = require('./middleware/auth');
require('dotenv').config()



// set environment variables
process.env.MAIN_PATH = process.cwd();
process.env.UV_THREADPOOL_SIZE = String(cpus().length)


// http web server main instance
const app = express();


// security middleware configs
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// set the port in main of application
app.set('port', process.env.PORT);
// application routes
const mainRouter = require('./routers');

// main route of application bound
app.use('/', auth, mainRouter);


app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});


