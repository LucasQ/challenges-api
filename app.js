const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const cuboRouter = require('./src/routes/cubo');

app.use(bodyParser.json());

// Middlewares
app.use(cors());
app.use('/cubo', cuboRouter);

//Connect
mongoose.connect('mongodb://localhost:27017/challenges', {useNewUrlParser: true,  useNewUrlParser: true,  useUnifiedTopology: true }, (status) => {
    console.log(status);
});

//Port
app.listen(9900);