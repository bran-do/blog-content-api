const express = require('express');
const login = require('./controllers/login');
const signUp = require('./controllers/singUp');
const userController = require('./controllers/user.controller');
const categoryController = require('./controllers/category.controller');
const postController = require('./controllers/post.controller');

const validateLogin = require('./middlewares/validateLogin');
const validateSignUp = require('./middlewares/validateSignUp');
const validateJWTToken = require('./middlewares/validateJWTToken');
const validateNewCategory = require('./middlewares/validateNewCategory');
const validateNewPost = require('./middlewares/validateNewPost');
const validatePostId = require('./middlewares/validatePostId');
const validatePostUpdate = require('./middlewares/validatePostUpdate');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', validateLogin, login);
app.post('/user', validateSignUp, signUp);

app.use(validateJWTToken);

app.get('/user', userController.getAll);
app.get('/user/:id', userController.getById);
app.post('/categories', validateNewCategory, categoryController.create);
app.get('/categories', categoryController.getAll);
app.post('/post', validateNewPost, postController.create);
app.get('/post', postController.getAll);
app.get('/post/:id', validatePostId, postController.getById);
app.put('/post/:id', validatePostUpdate, postController.update);

module.exports = app;
