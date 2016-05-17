function printReceipt(inputs) {
  var items = getItems(inputs);
  var cartItems = getCartItems(items);
  var Receipt = getReceipt(cartItems);
  printReceiptItems(Receipt);
}

function getItems(inputs) {
  var items = [];
  items.push({item: inputs[0], count: 1});
  
  for (var j = 1; j < inputs.length; j++) {
    for (var i = 0; i< items.length; i++) {
      if (items[i].item.barcode === inputs[j].barcode) {
          items[i].count++;
             break;
      }
    }
    
    if(i >= items.length){
      items.push({item: inputs[j], count: 1});
    }
  }

  return items;

}

function getCartItems(items) {
  var cartItems = [];
  items.forEach(function (a) {
    var subtotal = a.item.price * a.count;
    cartItems.push({item: a, subtotal: subtotal});
  });

  return cartItems;

}

function getReceipt(cartItems) {
  var Receipt = [];
  var allTotal = 0;

  cartItems.forEach(function (cartItem) {
    allTotal += cartItem.subtotal;
  });
  Receipt = ({cartItems: cartItems, allTotal: allTotal});

  return Receipt;

}

function printReceiptItems(Receipt) {
  var stringReceipt = "***<没钱赚商店>收据***";
  var cartItems = Receipt.cartItems;
  cartItems.forEach(function (cartItem) {
    stringReceipt += '\n名称：' + cartItem.item.item.name + '，数量：' + cartItem.item.count + cartItem.item.item.unit +
      '，单价：' + cartItem.item.item.price.toFixed(2) + '(元)，小计：' + cartItem.subtotal.toFixed(2) + '(元)';
  });
  stringReceipt += '\n----------------------' + '\n总计：' + Receipt.allTotal.toFixed(2) + '(元)' + '\n**********************';
  console.log(stringReceipt);
}


