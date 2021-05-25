import { SET_AUTH_ERRORS, SET_USER} from './../actions/actions';
const initialState = {
    user: {
        email: null,
        firstName: null,
        lastName: null,
        roles: null
    },
    errors: null
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_ERRORS: 
            return {...state, errors: action.errors}
        case SET_USER: 
            return {...state, 
                user: {...state.user, firstName: action.firstName, lastName: action.lastName,
                email: action.email, roles: action.roles}}
        default:
            return state;
    }
}