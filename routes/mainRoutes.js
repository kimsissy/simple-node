const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page'});
});

router.get('/about', (req, res) => {
    res.render('about', {title: 'About Us'});
});

router.post('submit-form', (req, res) => {
    const { name, message } = req.body;
    res.render('thanks', { title: 'Thank You', name: name, message: message});
})

module.exports = router;