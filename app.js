const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv/config');

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env

const cuboRouter = require('./src/routes/cubo');

app.use(bodyParser.json());

// Middlewares
app.use(cors());
app.use('/cubo', cuboRouter);

//Connect
mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`, {useNewUrlParser: true,  useNewUrlParser: true,  useUnifiedTopology: true }, (status) => {
    console.log(status);
});

//Port
app.listen(9900);