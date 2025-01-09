function errorHandler(err,req,res,next){
    return res.status(500).json({
        message: err.message,
        status: 500,
        error: "Internal Server Error"
    })
    
    next()
}
module.exports = errorHandler
