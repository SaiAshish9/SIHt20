import React from 'react'
import Map from '../../pics/map.jpg'


const Doctors=()=>(
  <div className="container" style={{width:'100%',textAlign:'center', minHeight:'70vh'}}>
<h1 className="navbar-brand" style={{textAlign:'center',fontSize:'2.5rem', margin:'auto',color:'#db3056'}}>
Events
</h1>

<div className="row" style={{padding:'20px'}}>

<div className="container" style={{width:'40rem',height:'40vh'}}>
<img src={Map}
style={{width:'100%'}} />
</div>

</div>

<div className="row" style={{margin:'auto',padding:'30px'}}>

<div style={{width:'30%',margin:'10px',height:'25vh',marginBottom:'50px',border:'2px solid black '}} className="col">
</div>

<div style={{width:'30%',margin:'10px',height:'30vh',marginBottom:'50px',border:'2px solid black '}} className="col">
</div>


<div style={{width:'30%',margin:'10px',height:'25vh',marginBottom:'50px',border:'2px solid black '}} className="col">
</div>


</div>

  </div>
)

export default Doctors
