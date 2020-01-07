require("dotenv").config()

const db = require("../models");
var jwt=require("jsonwebtoken")
const mongoose=require("mongoose")
const moment=require('moment')

exports.signin=async function(req,res,next){
  try{
    let email=req.body.email
    let user=await db.User.findOne({
      email:email
    })
    let {id,username}=user
    let check=await user.comparePassword(req.body.password)
    if(check){

      let token=jwt.sign({
        id,
        email,
        username
      },
      process.env.SECRET_KEY
)
console.log(token);
return res.status(200).json({
    id,
    username,
    token
  });
    }
    else{
      return next({
    status: 400,
    message: "Invalid Email/Password."
  });
    }
  }
  catch (e) {
      return next({ status: 400, message: e.message});
    }
}


exports.signup = async function(req, res, next) {
  try {
    // let foundemail=await db.User.find({email:req.body.email});
    // if(foundemail.length===0){
    let user = await db.User.create(req.body);
    let { id, username } = user;
    let token = jwt.sign(
      {
        id,
        username
      },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      token
    });
  // }
  } catch (err) {
    if (err.code === 11000) {
      err.message = "Sorry, that username and/or email is taken";

    return next({
      status: 400,
      message: err.message
    });
  }
};
}
