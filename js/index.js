// ITERATION 1

// const { product } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yay!');
  // price
  const price = product.querySelector('.price span');
  const priceValue = Number(price.innerText); // in this case price per piece
  // quantity
  const quantity = product.querySelector('.quantity input'); //how to grab the input selector
  const quantityValue = Number(quantity.value);
  // subtotal: price * quantity
  const subtotalPrice = priceValue * quantityValue;
  // console.log(subtotalPrice);

  let subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotalPrice;
  return subtotalPrice;
  }

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.querySelectorAll('.product');
  console.log(products);
  let grandTotal = 0;
  products.forEach(element => { // forEach doesn't return sth
    let singleProductSum = updateSubtotal(element);
    grandTotal = grandTotal + singleProductSum;
  });

  // ITERATION 3
  let totalPrice = document.querySelector('#total-value span');

  totalPrice.innerText = calculateAll;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
