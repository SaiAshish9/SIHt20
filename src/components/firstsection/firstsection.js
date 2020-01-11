import React from 'react'
import PIC from '../../pics/1.jpg'
import './first.js'

const First=()=>(
  <div className="container-fluid" style={{width:'100%'}} id="events" >
  <div className="container" style={{paddingTop:'5%'}}>
  <div className="row" >
  <div className="col-lg-12">
<img id="first" src={PIC} style={{height:'15rem', width:'100%'}}/>
  </div>
  </div>


  <p>
  NutriYou is a way of life.It is our initiative for a healthy you and a healthy work.
  </p>

  </div>
  </div>

)

export default First
