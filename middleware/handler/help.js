module.exports = async (req, res, next) => {
    try {
        req.msg = 'Just tell me what you need.';
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            msg: 'An error has occured while trying to process help'
        });
    }
};