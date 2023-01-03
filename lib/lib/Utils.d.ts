import { Comparator, ValidationBean } from "./Beans";
import { PasswordStrengthCriterium } from "./Beans";
export declare const validateNotEmpty: (value: any, partial: boolean) => boolean;
export declare const errorNotEmpty: (fieldName: string, errorMessage: string | null) => string;
export declare const validateComparison: (cmp: Comparator, baseValue: number, value: number, partial: boolean) => boolean;
export declare const errorComparison: (cmp: Comparator, baseValue: number, fieldName: string, errorMessage: string | null) => string;
export declare const validateRegex: (regex: string, value: string | undefined, partial: boolean) => boolean;
export declare const errorRegex: (fieldName: string, errorMessage: string | null) => string;
export declare const validatePassword: (pw: string | undefined | null, minEntropy: number, partial: boolean) => boolean;
export declare const errorPassword: (fieldName: string, errorMessage: string | null) => string;
export declare const validateLength: (length: number, value: string | undefined, partial: boolean) => boolean;
export declare const errorLength: (length: number, fieldName: string, errorMessage: string | null) => string;
export declare const validateSize: (size: number, value: Array<any> | undefined, partial: boolean) => boolean;
export declare const errorSize: (size: number, fieldName: string, errorMessage: string | null) => string;
export interface FailureCallback<BEAN_TYPE, VALIDATION_TYPE extends ValidationBean> {
    (validation: VALIDATION_TYPE, bean: BEAN_TYPE): void;
}
export interface SuccessCallback<BEAN_TYPE, VALIDATION_TYPE extends ValidationBean> {
    (validation: VALIDATION_TYPE, bean: BEAN_TYPE): void;
}
export interface ValidationCallback<BEAN_TYPE, VALIDATION_TYPE extends ValidationBean> {
    (bean: BEAN_TYPE, partial?: boolean): VALIDATION_TYPE;
}
export declare const getPasswordStrengthPoolSize: (criterium: PasswordStrengthCriterium) => 26 | 10 | 32;
export declare const getPasswordCriteriumPattern: (criterium: PasswordStrengthCriterium) => RegExp;
export declare const calculatePasswordEntropy: (pw: string) => number;
export declare const passwordConformsToEntropy: (pw: string, minEntropy: number) => boolean;
