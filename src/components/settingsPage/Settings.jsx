import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { setBookAdd, setBookRemove, setCurrentItem} from '../../redux/actions/actions';
import { AddBook} from '../forms/addBookPage/AddBook';
import { RemoveBook} from '../forms/removeBookPage/RemoveBook';
import s from './Settings.module.css'
export const Settings = () =>{
    const roles = useSelector(state => state.authReducer.user.roles);
    const dispatch = useDispatch()
    const add = () => dispatch(setBookAdd(true))
    const remove = () => dispatch(setBookRemove(true))
    
    useEffect(() => {
        dispatch(setCurrentItem('Настройки'))
    }, [ ])
    return (
        <div className={s.setting}>
            {!roles &&  <Redirect to='/'/>}
            <AddBook/>
            <RemoveBook/>
            <div className={s.title}>
                Настройки
            </div>
            <button className={s.btn + ' ' + s.add} onClick={add}>Добавить книгу</button>
            <button className={s.btn + ' ' + s.remove} onClick={remove}>Удалить книгу</button>
        </div>
    )
}