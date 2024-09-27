import React from 'react';

export type typeInputProps = React.ButtonHTMLAttributes<HTMLInputElement>
    & {
    variant?: 'fill' | 'outline'
}
