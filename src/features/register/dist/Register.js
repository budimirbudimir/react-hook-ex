"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var devtools_1 = require("@hookform/devtools");
var react_redux_1 = require("react-redux");
var Register_styles_1 = require("../../styles/Register.styles");
var en_1 = require("../../locales/en");
var register_1 = require("../../validations/register");
var components_1 = require("../../components");
var registerSlice_1 = require("./registerSlice");
var Register = function () {
    var dispatch = react_redux_1.useDispatch();
    var submitting = react_redux_1.useSelector(registerSlice_1.getSubmitting);
    // Handles the `react-hook-form` implementation.
    var _a = react_hook_form_1.useForm(), control = _a.control, register = _a.register, handleSubmit = _a.handleSubmit, errors = _a.errors;
    /**
     * Submitting values of uncontrolled form components/elements
     * @function onSubmit
     * @param {FormDataProps} data
     */
    var onSubmit = function (data) {
        dispatch(registerSlice_1.setSubmitting(true));
        console.log(en_1.PHRASES_SUBMITTING);
        // Simulating POST request to API.
        // TODO Replace with real API calls and wire together.
        setTimeout(function () {
            console.log(en_1.REGISTER_SUCCESSFUL_SUBMIT_LOG);
            console.table(data);
            dispatch(registerSlice_1.setSubmitting(false));
        }, 2000);
    };
    // TODO Too much boilerplate... Break component apart?
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("h1", null, en_1.PHRASES_REGISTER),
        react_1["default"].createElement(Register_styles_1.StyledForm, { onSubmit: handleSubmit(onSubmit) },
            react_1["default"].createElement(components_1.CustomInput, { type: "text", placeholder: en_1.REGISTER_VALUE_FIRST_NAME, name: "firstname", ref: register(register_1.VALIDATION_FIRST_NAME) }),
            errors.firstname && react_1["default"].createElement(components_1.Error, { msg: en_1.REGISTER_ERROR_FIRST_NAME }),
            react_1["default"].createElement(components_1.CustomInput, { type: "text", placeholder: en_1.REGISTER_VALUE_LAST_NAME, name: "lastname", ref: register(register_1.VALIDATION_LAST_NAME) }),
            errors.lastname && react_1["default"].createElement(components_1.Error, { msg: en_1.REGISTER_ERROR_LAST_NAME }),
            react_1["default"].createElement(components_1.CustomInput, { type: "text", placeholder: en_1.REGISTER_VALUE_EMAIL, name: "email", ref: register(register_1.VALIDATION_EMAIL) }),
            errors.email && react_1["default"].createElement(components_1.Error, { msg: en_1.REGISTER_ERROR_EMAIL }),
            react_1["default"].createElement(components_1.CustomInput, { type: "tel", placeholder: en_1.REGISTER_VALUE_PHONE, name: "phone", ref: register(register_1.VALIDATION_PHONE) }),
            errors.phone && react_1["default"].createElement(components_1.Error, { msg: en_1.REGISTER_ERROR_PHONE }),
            react_1["default"].createElement(components_1.CustomSelect, { name: "title", ref: register(register_1.VALIDATION_TITLE) },
                react_1["default"].createElement("option", { value: en_1.TITLE_MR }, en_1.TITLE_MR),
                react_1["default"].createElement("option", { value: en_1.TITLE_MRS }, en_1.TITLE_MRS),
                react_1["default"].createElement("option", { value: en_1.TITLE_MISS }, en_1.TITLE_MISS),
                react_1["default"].createElement("option", { value: en_1.TITLE_DR }, en_1.TITLE_DR)),
            errors.title && react_1["default"].createElement(components_1.Error, { msg: en_1.REGISTER_ERROR_TITLE }),
            react_1["default"].createElement(Register_styles_1.StyledRadioGroup, null,
                en_1.REGISTER_VALUE_DEVELOPER,
                react_1["default"].createElement(Register_styles_1.StyledRadioButtons, null,
                    react_1["default"].createElement(components_1.CustomRadio, { name: "developer", value: en_1.PHRASES_YES, ref: register(register_1.VALIDATION_DEVELOPER) }),
                    react_1["default"].createElement(components_1.CustomRadio, { name: "developer", value: en_1.PHRASES_NO, ref: register(register_1.VALIDATION_DEVELOPER) })),
                errors.developer && react_1["default"].createElement(components_1.Error, { msg: en_1.REGISTER_ERROR_DEVELOPER })),
            submitting ? (react_1["default"].createElement(Register_styles_1.StyledButtonSubmitting, null, en_1.PHRASES_SUBMITTING)) : (react_1["default"].createElement(Register_styles_1.StyledSubmitButton, null, en_1.PHRASES_SUBMIT))),
        react_1["default"].createElement(devtools_1.DevTool, { control: control })));
};
exports["default"] = Register;
