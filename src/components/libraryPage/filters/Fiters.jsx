import React from 'react'
import { filtersName } from './../../utils/utils';
import {Filter} from './Filter'
import s from './Filters.module.css'
export const Filters = () => {
    return (
        <div className={s.filters}>
            {filtersName.map(filter => <Filter key={filter.id} filter={filter.name} options={filter.options}/>)}
        </div>
    )
}