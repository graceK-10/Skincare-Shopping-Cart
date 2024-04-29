// Function that adds items to the shopping cart. This function will:
// --> Retrieve the entered quantity from the input field
// --> Update the shopping cart's contents with the new quantity
// --> Calculate the total cost based on the quantity and the product's price
addToCartBtn = document.getElementsByClassName('btn_add');
mainContainer = document.getElementsByClassName('product')[0];
quantityFields = document.getElementsByClassName('form-control')
detete_buttons = document.getElementsByClassName('icon-delete')

for(let i = 0; i < addToCartBtn.length; i++) {
addToCartBtn[i].addEventListener('click', addToCart);
}

// This function helps to add items to our cart
function addToCart(event) {

  let itemContainer = document.createElement('div')
  let btn = event.target;
  let btnParent = btn.parentElement
  let btnSecondParent = btn.parentElement.parentElement;
 
  let itemName = btnSecondParent.children[1].innerText;
  let itemPrice = btnSecondParent.children[3].innerText;
  let itemImage = btnParent.children[0].src;
 


 itemContainer.innerHTML = `
 <div class="product-background">
 <img src=${itemImage} class="img_products"  alt="Maaemo Hydrating Face Cream">
 <h4 class="img-title">${itemName}</h4>
 <p>Hydrating Face Cream <em>100ml</em></p>
 <h6 id="maaemoPrice">${itemPrice}</h6>
 <div class="text-center">
     <button type="button" class="btn btn_add btn-color btn-lg text-center" onclick="addToCart(event, 1)">ADD TO CART</button>
 </div>
</div>`;



// let total = calculateTotal(itemPrice, quantity);
// Append the new item container to the cart
 
// Append the new item container to the cart
//  cartItemContainer = document.querySelector('.cart .cart-item');
 mainContainer.appendChild(itemContainer);

     // Accessing individual quantity fields
     for(let i = 0; i < quantityFields.length; i++){
      quantityFields[i].value = 1
      quantityFields[i].addEventListener('change', totalCost)
              
  }

  // Accessing individual quantity fields
  for(let i = 0; i < delete_buttons.length; i++){
      delete_buttons[i].addEventListener('click', removeItem)
  }
 
 // Update the total cost displayed in the cart
//  updateCartTotal(total);
grandTotal() 
 }

 // This function helps to multiply the quantity and the price
function totalCost(event){
  let quantity = event.target
  quantityParent = quantity.parentElement.parentElement
  priceField = quantityParent.getElementsByClassName('item-price')[0]
  totalField = quantityParent.getElementsByClassName('total-price')[0]
  priceFieldContent = priceField.innerText.replace('R', '')
  totalField.children[0].innerText = 'R' +  quantity.value * priceFieldContent
  grandTotal()
  if(isNaN(quantity.value)|| quantity.value <= 0){
      quantity.value = 1
  }
}


// This function helps to add up the total of the items
function grandTotal(){
  let total = 0
  let grandTotal = document.getElementsByClassName('grand-total')[0]
  all_total_fields = document.getElementsByClassName('total-price')
  for(let i = 0; i < all_total_fields.length; i++){
      all_prices = Number(all_total_fields[i].innerText.replace('$', ''))
      total += all_prices
  }
  grandTotal.children[0].innerText = "R" + total
  grandTotal.children[0].style.fontWeight = 'bold'
  console.log(total)
}



// Another Function that will handle removing items from the shopping cart which will:
// --> Clear the shopping carts contents
// --> Reset the total cost to zero
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  // Making sure the delete icon works
  removeCartItemButtons = document.getElementsByClassName('icon-delete');
// console.log(removeCartItemButtons);

for(let i = 0; i < removeCartItemButtons.length; i++) {
  let icon = removeCartItemButtons[i];
  icon.addEventListener('click', function(event) {
    let iconClicked = event.target; 
    iconClicked.parentElement.parentElement.remove();
    updateCartTotal();
  })
}
}

// A Function to:
// --> Update the displayed shopping cart contents and 
// total cost in the HTML

// When checkout button is clicked, cart will update
document.addEventListener('DOMContentLoaded', function() {
  const checkoutButton = document.getElementById('btn_main');
  checkoutButton.addEventListener('click', function() {
    updateCartTotal();
  });
});

// Update cart total when removing an item
function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName('cart-item')[0];
  let cartRows = cartItemContainer.getElementsByClassName('row');
  let total = 0;

  for(let i = 0; i < cartRows.length; i++) {
    cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName('cart-price')[0];
    let quantityElement = cartRow.getElementsByClassName('form-control')[0];
    // console.log(priceElement, quantityElement);

    // When an item is removed, price will be updated
    let price = parseFloat(priceElement.innerText.replace('R', ''));
    let quantity = parseInt(quantityElement.value);
    total += price * quantity;
  }
  document.getElementsByClassName('cart-total')[0].innerText = total;
}



// Add and Subtract cart item quantity
 addButton = Array.from(document.getElementsByClassName('btn-quantity-plus'));
 subtractButton = Array.from(document.getElementsByClassName('btn-quantity-minus'));
 
 // Total Price Calculation for quantity increment/decrement

// Adding event listeners to each plus button
addButton.forEach(btn => {
  btn.addEventListener('click', function(event) {
    const buttonClicked = event.target;
    const input = buttonClicked.parentElement.querySelector('input[type="number"]');
    let inputValue = parseInt(input.value);
    let newValue = inputValue + 1;
    input.value = newValue;

   updatePriceTotal(); 
  });
});

// Adding event listeners to each minus button
subtractButton.forEach(btn => {
  btn.addEventListener('click', function(event) {
    const buttonClicked = event.target;
    const input = buttonClicked.parentElement.querySelector('input[type="number"]');
    let inputValue = parseInt(input.value);
    if (inputValue > 0) { 
      let newValue = inputValue - 1;
      input.value = newValue;

      updatePriceTotal(); 
    }
  });
});
