import React from 'react';
import styles from './styles.module.scss';

interface Props {
    id: string;
    label: string;
    placeholder: string;
    type: string;
}

export function FormGroup({ id, label, placeholder, type }: Props) {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                className={styles.input}
                id={id}
                placeholder={placeholder}
            />
        </div>
    );
}
