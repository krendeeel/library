import React from 'react'
import { Books } from './books/Books'
import { Filters } from './filters/Fiters'
import { Pagination } from './pagination/Pagination';
import s from './Library.module.css'
export const Library = () =>{
    return (
        <div className={s.library}>
            <Filters/>
            <Books/>
            <Pagination/>
        </div>
    )
}