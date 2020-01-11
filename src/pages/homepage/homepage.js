import React from 'react'
import './homepage.scss'
import First from '../../components/firstsection/firstsection'
import Second from '../../components/secondsection/secondsection'
import Third from '../../components/thirdsection/thirdsection'

import Home from '../dashboard/dashboard'

import {connect} from 'react-redux'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'

import {withRouter} from 'react-router-dom'



const Homepage=({currentUser})=>{


return(
<div style={{overFlowX:'hidden',width:'100%'}}>
{
  !currentUser?
 (<div>
    <First/>
    <Second/>
    <Third/>
</div>

  ):
  (<div>
    <Home/>
  </div>
  )
}



</div>
)}

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})

export default withRouter(connect(mapStateToProps)(Homepage))
