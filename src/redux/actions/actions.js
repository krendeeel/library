export const SET_AUTH_LOGIN = 'SET_AUTH_LOGIN'
export const SET_AUTH_REG = 'SET_AUTH_REG'
export const SET_AUTH_ERRORS = 'AUTH_REDUCER/SET_AUTH_ERROR'
export const SET_BOOK_ADD = 'SET_BOOK_ADD'
export const SET_BOOK_REMOVE = 'SET_BOOK_REMOVE'
export const SET_COMPONENTS_ERRORS = 'SET_COMPONENTS_ERRORS'
export const SET_USER = 'AUTH_REDUCER/SET_USER'
export const SET_BOOKS = 'BOOKS_REDUCER/SET_USER'
export const SET_BOOK_INFO = 'BOOKS_REDUCER/SET_BOOK_INFO'
export const SET_FILTER = 'BOOKS_REDUCER/SET_FILTER'
export const SET_CURRENT_PAGE = 'BOOKS_REDUCER/SET_CURRENT_PAGE'
export const SET_SEARCH_BOOKS = 'BOOKS_REDUCER/SET_SEARCH_BOOKS'
export const SET_CURRENT_ITEM = 'COMPONENTS_REDUCER/SET_CURRENT_ITEM'




export const setAuthReg = onOff => {return {type: SET_AUTH_REG, onOff}}
export const setAuthLogin = onOff => {return {type: SET_AUTH_LOGIN, onOff}}
export const setUser = (email, firstName, lastName, roles, basket) => {return {type: SET_USER, email, firstName, lastName, roles, basket}}

export const setAuthError = errors => {return {type: SET_AUTH_ERRORS, errors}}
export const setBookAdd = onOff => {return {type: SET_BOOK_ADD, onOff}}
export const setBookRemove= onOff => {return {type: SET_BOOK_REMOVE, onOff}}
export const setComponentsError = errors => {return {type: SET_COMPONENTS_ERRORS, errors}}

export const setBooks = (total, items) => {return {type: SET_BOOKS, total, items}}
export const setFilter = (genre, author, city) => {return {type: SET_FILTER, genre, author, city}}
export const setBookInfo = (name,  author, city, genre, description, image, reservation) =>
        {return {type: SET_BOOK_INFO, name,  author, city, genre, description, image, reservation}}
export const setCurrentPage = currentPage => {return {type: SET_CURRENT_PAGE, currentPage}}
export const setSearchBooks = items => {return {type: SET_SEARCH_BOOKS, items}}


export const setCurrentItem = item => {return {type: SET_CURRENT_ITEM, item}}



 


