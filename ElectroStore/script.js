function searchProduct() {

    let input = document.getElementById("searchInput").value.toLowerCase().trim();

    if (input === "") return;

    let cards = document.querySelectorAll(".card");
    let found = false;

    cards.forEach(function(card) {

        let productName = card.querySelector("h3").innerText.toLowerCase();
        let category = card.dataset.category.toLowerCase();

        // Remove previous highlight
        card.style.border = "";
        card.style.boxShadow = "";

        if (!found && (productName.includes(input) || category.includes(input))) {

            card.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            // Highlight the matched product
            card.style.border = "3px solid blue";
            card.style.boxShadow = "0 0 15px rgba(0,0,255,0.5)";

            setTimeout(function() {
                card.style.border = "";
                card.style.boxShadow = "";
            }, 3000);

            found = true;
        }
    });

    if (!found) {
        alert("Product or category not found!");
    }
}
function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        product: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " has been added to your cart!");
}
function displayCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cartItems");

    let total = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = "<h3>Your cart is empty.</h3>";
        document.getElementById("totalPrice").innerHTML = "";

        return;
    }

    cart.forEach(function(item, index) {

        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <h3>${item.product}</h3>
                <p>Price: Rs. ${item.price}</p>

                <button onclick="removeItem(${index})">
                    Remove
                </button>

                <hr>
            </div>
        `;
    });

    document.getElementById("totalPrice").innerHTML =
        "<h2>Total: Rs. " + total + "</h2>";

}


function removeItem(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

function clearCart() {

    localStorage.removeItem("cart");

    displayCart();

    alert("Cart cleared successfully!");

}
function placeOrder() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();

    if (name === "" || email === "" || phone === "" || address === "") {
        alert("Please fill all fields.");
        return;
    }

    localStorage.removeItem("cart");

    document.body.innerHTML = `
        <div style="text-align:center; margin-top:100px;">
            <h1>✅ Order Placed Successfully!</h1>
            <h2>Thank you, ${name}.</h2>
            <p>Your order has been received.</p>

            <button onclick="window.location.href='index.html'">
                Continue Shopping
            </button>
        </div>
    `;
}
function loginUser(){

    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    if(username=="admin" && password=="12345"){

        alert("Login Successful!");

        localStorage.setItem("loggedInUser",username);

        closeLogin();

    }

    else{

        alert("Invalid Username or Password!");

    }

}
function openLogin(){

    document.getElementById("loginModal").style.display="block";

}

function closeLogin(){

    document.getElementById("loginModal").style.display="none";

}
function subscribeNewsletter() {

    let email = document.getElementById("newsletterEmail").value.trim();

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Save email
    let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

    subscribers.push(email);

    localStorage.setItem("subscribers", JSON.stringify(subscribers));

    alert("🎉 Thank you for subscribing!");

    document.getElementById("newsletterEmail").value = "";
}
function sendMessage(){

    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let subject=document.getElementById("subject").value.trim();
    let message=document.getElementById("message").value.trim();

    if(name=="" || email=="" || subject=="" || message==""){

        alert("Please fill all fields.");

        return;

    }

    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Please enter a valid email.");

        return;

    }

    alert("✅ Message Sent Successfully!");

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("subject").value="";
    document.getElementById("message").value="";
}