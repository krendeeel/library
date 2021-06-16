import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {NavLink} from 'react-router-dom'
import s from './NavBar.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { getInfoBookThunk, searchBooksThunk } from '../../redux/store'
import { useHistory } from 'react-router-dom';
import { styleOfSearch } from '../utils/utils';

export const NavBar = props => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.booksReducer.searchBooks)
  const current = useSelector(state => state.componentsReducer.currentItem)
  const history = useHistory()
  const handleOnSearch = (string) => {
    dispatch(searchBooksThunk(string))
  }
  const handleOnSelect = (item) => {
     dispatch(getInfoBookThunk(item))
    history.push({
      pathname: '/info',
        search: `?name=${item.name}`
    })
  }
  const role = useSelector(state => state.authReducer.user.roles);
  return (
    <div>
      <div className={s.navbar}>
          <ReactSearchAutocomplete
              items={items}
              onSearch={handleOnSearch}
              onSelect={handleOnSelect}
              placeholder='Поиск'
              styling={styleOfSearch} 
          />
          <NavLink to='/'>
            <div className={current === 'Главная'? s.item + ' ' + s.main + ' '  + s.active : s.item + ' ' + s.main}>Главная</div>
            </NavLink>
            <NavLink to='/library'>
              <div className={current === 'Библиотека'? s.item + ' ' + s.library + ' '  + s.active : s.item + ' ' + s.library}>Библиотека</div>
            </NavLink>
            <NavLink to='/basket'>
            <div className={current === 'Корзина'? s.item + ' ' + s.basket + ' ' +  s.active: s.item + ' ' + s.basket }>Корзина</div>
           </NavLink>
          {role && role.includes('ADMIN') && <NavLink to='/settings'>
            <div className={current === 'Настройки'? s.item + ' ' + s.settings + ' ' + s.active :  s.item + ' ' + s.settings}>Настройки</div>
          </NavLink>}
      </div>
    </div>
  )
}