import React from 'react';
import styles from './styles.module.scss';

interface Props {
    text: string;
    type?: 'submit' | 'button';
}

export function Button({ text, type = 'button' }: Props) {
    return (
        <button type={type} className={styles.button}>
            {text}
        </button>
    );
}
