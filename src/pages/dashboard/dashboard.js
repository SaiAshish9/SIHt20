import React from 'react'
import {Switch,Route,Link,withRouter} from 'react-router-dom'
import './dashboard.scss'
import Sidebar from '../../components/sidebar/sidebar'
import Events from '../../components/events/events'
import Doctors from '../../components/doctors/doctors'
import Diets from '../../components/diets/diets'
import DietVariety from '../../components/dietvariety/dietvariety'
import Analyse from '../../components/analyse/analyse'
import Camera from '../../components/camera/camera'


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
  <Route path='/check' component={Analyse} />
  <Route exact path='/diets' component={Diets} />
  <Route path='/diets/:category' component={DietVariety} />
  <Route path='/camera' component={Camera} />

</Switch>
</div>


  </div>
)
}

export default withRouter(Home)
