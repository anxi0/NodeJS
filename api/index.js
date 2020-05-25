const express = require('express');
const router = express.Router();
const music = require('./music');

router.use('/music', music); //목록조회

module.exports = router;