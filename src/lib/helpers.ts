import { useEffect, Dispatch, SetStateAction } from 'react';
import { AbstractIOBean, ValidationBean } from './Beans';
import { FailureCallback, SuccessCallback, ValidationCallback } from './Utils';


export const updateSet = <T>(set: Set<T> | undefined | null, value: T, state: boolean): Set<T> => {
    const result = new Set(set);
    if (state) {
        result.add(value);
    } else {
        result.delete(value);
    }
    return result;
}

export const performClientValidation = <BEAN_TYPE extends AbstractIOBean, VALIDATION_TYPE extends ValidationBean>(bean: BEAN_TYPE, validationCallback: ValidationCallback<BEAN_TYPE, VALIDATION_TYPE>, setValidation: Dispatch<SetStateAction<VALIDATION_TYPE>>, onSuccess: SuccessCallback<BEAN_TYPE, VALIDATION_TYPE>, onFailure: FailureCallback<BEAN_TYPE, VALIDATION_TYPE>): void => {
    const validation = validationCallback(bean);
    setValidation(validation);
    if (validation?.success) {
        onSuccess(validation, bean);
    } else {
        onFailure(validation, bean);
    }
}
