const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if(menu){
menu.addEventListener("click", ()=>{
nav.classList.toggle("active");
});
}

const donateBtn = document.getElementById("donateBtn");

if(donateBtn){
donateBtn.addEventListener("click", ()=>{
alert("Thank you for supporting NayePankh Foundation ❤️");
});
}
// Get the button
let mybutton = document.getElementById("scrollBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


mybutton.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
