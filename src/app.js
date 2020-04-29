const express = require('express');
//const strings = require('./lib/strings.js');
const bool = require('./lib/booleans.js');
const arr = require('./lib/arrays.js');

const app = express();
const numbersRouter = require('./routes/numbersRouter.js');
const stringsRouter = require ('./routes/stringsRouter.js')


app.use(express.json()); // FOR POST

app.use('/strings', stringsRouter);

app.use('/numbers', numbersRouter);


app.post('/booleans/negate', (req, res) => {
  const neg = bool.negate(req.body.value);

  res.status(200).json({ result: neg });
});

app.post('/booleans/truthiness', (req, res) => {
  const tr = bool.truthiness(req.body.value);
  res.status(200).json({ result: tr });
});

app.get('/booleans/is-odd/:param1', (req, res) => {
  const odder = parseInt(req.params.param1);
  if (Number.isNaN(odder)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else res.status(200).json({ result: bool.isOdd(odder) });
});

app.get('/booleans/:param1/starts-with/:param2', (req, res) => {
  if (req.params.param2.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else res.status(200).json({ result: bool.startsWith(req.params.param2, req.params.param1) });
});
//----------------------------------------------------

app.post('/arrays/element-at-index/:param1', (req, res) => {
  const element = arr.getNthElement(req.params.param1, req.body.array);
  res.status(200).json({ result: element });
});

app.post('/arrays/to-string', (req, res) => {
  const stringified = arr.arrayToCSVString(req.body.array);

  res.status(200).json({ result: stringified });
});

app.post('/arrays/append', (req, res) => {
  const newarr = arr.addToArray2(req.body.value, req.body.array);
  res.status(200).json({ result: newarr });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const elements = arr.elementsStartingWithAVowel(req.body.array);
  res.status(200).json({ result: elements });
});

app.post('/arrays/remove-element', (req, res) => {
  const index = req.query.index ? parseInt(req.query.index) : 0;
  res.status(200).json({ result: arr.removeNthElement2(index, req.body.array) });

  /*
    if (!req.query.index){
    const newarr = arr.removeNthElement2(0, req.body.array);
    res.status(200).json({ result: newarr});
    }

    else{
    const newIndex = parseInt(req.query.index);
    const newarr = arr.removeNthElement2(newIndex, req.body.array);
    res.status(200).json({ result: newarr });
    } */
});
module.exports = app;
