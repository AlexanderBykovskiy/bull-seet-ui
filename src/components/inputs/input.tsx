import React from 'react'
import {typeInputProps} from './types'

export const Input: React.FC<typeInputProps> = (props) => {

    const {variant="fill", ...otherProps} = props

    console.log('variant', variant)

    return (
        <input {...otherProps}/>
    )
}
