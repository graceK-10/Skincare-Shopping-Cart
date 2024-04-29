// Function to add an item to the cart
function addToCart(event, productId) {
  // Get the product information
  let product = document.getElementById(`product_${productId}`);
  let title = product.querySelector(".img-title").innerText;
  let description = product.querySelector("p").innerText;
  let price = parseFloat(
    product.querySelector("h6").innerText.replace("R", "")
  );
  let imageSrc = product.querySelector(".img_products").getAttribute("src");

  // Create a new cart item
  let cartItem = document.createElement("div");
  cartItem.classList.add("row", "cart-item-row");
  cartItem.innerHTML = `
    <div class="col-md-4 center-item">
      <div>
        <img src="${imageSrc}" alt="" class="image-fluid" />
        <h5 class="item-title">${title}</h5>
        <p class="item-description">${description}</p>
      </div>
    </div>
    <div class="col-md-2 center-item">
      <h4 class="cart-price">R${price}</h4>
    </div>
    <div class="qty col-md-2 center-item">
      <div class="input-group number-spinner">
        <button type="button" class="btn btn-quantity-minus">
          <i class="fa-solid fa-minus"></i>
        </button>
        <input type="number" min="0" class="form-control text-center quantity" value="1" />
        <button type="button" class="btn btn-quantity-plus">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
    <div class="col-md-2 center-item">
      <h4 class="cart-price-total">R${price}</h4>
    </div>
    <div class="col-md-1 center-item">
      <i class="icon-delete fa-regular fa-trash-can"></i>
    </div>
  `;

  // Append the new cart item to the cart
  let cartContainer = document.querySelector(".cart .col-md-12");
  let cartItemContainer = cartContainer.querySelector(".cart-item");
  cartItemContainer.appendChild(cartItem);

  // Add event listeners for quantity change and delete
  cartItem
    .querySelector(".btn-quantity-minus")
    .addEventListener("click", function () {
      let input = cartItem.querySelector(".quantity");
      if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
        updateCartItemTotal(cartItem);
        updateCartTotal();
      }
    });

  cartItem
    .querySelector(".btn-quantity-plus")
    .addEventListener("click", function () {
      let input = cartItem.querySelector(".quantity");
      input.value = parseInt(input.value) + 1;
      updateCartItemTotal(cartItem);
      updateCartTotal();
    });

  cartItem.querySelector(".icon-delete").addEventListener("click", function () {
    cartItem.parentNode.removeChild(cartItem);
    updateCartTotal();
  });
}

// Function to update the total price of a cart item
function updateCartItemTotal(cartItem) {
  let price = parseFloat(
    cartItem.querySelector(".cart-price").innerText.replace("R", "")
  );
  let quantity = parseInt(cartItem.querySelector(".quantity").value);
  let totalPrice = price * quantity;
  cartItem.querySelector(".cart-price-total").innerText =
    "R" + totalPrice.toFixed(2);
}

// Function to update the overall cart total
function updateCartTotal() {
  let cartItems = document.querySelectorAll(".cart-item-row");
  let total = 0;
  cartItems.forEach(function (item) {
    let totalPrice = parseFloat(
      item.querySelector(".cart-price-total").innerText.replace("R", "")
    );
    total += totalPrice;
  });
  document.querySelector(".cart-total").innerText = total.toFixed(2);
}
