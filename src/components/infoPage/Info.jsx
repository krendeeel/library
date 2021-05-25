
import React from 'react'
import s from './Info.module.css'
import { useSelector } from 'react-redux';
export const Info = () => {

    const info = useSelector(state => state.booksReducer.bookInfo)
    return (
        <div className={s.info}>
            <div className={s.image}>
                <img 
                    className={s.picture}
                    src={info.image}
                />
                {
                info.reservation? 
                <button className={s.btn}>Вернуть</button>: 
                <button className={s.btn }>Забронировать</button> }
                
            </div>
            <div className={s.about}>
                <div className={s.about__item + ' ' + s.about__title}>
                    {info.name}
                </div>
                <div className={s.about__item}>
                    <span className={s.firstword}>Автор: </span> 
                    {info.author}
                </div>
                <div className={s.about__item}>
                    <span  className={s.firstword}>Город: </span> 
                    {info.city}
                </div>
                <div className={s.about__item}>
                    <span  className={s.firstword}>Жанр: </span> 
                    {info.genre}
                </div>
                <div className={s.about__item + ' ' + s.description}>
                    <span className={s.firstword}>Описание: </span> 
                    {info.description}
                </div>
            </div>
        </div>
    )
}