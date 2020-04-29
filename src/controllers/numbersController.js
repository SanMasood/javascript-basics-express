const numbers = require('../lib/numbers.js');

exports.addNumbers = (req, res) => {
  const num1 = parseInt(req.params.param1);
  const num2 = parseInt(req.params.param2);
  const sum = numbers.add(num1, num2);

  return Number.isNaN(sum)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: add(num1, num2) });
};

exports.subtractNumbers = (req, res) => {
  const num1 = parseInt(req.params.param1);
  const num2 = parseInt(req.params.param2);
  const diff = numbers.subtract(num2, num1);

  return Number.isNaN(diff)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: diff });
};

exports.multiplyNumbers = (req, res) => {
  const num1 = parseInt(req.body.a);
  const num2 = parseInt(req.body.b);
  const prod = numbers.multiply(num1, num2);

  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(prod)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: prod });
  }
};
exports.divideNumbers = (req, res) => {
  const num1 = parseInt(req.body.a);
  const num2 = parseInt(req.body.b);
  const div = numbers.divide(num1, num2);

  if (num2 === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (!req.body.a || !req.body.b) {
    return req.body.a === 0
      ? res.status(200).json({ result: div })
      : res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  return Number.isNaN(div)
    ? res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' })
    : res.status(200).json({ result: div });
};
exports.remainderNumbers = (req, res) => {
  const num1 = parseInt(req.body.a);
  const num2 = parseInt(req.body.b);
  const rem = numbers.remainder(num1, num2);

  if (num2 === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (!req.body.a || !req.body.b) {
    return req.body.a === 0
      ? res.status(200).json({ result: rem })
      : res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  return Number.isNaN(rem)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: rem });
};
