"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var registerSlice_1 = require("../features/register/registerSlice");
exports.store = toolkit_1.configureStore({
    reducer: {
        register: registerSlice_1["default"]
    }
});
