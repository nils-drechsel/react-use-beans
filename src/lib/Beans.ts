// This file is auto-generated. Do not modify

export enum PasswordStrengthCriterium {
    LOWERCASE = "LOWERCASE",
    UPPERCASE = "UPPERCASE",
    NUMBERS = "NUMBERS",
    SPECIAL_CHARACTERS = "SPECIAL_CHARACTERS",
}

export interface StoreEditFragment extends StoreBean {
    _t?: string,
    timestamp?: TimestampBean,
}

export interface AssignedKeyContainingBean {
}

export interface ServerToClientAuthenticationBean extends AbstractIOBean {
    uid: string,
    _t?: string,
    token0: string,
    token1: string,
    validity: number,
    sid: string,
}

export interface AbstractIOBean extends Object {
    _t?: string,
}

export interface NullBean extends AbstractIOBean {
    _t?: string,
}

export interface TimestampBean extends AbstractIOBean {
    touched: number,
    _t?: string,
    created: number,
    modified: number,
}

export interface ServerMessageBean extends AbstractIOBean {
    originId?: string | null,
    _t?: string,
    bean?: string,
}

export interface ClientToServerAuthenticationBean extends AbstractIOBean {
    _t?: string,
    token0: string | null,
    token1: string | null,
}

export interface ClientMessageBean {
}

export enum Comparator {
    EQUAL = "EQUAL",
    NOT_EQUAL = "NOT_EQUAL",
    GREATER = "GREATER",
    GREATER_OR_EQUAL = "GREATER_OR_EQUAL",
    SMALLER = "SMALLER",
    SMALLER_OR_EQUAL = "SMALLER_OR_EQUAL",
}

export interface ClientOriginatedBean extends AbstractIOBean {
    originId?: string,
    _t?: string,
}

export interface StoreBean extends AbstractIOBean {
    _t?: string,
    timestamp?: TimestampBean,
}

export interface UidContainingBean {
}

export interface AnnotationContainingBean {
}

export interface OwnerContainingBean {
}

export interface ValidationBean extends ServerMessageBean {
    originId?: string | null,
    _t?: string,
    success?: boolean,
    bean?: string,
}

export interface StoreValidationBean extends ValidationBean {
    originId?: string | null,
    _t?: string,
    success?: boolean,
    storeUid?: string,
    bean?: string,
}

