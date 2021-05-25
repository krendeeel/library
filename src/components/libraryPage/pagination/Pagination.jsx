import React from 'react'
import s from './Pagination.module.css'


export const Pagination = () => {
    const [page, onPage, totalCount] = [1,18,20];
    const currentPage = 3;
    const pages = [1,2,3,4,5]
    return (
    <div className={s.pagination}>
        <div className={s.pages}>
            {pages.map((page, index) => 
            <span 
            key={index} 
            className={currentPage == page? s.page && s.activepage : s.page}
            onClick={()=>alert('изменять номер страницы')}>
                {page}
            </span> )}
        </div>
    </div>)
}