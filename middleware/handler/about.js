module.exports = async (req, res, next) => {
    try {
        req.msg = 'My name is Sheena, In fact, I am a text processing assistant on a server that you can communicate with through a variety of tools. I was made to progress, learn and help!';
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            msg: 'An error has occured while trying to process about'
        });
    }
};