import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { useState } from 'react'
import "./Checkbox.css"

export const CheckBox = (props) => {

    const [checked, setChecked] = useState([])

    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if(currentIndex === -1)
            newChecked.push(value)
        else
            newChecked.splice(currentIndex, 1)
        setChecked(newChecked)
        props.handleFilter(newChecked)
    }

    return (
        <div className="checkboxContainer">
          <h3>{props.title}</h3>
          <div className="checkbox">
            {props.array.map((value, index) => 
              (
                <div key={index}>
                  <Checkbox color="secondary" size="small"
                    onChange={() => handleToggle(value.value)}
                    checked={checked.indexOf(value.value) === -1 ? false : true}
                  />
                  <span>{value.label}</span>
                </div>
              )
            )}
          </div>
        </div>
    )
}
