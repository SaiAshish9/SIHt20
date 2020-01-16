import React,{useState} from 'react'

import BreakfastPic from '../../pics/breakfast.jpg'
import LunchPic from '../../pics/lunch.jpg'
import DinnerPic from '../../pics/dinner.jpg'


const Diets=({history})=>{

const [hidden,setToggle]=useState(true)
const [category,setCategory]=useState('')


const handleSubmit=(e)=>{

  e.preventDefault()
  setToggle(!hidden)
  history.push('/diets/'+category)
}



  return (
  <div className="container-fluid" style={{width:'100%'}} >

<p style={{fontWeight:'bold',textAlign:'center',color:'orange'}}>
Personalised Diets
</p>

<div className="row" >

<p
name="breakfast"

  style={{cursor:'pointer',
  fontSize:'15px',textAlign:'start',
 fontWeight:'bold',color:'#851d41'}}
onClick={()=>{
  setToggle(!hidden)
  setCategory('breakfast')
}}
 >
Breakfast
</p>

<img src={BreakfastPic} style={{marginLeft:'20px',width:'60%',maxWidth:'15rem',height:'10rem'}}  />

</div>



<div className="row">

<p
  name="lunch"
  onClick={()=>{
    setToggle(!hidden)
    setCategory('lunch')
  }}
  style={{cursor:'pointer',fontSize:'15px',position:'relative',top:'40%',left:'6rem', fontWeight:'bold',color:'#851d41'}}>
Lunch
</p>

<img src={LunchPic} style={{ position:'relative',width:'60%',maxWidth:'15rem',top:'55%',left:'55%',height:'10rem'}}  />

</div>



<div className="row" style={{marginBottom:'10px'}}>

<p
  name="dinner"
  onClick={()=>{
    setToggle(!hidden)
    setCategory('dinner')

  }}
  style={{marginLeft:'20px',cursor:'pointer',fontSize:'15px',textAlign:'start', fontWeight:'bold',color:'#851d41'}}>
Dinner
</p>

<img src={DinnerPic} style={{width:'60%',maxWidth:'15rem', marginLeft:'20px',position:'relative',top:'85%',height:'10rem'}}  />

</div>

{
  hidden===false?
  (<div className="container-fluid" style={{textAlign:'center', position:'absolute',right:'10vw',margin:'auto',top:'30vh', width:'50vw',border:'1px solid black',background:'#fff' ,zIndex:'1'}}>

<form onSubmit={handleSubmit}>
  <p
    onClick={()=>{
      setToggle(!hidden)
    }}
    style={{textAlign:'end',cursor:'pointer'}}>
  X
</p>

<p style={{fontWeight:'bold',color:'orange',textAlign:'center'}}>
Enter Your Weight
</p>

<input type="text" style={{maxWidth:'7rem',textAlign:'center',margin:'auto'}} />

<p style={{fontWeight:'bold',color:'orange',textAlign:'center'}}>
Enter Your Height
</p>

<input type="text" style={{maxWidth:'7rem',textAlign:'center',margin:'auto'}} />


<p style={{fontWeight:'bold',color:'orange',textAlign:'center'}}>
Enter Your Age
</p>

<input type="text" style={{maxWidth:'7rem',textAlign:'center',margin:'auto'}} />

<br/>
<button className="btn btn-warning" style={{margin:'20px 0px',color:'white',fontWeight:'bold'}}>Submit</button>
</form>
</div>):
null
}



  </div>

)
}

export default Diets
