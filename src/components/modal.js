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
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['modal',
                (this.props.active ? 'is-active' : '')
            ]) }, this.props.children));
    };
    return Modal;
}(React.Component));
exports.Modal = Modal;
var ModalBackground = (function (_super) {
    __extends(ModalBackground, _super);
    function ModalBackground() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalBackground.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['modal-background']) }, this.props.children));
    };
    return ModalBackground;
}(React.Component));
exports.ModalBackground = ModalBackground;
var ModalContent = (function (_super) {
    __extends(ModalContent, _super);
    function ModalContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalContent.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['modal-content']) }, this.props.children));
    };
    return ModalContent;
}(React.Component));
exports.ModalContent = ModalContent;
var ModalClose = (function (_super) {
    __extends(ModalClose, _super);
    function ModalClose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalClose.prototype.render = function () {
        return (React.createElement("button", __assign({ className: common_1.classNameBuilder(['modal-close',
                this.props.size
            ]) }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
    };
    return ModalClose;
}(React.Component));
exports.ModalClose = ModalClose;
var ModalCard = (function (_super) {
    __extends(ModalCard, _super);
    function ModalCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCard.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['modal-card']) }, this.props.children));
    };
    return ModalCard;
}(React.Component));
exports.ModalCard = ModalCard;
var ModalCardHead = (function (_super) {
    __extends(ModalCardHead, _super);
    function ModalCardHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardHead.prototype.render = function () {
        return (React.createElement("header", { className: common_1.classNameBuilder(['modal-card-head']) }, this.props.children));
    };
    return ModalCardHead;
}(React.Component));
exports.ModalCardHead = ModalCardHead;
var ModalCardTitle = (function (_super) {
    __extends(ModalCardTitle, _super);
    function ModalCardTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardTitle.prototype.render = function () {
        return (React.createElement("p", { className: common_1.classNameBuilder(['modal-card-title',
                this.props.alignment
            ]) }, this.props.children));
    };
    return ModalCardTitle;
}(React.Component));
exports.ModalCardTitle = ModalCardTitle;
var ModalCardFoot = (function (_super) {
    __extends(ModalCardFoot, _super);
    function ModalCardFoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardFoot.prototype.render = function () {
        return (React.createElement("footer", { className: common_1.classNameBuilder(['modal-card-foot']) }, this.props.children));
    };
    return ModalCardFoot;
}(React.Component));
exports.ModalCardFoot = ModalCardFoot;
//# sourceMappingURL=modal.js.map