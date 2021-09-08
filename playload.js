var natural = require('natural');

var classifier = new natural.BayesClassifier();
classifier.addDocument('who are you', 'about');
classifier.addDocument('tell me about yourself', 'about');
classifier.addDocument('who is sheena', 'about');
classifier.addDocument('who is your creator', 'creator');
classifier.addDocument('you creator', 'creator');
classifier.addDocument('your developer', 'creator');

classifier.train();

console.log(classifier.classify('who is your developer'));
console.log(classifier.classify('sell'));