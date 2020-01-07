import React from 'react'

const Third=()=>{
  const items=[1,2,3,4,5,6,7,8,9,10,11,12,13]

  return(

    <div className="container-fluid" id="doctors">
    <div className="row" >
      {
        items.map((i,idx)=>(
          i!==7?
          (<div  key={idx} style={{height:'150px',width:'150px',margin:'40px',borderRadius:'50%',border:'1px solid blue',marginTop:'20px'}}>
        </div>):
          (
<div>
  <h4>
  Amazing Doctors
  </h4>
  <p>
  at your service
  <span style={{display:'block'}}>
    24/7
  </span>
  </p>
</div>


          )

        ))

        }
    </div>


      }

    </div>
  )
}
export default Third
