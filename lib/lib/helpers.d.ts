import { Dispatch, SetStateAction } from 'react';
import { AbstractIOBean, ValidationBean } from './Beans';
import { FailureCallback, SuccessCallback, ValidationCallback } from './Utils';
export declare const updateSet: <T>(set: Set<T> | null | undefined, value: T, state: boolean) => Set<T>;
export declare const performClientValidation: <BEAN_TYPE extends AbstractIOBean, VALIDATION_TYPE extends ValidationBean>(bean: BEAN_TYPE, validationCallback: ValidationCallback<BEAN_TYPE, VALIDATION_TYPE>, setValidation: Dispatch<SetStateAction<VALIDATION_TYPE>>, onSuccess: SuccessCallback<BEAN_TYPE, VALIDATION_TYPE>, onFailure: FailureCallback<BEAN_TYPE, VALIDATION_TYPE>) => void;
