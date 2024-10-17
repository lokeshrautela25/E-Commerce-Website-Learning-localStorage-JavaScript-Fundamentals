import navbar from "../Components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let productPrice = JSON.parse(localStorage.getItem("Price")) || 0;

let allData = [];
Object.values(productData).forEach((ele) => {
   allData.push(...ele);
});

let dataDiv = document.getElementById("products");
const renderData = (data) => {
 dataDiv.innerHTML = null;
 data.forEach((ele) => {
   let product = document.createElement("div");
   product.className = "items";
   let image = document.createElement("img");
   image.src = ele.img;
   image.onclick = () => {
     localStorage.setItem("Products", JSON.stringify(ele));
     window.location.href = "productPage.html"
   };
   let brand = document.createElement("p");
   brand.innerText = ele.brand;
   let title = document.createElement("h2");
   title.innerText = ele.title;
   let price = document.createElement("b");
   price.innerText = `Price: ₹${ele.price}`;
   let addBtn = document.createElement("button");
   addBtn.innerHTML = "Add to cart";
   addBtn.onclick = () => {
     cartData.push(ele);
     document.getElementById("cartCount").innerText = cartData.length;
     localStorage.setItem("cart", JSON.stringify(cartData));
     addBtn.innerHTML = "Added to cart";
     productPrice += Number(ele.price);
     localStorage.setItem("Price", JSON.stringify(productPrice));
   };

   product.append(image, brand, title, price, addBtn);
   dataDiv.append(product);
 });
};
renderData(allData);

let search = document.getElementById("query");
let searchBtn = document
  .getElementById("searchBtn")
  .addEventListener("click", searchFun);

function searchFun() {
  let searchVal = search.value;
  let searchedItems = allData.filter((ele) => {
    return(
        ele.category.toLowerCase().includes(searchVal.toLowerCase()) ||
        ele.title.toLowerCase().includes(searchVal.toLowerCase())
  );
    });
  renderData(searchedItems);
}

search.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        searchFun();
    }
});