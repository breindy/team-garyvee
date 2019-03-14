//spinning up express application making requests easier
//to handle
const express = require('express');
const app = express();
const morgan = require('morgan'); 

//current api routes
const movieRoutes = require('./api/routes/movies');

//morgan middleware before passing to movies
app.use(morgan('dev'));

//middleware 'use'
app.use('/movies', movieRoutes);

// app.use('/', (req, res,next) => {
//     res.status(200).json({
//         message: 'Homepage route 🏁'
//     })
// });

//catch errors that make it past the request - no rute able to handle the request
app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
});

//handles all kinds of errors and thrown anywhere else in the server
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

//view engine setup


module.exports = app;