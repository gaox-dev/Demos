"use strict";
exports.__esModule = true;
exports.baby = exports.Baby = void 0;
var Baby = /** @class */ (function () {
    function Baby(name) {
        this._name = name;
        console.log('小宝贝正在哭泣，哇哇哇哇哇~~~');
    }
    Baby.smile = function () {
        console.log('😄😄😄哈！');
    };
    Baby.prototype.getBabyName = function () {
        return this._name;
    };
    return Baby;
}());
exports.Baby = Baby;
exports.baby = new Baby('Nico');
