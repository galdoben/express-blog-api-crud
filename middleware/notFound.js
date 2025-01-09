function notFound(req,res,next){
    res.status(404)
    res.json({
        message: "Post non trovati",
        error: 404

    })
    next()
}
module.exports = notFound