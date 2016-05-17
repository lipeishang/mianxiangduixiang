function printReceipt(inputs) {
  var allItems = loadAllItems();
  var items = buildItems(inputs,allItems);
  var items0 = getItems(items);
  var cartItems = getCartItems(items0);
  var Receipt = getReceipt(cartItems);

  printReceiptItems(Receipt);
}

function buildItems(inputs,allItems) {
  var items = [];
  
  inputs.forEach(function (input) {
    for(var i = 0; i < allItems.length; i++){
      if(input === allItems[i].barcode){
        items.push(allItems[i]);
        break;
      }
    }
  });

   return items;
}

function getItems(items) {
  var items0 = [];
  
  items0.push({item: items[0], count: 1});
  for (var j = 1; j < items.length; j++) {
    for (var i = 0; i< items0.length; i++) {
      if (items0[i].item.barcode === items[j].barcode) {
        items0[i].count++;
        break;
      }
    }

    if(i >= items0.length){
      items0.push({item: items[j], count: 1});
    }
  }

  return items0;
}

function getCartItems(items0) {
  var cartItems = [];
  
  items0.forEach(function (a) {
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


