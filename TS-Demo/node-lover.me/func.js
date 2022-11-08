var func1 = function () {
    console.log('func1');
};
function func2() {
    console.log("func2");
}
var func3 = function func4() {
    console.log('func3 , func4');
};
// console.log(func3 === func4)
var add1 = function (x, y) {
    return x + y;
};
function add2(x, y) {
    return x + y;
}
var add3 = function (x, y) { return x + y; };
var add4 = function (x, y) { return x + y; };
var add5 = function (x, y) { x + y; };
var add7 = function (x, y) {
    return x + y;
};
var add8 = function (x, y) {
    return x + y;
};
var add10 = function (x) {
    var y = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        y[_i - 1] = arguments[_i];
    }
    console.log(x);
    console.log(y);
};
add10(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//! 函数重载
var Chicken = /** @class */ (function () {
    function Chicken() {
    }
    return Chicken;
}());
var Beef = /** @class */ (function () {
    function Beef() {
    }
    return Beef;
}());
function cooking(food) {
    if (food instanceof Chicken) {
        console.log("第一步：杀鸡取卵");
        console.log("煮鸡肉。。。");
    }
    if (food instanceof Beef) {
        console.log("aaaaxaa 杀牛");
        console.log("水煮牛肉片");
    }
}
cooking(new Chicken());
cooking(new Beef());
