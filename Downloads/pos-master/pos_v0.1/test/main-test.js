describe('pos', function() {
  describe('getItems testing', function () {
    // var inputs;

    // beforeEach(function () {
      var inputs = [
        {
          barcode: 'ITEM000000',
          name: '可口可乐',
          unit: '瓶',
          price: 3.00

        },
        {
          barcode: 'ITEM000000',
          name: '可口可乐',
          unit: '瓶',
          price: 3.00
        },
        {
          barcode: 'ITEM000000',
          name: '可口可乐',
          unit: '瓶',
          price: 3.00
        },
        {
          barcode: 'ITEM000000',
          name: '可口可乐',
          unit: '瓶',
          price: 3.00
        },
        {
          barcode: 'ITEM000000',
          name: '可口可乐',
          unit: '瓶',
          price: 3.00
        },
        {
          barcode: 'ITEM000001',
          name: '雪碧',
          unit: '瓶',
          price: 3.00
        },
        {
          barcode: 'ITEM000001',
          name: '雪碧',
          unit: '瓶',
          price: 3.00
        },
        {
          barcode: 'ITEM000004',
          name: '电池',
          unit: '个',
          price: 2.00
        }
      ];
    // });

    it('should print correct text', function () {


      var expectText = [{item:{
          barcode: 'ITEM000000',
          name: '可口可乐',
          unit: '瓶',
          price: 3.00,
         
        }, count: 5},
        {item:{
          barcode: 'ITEM000001',
          name: '雪碧',
          unit: '瓶',
          price: 3.00,
          
        },count: 2},
        {item:{
          barcode: 'ITEM000004',
          name: '电池',
          unit: '个',
          price: 2.00,
          
        },count: 1}
      ];
      expect(getItems(inputs)).toEqual(expectText);


      

      it('should print correct text', function () {

        spyOn(console, 'log');

        printReceipt(inputs);

        var expectText =
          '***<没钱赚商店>收据***\n' +
          '名称：可口可乐，数量：5瓶，单价：3.00(元)，小计：15.00(元)\n' +
          '名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +
          '名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)\n' +
          '----------------------\n' +
          '总计：23.00(元)\n' +
          '**********************';

        expect(console.log).toHaveBeenCalledWith(expectText);
      });
    });
  });

});
