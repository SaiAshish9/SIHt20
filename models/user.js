const mongoose=require('mongoose')
const bcrypt=require("bcryptjs")

const UserSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  }
},
{timestamps:true})

UserSchema.pre("save",async function(next){
  try{
    if(!this.isModified("password")){
      return next()
    }
    let hashedPassword=await bcrypt.hash(this.password,10)
    this.password = hashedPassword;
    return next();
  }catch(err){
    return next(err)
  }
})

UserSchema.methods.comparePassword=async function(password,next){
  try{
    let check=await bcrypt.compare(password,this.password)
    return check
  }catch(e){
    return next(e)
  }
}

const User=mongoose.model("User",UserSchema)

module.exports=User
