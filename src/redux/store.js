import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/authReducer';
import { componentsReducer } from './reducers/componentsReducer';
import { booksReducer } from './reducers/booksReducer';
import {api} from '../api/api'
import { setAuth, setAuthError, setAuthLogin, setAuthReg, setUser } from './actions/actions';
import { cookies } from '../components/utils/utils';

const rootReducer = combineReducers({
    authReducer,
    componentsReducer,
    booksReducer
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export const registerUserThunk = (data) => {
    const info = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
    }
    console.log(info);
    return (dispatch) => {
        api('auth/registration', 'POST', info)
        .then(info => {
            dispatch(setAuthError(info.message))
            dispatch(setAuthLogin(true))
            dispatch(setAuthReg(false))
        })
        .catch(error => {
            dispatch(setAuthError(error.message))
        })       
    }
}

export const loginUserThunk = (data) => {
    const info = {
        email: data.email,
        password: data.password
    }
    return (dispatch) => {
        api('auth/login', 'POST', info)
        .then(response => {
            cookies.set('token', response.token)
            console.log(cookies)
            dispatch(infoUserThunk(response))
        })
        .catch(error => {
            dispatch(setAuthError(error.message));
        })        
    }
}

export const infoUserThunk = (data) => {
    const info = {
        token: data.token
    }
    return (dispatch) => {
        api('auth/user', 'POST', info)
        .then(response => {
            console.log(response)
           dispatch(setUser(response.email, response.firstname, response.lastname, response.roles))
           dispatch(setAuthLogin(false))
        })
        .catch(error => {
            dispatch(setAuthError(error.message))
        })        
    }
}