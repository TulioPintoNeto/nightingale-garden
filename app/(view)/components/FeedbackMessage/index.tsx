import React, { PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import CN from 'classnames';

type Props = PropsWithChildren & {
  show: boolean;
  type: 'success' | 'failure';
};

export function FeedbackMessage({ children, show, type }: Props) {
  console.log('hide', show);
  return (
    <div
      className={CN(styles.message, {
        [styles.hide]: !show,
        [styles.success]: type === 'success',
        [styles.failure]: type === 'failure',
      })}
    >
      {children}
    </div>
  );
}
