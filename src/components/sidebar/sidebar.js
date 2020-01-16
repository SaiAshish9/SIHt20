import React from 'react'
import {withRouter,Link} from 'react-router-dom'



const Sidebar=({history})=>(
  <div className="container-fluid" style={{overflowY:'auto !important',width:'30%',height:"110%",zIndex:'0', position:'absolute',bottom:'0px',top:'0px',backgroundColor:'#f5cdaa'}}>


    <Link to="/check" className="navbar-brand link" style={{
      color:'black',fontWeight:'bold',  width:'100%',
      fontSize:'100%',
    backgroundColor:
    `${
      history.location.pathname==='/check'?
      'orange':''
    }`
    }}>

<i className="fa fa-apple" aria-hidden="true" style={{marginRight:'10px'}}></i>
  Analyse
</Link>


  <div  style={{fontWeight:'bold',marginTop:'18vh',fontSize:'1.3rem'}}>

  <Link to="/events" className="navbar-brand link" style={{
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

  <Link to="/diets" className="navbar-brand link" style={{  width:'100%',
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

  <Link to="/" className="navbar-brand link" style={{
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
