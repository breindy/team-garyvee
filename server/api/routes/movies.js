const express = require('express');
const router = express.Router();

//create movies routes
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /movies'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /movies'
    });
});

router.get('/:movieTitle', (req, res, next) => {
    //extract information from movie title
    const title = req.params.movieTitle;

    if(title === 'special'){
        res.status(200).json({
            message: 'This is a special movie title',
            title: title
        });
    }else {
        res.status(200).json({
            message: 'You passed a movie title',
            title: title
        });
    }
});
module.exports = router;