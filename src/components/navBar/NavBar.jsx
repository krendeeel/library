import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {NavLink} from 'react-router-dom'
import s from './NavBar.module.css'
import { FormHelperText } from '@material-ui/core'
import { useSelector } from 'react-redux';

export const NavBar = (props) => {
    const handleOnSearch = (string) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(`string: ${string}`)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
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
        hoverBackgroundColor: "#eee",
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
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                placeholder="Поиск"
                styling={a}
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