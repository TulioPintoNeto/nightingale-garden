import React from 'react';
import styles from './styles.module.scss';

interface Props {
  onClick: () => void;
  text: string;
  type?: 'submit' | 'button';
}

export function Button({ onClick, text, type = 'button' }: Props) {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}
