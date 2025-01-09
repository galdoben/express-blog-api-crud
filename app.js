const posts = require('./data/posts')
const postsRouter = require('./routers/posts');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const express = require('express')

const app = express();
const port = 3001;

app.use(express.json());





app.use('/posts', postsRouter);
app.use(errorHandler);
app.use(notFound);



app.listen(port, ()=>{
    console.log('Sono in ascolto sulla porta 3001')
})


