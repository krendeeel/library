import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {NavLink} from 'react-router-dom'
import s from './NavBar.module.css'
import { FormHelperText } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { getInfoBookThunk, searchBooksThunk } from '../../redux/store'
import { useHistory } from 'react-router-dom';

export const NavBar = (props) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.booksReducer.searchBooks)
    const history = useHistory()
    const handleOnSearch = (string) => {
      dispatch(searchBooksThunk(string))
    }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        dispatch(getInfoBookThunk(item))
        history.push({
          pathname: '/info',
          search: `?name=${item.name}`
        })
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
    const a = {
        height: "32px",
        border: "2px solid black",
        borderRadius: "24px",
        backgroundColor: "black",
        boxShadow: "rgb(255, 255, 255) 0px 1px 6px 0px",
        hoverBackgroundColor: "rgb(115, 115, 236)",
        clearIconMargin: '3px 14px 0 0',
        color: "white",
        fontSize: "16px",
        fontFamily: "Arial",
        iconColor: "white",
        lineColor: "rgb(255, 255, 255)",
        placeholderColor: "white",
        searchIconMargin: '0 0 0 16px'
    }
    const role = useSelector(state => state.authReducer.user.roles);
    return (
      <div>
        <div className={s.navbar}>
            <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                placeholder="Поиск"
                styling={a}
                className={s.a}
            />
            <NavLink to='/'>
              <div className={s.item + ' ' + s.main}>Главная</div>
            </NavLink>
            <NavLink to='/library'>
              <div className={s.item + ' ' + s.library}>Библиотека</div>
            </NavLink>
            <NavLink to='/basket'>
              <div className={s.item + ' ' + s.basket}>Корзина</div>
            </NavLink>
            {role && <NavLink to='/settings'>
              <div className={s.item + ' ' + s.settings}>Настройки</div>
            </NavLink>}
        </div>
      </div>
      )
}