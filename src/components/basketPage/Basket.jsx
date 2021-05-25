import React from 'react'
import img from '../../images/basket.png'
import s from './Basket.module.css'
import { useSelector } from 'react-redux';
import { MediaCard } from './../libraryPage/books/BookItem';
export const Basket = () =>{
    const items = useSelector(state => state.componentsReducer.basket.items)
    return (
        <div>
             {items && <div className={s.title}>Ваша корзина:</div>}
            <div className={s.basket}>
                {items ? items.map(item => <MediaCard/>) : <img src={img}/>}
            </div>
        </div>
       
    )
}