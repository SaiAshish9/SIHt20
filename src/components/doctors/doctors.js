import React from 'react'
import DoctorPic from '../../pics/elizabeth.jpg'


const Doctors=()=>(
  <div className="container" style={{width:'100%', minHeight:'70vh'}}>

    <div className="row" style={{padding:'20px'}}>

      <div  style={{textAlign:'center'}}  >

  <h1 className="navbar-brand" style={{textAlign:'center',fontSize:'4vw',color:'#db3056'}}>
  Meet Our Excellent Team
  </h1>

</div>


</div>

<div className="row" style={{padding:'0px',textAlign:'center'}}>

<div className="col-md-4" style={{textAlign:'center',margin:'30px'}} >

<img style={{borderRadius:'50%', margin:'auto',width:'20vh',height:'20vh'}}
 src={DoctorPic} />

<p >

Elizabeth
<br/>
<span style={{fontSize:'1rem',opacity:'0.6'}} >
Extremely hard working and educated
</span>
</p>

</div>

<div className="col-md-4" style={{textAlign:'center',margin:'30px'}}>

<img style={{borderRadius:'50%',width:'20vh',height:'20vh'}}
 src={DoctorPic}  />

<p >

Elizabeth
<br/>
<span style={{fontSize:'1rem',opacity:'0.6'}} >
Extremely hard working and educated
</span>
</p>
</div>


<div className="col-md-4" style={{textAlign:'center',margin:'30px'}}>

<img style={{borderRadius:'50%', width:'20vh',height:'20vh'}}
 src={DoctorPic}
/>

<p >

Elizabeth
<br/>
<span style={{fontSize:'1rem',opacity:'0.6'}} >
Extremely hard working and educated
</span>
</p>
</div>

</div>






  </div>
)

export default Doctors
