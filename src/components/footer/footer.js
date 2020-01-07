import React from 'react'

const Footer=()=>(
  <div className="container-fluid" id="footer" >
<div className="row">
  <div className="col-4" style={{paddingTop:'70px'}}>
    <p className="navbar-brand" style={{fontWeight:'bold',color:'white'}}>
    Contact Us
    </p>
  </div>
  <div className="col-4" style={{paddingTop:'40px'}}>
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
  <div className="col-4" style={{paddingTop:'30px'}}>
    <p className="navbar-brand" style={{fontWeight:'bold',color:'white'}}>
    Google Translator
    <div id="google_translate_element"></div>
    </p>
  </div>
</div>
</div>
)

export default Footer
