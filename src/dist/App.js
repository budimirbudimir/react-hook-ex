"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Register_1 = require("./features/register/Register");
var App_styles_1 = require("./styles/App.styles");
var Global_styles_1 = require("./styles/Global.styles");
var App = function () { return (react_1["default"].createElement(react_1["default"].Fragment, null,
    react_1["default"].createElement(Global_styles_1.GlobalStyle, null),
    react_1["default"].createElement(App_styles_1.StyledApp, null,
        react_1["default"].createElement(App_styles_1.StyledAppHeader, null,
            react_1["default"].createElement(Register_1["default"], null))))); };
exports["default"] = App;
