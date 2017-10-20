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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var common_1 = require("../common");
var SeparatorTypes;
(function (SeparatorTypes) {
    SeparatorTypes["Arrow"] = "has-arrow-separator";
    SeparatorTypes["Bullet"] = "has-bullet-separator";
    SeparatorTypes["Dot"] = "has-dot-separator";
    SeparatorTypes["Succeeds"] = "has-succeeds-separator";
})(SeparatorTypes = exports.SeparatorTypes || (exports.SeparatorTypes = {}));
var Breadcrumb = (function (_super) {
    __extends(Breadcrumb, _super);
    function Breadcrumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Breadcrumb.prototype.render = function () {
        return (React.createElement("nav", { className: common_1.classNameBuilder(['breadcrumb',
                this.props.size,
                this.props.alignment,
                this.props.separatorTypes,
            ]) },
            React.createElement("ul", null, this.props.children)));
    };
    return Breadcrumb;
}(React.Component));
exports.Breadcrumb = Breadcrumb;
var BreadcrumbItem = (function (_super) {
    __extends(BreadcrumbItem, _super);
    function BreadcrumbItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreadcrumbItem.prototype.render = function () {
        return (React.createElement("li", { className: common_1.classNameBuilder([(this.props.active ? 'is-active' : '')]) },
            React.createElement("a", __assign({ href: this.props.href }, common_1.getEventHandlerFromProps(this.props)), this.props.children)));
    };
    return BreadcrumbItem;
}(React.Component));
exports.BreadcrumbItem = BreadcrumbItem;
//# sourceMappingURL=breadcrumb.js.map