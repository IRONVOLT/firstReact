import React from "react";
import { MyInput } from "./UI/input/MyInput";
import { MySelect } from "./UI/select/MySelect";

export const PostFilter = ({filter, setFilter}) => {
    return (
        <>
            <MyInput
                placeholder="Поиск..."
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectSort => setFilter({...filter, sort: selectSort})}
                defaultValue="Сортировка"
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' }
                ]}
            />
        </>
    )
}