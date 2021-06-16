
import React, { useEffect } from 'react'
import s from './Info.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as queryString from 'querystring'
import { getInfoBookThunk, infoUserThunk } from '../../redux/store';
import img from '../../images/book.png'
import { reservationBookThunk } from './../../redux/store';
import { cookies } from '../utils/utils';


export const Info = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(infoUserThunk({token: cookies.get('token')}))
    },[])
    
    const history = useHistory()
    
    const parsed = queryString.parse(history.location.search.substr(1))

    useEffect(()=>{
        dispatch(getInfoBookThunk(parsed))
    },[history])

    const info = useSelector(state => state.booksReducer.bookInfo)
    const email = useSelector(state => state.authReducer.user.email)

    const send = event => {
        dispatch(reservationBookThunk(`book/reservation?name=${info.name}&email=${email}&reserv=${event.target.name}`))
    }

    const basket = useSelector(state => state.authReducer.user.basket)
    
    return (
        <div className={s.info}>
            <div className={s.image}>
                {info.image && <img  className={s.picture}  src={info.image} />}
                {!info.image &&< img  className={s.picture}  src={img}  />}
                
                {/* {
                   email && !basket.includes(info.name) && info.reservation && <button className={s.btn} disabled={true}>Забронирована</button>
                } */}
                {
                    email && info.reservation && basket.includes(info.name) && <button className={s.btn} onClick={send} name='0'>Вернуть</button>
                }
                {
                    email && !info.reservation && <button className={s.btn} onClick={send} name='1'>Забронировать</button>
                }
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