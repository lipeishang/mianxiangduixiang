//TODO: Please write code in this file.
function printReceipt(inputs) {

  var cartItems = getCartItems(inputs);
  var Receipt = getReceipt(cartItems);
  printReceiptItems(Receipt);
}

function getCartItems(inputs) {
  var cartItems = [];
  inputs.forEach(function (input) {
    var subtotal = input.count * input.price;
    cartItems.push({item: input, subtotal: subtotal});
  });

  return cartItems;
}

function getReceipt(cartItems) {
  var Receipt ;
  var alltotal = 0;

  cartItems.forEach(function (cartItem) {
    alltotal += cartItem.subtotal;
  });

  Receipt = {cartItems: cartItems, alltotal: alltotal};

  return Receipt;
}

function printReceiptItems(Receipt) {
  var stringReceipt = "***<没钱赚商店>收据***";
  var cartItems = Receipt.cartItems;

  cartItems.forEach(function (cartItem) {
    stringReceipt += '\n名称：' + cartItem.item.name + '，数量：' + cartItem.item.count + cartItem.item.unit + 
                     '，单价：' + cartItem.item.price.toFixed(2) + '(元)，小计：' + cartItem.subtotal.toFixed(2) + '(元)';
  });

  stringReceipt += '\n----------------------' + '\n总计：' + Receipt.alltotal.toFixed(2) + '(元)' + '\n**********************';

  console.log(stringReceipt);
}
