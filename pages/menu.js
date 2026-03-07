const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    header.classList.toggle("shadow", window.scrollY > 50);
});

function orderNow(){
    alert("Your coffee order is being prepared ☕");
}
