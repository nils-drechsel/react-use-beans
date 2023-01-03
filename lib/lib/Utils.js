"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordConformsToEntropy = exports.calculatePasswordEntropy = exports.getPasswordCriteriumPattern = exports.getPasswordStrengthPoolSize = exports.errorSize = exports.validateSize = exports.errorLength = exports.validateLength = exports.errorPassword = exports.validatePassword = exports.errorRegex = exports.validateRegex = exports.errorComparison = exports.validateComparison = exports.errorNotEmpty = exports.validateNotEmpty = void 0;
const Beans_1 = require("./Beans");
const Beans_2 = require("./Beans");
const validateNotEmpty = (value, partial) => {
    if (partial && value === undefined)
        return true;
    return !!value;
};
exports.validateNotEmpty = validateNotEmpty;
const errorNotEmpty = (fieldName, errorMessage) => {
    if (errorMessage)
        return errorMessage;
    return fieldName + " cannot be left empty";
};
exports.errorNotEmpty = errorNotEmpty;
const validateComparison = (cmp, baseValue, value, partial) => {
    if (partial && value === undefined)
        return true;
    if (value === null || value === undefined)
        return false;
    switch (cmp) {
        case Beans_1.Comparator.EQUAL:
            return baseValue == value;
        case Beans_1.Comparator.NOT_EQUAL:
            return baseValue != value;
        case Beans_1.Comparator.GREATER:
            return value > baseValue;
        case Beans_1.Comparator.GREATER_OR_EQUAL:
            return value >= baseValue;
        case Beans_1.Comparator.SMALLER:
            return value < baseValue;
        case Beans_1.Comparator.SMALLER_OR_EQUAL:
            return value <= baseValue;
        default:
            throw new Error("unknown comparator " + cmp);
    }
};
exports.validateComparison = validateComparison;
const errorComparison = (cmp, baseValue, fieldName, errorMessage) => {
    if (errorMessage)
        return errorMessage;
    switch (cmp) {
        case Beans_1.Comparator.EQUAL:
            return fieldName + " must be equal to " + baseValue;
        case Beans_1.Comparator.NOT_EQUAL:
            return fieldName + " must not be equal to " + baseValue;
        case Beans_1.Comparator.GREATER:
            return fieldName + " must be greater than " + baseValue;
        case Beans_1.Comparator.GREATER_OR_EQUAL:
            return fieldName + " must be greater than or equal to " + baseValue;
        case Beans_1.Comparator.SMALLER:
            return fieldName + " must be smaller than " + baseValue;
        case Beans_1.Comparator.SMALLER_OR_EQUAL:
            return fieldName + " must be smaller than or equal to " + baseValue;
        default:
            throw new Error("unknown comparator " + cmp);
    }
};
exports.errorComparison = errorComparison;
const validateRegex = (regex, value, partial) => {
    if (partial && value === undefined)
        return true;
    if (!value)
        return false;
    const expr = new RegExp(regex);
    return expr.test(value);
};
exports.validateRegex = validateRegex;
const errorRegex = (fieldName, errorMessage) => {
    if (errorMessage)
        return errorMessage;
    return fieldName + " is not valid";
};
exports.errorRegex = errorRegex;
const validatePassword = (pw, minEntropy, partial) => {
    if (partial && pw === undefined)
        return true;
    if (!pw)
        return false;
    return (0, exports.passwordConformsToEntropy)(pw, minEntropy);
};
exports.validatePassword = validatePassword;
const errorPassword = (fieldName, errorMessage) => {
    if (errorMessage)
        return errorMessage;
    return fieldName + " is not strong enough";
};
exports.errorPassword = errorPassword;
const validateLength = (length, value, partial) => {
    if (partial && value === undefined)
        return true;
    if (!value)
        return false;
    return value.length >= length;
};
exports.validateLength = validateLength;
const errorLength = (length, fieldName, errorMessage) => {
    if (errorMessage)
        return errorMessage;
    return fieldName + " needs at least " + length + " characters";
};
exports.errorLength = errorLength;
const validateSize = (size, value, partial) => {
    if (partial && value === undefined)
        return true;
    if (!value)
        return false;
    return value.length >= size;
};
exports.validateSize = validateSize;
const errorSize = (size, fieldName, errorMessage) => {
    if (errorMessage)
        return errorMessage;
    return fieldName + " needs at least " + size + " characters";
};
exports.errorSize = errorSize;
const getPasswordStrengthPoolSize = (criterium) => {
    switch (criterium) {
        case Beans_2.PasswordStrengthCriterium.LOWERCASE: return 26;
        case Beans_2.PasswordStrengthCriterium.UPPERCASE: return 26;
        case Beans_2.PasswordStrengthCriterium.NUMBERS: return 10;
        case Beans_2.PasswordStrengthCriterium.SPECIAL_CHARACTERS: return 32;
        default: throw new Error("unknown password strength criterium " + criterium);
    }
};
exports.getPasswordStrengthPoolSize = getPasswordStrengthPoolSize;
const getPasswordCriteriumPattern = (criterium) => {
    switch (criterium) {
        case Beans_2.PasswordStrengthCriterium.LOWERCASE: return /[a-z]+/;
        case Beans_2.PasswordStrengthCriterium.UPPERCASE: return /[A-Z]+/;
        case Beans_2.PasswordStrengthCriterium.NUMBERS: return /[0-9]+/;
        case Beans_2.PasswordStrengthCriterium.SPECIAL_CHARACTERS: return /[\~'!@#$%^&*()-=_+[{\]}\\|;':",.<>/?]+/;
        default: throw new Error("unknown password strength criterium " + criterium);
    }
};
exports.getPasswordCriteriumPattern = getPasswordCriteriumPattern;
const calculatePasswordEntropy = (pw) => {
    let poolSize = 0;
    const length = pw.length;
    for (const criterium of Object.values(Beans_2.PasswordStrengthCriterium)) {
        const pattern = (0, exports.getPasswordCriteriumPattern)(criterium);
        if (pattern.test(pw)) {
            poolSize += (0, exports.getPasswordStrengthPoolSize)(criterium);
        }
    }
    return length * Math.log2(poolSize);
};
exports.calculatePasswordEntropy = calculatePasswordEntropy;
const passwordConformsToEntropy = (pw, minEntropy) => {
    return (0, exports.calculatePasswordEntropy)(pw) >= minEntropy;
};
exports.passwordConformsToEntropy = passwordConformsToEntropy;
