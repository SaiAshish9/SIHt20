const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const path=require('path')
const cors=require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())



const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const db = require("./models");

if(process.env.NODE_ENV !== 'production')
require('dotenv').config()

const port=process.env.PORT||5000


if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname,'client/build')))}

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'client/build','index.html'))
})

app.use("/", authRoutes);



app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(port,(e)=>{
  if(e) throw e;
  console.log('server started on port '+port);
})
