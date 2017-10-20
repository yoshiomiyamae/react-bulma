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
var elements_1 = require("../elements");
var FileUpload = (function (_super) {
    __extends(FileUpload, _super);
    function FileUpload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUpload.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: common_1.classNameBuilder(['file',
                (this.props.hasName ? 'has-name' : ''),
                this.props.alignment,
                (this.props.fullwidth ? 'is-fullwidth' : ''),
                (this.props.boxed ? 'is-boxed' : ''),
                this.props.color,
                this.props.size,
                this.props.state,
            ]) },
            React.createElement("label", { className: common_1.classNameBuilder(['file-label']) },
                React.createElement("input", __assign({ className: common_1.classNameBuilder(['file-input']), type: "file", name: this.props.name }, common_1.getEventHandlerFromProps(this.props))),
                (function () {
                    if (_this.props.icon) {
                        return (React.createElement("span", { className: common_1.classNameBuilder(['file-cta']) },
                            React.createElement(elements_1.Icon, null, _this.props.icon)));
                    }
                })(),
                React.createElement("span", { className: common_1.classNameBuilder(['file-label']) }, this.props.children))));
    };
    return FileUpload;
}(React.Component));
exports.FileUpload = FileUpload;
//# sourceMappingURL=file.js.map