
const posts = require('../data/posts')
//2 MILESTONE
const index = (req,res) => {
    //res.send('Visualizzo tutti i piatti tipici')
    return res.json(posts)
}

const show = (req,res) => {
    //res.send('Visualizzo un piatto in base al suo id' + req.params.id)
    const id = parseInt(req.params.id)
    const postFound = posts.find(post => post.id == id) 
    return res.json(postFound)

}

const store = (req,res) => {
    const id = posts.at(-1).id +1;
    const newPost = {
        id,
        ...req.body
    }
    console.log(id);
    posts.push(newPost);
    res.status(201).json(newPost);
    //res.send('Aggiungo un nuono piatto')
}

const update = (req,res) => {
    res.send('Modifico un piatto in base al suo id' + req.params.id)
}

const modify = (req,res) => {
    res.send('Modfico parzialmente un piatto' + req.params.id)
}

const destroy = (req,res) => {
    //res.send('Elimino un piatto in base al suo id' + req.params.id)
    const id = parseInt(req.params.id)
    const deletePost = posts.find(post => id == post.id)
    posts.splice(posts.indexOf(deletePost),1);
    res.status(200)
    console.log(posts);
    
    return res.json(posts)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}