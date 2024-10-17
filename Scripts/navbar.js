import navbar from "../Components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let cartData = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cartCount").innerText = cartData.length;