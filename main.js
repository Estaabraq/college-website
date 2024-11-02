// let landingPage = document.querySelector(".collage");
// let imageArry = ["01.jpg","02.jpg","03.jpg","o4.jpg", "05.jpg"];

// setInterval(()=>{
//     let randomNumber =Math.floor(Math.random()*imageArry.length);
//  landingPage.style.backgroundImage = url("+imageArry[randomNumber] +");


// },1000);

$(document).ready(function(){
   $('.logo').animate({
      marginTop: '-=20px'
   },1000).animate({

      marginTop: '+=20px'

   },1000);
 
   $('ul').animate({
    marginTop: '-=20px'
 },1000).animate({

    marginTop: '+=20px'

 },1000);

 var zIndexValue =0;
$('.about img').on('click' , function(){
 $(this).animate({

right: '200px' ,
marginTop: 30


 }, 400 ,function(){

    zIndexValue--;
    $(this).css('z-index',zIndexValue);

 }).animate({
right: '100px',
marginTop: 0

 },400);

});


 });

 