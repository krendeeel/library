import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/authReducer';
import { componentsReducer } from './reducers/componentsReducer';
import { booksReducer } from './reducers/booksReducer';
import {api} from '../api/api'
import { setAuthError, setAuthLogin, setAuthReg, setBookInfo, setBooks, setUser, setSearchBooks, setComponentsError } from './actions/actions';
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
           dispatch(setUser(response.email, response.firstname, response.lastname, response.roles, response.basket))
           dispatch(setAuthLogin(false))
        })
        .catch(error => {
            dispatch(setAuthError(error.message))
        })        
    }
}

export const getBooksThunk = (data) => {
    return (dispatch) => {
        api(`book/all?genre=${data.actualGenre}&author=${data.actualAuthor}&city=${data.actualCity}&page=${data.actualPage}`, 'GET')
        .then(response => {
            dispatch(setBooks(response.total, response.books))
        })
        .catch(error => {
            dispatch(setAuthError(error.message))
        })        
    }
}

export const getInfoBookThunk = (data) => {
    return (dispatch) => {
        api(`book/info?name=${data.name}`, 'GET')
        .then(response => {
            dispatch(setBookInfo(response.book.name, response.book.author, response.book.city, response.book.genre, response.book.description, response.book.picture, response.book.reservation))
            
        })
        .catch(error => {
            dispatch(setAuthError(error.message))
        })        
    }
}


export const reservationBookThunk = (url) => {
    return (dispatch) => {
        api(url, 'GET')
        .then(response => {
            if(response.message === 'success'){
                dispatch(getInfoBookThunk({name: response.name}))
                dispatch(infoUserThunk({token: cookies.get('token')}))
            }
            else{
                alert('что-то пошло не так')
            }
        })
        .catch(error => {
            dispatch(setAuthError(error.message))
        })        
    }
}


export const searchBooksThunk = (data) => {
    return (dispatch) => {
        api(`book/search?name=${data}`, 'GET')
        .then(response => {
            dispatch(setSearchBooks(response.items))
        })
        .catch(error => {
            dispatch(setAuthError(error.message))
        })        
    }
}

export const addBookThunk = (data) => {
    return (dispatch) => {
        api(`book/add`, 'POST', data)
        .then(response => {
            dispatch(setComponentsError(response.message))
        })
        .catch(error => {
            dispatch(setComponentsError(error.message))
        })        
    }
}

export const removeBookThunk = (data) => {
    return (dispatch) => {
        api(`book/remove`, 'POST', data)
        .then(response => {
            dispatch(setComponentsError(response.message))
        })
        .catch(error => {
            dispatch(setComponentsError(error.message))
        })        
    }
}