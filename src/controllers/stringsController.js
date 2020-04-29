const strings = require('../lib/strings.js');

exports.sayingHello = (req, res) => {
  const word = strings.sayHello(req.params.basename);

  res.json({ result: `${word}` }).sendStatus(200);
};
exports.uppercasing = (req, res) => {
    const word = strings.uppercase(req.params.basename);

    res.json({ result: `${word}` }).sendStatus(200);
}

exports.lowercasing = (req,res) => {
    const word = strings.lowercase(req.params.basename);

    res.json({ result: `${word}` }).sendStatus(200);
}

exports.returningfirstCharacters = (req,res) =>{
    const length = req.query.length ? parseInt(req.query.length) : 1;
    const word = strings.firstCharacters(req.params.basename, length);
    res.json({ result: `${word}` }).sendStatus(200);
}
