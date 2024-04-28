function addToCart() {
    let productName = "La Roche Posay"; // Replace this with the actual product name
    let quantity = document.getElementById("quantity").value;
    let totalPrice = quantity * 650; // Assuming each product costs $10, you can replace this with your actual pricing logic
    let cartContents = productName + " x " + quantity + " = R" + totalPrice;

    // Display the cart contents
    var cartElement = document.getElementById("cart");
    cartElement.innerHTML = cartContents;
  }