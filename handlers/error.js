function error(e,req,res,next){
  return res.status(e.status || 500).json({
    error:{
      message:e.message||"Oops ! Something went wrong"
    }
  })
}

module.exports=error
