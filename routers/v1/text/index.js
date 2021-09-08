const router = require('express').Router();
const textToCammand = require('../../../middleware/textToCommand');
const commandHandler = require('../../../middleware/commandHandler');


// SUB ROUTES
router.post('/process', 
    textToCammand,
    commandHandler,
    async (req, res) => {
        try {
            res.json({msg: req.msg});
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: 'Internal Server Error'});
        }
    },
);




module.exports = router;