import React,{useState} from 'react'

import {addUser} from '../../redux/user/user.utils'

import { setCurrentUser } from '../../redux/user/user.actions';

import {connect} from 'react-redux'

const SignUp =({history,setCurrentUser})=>{

const [userdetails,setDetails]=useState({email:'',password:'',username:'',confirm:''})
const {password,confirm,email,username}=userdetails


const handleChange=e=>{
  const {name,value}=e.target
setDetails({...userdetails,[name]:value})
}

const handleSubmit=async e=>{
e.preventDefault()
  if(password===confirm){
  var data= await addUser({username:username,email:email,password:password})
  if(data){
    await setCurrentUser(data)
    history.push('/')

  }

  }
  else{
    console.log("passwords don't match");
  }
}


return (
  <div className="container" style={{width:'100%',height:'90vh',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <div className="card" style={{margin:'auto',padding:'10px'}}>
      <h5 className="card-header info-color white-text text-center py-4">
        <strong>Sign Up</strong>
      </h5>
      <div className="card-body px-lg-5 pt-0" style={{padding:'10px'}}>
        <form
          onSubmit={handleSubmit}
          className="text-center" style={{color: '#757575'}} action="#!">
          <div className="md-form">
            <input
             name="username"
             value={username}
             onChange={handleChange}
             style={{marginTop:'10px'}}
             type="text"
             className="form-control"/>
           <label >Username</label>
          </div>
          <div className="md-form">
            <input  type="email"
              onChange={handleChange}
              value={email}
              name="email"
              className="form-control"/>
            <label >E-mail</label>
          </div>
          <div className="md-form">
            <input type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="form-control"/>
            <label >Password</label>
          </div>
          <div className="md-form">
            <input type="password"
              name="confirm"
              value={confirm}
              onChange={handleChange}
              className="form-control"/>
            <label >Confirm Password</label>
          </div>
          <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
)
}

const mapDispatchToProps=dispatch=>({
  setCurrentUser:me => dispatch(setCurrentUser(me))
})

export default connect(null,mapDispatchToProps)(SignUp)
