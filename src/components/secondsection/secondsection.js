import React from 'react'
import NutritiousFood from '../../pics/nutritiousfood.jpg'
import Tasty from '../../pics/tasty.jpg'
import './secondsection.scss'


const Second=()=>(
  <div className="container-fluid" style={{width:'100%'}} id="diets">
  <div className="row" style={{width:'100%'}}>
<div className="col-md-6">
  <img
    className="foodpic1"
    src={NutritiousFood} style={{maxWidth:'45rem', height:'20rem',float:'right',width:'100%',marginLeft:'40px'}} />
</div>
<div className="col-md-6">
  <p  style={{padding:'40px'}}>

    <h3 style={{textAlign:'center',marginTop:'50px',marginLeft:'30px !important'}}>
  Balanced Diet
    </h3>
<span style={{paddingleft:'40px'}}>
NutriYou is a way of life.It is an initiative for a healthy you and a healthy world!
</span>
    </p>
</div>
</div>


<div className="row" style={{marginTop:'40px'}}>



        <div className="col-md-6">
          <p  className="foodpic2desc" style={{padding:'40px'}}>

    <h3 style={{textAlign:'center',marginTop:'50px',marginLeft:'30px !important'}}>
          Tasty and Nutritious food
        </h3>
  <span style={{paddingleft:'40px'}}>
    NutriYou is a way of life.It is an initiative for a healthy you and a healthy world!
  </span>
</p>
</div>

<div className="col-md-6 ">

    <img className="foodpic2" src={Tasty} style={{maxWidth:'40rem', height:'20rem',float:'right',width:'100%',marginLeft:'40px'}} />

</div>




</div>


  </div>
)

export default Second
