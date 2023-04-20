require('dotenv').config();
const express = require('express')
const app = express();
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const fileupload = require('express-fileupload')
const cors = require('cors')
const helmet = require('helmet')

// -----------------------------------------------------------------------------------------------------------

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'none'; font-src 'self' https://fonts.gstatic.com");
    next();
  });
  app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Resource-Policy", "same-site");
    next();
  });
// temp check 
app.set("view engine", "ejs")

// regular middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true})) 

// cookies and file middleware
app.use(cookieParser());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}));

// morgan middleware
app.use(morgan('tiny'))

app.use(helmet());
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        "default-src": ["'self'"],
        "connect-src": ["'self'", "'unsafe-inline'"],
        "img-src": ["'self'", "data:"],
        "style-src-elem": ["'self'", "data:"],
        "script-src": ["'unsafe-inline'", "'self'"],
        "object-src": ["'none'"],
      },
    })
  );
// ------------------------------------------------------------------------------------------------------------
app.use(cors());
// ----------------------------------
// import all the routes here
const home = require('./routes/home')
const user = require('./routes/user')
const product =require('./routes/product')

// router middleware
app.use('/api/v1', home)
app.use('/api/v1', user)
app.use('/api/v1', product)

// test route
app.get('/signuptest', (req, res) => {
    res.render('signuptest')
})

// exports app 
module.exports = app ;