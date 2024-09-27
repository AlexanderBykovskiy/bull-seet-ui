import React from 'react';

export type typeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
    & React.PropsWithChildren
    & {
    variant?: 'fill' | 'outline'
}
