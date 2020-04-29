var {add, subtract, multiply, divide, reaminder} = require('../lib/numbers.js');

// Display list of all books.
exports.add = (req, res) => {
    const num1 = parseInt(req.params.param1);
    const num2 = parseInt(req.params.param2);
    const sum = numbers.add(num1, num2);
  
    if (Number.isNaN(sum)) {
      res.status(400).json({ error: 'Parameters must be valid numbers.' });
    } else {
      res.status(200).json({ result: sum });
    }
  };