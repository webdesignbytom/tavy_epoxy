const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');
// const { authorization } = require('./middleware/auth')

app.disable('x-powered-by');

// Add middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Tell express to use your routers here
// const eventRouter = require('./routes/events');
// const linkRouter = require('./routes/links');
// const postRouter = require('./routes/posts');
// const userRouter = require('./routes/users');
// const authRouter = require('./routes/auth');

// app.use('/links', linkRouter);
// app.use('/posts', postRouter);
// app.use('/post', postRouter);
// app.use('/users', userRouter);
// app.use('/user', userRouter);
// app.use('/events', eventRouter);
// app.use('/', userRouter);
// app.use('/', authRouter) 


module.exports = app
