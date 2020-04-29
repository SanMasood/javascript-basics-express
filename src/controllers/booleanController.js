const bool = require('../lib/booleans.js');

exports.negateBoolean = (req, res) => {
  const neg = bool.negate(req.body.value);

  res.status(200).json({ result: neg });
};
exports.truthinessBoolean = (req, res) => {
  const tr = bool.truthiness(req.body.value);
  res.status(200).json({ result: tr });
};

exports.isOddBoolean = (req, res) => {
  const odder = parseInt(req.params.param1);
  if (Number.isNaN(odder)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else res.status(200).json({ result: bool.isOdd(odder) });
};

exports.startsWithBoolean = (req, res) => {
  return req.params.param2.length > 1
    ? res.status(400).json({ error: 'Parameter "character" must be a single character.' })
    : res.status(200).json({ result: bool.startsWith(req.params.param2, req.params.param1) });
};
