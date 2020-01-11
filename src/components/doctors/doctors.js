import React from 'react'
import DoctorPic from '../../pics/elizabeth.jpg'


const Doctors=()=>(
  <div className="container" style={{width:'100%',textAlign:'center', minHeight:'70vh'}}>

<h1 className="navbar-brand" style={{textAlign:'center',fontSize:'2.5rem', margin:'auto',color:'#db3056'}}>
Meet Our Excellent Team
</h1>

<div className="row" style={{padding:'20px'}}>

<div className="col-4" style={{margin:'30px'}} >

<img style={{borderRadius:'50%', width:'200px',height:'200px'}}
 src={DoctorPic} />

<p >

Elizabeth
<br/>
<span style={{fontSize:'1rem',opacity:'0.6'}} >
Extremely hard working and educated
</span>
</p>
</div>

<div className="col-4" style={{margin:'30px'}}>

<img style={{borderRadius:'50%', width:'200px',height:'200px'}}
 src={DoctorPic}  />

<p >

Elizabeth
<br/>
<span style={{fontSize:'1rem',opacity:'0.6'}} >
Extremely hard working and educated
</span>
</p>
</div>


<div className="col-4" style={{margin:'30px'}}>

<img style={{borderRadius:'50%', width:'200px',height:'200px'}}
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
