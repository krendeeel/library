import React, {useEffect} from 'react'
import { Select } from 'antd';
import s from './Filters.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './../../../redux/actions/actions';
import { useHistory } from 'react-router-dom';
import * as queryString from 'querystring'
import { filters } from '../../utils/utils';
const { Option } = Select;

export const Filters = () => {
    const history = useHistory()
    const parsed = queryString.parse(history.location.search.substr(1))
    
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
            <Select className={s.filter} defaultValue={parsed.genre ? parsed.genre : filter.genre} onChange={handleChangeGenre}>
                {filters.genres.map(item => <Option key={item.name} value={item.value}>{item.name}</Option>)}
            </Select>
            <Select className={s.filter} defaultValue={parsed.author ? parsed.author : filter.author} onChange={handleChangeAuthor}>
                {filters.authors.map(item => <Option key={item.name} value={item.value}>{item.name}</Option>)}
            </Select>
            <Select className={s.filter} defaultValue={parsed.city ? parsed.city : filter.city} onChange={handleChangeCity}>
                {filters.cities.map(item => <Option key={item.name} value={item.value}>{item.name}</Option>)}
            </Select>
        </div>
    )
}