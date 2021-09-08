module.exports = async (req, res, next) => {
    try {
        const command = req.command;
        if (command) {
            const commandHandler = require(`./handler/${command}`);
            await commandHandler(req, res, next);
        } else {
            throw new Error('No command');
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            msg: 'An error has occured while trying to process'
        });
    }
};