import React from 'react'
import './homepage.scss'
import First from '../../components/firstsection/firstsection'
import Second from '../../components/secondsection/secondsection'
import Third from '../../components/thirdsection/thirdsection'
import Footer from '../../components/footer/footer'

import {connect} from 'react-redux'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {setCurrentUser} from '../../redux/user/user.actions'
import {createStructuredSelector} from 'reselect'

const Homepage=({currentUser})=>{

// console.log(currentUser);

// console.log(localStorage.getItem('Token'));

return(  <div>

<First/>
<Second/>
<Third/>
<Footer/>



</div>
)}

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})

export default connect(mapStateToProps)(Homepage)
