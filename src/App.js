import React from 'react';

import './App.css';
import Header from './components/header/header'
import SignUp from './components/signup/signup'
import SignIn from './components/signin/signin'
import Homepage from './pages/homepage/homepage'
import {Switch,Route,withRouter} from 'react-router-dom'
import Footer from './components/footer/footer'


// import jwtDecode from "jwt-decode"
// import {setAuthorizationToken} from './redux/user/user.utils'
// import {configureStore} from  './redux/store'
// import {setCurrentUser} from './redux/user/user.actions'

// const store=configureStore()
//
// if(localStorage.Token){
//   setAuthorizationToken(localStorage.Token)
//   try {
//     store.dispatch(setCurrentUser(jwtDecode(localStorage.Token)));
// console.log(localStorage.token===store.user.token);
//   } catch (e) {
//     store.dispatch(setCurrentUser({}));
//   }
// }

function App(){
  return (
    <div style={{overFlowX:'hidden'}}>
      <div style={{width:'100%'}}  className='container-fluid'>
        <Header />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/diets' component={Homepage} />
      <Route exact path='/diets/:category' component={Homepage} />
      <Route exact path='/events' component={Homepage} />
      <Route  path='/signup' component={SignUp} />
      <Route  path='/signin' component={SignIn} />
  </Switch>

  <Footer  />

      </div>
    </div>
  )
  }



export default withRouter(App);
