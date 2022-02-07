// routes/index.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const  {quote, attributed, source}  = req.body;
    res.render('index', {source, attributed, quote});
});




module.exports = router;
