import React from 'react'
import {withRouter,Link} from 'react-router-dom'



const Sidebar=({history})=>(
  <div className="container-fluid" style={{overflowY:'auto !important', minHeight:'170vh',width:'30%', position:'absolute',bottom:'0px',top:'0px',backgroundColor:'#f5cdaa'}}>

  <div  style={{fontWeight:'bold',marginTop:'18vh',fontSize:'1.3rem'}}>

  <Link to="/events" className="navbar-brand" style={{
    color:'black',fontWeight:'bold',  width:'100%',
  backgroundColor:
  `${
    history.location.pathname==='/events'?
    'orange':''
  }`
  }}>


  Events

  </Link>

  </div>

  <div style={{fontWeight:'bold',marginTop:'3vh',fontSize:'1.3rem'}}>

  <Link to="/diets" className="navbar-brand" style={{  width:'100%',
color:'black',fontWeight:'bold',
  backgroundColor:
  `${
    history.location.pathname==='/diets'?
    'orange':''
  }`
  }}>
  Diets
  </Link>
  </div>

  <div  style={{ fontWeight:'bold',marginTop:'3vh',fontSize:'1.3rem'}}>

  <Link to="/" className="navbar-brand" style={{
  color:'black',
  fontWeight:'bold',
  width:'100%',
  backgroundColor:
  `${
    history.location.pathname==='/'?
    'orange':''
  }`
  }}
  >

  Doctors
  </Link>
  </div>


  </div>
)

export default withRouter(Sidebar)
