import React, { useEffect } from 'react'
import { Books } from './books/Books'
import { Filters } from './filters/Fiters'
import { Pagination } from './pagination/Pagination';
import s from './Library.module.css'
import { getBooksThunk } from './../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as queryString from 'querystring'
import { setFilter, setCurrentPage, setCurrentItem } from './../../redux/actions/actions';
export const Library = () =>{
    const dispatch =  useDispatch()
    const history = useHistory()
    const filter = useSelector(state => state.booksReducer.filter)
    const currentPage = useSelector(state => state.booksReducer.currentPage)
    useEffect(()=>{
        dispatch(setCurrentItem('Библиотека'))
        const parsed = queryString.parse(history.location.search.substr(1))
        let actualPage = currentPage
        if(parsed.currentPage) actualPage = Number(parsed.currentPage)
        let actualGenre = filter.genre
        if(parsed.genre) actualGenre = parsed.genre
        let actualAuthor = filter.author
        if(parsed.author) actualAuthor = parsed.author
        let actualCity = filter.city
        if(parsed.city) actualCity = parsed.city
        dispatch(setFilter(actualGenre,actualAuthor,actualCity))
        dispatch(setCurrentPage(actualPage))
        dispatch(getBooksThunk({
            actualPage,
            actualGenre,
            actualAuthor,
            actualCity
        }))       
        
    }, [ ])
   
    useEffect(()=>{
        const query = {}
        if(filter.genre) query.genre = filter.genre
        if(filter.author) query.author = filter.author
        if(filter.city) query.city = filter.city
        if(currentPage !== 1) query.currentPage = currentPage

        history.push({
            pathname: '/library',
            search: queryString.stringify(query)
        })
    },[filter, currentPage])

    useEffect(()=>{
        dispatch(getBooksThunk({
            actualPage: currentPage,
            actualGenre: filter.genre,
            actualAuthor: filter.author,
            actualCity: filter.city
        }))    
    },[history.location.search])
    return (
        <div className={s.library}>
            <Filters/>
            <Books/>
            <Pagination/>
        </div>
    )
}