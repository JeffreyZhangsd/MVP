const express = require('express');
const app = express();
const router = require('./routes');
const path = require('path');

const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.json());
app.use(express.static('client/dist')); // index.html

app.use('/', router);

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
