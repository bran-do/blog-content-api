const express = require('express');
const login = require('./controllers/login');
const validateSignUp = require('./middlewares/validateSignUp');
const signUp = require('./controllers/singUp');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', login);
app.post('/user', validateSignUp, signUp);

module.exports = app;
