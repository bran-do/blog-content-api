const express = require('express');
const login = require('./controllers/login');
const validateSignUp = require('./middlewares/validateSignUp');
const signUp = require('./controllers/singUp');
const validateJWTToken = require('./middlewares/validateJWTToken');
const { getUsers, getUserById } = require('./controllers/user.controller');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', login);
app.post('/user', validateSignUp, signUp);

app.use(validateJWTToken);

app.get('/user', getUsers);
app.get('/user/:id', getUserById);

module.exports = app;
