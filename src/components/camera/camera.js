import React from 'react'
import './camerajs'

const Camera=()=>(
  <div className="container" style={{width:'100%'}}>

  <div className="video-wrap">
  <video style={{height:'40vh',width:'50vw'}} id="video" playsInline autoPlay></video>
  </div>


  <button className="btn btn-primary" id="snap" style={{marginLeft:'auto', position:'relative'}}>
  Capture
  </button>

<div className="row" style={{position:'relative'}}>

<div  className="col">

<canvas id="canvas" style={{height:'40vh',width:'50vw',marginTop:'10px'}} width="640" height="480">
</canvas>

</div>


<div className="col" style={{height:'100vh',width:'30vw',marginTop:'10px'}}>

<p id="result">

</p>

<p style={{fontSize:'18px', display:'inline'}}>
Protiens :
<span id="protiens">
</span>
</p>
<br/>
<p style={{fontSize:'15px',display:'inline'}}>
Carbohydrates :
<span id="carbohydrates">
</span>
</p>
<br/>
<p style={{fontSize:'18px',display:'inline'}}>
Calories :
<span id="calories">
</span>
</p>

</div>

</div>

  </div>

)

export default Camera
