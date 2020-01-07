import React  from 'react'
import './header.scss'

import {Link,Redirect,withRouter} from 'react-router-dom'


import {connect} from 'react-redux'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {setCurrentUser,signOutUser} from '../../redux/user/user.actions'
import {createStructuredSelector} from 'reselect'

import {logout} from '../../redux/user/user.utils'

const Header=({history,match,currentUser,dispatch})=>{



// console.log(match);
// console.log(history);
return(  <div>
<nav className="navbar navbar-expand-lg navbar-dark " style={{fontWeight:'bold',background:'black'}} >
<Link to="/" className="navbar-brand" style={{fontWeight:'bold'}}>
NutriYou
</Link>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav ml-auto ">
{
  match.isExact===true?
  (
<a href="#events" className="nav-link" >
    Events
</a>)
:null
}
{
match.isExact===true?
(
<a href="#diets" className="nav-link">
      Diets
</a>
):null
}
{
match.isExact===true?
(
<a href="#doctors" className="nav-link">
Doctors
</a>):null
}

{
match.isExact===true?
(
  currentUser?
  <Link to="/home" className="nav-link">
     Dashboard
  </Link>
:
<Link to="/signup" className="nav-link">
   SignUp
</Link>
):
currentUser?
<a
onClick={()=>{
history.push('/')
dispatch(signOutUser())
}
}
className="nav-link"
style={{cursor:'pointer'}}
>
   SignOut
</a>
:
history.location.pathname==="/signup"?
  ( <Link to="/signin" className="nav-link">
     SignIn
  </Link>):
    ( <Link to="/signup" className="nav-link">
       SignUp
    </Link>)

}


   </ul>
</div>


</nav>
</div>)
}

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})


export default withRouter(connect(mapStateToProps)(Header))
