"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Register_styles_1 = require("../styles/Register.styles");
var Error = function (_a) {
    var msg = _a.msg;
    return react_1["default"].createElement(Register_styles_1.StyledError, null, msg);
};
exports["default"] = Error;
