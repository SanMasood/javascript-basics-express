const arr = require('../lib/arrays.js');

exports.elementAtIndex = (req, res) => {
    const element = arr.getNthElement(req.params.param1, req.body.array);
    res.status(200).json({ result: element });
}

exports.toStringed = (req, res) => {
    const stringified = arr.arrayToCSVString(req.body.array);
    res.status(200).json({ result: stringified });
 
};

exports.appended =(req,res) => {
    const newarr = arr.addToArray2(req.body.value, req.body.array);
    res.status(200).json({ result: newarr });  
};

exports.startsWithVowel = (req, res) => {
    const elements = arr.elementsStartingWithAVowel(req.body.array);
    res.status(200).json({ result: elements });
}
exports.removeElement = (req,res) => {

    const index = req.query.index ? parseInt(req.query.index) : 0;
    res.status(200).json({ result: arr.removeNthElement2(index, req.body.array) });
}
