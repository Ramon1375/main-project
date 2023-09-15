let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener(('click'), () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
};
const countDate = new Date('Jan 10 2024 14:30:55').getTime();

var x = setInterval(function(){
    let now = new Date().getTime();


    let distance = countDate - now;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (1000*60 *60*24)) / (1000*60*60));
    var min = Math.floor((distance % (1000*60 *60)) / (1000*60));
    var sec = Math.floor((distance % (1000*60 *60)) /1000);


    document.getElementById('timer').innerHTML= d+'d '+hrs+'h '+min+'m '+sec+'s ';
     if (distance<0){
        clearInterval(x)
        document.getElementById('timer').innerHTML="Timer's Up"
     };
  
     
});
