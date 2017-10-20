"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var common_1 = require("../common");
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.render = function () {
        return (React.createElement("section", { className: common_1.classNameBuilder(['hero',
                this.props.color,
                this.props.size,
            ]) }, this.props.children));
    };
    return Hero;
}(React.Component));
exports.Hero = Hero;
var HeroHead = (function (_super) {
    __extends(HeroHead, _super);
    function HeroHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeroHead.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['hero-head']) }, this.props.children));
    };
    return HeroHead;
}(React.Component));
exports.HeroHead = HeroHead;
var HeroBody = (function (_super) {
    __extends(HeroBody, _super);
    function HeroBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeroBody.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['hero-body']) }, this.props.children));
    };
    return HeroBody;
}(React.Component));
exports.HeroBody = HeroBody;
var HeroFoot = (function (_super) {
    __extends(HeroFoot, _super);
    function HeroFoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeroFoot.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['hero-foot']) }, this.props.children));
    };
    return HeroFoot;
}(React.Component));
exports.HeroFoot = HeroFoot;
//# sourceMappingURL=hero.js.map