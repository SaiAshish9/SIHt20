import React from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import './dashboard.scss'
import Sidebar from '../../components/sidebar/sidebar'
import Events from '../../components/events/events'
import Doctors from '../../components/doctors/doctors'

const Home=({history})=>{
  // <Route exact path='/diets' component={Diets} />
  // <Route exact path='/doctors' component={Doctors} />
return(



  <div className="container-fluid" style={{position:'relative',minHeight:'70vh',left:'0px',right:'0px'}}>
<div className="row" style={{width:'100%'}}>

<div>
<Sidebar/>
</div>
</div>


<div className="col-9" style={{marginLeft:'28%',width:'77%'}}>
<Switch>
  <Route exact path='/' component={Doctors} />
  <Route path='/events' component={Events} />
</Switch>
</div>


  </div>
)
}

export default Home
