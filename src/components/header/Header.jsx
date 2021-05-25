import React, { useEffect } from 'react'
import s from './Header.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {setAuthLogin } from '../../redux/actions/actions'

export const Header = (props) => {
    const user = useSelector(state => state.authReducer.user.firstName)
    const dispatch = useDispatch()
    return (
        <div className={s.header}>
            <div className={s.title}>Электронная библиотека</div>
            {user && <button className={s.user}>{user[0]}</button>}
            {!user && <button className={s.logaut} onClick={()=>dispatch(setAuthLogin(true))}>Войти</button>}
        </div>
    )
}