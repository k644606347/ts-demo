"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var str = '123';
exports.str = str;
var obj1 = {};
var x = obj1.x, y = obj1.y;
exports.x = x;
exports.y = y;
var log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return console.log(args);
};
var mixed = __assign({}, obj1, { mixed: true });
obj1.x = 123;
obj1.y = 456;
log(x, y);
log(mixed);
var SuperC1 = (function () {
    function SuperC1() {
    }
    return SuperC1;
}());
var C1 = (function (_super) {
    __extends(C1, _super);
    function C1() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.name = args[0];
        console.log('C1');
        C1.instances.push(_this);
        return _this;
    }
    C1.instances = [];
    return C1;
}(SuperC1));
exports.C1 = C1;
var c1 = new C1();
exports.c1 = c1;
var div1 = document.createElement('div');
var img1 = document.createElement('img');
div1.append(img1);
var arr1 = ['x', ' y', 'z'];
arr1.find(function (n) { return n === 'x'; });
//# sourceMappingURL=App.js.map