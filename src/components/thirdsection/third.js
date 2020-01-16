import $ from 'jquery'
import shuffle from 'shuffle-array'
import one from '../../pics/11.jpg'
import two from '../../pics/2.jpg'
import three from '../../pics/3.jpg'
import four from '../../pics/4.jpg'
import five from '../../pics/5.jpg'
import six from '../../pics/6.jpg'
import seven from '../../pics/7.jpg'
import eight from '../../pics/8.jpg'
import nine from '../../pics/9.jpg'
import ten from '../../pics/10.jpg'

$(document).ready(function(){

const images= [one,two,three,four,five,six,seven,eight,nine,ten]
  setInterval(()=>{
var i=0;
var pics=shuffle(images)

    while(i<10) {
      $(`#${i}`).attr("src",pics[`${i}`])
      i=i+1;
    }

  },2000)

})
