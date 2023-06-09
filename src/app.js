const express = require('express');
const log = require('./routers/loginRouters');
const userRouter = require('./routers/userRouter');
const categoryRouters = require('./routers/categoryRouters');
const blogPostRouters = require('./routers/blogPostRouters');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', log);
app.use('/user', userRouter);
app.use('/categories', categoryRouters);
app.use('/post', blogPostRouters);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
