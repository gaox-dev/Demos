let func1 = function () {
    console.log('func1');
}
function func2() {
    console.log("func2");
}

let func3 = function func4() {
    console.log('func3 , func4')
}

// console.log(func3 === func4)

let add1 = function (x: number, y: number): number {
    return x + y;
}
function add2(x: number, y: number): number {
    return x + y;
}

let add3 = (x, y) => x + y
let add4 = (x: any, y: any) => { return x + y }
let add5 = (x, y) => { x + y }

let add7: (x: number, y: number) => number = function (x, y) {
    return x + y
}

let add8 = function (x: number, y: number): number {
    return x + y;
}

let add10 = function (x: number, ...y) {
    console.log(x);
    console.log(y);
}

add10(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


//! 函数重载
class Chicken { }
class Beef { }
function cooking(c: Chicken): any;
function cooking(b: Beef): any;
function cooking(food: Chicken | Beef): any {
    if (food instanceof Chicken) {
        console.log("第一步：杀鸡取卵");
        console.log("煮鸡肉")
    }
    if (food instanceof Beef) {
        console.log("第一步：杀牛");
        console.log("水煮牛肉片");
    }
}
cooking(new Chicken())
cooking(new Beef())


//! 泛型
function one<T>(a: T): T {
    return a;
}

let a1 = one<number>(1)
let a2 = one(520)

//! 泛型数组
function two<T>(a: T[]): T {
    return a[0];
}

function three<T>(a: Array<T>): T {
    return a[0];
}

let two2: <T>(a: T[]) => T = function (a) {
    return a[0]
}

let two3 = <T>(a: T[]): T => a[0] 

//! 类泛型

class Person3<T, U> {
    other: T
    age: U
}
let  p = new Person3<string, number>()
p.other = "good men";
p.age = 12