const arr = [1, 2, 3, 4, 5];

//at() 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。
console.log("arr.at(0);: ", arr.at(0));
console.log("arr.at(-1): ", arr.at(-1));

// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
const arr1 = arr.concat([6, 7], [8, 9]);
console.log("arr1: ", arr1);

// 返回修改后的数组，参数 （target, start, end）
const arr2 = arr.copyWithin(0, 1, 3);
console.log("arr2: ", arr2);

//.entries() 返回新的数组迭代器对象
for (const iterator of arr2.entries()) {
  console.log("iterator: ", iterator);
}

// every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值
//! 备注： 若收到一个空数组，此方法在任何情况下都会返回 true。
// every箭头函数
// every((element) => { /* … */ } )
// every((element, index) => { /* … */ } )
// every((element, index, array) => { /* … */ } )
const isBiggerThan2 = arr1.every((el) => el > 2);
console.log("isBiggerThan2: ", isBiggerThan2);

//  fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
// fill(value)
// fill(value, start)
// fill(value, start, end)
const arr3 = arr.fill(0, 0, 6);
console.log("arr3: ", arr3);

// filter() 方法创建给定数组一部分的浅拷贝，其包含通过所提供函数实现的测试的所有元素。
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const res = words.filter((word) => word.length > 6);
console.log("res: ", res);

// find() 方法返回数组中满足提供的测试函数的第一个元素的值。
// 否则返回 undefined。
const res1 = words.find((el) => el == "world");
const res2 = words.find((el) => el.length > 6);

console.log('words.find("world"): ', res1);
console.log("words.find((el): ", res2);

// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。
console.log(words.findIndex((el) => el.length > 6));

// findLast() 方法返回数组中满足提供的测试函数条件的最后一个元素的值。如果没有找到对应元素，则返回 undefined。
console.log(words.findLast((el) => el.length > 6));

//findLast() 方法返回数组中满足提供的测试函数条件的最后一个元素的值。如果没有找到对应元素，则返回 undefined。
console.log(words.findLastIndex((el) => el.length > 6));

//flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
// depth 可选
// 指定要提取嵌套数组的结构深度，默认值为 1。
const arr5 = [0, 1, 2, [[[3, 4]]]];
const depth1 = arr5.flat();
console.log("depth1: ", depth1);
const depth2 = arr5.flat(2);
console.log("depth2: ", depth2);
const depth3 = arr5.flat(3);
console.log("depth3: ", depth3);
//使用 Infinity，可展开任意深度的嵌套数组

const InfinityArr = arr5.flat(Infinity);
console.log("InfinityArr: ", InfinityArr);

// flat() 方法会移除数组中的空项：
const arr6 = [1, 2, , 4, 5];
const depth0 = arr6.flat();
console.log("depth0: ", depth0);

//flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为 1 的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
const arr7 = [1, 2, [3], [4, 5], 6, []];
const flattened = arr7.flatMap((el) => el);
console.log("flattened: ", flattened);
// 在一个 map() 期间增加或去除一些项
// flatMap 能用于在 map 期间增删项目（也就是修改 items 的数量）。换句话说，它允许你遍历很多项使之成为另一些项（靠分别把它们放进去来处理），而不是总是一对一。从这个意义上讲，它的作用类似于 filter的对立面。只需返回一个 1 项元素数组以保留该项，返回一个多元素数组以添加项，或返回一个 0 项元素数组以删除该项。
let a = [5, 4, -3, 20, 17, -33, -4, 18];
let output = a.flatMap((n) => (n < 0 ? [] : n % 2 == 0 ? [n] : [n - 1, 1]));
console.log("output: ", output);

//forEach() 方法对数组的每个元素执行一次给定的函数。
a.forEach((el) => console.log(el));
/*
备注： 除了抛出异常以外，没有办法中止或跳出 forEach() 循环。如果你需要中止或跳出循环，forEach() 方法不是应当使用的工具。

若你需要提前终止循环，你可以使用：

一个简单的 for 循环
for...of / for...in 循环
Array.prototype.every()
Array.prototype.some()
Array.prototype.find()
Array.prototype.findIndex()
这些数组方法则可以对数组元素判断，以便确定是否需要继续遍历：

every()
some()
find()
findIndex()

*/
// !译者注：只要条件允许，也可以使用 filter() 提前过滤出需要遍历的部分，再用 forEach() 处理

// Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
// 箭头函数
// Array.from(arrayLike, (element) => { /* … */ } )
// Array.from(arrayLike, (element, index) => { /* … */ } )
console.log(Array.from("123678", (x) => x * 2));

arr.includes("a");
console.log('arr.includes("a"): ', arr.includes("a"));

arr.join();
console.log("arr.join(): ", arr.join());
arr.join("-");
console.log('arr.join("-"): ', arr.join("-"));
console.log(arr.keys());

// lastIndexOf(searchElement, fromIndex);
console.log("arr.lastIndexOf(1,-1): ", arr.lastIndexOf(1, 1));

const nums = [1, , 4, 9];
const roots = nums.map((num) => Math.sqrt(num));
console.log("roots: ", roots);

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]

let arr8 = Array.of(1, 2, 2, 3);
console.log(Array.of.call(Object));

arr8.push(...[5, 6, 7]);
console.log("arr8: ", arr8);
arr8.pop();
arr8.pop();
console.log("arr8: after pop 2 times:", arr8);

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);

[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue
);

// reverse() 改变了原来的数组并没有做copy
console.log("  [0, 1, 2, 3, 4].reverse(): ", [0, 1, 2, 3, 4].reverse());

const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

//The shift() method removes the first element from an array and returns that removed element.
// ! This method changes the length of the array.
while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
// The original array will not be modified.

console.log("[0, 1, 2, 3, 4].slice(0,2): ", [0, 1, 2, 3, 4].slice(0, 2));

function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);

const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some((t) => t === value);
}

console.log("getBoolean(false): ", getBoolean(false));

console.log('getBoolean("false"): ', getBoolean("false"));

console.log("getBoolean(1): ", getBoolean(1));

console.log('getBoolean("true"): ', getBoolean("true"));

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
items.sort((a, b) => a.value - b.value);

// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

/*
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
*/
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log('months: ', months);

console.log('months.toString(): ', months.toString());
console.log('months.toString(): ', months.join());
let months2 = months.join().split(",")
console.log('months2: ', months2);


// The unshift() method adds one or more elements to the beginning of an array and
//  returns the new length of the array.
const arr9 = [1,2,3]
console.log('arr9-init:  ', arr9);
console.log("arr9.unshift(4,5,6)",arr9.unshift(4,5,6))  
console.log("arr9.push(8)",arr9.push(8));
console.log('arr9.shift(1): ', arr9.shift(1));
console.log("arr9.pop", arr9.pop());
console.log('arr9: ', arr9);
// ! 四个方法都改版了原来的数组
// ! push     和   pop 是操作数组的 表尾 
// ! unshift  和   shift 操作的是 表头
// ! push  和  unshift  增加数组长度的，返回的数组长度；
// ! pop   和  shift    减少数组长度的，返回的是被删除的元素；