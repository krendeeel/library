import React from 'react'
import {BookCard} from './BookCard'
import s from './Books.module.css'
import { useSelector} from 'react-redux';

export const Books = () => {
    const books = useSelector(state => state.booksReducer.books.items)
    return (<div className={s.books}>
        {books && books.map(book =><BookCard key={book.id} name={book.name} img={book.picture}/>)}
    </div>)
}