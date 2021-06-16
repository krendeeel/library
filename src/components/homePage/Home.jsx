import React, {useEffect} from 'react'
import { homeText } from '../utils/utils'
import s from './Home.module.css'
import { useDispatch } from 'react-redux';
import { setCurrentItem } from '../../redux/actions/actions';

export const Home = () =>{
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(setCurrentItem('Главная'))
    },[])
    return (
        <div className={s.home}>
            {homeText.map(item => <p className={s.title}>{item}</p>)}
        </div>
    )
}