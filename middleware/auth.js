require('dotenv').config()

module.exports = async (req, res, next) => {
    if (req.headers.token == process.env.AUTHTOKEN) {
        next();
    } else {
        res.status(401).json({
            msg: "Unauthorized"
        });
    }
}