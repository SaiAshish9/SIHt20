import React from 'react'
import './analysejs'
import Pic from '../../pics/1.jpg'


const Analyse=()=>(


  <div className="container" style={{width:'100%',textAlign:'center'}}>





  <input className="file-upload" style={{display:'none'}}  name="photo" id="photo" type="file" accept="image/*"/>


  <p className="navbar-brand" style={{fontSize:'4vw',fontWeight:'bold',color:'red'}}>
Unsure about the food?
  </p>

<img  id="piccontainer" style={{cursor:'pointer',backgroundImage:{Pic}, backgroundColor:"lightgrey", marginTop:'20px',height:'40vh',width:'40vw',border:'5px solid black'}}/>

<br/>

  <button id="upload" className="navbar-brand" style={{cursor:'pointer',backgroundColor:'white',margin:'auto',fontWeight:'bold',color:'red'}}>
    Upload
  </button>

  <p id="result" className="navbar-brand" style={{margin:'auto',fontWeight:'bold',color:'red'}}>
  </p>

<div className="row" style={{width:'100%'}}>

<div  className="col">
<p>
<b>
Calories
</b>
</p>
<br/>
<p id="calories">

</p>
</div>

<div className="col">
<p>
<b>
Fat
</b>
</p>
<br/>
<p id="fat">

</p>
</div>

<div className="col">
<p>
<b>
Proteins
</b>
</p>
<br/>
<p id="protiens">

</p>

</div>


</div>

  </div>
)

export default Analyse
