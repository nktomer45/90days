const errorHandling = (req,res,next)=>{
    
    return res.status(404).json({
        message : "no routes found"
    })
}

module.exports= errorHandling