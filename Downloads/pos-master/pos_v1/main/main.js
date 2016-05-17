function printReceipt(inputs){
  var allItems = loadAllItems();
  var items = buildItems(inputs,allItems);
  var items0 = getItems(items,inputs);
  var cartItems = getCartItems(items0);
  var Receipt = getReceipt(cartItems);
  printReceiptItems(Receipt);
}

function buildItems(inputs,allItems) {
  var items = [];

  inputs.forEach(function(input){
    var splits = input.split("-");
    for(var i = 0; i < allItems.length ; i++) {
      if (allItems[i].barcode === splits[0]) {
          items.push(allItems[i]);
        break;
      }
    }
  });

  return items;
}

function getItems(items,inputs) {
  var items0 = [];

  items0.push({item: items[0], count: 1});
  for (var j = 1; j < items.length; j++) {
    for (var i = 0; i< items0.length; i++) {
      if (items0[i].item.barcode === items[j].barcode) {
        items0[i].count++;
        break;
      }
    }
      if (i >= items0.length) {
        var splits = inputs[j].split("-");
        items0.push({item: items[j], count: parseFloat(splits[1] || 1)});
      }

  }

  return items0;
}

function getCartItems(items0) { 
  var cartItems = [];

  items0.forEach(function (a) {
      if(a.count >= 3){
         var subtotal = a.item.price * (a.count - parseInt((a.count)/3));
         var free = a.item.price * (parseInt((a.count)/3));
         cartItems.push({item: a, subtotal: subtotal,free:free});
      }
     else {
        var subtotal = a.item.price * a.count;
        cartItems.push({item: a, subtotal: subtotal,free:0});
      }
    });


  return cartItems;
}

function getReceipt(cartItems) {
  var Receipt = [];
  var allTotal = 0;
  var allFree = 0;

  cartItems.forEach(function (cartItem) {
    allTotal += cartItem.subtotal;
    allFree += cartItem.free;
  });
  Receipt = ({cartItems: cartItems, allTotal: allTotal,allFree:allFree});

  return Receipt;
}

function printReceiptItems(Receipt) {
  var stringReceipt = "***<没钱赚商店>收据***";
  var cartItems = Receipt.cartItems;
  cartItems.forEach(function (cartItem) {
    stringReceipt += '\n名称：' + cartItem.item.item.name + '，数量：' + cartItem.item.count + cartItem.item.item.unit +
      '，单价：' + cartItem.item.item.price.toFixed(2) + '(元)，小计：' + cartItem.subtotal.toFixed(2) + '(元)';
  });
  stringReceipt += '\n----------------------' + '\n总计：' + Receipt.allTotal.toFixed(2) + '(元)' +
                   '\n节省：' + Receipt.allFree.toFixed(2) + '(元)' + '\n**********************';
  console.log(stringReceipt);
}

