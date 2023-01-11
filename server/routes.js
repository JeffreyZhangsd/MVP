const router = require('express').Router();
const controller = require('./controllers');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const handlers = require('./handlers');

router.use(bodyParser.json());
router.use(cookieParser());

router.post('/signin', handlers.signinHandler);
router.get('/welcome', handlers.welcomeHandler);
router.post('/refresh', handlers.refreshHandler);
router.get('/logout', handlers.logoutHandler);

router.get('/users', controller.user.getAllUsers);
router.get('/users/:user?', controller.user.get);
router.post('/users', controller.user.post);

module.exports = router;
