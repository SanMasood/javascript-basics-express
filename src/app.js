const express = require('express');

const app = express();
const stringsRouter = require('./routes/stringsRouter.js');
const numbersRouter = require('./routes/numbersRouter.js');
const booleansRouter = require('./routes/booleansRouter.js');
const arraysRouter = require('./routes/arraysRouter.js');

app.use(express.json()); // FOR POST

app.use('/strings', stringsRouter);

app.use('/numbers', numbersRouter);

app.use('/booleans', booleansRouter);

app.use('/arrays', arraysRouter);
 
module.exports = app;
