var natural = require('natural');
var data = require('../data/textToCammandData.json');
var classifier = new natural.BayesClassifier();
data.forEach((item) => {
    classifier.addDocument(item[0], item[1]);
})
classifier.train();
module.exports = async (req, res, next) => {
    var text = req.body.text;
    if (!text) {
        return res.status(404).json({
            msg: 'Text not found'
        });
    }
    var command = classifier.classify(text);
    req.command = command;
    next();
};