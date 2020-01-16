import React from 'react'
import {Link,withRouter} from 'react-router-dom'

const Footer=({history})=>{
  return(
  <div className="container-fluid" id="footer" style={{position:'relative',zIndex:'1',overFlow:'hidden'}} >
<div className="row">
<div className="col-6"
style={{padding:'70px 0px'}}>
    <p className="navbar-brand" style={{fontWeight:'bold',color:'white'}}>
    Contact Us
    </p>
    <p className="navbar-brand" style={{color:'white'}}>
@facebook
    </p>
    <p className="navbar-brand" style={{color:'white'}}>
@twitter
    </p>
    <p className="navbar-brand" style={{color:'white'}}>
@email
    </p>
  </div>
  <div className="col-4" style={{position:'relative',right:'27px',paddingleft:"10px",textAlign:'center', paddingTop:'70px'}}>
    <p className="navbar-brand" style={{fontSize:'15px', fontWeight:'bold',color:'white',marginRight:'10px'}}>
    Google Translator
    <div  id="google_translate_element"></div>
    </p>



  {
    history.location.pathname==='/check'?
    (
        <p className="navbar-brand" style={{cursor:'pointer',fontSize:'30px', fontWeight:'bold',color:'white',marginLeft:'36px'}}>
<a style={{color:'white'}} href="/camera" >
  <i className="fa fa-camera" aria-hidden="true"></i>
</a>

      </p>
    ):null
  }

</div>







</div>
</div>
)}

export default withRouter(Footer)
