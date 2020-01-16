import React from 'react'
import Map from '../../pics/map.jpg'
import Event1 from '../../pics/event1.jpg'
import Event2 from '../../pics/event2.jpg'
import Event3 from '../../pics/event3.jpg'
import './map'
import ReactMapboxGl,{Layer,Feature,Marker,Popup,
  ZoomControl,
  ScaleControl} from 'react-mapbox-gl'
import Pin from  './pin.png'

// npm i mapbox-gl react-mapbox-gl


// <img src={Map}
// style={{width:'100%'}} />

const Events=()=>{

  const Map = ReactMapboxGl({
    accessToken:
     'pk.eyJ1Ijoic2FpYXNoaXNoIiwiYSI6ImNrMWdyNTc4cjA3dzEzb2sxaTlrdzFiOHoifQ.B1JQ-8A43BNcL-0kMxO9Bg'
  })


return(
  <div className="container" style={{width:'100%',height:'150vh',textAlign:'center'}}>
<h1 className="navbar-brand" style={{textAlign:'center',fontSize:'2.5rem', margin:'auto',color:'#db3056'}}>
Events
</h1>

<div className="row" style={{padding:'20px'}}>








<div className="col-md-9" style={{width:'100vw',margin:'auto'}} >

  <Map
    style="mapbox://styles/mapbox/streets-v9"
    containerStyle={{
      height: '40vh',
      width: '55vw'
    }}
  >
    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
      <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
    </Layer>

    <Marker
    coordinates={[-0.481747846041145, 51.3233379650232]}
     >
<img src={Pin} style={{width:'50px',height:'50px'}} />
    </Marker>

    <Popup
      coordinates={[-0.481747846041145, 51.3233379650232]}
      offset={{
        'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
      }}>
      <h1>
        janakpuri
      </h1>
    </Popup>
    <ZoomControl/>
<ScaleControl/>

  </Map>






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
)}

export default Events
