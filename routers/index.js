const router = require('express').Router();

// sub routes
const v1 = require('./v1');


// SUB ROUTES
router.use('/v1', v1);




module.exports = router;