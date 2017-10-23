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
var NavbarItemTypes;
(function (NavbarItemTypes) {
    NavbarItemTypes[NavbarItemTypes["Anchor"] = 0] = "Anchor";
    NavbarItemTypes[NavbarItemTypes["Div"] = 1] = "Div";
})(NavbarItemTypes = exports.NavbarItemTypes || (exports.NavbarItemTypes = {}));
var Navbar = (function (_super) {
    __extends(Navbar, _super);
    function Navbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navbar.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['navbar',
                (this.props.transparent ? 'is-transparent' : ''),
                this.props.color,
                (this.props.hasShadow ? 'has-shadow' : ''),
            ]) }, this.props.children));
    };
    return Navbar;
}(React.Component));
exports.Navbar = Navbar;
var NavbarBrand = (function (_super) {
    __extends(NavbarBrand, _super);
    function NavbarBrand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarBrand.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['navbar-brand']) }, this.props.children));
    };
    return NavbarBrand;
}(React.Component));
exports.NavbarBrand = NavbarBrand;
var NavbarBurger = (function (_super) {
    __extends(NavbarBurger, _super);
    function NavbarBurger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarBurger.prototype.render = function () {
        return (React.createElement("div", __assign({ className: common_1.classNameBuilder(['navbar-burger',
                (this.props.active ? 'is-active' : '')
            ]) }, common_1.getEventHandlerFromProps(this.props)),
            React.createElement("span", null),
            React.createElement("span", null),
            React.createElement("span", null)));
    };
    return NavbarBurger;
}(React.Component));
exports.NavbarBurger = NavbarBurger;
var NavbarMenu = (function (_super) {
    __extends(NavbarMenu, _super);
    function NavbarMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarMenu.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['navbar-menu',
                (this.props.active ? 'is-active' : '')
            ]) }, this.props.children));
    };
    return NavbarMenu;
}(React.Component));
exports.NavbarMenu = NavbarMenu;
var NavbarStart = (function (_super) {
    __extends(NavbarStart, _super);
    function NavbarStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarStart.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['navbar-start']) }, this.props.children));
    };
    return NavbarStart;
}(React.Component));
exports.NavbarStart = NavbarStart;
var NavbarEnd = (function (_super) {
    __extends(NavbarEnd, _super);
    function NavbarEnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarEnd.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['navbar-end']) }, this.props.children));
    };
    return NavbarEnd;
}(React.Component));
exports.NavbarEnd = NavbarEnd;
var NavbarTabs = (function (_super) {
    __extends(NavbarTabs, _super);
    function NavbarTabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarTabs.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['navbar-tabs']) }, this.props.children));
    };
    return NavbarTabs;
}(React.Component));
exports.NavbarTabs = NavbarTabs;
var NavbarItem = (function (_super) {
    __extends(NavbarItem, _super);
    function NavbarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarItem.prototype.render = function () {
        var _this = this;
        var className = common_1.classNameBuilder(['navbar-item',
            (this.props.hasDropdown ? 'has-dropdown' : ''),
            (this.props.active ? 'is-active' : ''),
            (this.props.tab ? 'is-tab' : ''),
            (this.props.hoverable ? 'is-hoverable' : ''),
        ]);
        switch (this.props.type) {
            case NavbarItemTypes.Div:
                return (React.createElement("div", { className: className }, this.props.children));
            case NavbarItemTypes.Anchor:
            default:
                return (React.createElement("a", __assign({ className: className }, (function () {
                    if (_this.props.href) {
                        return { href: _this.props.href };
                    }
                })(), common_1.getEventHandlerFromProps(this.props)), this.props.children));
        }
    };
    return NavbarItem;
}(React.Component));
exports.NavbarItem = NavbarItem;
var NavbarLink = (function (_super) {
    __extends(NavbarLink, _super);
    function NavbarLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarLink.prototype.render = function () {
        var _this = this;
        return (React.createElement("a", __assign({ className: common_1.classNameBuilder(['navbar-link']) }, (function () {
            if (_this.props.href) {
                return { href: _this.props.href };
            }
        })(), common_1.getEventHandlerFromProps(this.props)), this.props.children));
    };
    return NavbarLink;
}(React.Component));
exports.NavbarLink = NavbarLink;
var NavbarDropdown = (function (_super) {
    __extends(NavbarDropdown, _super);
    function NavbarDropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarDropdown.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['navbar-dropdown',
                this.props.alignment,
                (this.props.boxed ? 'is-boxed' : '')
            ]) }, this.props.children));
    };
    return NavbarDropdown;
}(React.Component));
exports.NavbarDropdown = NavbarDropdown;
var NavbarDivider = (function (_super) {
    __extends(NavbarDivider, _super);
    function NavbarDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarDivider.prototype.render = function () {
        return (React.createElement("hr", { className: common_1.classNameBuilder(['navbar-divider']) }));
    };
    return NavbarDivider;
}(React.Component));
exports.NavbarDivider = NavbarDivider;
//# sourceMappingURL=navbar.js.map