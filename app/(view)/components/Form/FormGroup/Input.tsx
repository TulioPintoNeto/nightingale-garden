import React from 'react';
import styles from './styles.module.scss';

type InputProps = {
    type: string;
    id: string;
    placeholder: string;
};

type TextAreaProps = Omit<InputProps, 'type'>;

function TextAreaInput({ id, placeholder }: TextAreaProps) {
    return (
        <textarea
            rows={8}
            className={styles.input}
            id={id}
            placeholder={placeholder}
        />
    );
}

export function Input({ type, id, placeholder }: InputProps) {
    if (type === 'textarea') {
        return <TextAreaInput id={id} placeholder={placeholder} />;
    }

    return (
        <input
            type={type}
            className={styles.input}
            id={id}
            placeholder={placeholder}
        />
    );
}
