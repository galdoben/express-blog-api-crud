
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
    res.send('Aggiungo un nuono piatto')
}

const update = (req,res) => {
    res.send('Modifico un piatto in base al suo id' + req.params.id)
}

const modify = (req,res) => {
    res.send('Modfico parzialmente un piatto' + req.params.id)
}

const destroy = (req,res) => {
    res.send('Elimino un piatto in base al suo id' + req.params.id)
    return
    res.json
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}