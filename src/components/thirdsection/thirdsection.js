import React from 'react'
import Doctors from '../../pics/doctors.jpg'
import './third.scss'
import './third.js'

const Third=()=>{
  const items=[1,2,3,4]
const items1=[6,7,8,9]
//
//   return(
//
//     <div className="container-fluid" id="doctors">
//     <div className="row" style={{display:'flex',flexDirection:'row',alignItems:'center'}} >
//       {
//         items.map((i,idx)=>(
//           (<div  key={idx} style={{height:'150px',width:'150px',margin:'40px',borderRadius:'50%',border:'1px solid blue',marginTop:'20px'}}>
//         </div>)
//
//
//
//         ))
//
//         }
//
//
//
// <div  className='row' style={{display:'flex',flexDirection:'row'}}>
//
// <p style={{margin:'auto'}}>
// <span style={{fontWeight:'bold'}}>
//   Amazing Doctors
// </span>
// <br/>
// at your service
// <span style={{display:'block'}}>
//   24/7
// </span>
// </p>
// </div>
//
//
//
//     </div>
//
//
//       }
//
//     </div>
//   )

  return (
  <div style={{width:'100%'}} >
<img id="doctors" src={Doctors} style={{height:'60vh',width:'100%'}}/>

</div>
  )



}
export default Third
