import React from 'react'
import { Input } from '@material-ui/core'
import { useState } from 'react'
import './Search.css'


export const Search = (props) => {

    const [searchTerm, setSearchTerm] = useState("")

    const onChangeSearch = (e) => {
        setSearchTerm(e.currentTarget.value)
        props.refreshFunction(e.currentTarget.value)
    }

    return (
        <div className="searchbar">
            <Input
              value={searchTerm}
              placeholder="Search..."
              onChange={onChangeSearch}
              
            />
        </div>
    )
}
