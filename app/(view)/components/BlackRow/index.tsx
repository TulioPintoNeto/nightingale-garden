import React, { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

type Props = PropsWithChildren;

export function BlackRow({ children }: Props) {
  return (
    <div className={styles.row}>
      {children}
    </div>
  );
}
