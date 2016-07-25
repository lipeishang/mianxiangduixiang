//类声明（定义对象的特征，是对象的属性和方法的模板定义）
class Polygon {
    constructor(height, width) {  //构造函数
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
}

//类的继承（一个类继承另一个类的属性和方法）
class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
    }
}

//类的实例化（）
var square = new Polygon(2,3);

square.name = "正方形";
square.height= 2;
