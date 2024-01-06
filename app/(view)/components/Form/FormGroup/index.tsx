import React from 'react';
import styles from './styles.module.scss';
import { useInput } from 'globals/view/useInput';
import { Input } from './Input';

interface Props {
    id: string;
    inputControls: ReturnType<typeof useInput>;
    label: string;
    placeholder: string;
    type: string;
}

export function FormGroup({
    id,
    inputControls,
    label,
    placeholder,
    type,
}: Props) {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id}>{label}</label>
            <Input type={type} id={id} placeholder={placeholder} />
        </div>
    );
}


