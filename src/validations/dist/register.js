"use strict";
exports.__esModule = true;
exports.VALIDATION_DEVELOPER = exports.VALIDATION_TITLE = exports.VALIDATION_PHONE = exports.VALIDATION_EMAIL = exports.VALIDATION_LAST_NAME = exports.VALIDATION_FIRST_NAME = void 0;
exports.VALIDATION_FIRST_NAME = { required: true, maxLength: 80 };
exports.VALIDATION_LAST_NAME = { required: true, maxLength: 100 };
exports.VALIDATION_EMAIL = { required: true, pattern: /^\S+@\S+$/i };
exports.VALIDATION_PHONE = { required: true, minLength: 6, maxLength: 12 };
exports.VALIDATION_TITLE = { required: true };
exports.VALIDATION_DEVELOPER = { required: true };
