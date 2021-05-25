export const SET_AUTH_LOGIN = 'SET_AUTH_LOGIN'
export const SET_AUTH_REG = 'SET_AUTH_REG'
export const SET_AUTH_ERRORS = 'AUTH_REDUCER/SET_AUTH_ERROR'
export const SET_BOOK_ADD = 'SET_BOOK_ADD'
export const SET_BOOK_REMOVE = 'SET_BOOK_REMOVE'
export const SET_COMPONENTS_ERRORS = 'SET_COMPONENTS_ERRORS'
export const SET_USER = 'AUTH_REDUCER/SET_USER'

export const setAuthReg = onOff => {return {type: SET_AUTH_REG, onOff}}
export const setAuthLogin = onOff => {return {type: SET_AUTH_LOGIN, onOff}}
export const setUser = (email, firstName, lastName, roles) => {return {type: SET_USER, email, firstName, lastName, roles}}

export const setAuthError = errors => {return {type: SET_AUTH_ERRORS, errors}}
export const setBookAdd = onOff => {return {type: SET_BOOK_ADD, onOff}}
export const setBookRemove= onOff => {return {type: SET_BOOK_REMOVE, onOff}}
export const setAComponentsError = errors => {return {type: SET_COMPONENTS_ERRORS, errors}}