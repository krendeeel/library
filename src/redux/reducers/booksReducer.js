import { SET_BOOKS, SET_FILTER, SET_SEARCH_BOOKS } from "../actions/actions"
import { SET_BOOK_INFO, SET_CURRENT_PAGE } from './../actions/actions';

const initialState = {
    bookInfo: {
        name: null,
        author: null,
        city: null,
        genre: null,
        description: null,
        image: null,
        reservation: null
    },
    filter: {
        genre: '',
        author: '',
        country: '',
        city: ''
    },
    books: {
        total: null,
        items: null
    },
    currentPage: 1,
    searchBooks: []
}

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS: 
            return {...state, books: {...state.books, total: action.total, items: action.items}}
        case SET_BOOK_INFO: 
            return {...state, bookInfo: {...state.bookInfo, 
                name: action.name, author: action.author, city: action.city, genre: action.genre,
                description: action.description,image: action.image, reservation: action.reservation}}
        case SET_FILTER: 
            return {...state, filter: {...state.filter, genre: action.genre, author: action.author, city: action.city}}
        case SET_CURRENT_PAGE: 
            return {...state, currentPage: action.currentPage}
        case SET_SEARCH_BOOKS: 
            return {...state, searchBooks: action.items}
        default:
            return state;
    }
}