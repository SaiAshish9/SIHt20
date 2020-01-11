import React from 'react'
import Map from '../../pics/map.jpg'
import Event1 from '../../pics/event1.jpg'
import Event2 from '../../pics/event2.jpg'
import Event3 from '../../pics/event3.jpg'


const Events=()=>(
  <div className="container" style={{width:'100%',height:'150vh',textAlign:'center'}}>
<h1 className="navbar-brand" style={{textAlign:'center',fontSize:'2.5rem', margin:'auto',color:'#db3056'}}>
Events
</h1>

<div className="row" style={{padding:'20px'}}>

<div className="col-md-9" style={{width:'70vw',margin:'auto'}} >
<img src={Map}
style={{width:'100%'}} />
</div>
</div>

<div className="row" style={{marginTop:'27px',marginBottom:'100px'}}>

<div className="col-3" style={{maxHeight:'100px',width:'5rem',margin:'auto',height:'25vh'}} >
<img src={Event2}
style={{width:'13vw',height:'20vw'}} />
</div>


<div className="col-6" style={{width:'5rem',position:'relative',top:'10%', margin:'auto',height:'30vh'}} >
<img src={Event1}
style={{width:'30vw',height:'35vw'}} />
</div>

<div className="col-3" style={{maxHeight:'100px',width:'5rem',margin:'auto',height:'25vh'}} >
<img src={Event3}
style={{width:'11vw'}} />
</div>
</div>


  </div>
)

export default Events
