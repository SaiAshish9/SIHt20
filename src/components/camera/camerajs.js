import $ from 'jquery'
import Clarifai from 'clarifai'
import axios from 'axios'
import {encode,decode} from 'base64-arraybuffer'

var myClarifaiApiKey = 'cf9b1eec5db540f48dea6edff3b1ce4a';
var myWolframAppId = 'X2K3J8-T39PAQKEUW';

var app = new Clarifai.App({apiKey: myClarifaiApiKey});

var localStream




$(document).ready(function(){




  const canvas=document.getElementById('canvas')
  const snap=document.getElementById('snap')
  const video=document.getElementById('video')

  const constraints={
    audio:true,
    video:{
      width:1280,
      height:720
    }
  }

  async function init(){

    try{

      if(window.location.pathname==='/camera'){

$('.link').click(function(e){
  window.location.reload()
  window.location.href="/"
})



if(navigator.getUserMedia(constraints,handleSuccess,handleError)){
  const  stream=await navigator.mediaDevices.getUserMedia(constraints)
  localStream=stream
  handleSuccess(stream)
}else{
  window.stream=null
}


}

    }catch(e){
  alert(e.message)
    }
  }

  function handleError(e){

  }



  function handleSuccess(stream){
    window.stream=stream
    video.srcObject=stream
  }

if(window.location.pathname==='/camera'){
  init()
  var context=canvas.getContext('2d')
    snap.addEventListener("click",function(){
      context.drawImage(video,0,0,640,480)
var image=new Image()
var imageData=context.getImageData(0,0,canvas.width,canvas.height)
var data=canvas.toDataURL('image/jpeg', 1.0).split("base64,")[1]
app.models.predict(Clarifai.FOOD_MODEL,{base64:data} )
.then(async response => {
await  $('#result').html(response.rawData.outputs[0].data.concepts[0].name);
const headers={
  'x-app-id':'f227aa4b',
  'x-app-key':'a668c55acba2d6cf92c476e91046fa46',
  'x-remote-user-id':'0'
}
const apiEndpoint = `https://trackapi.nutritionix.com/v2/natural/nutrients`;
     const params = { query:response.rawData.outputs[0].data.concepts[0].name };
      axios.post(apiEndpoint, params, {
       headers,
     }).then(async data=>{
       console.log(data);
     data =data.data.foods[0]
     if(window.location.pathname==='/camera'){

     await $('#protiens').html(data.nf_protein)
     await  $('#carbohydrates').html(data.nf_total_carbohydrate)
     await  $('#calories').html(data.nf_calories)
   }

})
}).catch(e=>{
  console.log(e.message);
})  })
}


else{

}
})
// base64: "/9j/4AAQSkZJRgABAQEAeAB4AAD/2wBDAAMCAgMCAgMDAwMEAw…+3wn8Ibj/AMU/Z9f7p/xooorRYahb4F9yMPrNf+d/ez//2Q=="}
