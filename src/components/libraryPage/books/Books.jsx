import React from 'react'
import { MediaCard } from './BookItem'
import s from './Books.module.css'


export const Books = () => {
    return (<div className={s.books}>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/><MediaCard/><MediaCard/><MediaCard/><MediaCard/><MediaCard/><MediaCard/><MediaCard/>
        <MediaCard/><MediaCard/><MediaCard/><MediaCard/><MediaCard/><MediaCard/><MediaCard/><MediaCard/>
    </div>)
}