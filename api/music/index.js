const express = require('express');
const router = express.Router();
const ctrl = require('./music.ctrl');

router.get('/', ctrl.list); //목록조회

module.exports = router;