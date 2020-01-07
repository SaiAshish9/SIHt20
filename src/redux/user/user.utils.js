import axios from 'axios'
import {setCurrentUser} from './user.actions'

export const addUser=async (user)=>{
  let required=''
await  axios({
    method:'post',
    data:user,
    url:'/signup'
  }).then( data=>{
    required= data.data
    localStorage.setItem('Token',data.data.token)
  })
  return required
}

export const loginUser=async (user)=>{
  let required=''
 await  axios({
    method:'post',
    data:user,
    url:'/signin'
  }).then( data=>{
    required= data.data
    localStorage.setItem('Token',data.data.token)

  })
  return required
}

export function logout() {
  return dispatch => {
    localStorage.clear();
    dispatch(setCurrentUser({}));
  };
}
