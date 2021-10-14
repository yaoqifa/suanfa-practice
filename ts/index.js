"use strict";
exports.__esModule = true;
exports.name2 = 'yqf';
function mySum(x, y, z) {
    return x + y + z;
}
var result = mySum(1, 2, 4);
var mySum2 = mySum;
console.log(result);
var sf = {
    id: 'aaa',
    name: 'qf'
};
exports.name2.toUpperCase();
mySum(345, 456);
var obj = {
    a: 123
};
var __DEV__ = false;
var arr = [1, 2, 3];
// tuple 元组 多种类型的数组
var arr2 = ['', 2];
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.switchRadio = function () {
    };
    return Car;
}());
var Phone = /** @class */ (function () {
    function Phone() {
    }
    Phone.prototype.switchRadio = function () { };
    Phone.prototype.checkBattery = function () { };
    return Phone;
}());
var Phone2 = /** @class */ (function () {
    function Phone2() {
    }
    Phone2.prototype.switchRadio = function () { };
    Phone2.prototype.checkBattery = function () { };
    return Phone2;
}());
console.log(12 /* left */);
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var result3 = swap(['str', 123]);
function echoWithLen(param) {
    console.log(param.length);
    return param;
}
var result4 = echoWithLen({ length: 4 });
var result5 = echoWithLen('2233');
var result6 = echoWithLen([1, 2, 3]);
// 范型 与类和接口 结合
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (val) {
        return this.data.push(val);
    };
    Queue.prototype.pop = function () {
        return this.data.pop();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(123);
var result7 = queue.pop();
var kp1 = { key: 333, value: '' };
var kp2 = { key: '333', value: new Date() };
function plus(a, b) {
    return a + b;
}
function connect(a, b) {
    return a + b;
}
var plus2 = plus;
var connect2 = connect;
//类型断言 as <number>a
function getLength(input) {
    // if (input as string) {
    if (input.length) {
        return input.length;
    }
    else {
        return input;
    }
}
// jQuery('#aaa')
var Utils;
(function (Utils) {
    function log(msg) {
        console.log(msg);
    }
    Utils.log = log;
    function warn(msg) {
        console.warn(msg);
    }
    Utils.warn = warn;
})(Utils = exports.Utils || (exports.Utils = {}));
