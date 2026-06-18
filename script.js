let cart = [];

function addToCart(name, price){

   cart.push(name);

   displayCart();

   alert(name + " added to cart");
}

function displayCart(){

   let cartItems =
      document.getElementById("cart-items");

   cartItems.innerHTML = "";

   for(let i = 0; i < cart.length; i++){

      let li =
         document.createElement("li");

      li.innerText = cart[i];

      cartItems.appendChild(li);
   }
}


function increaseQuantity(button){

   let quantity =
      button.parentElement.querySelector("span");

   let current =
      parseInt(quantity.innerText);

   quantity.innerText = current + 1;
}


function decreaseQuantity(button){

   let quantity =
      button.parentElement.querySelector("span");

   let current =
      parseInt(quantity.innerText);

   if(current > 1){

      quantity.innerText = current - 1;
   }
}


/* PAGE NAVIGATION */

function showPage(pageId){

   // Hide all pages

   document.getElementById("home-page").style.display = "none";

   document.getElementById("cart-page").style.display = "none";

   document.getElementById("location-page").style.display = "none";

   document.getElementById("help-page").style.display = "none";


   // Show selected page

   document.getElementById(pageId).style.display = "block";
}

/* PAYMENT */

function openPayment(name, price){

   document.getElementById("payment-popup")
      .style.display = "flex";

   localStorage.setItem("lastOrder",
      name + " - ₹" + price);
}


function closePopup(){

   document.getElementById("payment-popup")
      .style.display = "none";
}


function paymentSuccess(){

   alert(
      "✅ Payment Successful!\nYour order is confirmed."
   );

   let order =
      localStorage.getItem("lastOrder");

   console.log("New Order:", order);

   closePopup();
}
/* LOCATION POPUP */

function openLocation(){

   document.getElementById("location-popup")
      .style.display = "flex";
}

function closeLocation(){

   document.getElementById("location-popup")
      .style.display = "none";
}


/* HELP POPUP */

function openHelp(){

   document.getElementById("help-popup")
      .style.display = "flex";
}

function closeHelp(){

   document.getElementById("help-popup")
      .style.display = "none";
}


/* HOME */

function showHome(){

   window.scrollTo(0,0);
}


/* CART */

function showCart(){

   document.getElementById("cart-page")
      .scrollIntoView({
         behavior:"smooth"
      });
}
/* CART POPUP */

function openCart(){

   document.getElementById("cart-popup")
      .style.display = "flex";
}

function closeCart(){

   document.getElementById("cart-popup")
      .style.display = "none";
}