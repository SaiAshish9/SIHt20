import React from 'react'

const Footer=()=>(
  <div className="container-fluid" id="footer" style={{position:'absolute',width:'100%', bottom:'0px !important',overFlow:'hidden'}} >
<div className="row">
  <div className="col-6" style={{padding:'70px 0px'}}>
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
  <div className="col-4" style={{position:'relative',right:'27px',paddingleft:"10px", paddingTop:'70px'}}>
    <p className="navbar-brand" style={{fontSize:'15px', fontWeight:'bold',color:'white',marginRight:'10px'}}>
    Google Translator
    <div  id="google_translate_element"></div>
    </p>
  </div>
</div>
</div>
)

export default Footer
