import React from 'react'
import { Select } from 'antd';
import s from './Filters.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './../../../redux/actions/actions';
import { useHistory } from 'react-router-dom';
import * as queryString from 'querystring'
const { Option } = Select;

export const Filters = () => {

    const history = useHistory()
    const parsed = queryString.parse(history.location.search.substr(1))
    


    const options1 =  [   {
        id: '0',
        value: 'adventures',
        name: 'Приключения'
    },
    {
        id: '1',
        value: 'fiction',
        name: 'Фантастика'
    },
    {
        id: '2',
        value: 'novel',
        name: 'Роман'
    },
    {
        id: '3',
        value: 'detective',
        name: 'Детектив'
    },
    {
        id: '4',
        value: 'scientific',
        name: 'Научный'
    }
    
    ]

    const options2 = [
        {
            id: '01',
            value: 'russian',
            name: 'Сергей Лукьяненко'
        },
        {
            id: '11',
            value: 'foreign',
            name: 'Макс Глебов'
        },
    ]


    const options3 =  [
        {
            id: '02',
            value: 'tula',
            name: 'Тула'
        },
        {
            id: '12',
            value: 'orel',
            name: 'Орел'
        },
        {
            id: '22',
            value: 'moscow',
            name: 'Москва'
        }
    ]
    const dispatch = useDispatch()
    const filter = useSelector(state => state.booksReducer.filter)
    const handleChangeGenre = (value) => {
        dispatch(setFilter(value, filter.author, filter.city))
    }
    const handleChangeAuthor = (value) => {
        dispatch(setFilter(filter.genre, value, filter.city))
    }
    const handleChangeCity = (value) => {
        dispatch(setFilter(filter.genre, filter.author, value))
    }
    return (
        <div className={s.filters}>
            <Select className={s.filter} defaultValue={parsed.genre ? parsed.genre : 'Все Жанры'} onChange={handleChangeGenre}>
                {options1.map(item => <Option key={item.id} value={item.name}>{item.name}</Option>)}
            </Select>
            <Select className={s.filter} defaultValue={parsed.author ? parsed.author : 'Автор'} onChange={handleChangeAuthor}>
                {options2.map(item => <Option key={item.id} value={item.name}>{item.name}</Option>)}
            </Select>
            <Select className={s.filter} defaultValue={parsed.city ? parsed.city : 'Город'} onChange={handleChangeCity}>
                {options3.map(item => <Option key={item.id} value={item.name}>{item.name}</Option>)}
            </Select>
        </div>
    )
}