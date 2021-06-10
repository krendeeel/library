import React, {useEffect} from 'react'
import img from '../../images/basket.png'
import s from './Basket.module.css'
import { useSelector, useDispatch } from 'react-redux';
import icon from '../../images/basketItem.png'
import { cookies } from '../utils/utils';
import { infoUserThunk } from '../../redux/store';
import { useHistory } from 'react-router-dom';


export const BasketItem = (props) => {
    const history = useHistory()
    const a = () => {
        history.push({
          pathname: '/info',
          search: `?name=${props.name}`
        })
      }
    return (
        <div className={s.item} onClick={a}>
            <div className={s.img}>
                <img  className={s.img} src={icon}/>
            </div>
            <div>{props.name}</div>
        </div>
    )
}

export const Basket = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(infoUserThunk({
            token: cookies.get('token')
        }))
    },[ ])
    
    const basket = useSelector(state => state.authReducer.user.basket)
    console.log(basket)
    return (
        <div className={s.all}>
             {basket && <div className={s.title}>Ваша корзина: </div>}
            <div className={s.basket}>
                {basket? basket.map(item => <BasketItem name={item}/>) : <div className={s.title}>Корзина доступна только авторизированным пользователям!</div>}
            </div>
           
        </div>
       
    )
}