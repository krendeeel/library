import React from 'react';
import { useHistory } from "react-router-dom";
import s from './BookCard.module.css'
import bookIcon from '../../../images/book.png'


export const BookCard = props => {
  const history = useHistory()
  const {name, img} = props
  const toInfo = () => {
    history.push({
      pathname: '/info',
      search: `?name=${name}`
    })
  }
  return (
    <div className={s.book} onClick={toInfo}>
        {img? <img className={s.img} src={img}/> : <img className={s.img} src={bookIcon}/> }
        <div className={s.title}>
          <div className={s.name}>{name}</div>
        </div>
    </div>
  )
}
