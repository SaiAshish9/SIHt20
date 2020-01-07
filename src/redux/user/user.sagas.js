// import {takeLatest,put,all,call} from 'redux-saga/effects'
//
// import UserActionTypes from './user.types'
//
// import {
// signInSuccess,
// signInFailure,
// signOutSuccess,
// signOutFailure,
// signUpSuccess,
// signUpFailure
// } from './user.actions'
//
// import {
//   addUser,
//   loginUser
// } from './user.utils'
//
// export function* signin(payload){
//   try{
//     const user=yield call(loginUser,payload)
//     yield put(signInSuccess(user))
//   }catch(e){
//     yield put(signInFailure(e))
//   }
// }
//
// export function* onSignInStart(){
//   yield takeLatest(UserActionTypes.SIGN_IN_START,signin)
// }
//
// export function* signup(payload){
//   try{
//     const user=yield call(addUser,payload)
//     yield put(signInSuccess(user))
//   }catch(e){
//     yield put(signInFailure(e))
//   }
// }
//
// export function* signInAfterSignUp(payload){
// yield signin(payload)
// }
//
// export function* onSignUpSuccess(){
//   yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
// }
//
// export function* isUserAuthenticated(){
//   try{
//  const userAuth=yield getCurrentUser()
//  if(!userAuth){
//    // no session
//     return;
//  }
//  yield getSnapshotFromAuth(userAuth)
//   }catch(e){
//     yield put(signInFailure(e))
//   }
// }
//
// export function* onCheckUserSession(){
//   yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
// }
