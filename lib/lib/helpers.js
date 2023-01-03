"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.performClientValidation = exports.updateSet = void 0;
const updateSet = (set, value, state) => {
    const result = new Set(set);
    if (state) {
        result.add(value);
    }
    else {
        result.delete(value);
    }
    return result;
};
exports.updateSet = updateSet;
const performClientValidation = (bean, validationCallback, setValidation, onSuccess, onFailure) => {
    const validation = validationCallback(bean);
    setValidation(validation);
    if (validation === null || validation === void 0 ? void 0 : validation.success) {
        onSuccess(validation, bean);
    }
    else {
        onFailure(validation, bean);
    }
};
exports.performClientValidation = performClientValidation;
