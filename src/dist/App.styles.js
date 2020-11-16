"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.StyledAppHeader = exports.StyledApp = void 0;
var styled_components_1 = require("styled-components");
exports.StyledApp = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: center;\n"], ["\n  text-align: center;\n"])));
exports.StyledAppHeader = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n"], ["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n"])));
var templateObject_1, templateObject_2;
