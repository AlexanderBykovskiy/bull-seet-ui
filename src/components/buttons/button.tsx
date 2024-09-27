import React from 'react'
import {typeButtonProps} from './types'

export const Button: React.FC<typeButtonProps> = (props) => {

    const {children, variant="fill", ...otherProps} = props

    console.log('varian', variant)

    return (
        <button {...otherProps}>
            {children}
        </button>
    )
}
