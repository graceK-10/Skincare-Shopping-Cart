// Function that adds items to the shopping cart. This function will:
// --> Retrieve the entered quantity from the input field
// --> Update the shopping carts contents with the new quantity
// --> Calculate the total cost based on the quantity and the products price
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  // Making sure the delete icon works
  removeCartItemButtons = document.getElementsByClassName('icon-delete');
console.log(removeCartItemButtons);

for(let i = 0; i < removeCartItemButtons.length; i++) {
  let icon = removeCartItemButtons[i];
  icon.addEventListener('click', function(event) {
    let iconClicked = event.target; 
    iconClicked.parentElement.parentElement.remove();
    updateCartTotal();
  })
}
}


// Another Function that will handle removing items from the shopping cart which will:
// --> Clear the shopping carts contents
// --> Reset the total cost to zero

// A Function to:
// --> Update the displayed shopping cart contents and 
// total cost in the HTML




// Update cart total when removing an item
function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName('cart-item')[0];
  let cartRows = cartItemContainer.getElementsByClassName('row');
  let total = 0;

  for(let i = 0; i < cartRows.length; i++) {
    cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName('cart-price')[0];
    let quantityElement = cartRow.getElementsByClassName('form-control')[0];
    console.log(priceElement, quantityElement);

    // When an item is removed, price will be updated
    let price = parseFloat(priceElement.innerText.replace('R', ''));
    let quantity = quantityElement.value;
    total = total + (price * quantity);
  }
  document.getElementsByClassName('cart-total')[0].innerText = total;
}


// Add and Subtract cart item quantity
 addButton = Array.from(document.getElementsByClassName('btn-quantity-plus'));
 subtractButton = Array.from(document.getElementsByClassName('btn-quantity-minus'));
// Adding event listeners to each plus button
addButton.forEach(btn => {
  btn.addEventListener('click', function(event) {
    const buttonClicked = event.target;
    const input = buttonClicked.parentElement.querySelector('input[type="number"]');
    let inputValue = parseInt(input.value);
    let newValue = inputValue + 1;
    input.value = newValue;
  });
});

// Adding event listeners to each minus button
subtractButton.forEach(btn => {
  btn.addEventListener('click', function(event) {
    const buttonClicked = event.target;
    const input = buttonClicked.parentElement.querySelector('input[type="number"]');
    let inputValue = parseInt(input.value);
    if (inputValue > 0) { // Ensuring the value doesn't go below 0
      let newValue = inputValue - 1;
      input.value = newValue;
    }
  });
});
