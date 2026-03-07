document.getElementById("orderForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let coffee = document.getElementById("coffee").value;
let qty = document.getElementById("qty").value;

document.getElementById("msg").innerHTML =
"Thank you " + name + "! Your order of " + qty + " " + coffee + " has been placed.";

});