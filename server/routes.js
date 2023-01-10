const router = require('express').Router();
const controller = require('./controllers');

router.get('/', controller.user.get);

module.exports = router;
