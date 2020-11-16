"use strict";
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
exports.__esModule = true;
var react_1 = require("react");
var Register_styles_1 = require("../styles/Register.styles");
var CustomRadio = react_1["default"].forwardRef(function (props, ref) { return (react_1["default"].createElement(Register_styles_1.StyledRadioWrapper, null,
    react_1["default"].createElement(Register_styles_1.StyledInput, __assign({}, props, { type: "radio", ref: ref })),
    props.value)); });
exports["default"] = CustomRadio;
