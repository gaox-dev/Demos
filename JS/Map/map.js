const map1 = new Map();
map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));

map1.set("a", 97);
console.log(map1.get("a"));

console.log(map1.size);

map1.delete("b");
console.log(map1.entries());

let func = function (item) {
  return item * 2;
};
map1.set(func, "double");
console.log(map1);

console.log('map1.has("a"): ', map1.has("a"));
console.log('map1.has("aaa"): ', map1.has("aaa"));
console.log("map1.keys: ", map1.keys());
console.log("map1.values: ", map1.values());

// ! map 和 Object的对比
// 一个 Map 的键可以是任意值，包括函数、对象或任意基本类型。	一个 Object 的键必须是一个 String 或是 Symbol。
// Map 中的键是有序的。因此，当迭代的时候，一个 Map 对象以插入的顺序返回键值。虽然 Object 的键目前是有序的，但并不总是这样，而且这个顺序是复杂的。因此，最好不要依赖属性的顺序。
// Map 的键值对个数可以轻易地通过 size 属性获取。	Object 的键值对个数只能手动计算。
// Map 是 可迭代的 的，所以可以直接被迭代。
// Object 没有实现 迭代协议，所以使用 JavaSctipt 的 for...of 表达式并不能直接迭代对象。

// 备注：

// 对象可以实现迭代协议，或者你可以使用 Object.keys 或 Object.entries。
// for...in 表达式允许你迭代一个对象的可枚举属性。
// 在频繁增删键值对的场景下表现更好。 在频繁添加和删除键值对的场景下未作出优化。
// 没有元素的序列化和解析的支持。    原生的由 Object 到 JSON 的序列化支持，使用 JSON.stringify()。原生的由 JSON 到 Object 的解析支持，使用 JSON.parse()。

// ! map对象的序列化
const myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);
// 将 Map对象实例 转化 为Object 实例
const obj = Object.fromEntries(myMap);
var jsonStr = JSON.stringify(obj);
console.log("jsonStr: ", jsonStr);
