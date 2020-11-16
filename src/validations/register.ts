export const VALIDATION_FIRST_NAME = { required: true, maxLength: 80 }
export const VALIDATION_LAST_NAME = { required: true, maxLength: 100 }
export const VALIDATION_EMAIL = { required: true, pattern: /^\S+@\S+$/i }
export const VALIDATION_PHONE = { required: true, minLength: 6, maxLength: 12 }
export const VALIDATION_TITLE = { required: true }
export const VALIDATION_DEVELOPER = { required: true }