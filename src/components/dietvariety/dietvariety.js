import React from 'react'
import BreakfastPic from '../../pics/breakfast.jpg'
import BreakfastPic1 from '../../pics/breakfast1.jpg'
import BreakfastPic2 from '../../pics/breakfast2.jpg'


const DietVariety=({match})=>(
  <div className="container" style={{width:'100%',textAlign:'center'}}>
  <h1 style={{color:'#851d41'}}>
  {match.params.category}
  </h1>

  <img style={{width:'100%',height:'18vh',margin:'8px'}} src={BreakfastPic}  />
  <img style={{width:'100%',height:'18vh',margin:'8px'}} src={BreakfastPic1}  />
  <img style={{width:'100%',height:'18vh',margin:'8px'}} src={BreakfastPic2}  />

  </div>
)

export default DietVariety
