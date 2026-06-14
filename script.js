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