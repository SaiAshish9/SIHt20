import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import SignUp from './components/signup/signup'
import SignIn from './components/signin/signin'
import Homepage from './pages/homepage/homepage'
import {Switch,Route,withRouter} from 'react-router-dom'


function App(){
  return (
    <div>
      <div className='container-fluid'>
        <Header />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route  path='/signup' component={SignUp} />
      <Route  path='/signin' component={SignIn} />

  </Switch>
      </div>
    </div>
  )
  }



export default withRouter(App);
