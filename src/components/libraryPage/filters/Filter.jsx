import React from 'react'
import { Select } from 'antd';
import s from './Filter.module.css'
const { Option } = Select;


export const Filter = (props) => {
    const {filter, options} = props

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    return (
    <Select className={s.filter} defaultValue={filter} onChange={handleChange}>
        {options.map(item => <Option key={item.id} value={item.value}>{item.name}</Option>)}
    </Select>
    )
    
}
