import * as React from 'react';


import styles from './basicButton.module.css';

let cn = require('classnames');

type Props = {
    handleClick: () => void,
    color: 'red',
}

export const BasicButton: React.FC<Props> = ({
    children,
    handleClick,
    color,
}) => (
    <div
        onClick={handleClick}
        className={cn(styles.containter,
            {[styles.red]: color === 'red'},
        )}
    >
        {children}
    </div>
);
