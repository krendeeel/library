import { SET_AUTH_LOGIN, SET_AUTH_REG, SET_BOOK_ADD, 
    SET_BOOK_REMOVE, SET_COMPONENTS_ERRORS, SET_CURRENT_ITEM} from './../actions/actions';

const initialState = {
    authForm: {
        loginForm: false,
        regForm: false
    },
    booksForm: {
        add: false,
        remove: false
    },
    library: {
        items: []
    },
    currentItem: null,
    errors: null
}

export const componentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_LOGIN: 
            return {...state, authForm: {...state.authForm, loginForm: action.onOff}}
        case SET_AUTH_REG: 
            return {...state, authForm: {...state.authForm, regForm: action.onOff}}
        case SET_BOOK_ADD: 
            return {...state, booksForm: {...state.booksForm, add: action.onOff}}
        case SET_BOOK_REMOVE: 
            return {...state, booksForm: {...state.booksForm, remove: action.onOff}}
        case SET_COMPONENTS_ERRORS: 
            return {...state,errors: action.errors}
        case SET_CURRENT_ITEM: 
            return {...state,currentItem: action.item}
        default:
            return state;
    }
}