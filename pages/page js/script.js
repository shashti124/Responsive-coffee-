const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function(){
    navLinks.classList.toggle("show");
});


window.addEventListener("scroll", function(){
    const header = document.getElementById("header");
    header.classList.toggle("shadow", window.scrollY > 50);
});


function orderNow(){
    alert("Thank you for choosing Brew Haven! ☕ Your order page will open soon.");
}
