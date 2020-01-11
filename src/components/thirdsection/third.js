import $ from 'jquery'

$(document).ready(function(){
  $('#doctors').hide()

  setInterval(()=>{
    $('#doctors').fadeIn()
  },2200)

})
