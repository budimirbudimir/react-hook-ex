"use strict";
exports.__esModule = true;
exports.getSubmitting = exports.setSubmitting = exports.registerSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    submitting: false
};
// REDUCER
exports.registerSlice = toolkit_1.createSlice({
    name: 'register',
    initialState: initialState,
    reducers: {
        setSubmitting: function (state, action) {
            state.submitting = action.payload;
        }
    }
});
// REDUCER METHODS EXPORTS
exports.setSubmitting = exports.registerSlice.actions.setSubmitting;
// THUNK ACTIONS
// SELECTORS
exports.getSubmitting = function (state) { return state.register.submitting; };
// REDUCER EXPORT
exports["default"] = exports.registerSlice.reducer;
