'use script'

import $ from 'jquery'
import Clarifai from 'clarifai'
import axios from 'axios'

var myClarifaiApiKey = 'cf9b1eec5db540f48dea6edff3b1ce4a';
var myWolframAppId = 'X2K3J8-T39PAQKEUW';

var app = new Clarifai.App({apiKey: myClarifaiApiKey});




$(document).ready(function(){


  var readURL = function(input) {
          if (input.files && input.files[0]) {
              var reader = new FileReader();

              reader.onload = function (e) {
                  $('#piccontainer').attr('src', `${e.target.result}`);
              }

              reader.readAsDataURL(input.files[0]);

              reader.addEventListener("load", function () {
                doPredict({ base64: reader.result.split("base64,")[1] });
              }, false);


              function doPredict(value) {
                console.log(value);
       app.models.predict(Clarifai.FOOD_MODEL, value)
       .then(async response => {
         $('#result').html('')
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
             await $('#protiens').html(data.nf_protein)
             await  $('#fat').html(data.nf_total_fat)
             await  $('#calories').html(data.nf_calories)
})
       })

}







          }
      }





  $('#upload').click(function(e){
  $('.file-upload').click()


  $(".file-upload").on('change', function(){
      readURL(this);
  });


  })
})
