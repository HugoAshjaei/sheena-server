const router = require('express').Router();

// sub routes
const text = require('./text');
const session = require('./session');

// SUB ROUTES
router.use('/text', text);
router.use('/session', session);




module.exports = router;