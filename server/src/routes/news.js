const express = require('express');
const router = express.Router();
const newsController = require('../controllers/NewsController');

router.get('/api/news', newsController.index);

module.exports = router;
