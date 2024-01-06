import React from 'react';
import styles from './styles.module.scss';
import { Input } from './Input';

interface Props {
  label: string;
  inputProps: Parameters<typeof Input>[0];
}

export function FormGroup({ inputProps, label }: Props) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={inputProps.id}>{label}</label>
      <Input {...inputProps} />
    </div>
  );
}
