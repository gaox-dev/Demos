var Choose;
(function (Choose) {
    Choose[Choose["Wife"] = 1] = "Wife";
    Choose[Choose["Mother"] = 2] = "Mother";
})(Choose || (Choose = {})); // 选择妻子 还是 妈妈
function question(choose) {
    console.log("你老婆和你妈妈同时掉进水里了，你先救哪一个？");
    console.log("你的选择是：" + choose);
}
// question(Choose.Mother);
var Person = /** @class */ (function () {
    function Person() {
        this.saveMother = true; // 是否救落水的妈妈
    }
    Person.prototype.answer = function () {
        if (this.saveMother === false) {
            return Choose.Wife;
        }
        return Choose.Mother;
    };
    Person.prototype.hello = function () {
        console.log("hello~ I'm " + this.name);
        return undefined;
        // return null;
    };
    Person.prototype.empty = function () { };
    Person.prototype.down = function () {
        while (true) {
            // throw new Error('error')
        }
    };
    return Person;
}());
var MySQL = /** @class */ (function () {
    function MySQL(host, port) {
        this.host = host;
        this.port = port;
        console.log("\u6B63\u5728\u94FE\u63A5 " + this.host + ":" + this.port +
            "的数据库....");
    }
    return MySQL;
}());
var mysql = new MySQL('localhost', 3306);
