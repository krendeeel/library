import React, { useEffect } from 'react'
import s from './Header.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {setAuthLogin, setUser } from '../../redux/actions/actions'
import { cookies } from '../utils/utils'

export const Header = (props) => {
    const user = useSelector(state => state.authReducer.user.firstName)
    const dispatch = useDispatch()
    const removeCookie = () => {
        cookies.remove('token')
        dispatch(setUser(null, null, null, null))
    }
    return (
        <div className={s.header}>
            <div className={s.title}>Электронная библиотека</div>
            {user && <button className={s.user} onDoubleClick={removeCookie}>{user[0]}</button>}
            {!user && <button className={s.logaut} onClick={()=>dispatch(setAuthLogin(true))}>Войти</button>}
        </div>
    )
}