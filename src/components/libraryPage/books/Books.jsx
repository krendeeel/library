import React, { useEffect } from 'react'
import { MediaCard } from './BookItem'
import s from './Books.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { getBooksThunk } from './../../../redux/store';


export const Books = () => {
    const books = useSelector(state => state.booksReducer.books.items)
    return (<div className={s.books}>
        {books && books.map(book =><MediaCard key={book.id} name={book.name} image={book.picture}/>)}
    </div>)
}