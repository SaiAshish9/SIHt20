import React,{useState} from 'react'

import {loginUser} from '../../redux/user/user.utils'

import { setCurrentUser } from '../../redux/user/user.actions';


import {withRouter} from 'react-router-dom'

import {connect} from 'react-redux'



const SignIn=({history,setCurrentUser})=>{

  const [userdetails,setDetails]=useState({email:'',password:''})
  var {password,email}=userdetails


  const handleChange=e=>{
    const {name,value}=e.target
  setDetails({...userdetails,[name]:value})
  }

  const handleSubmit=async e=>{
  e.preventDefault()
  var data= await loginUser(userdetails)
  if(data){
    await setCurrentUser(data)
    email=''
    password=''
  }
history.push('/')
  }

  return(
  <div className="container" style={{width:'100%',height:'90vh',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <div className="card" style={{margin:'auto',padding:'10px'}}>
      <h5 className="card-header info-color white-text text-center py-4">
        <strong>Sign in</strong>
      </h5>
      <div className="card-body px-lg-5 pt-0" style={{padding:'10px'}}>
        <form
          onSubmit={handleSubmit}
          className="text-center" style={{color: '#757575'}} action="#!">
          <div className="md-form">
            <input
              style={{marginTop:'10px'}}
              type="email"
               className="form-control"
               onChange={handleChange}
               value={email}
               name="email"
               />
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
          <div className="d-flex justify-content-around">
            <div>
              <a href="/" >Forgot password?</a>
            </div>
          </div>
          <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>
        </form>
      </div>
    </div>
  </div>
)}

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser
// });

const mapDispatchToProps=dispatch=>({
  setCurrentUser:me => dispatch(setCurrentUser(me))
})

export default withRouter(connect(null,mapDispatchToProps)(SignIn))
