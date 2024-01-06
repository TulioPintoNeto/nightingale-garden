import React, { PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import CN from 'classnames';

type Props = PropsWithChildren & {
  onClose: () => void;
  show: boolean;
  type: 'success' | 'failure';
};

const Close = ({ onClose, type }: Pick<Props, 'type' | 'onClose'>) => {
  return (
    <button
      aria-label="Close"
      className={CN(styles.closeButton, {
        [styles.success]: type === 'success',
        [styles.failure]: type === 'failure',
      })}
      onClick={onClose}
      type="button"
    >
      <span aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </span>
    </button>
  );
};

export function FeedbackMessage({ children, onClose, show, type }: Props) {
  return (
    <div
      className={CN(styles.message, {
        [styles.hide]: !show,
        [styles.success]: type === 'success',
        [styles.failure]: type === 'failure',
      })}
    >
      <Close onClose={onClose} type={type} />
      {children}
    </div>
  );
}
