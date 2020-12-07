const express = require('express');
const app = express();

var demo_1 = require('./demo_1.js');
app.use('/demo',demo_1);

app.listen(3000);