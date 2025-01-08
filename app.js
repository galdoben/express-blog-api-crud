const posts = require('./data/posts')
console.log(posts);

const express = require('express')

const app = express();
const port = 3001;

app.use(express.json());


const postsRouter = require('./routers/posts');
const { log } = require('console');

app.use('/posts', postsRouter)


app.listen(port, ()=>{
    console.log('Sono in ascolto sulla porta 3001')
})


