import React,{useState,useEffect} from 'react'
import Doctors from '../../pics/doctors.jpg'
import './third.scss'
import './third.js'
import  Doctor from '../../pics/elizabeth.jpg'

import shuffle from 'shuffle-array'


import one from '../../pics/11.jpg'
import two from '../../pics/2.jpg'
import three from '../../pics/3.jpg'
import four from '../../pics/4.jpg'
import five from '../../pics/5.jpg'
import six from '../../pics/6.jpg'
import seven from '../../pics/7.jpg'
import eight from '../../pics/8.jpg'
import nine from '../../pics/9.jpg'
import ten from '../../pics/10.jpg'



const Third=()=>{

console.log('hi');


var [images,setImages]=useState([one,two,three,four,five,six,seven,eight,nine,ten])

useEffect(() => {
  const interval = setInterval(() => {
setImages(shuffle(images))
  }, 1000);
  return () => clearInterval(interval);
}, []);




  return (

  <div className="container-fluid" >

    <div className="row">

    <div className="col-4">


    <img id="1" className="image" src={images[0]} style=  {{top:'10%',left:'70%'}}/>
    <img id="2" className="image" src={images[1]}  style= {{top:'35%',left:'20%'}}/>
    <img id="3" className="image" src={images[2]} style={{top:'50%',left:'80%'}} />
    <img id="4" className="image" src={images[3]}  style={{top:'80%',left:'30%'}}/>
    <img id="5"  className="image" src={images[4]}  style={{top:'100%',left:'65%'}} />



    </div>


    <div className="col-4" style={{margin:'auto',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
      <img  className="center" style={{marginTop:'15%',marginTop:'6rem'}} src={Doctor} />

      <p style={{margin:'auto',textAlign:'center',marginTop:'3rem'}}>
        <b>
          Amazing Doctors
        </b>
        <br/>
      <span>
        at your service <br/>
        24 x 7
      </span>
      </p>
    </div>




    <div className="col-4">

      <img id="5" className="image" src={images[5]} style=  {{top:'10%', right:'70%'}} />
      <img id="6" className="image" src={images[6]}  style={{top:'35%',right:'20%'}}/>
      <img id="7" className="image" src={images[7]}  style={{top:'50%',right:'80%' }}/>
      <img id="8" className="image" src={images[8]}  style={{top:'80%',right:'30%' }}/>
      <img id="9" className="image" src={images[9]} style=  {{top:'100%',right:'65%'}} />


    </div>



    </div>
  </div>


  )



}
export default Third
