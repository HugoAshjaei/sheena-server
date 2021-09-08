const router = require('express').Router();
const uuid = require('uuid').v4;


// SUB ROUTES
router.get('/generate', 
    async (req, res) => {
        try {
            res.json({session: uuid()});
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: 'Internal Server Error'});
        }
    },
);




module.exports = router;