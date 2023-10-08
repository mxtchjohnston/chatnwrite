"use strict";

const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 8080;

app.use(morgan('dev'));

app.get('/', (req, res) => res.send("<h1>Hello from chatnwrite</h1>"));

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));