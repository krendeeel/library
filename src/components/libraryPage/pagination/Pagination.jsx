import React from 'react'
import s from './Pagination.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from './../../../redux/actions/actions';
import { createPages } from './../../utils/utils';


export const Pagination = () => {
    const currentPage = useSelector(state => state.booksReducer.currentPage)
    const total = useSelector(state => state.booksReducer.books.total)
    const pagesCount = Math.ceil(total/12)
    const dispatch = useDispatch()
    const pages = []
    createPages(pages, pagesCount, currentPage)
    return (
    <div className={s.pagination}>
        {pagesCount !== 1 && <div className={s.pages}>
            {pages.map((page, index) => 
            <span 
            key={index} 
            className={currentPage === page? s.page && s.activepage : s.page}
            onClick={()=>{
                dispatch(setCurrentPage(page))
            }}
            >
                {page}
            </span> )}
        </div>}
    </div>)
}