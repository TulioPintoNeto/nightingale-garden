import React from 'react';
import styles from './styles.module.scss';
import { ClipLoader } from 'react-spinners';
import CN from 'classnames';

interface Props {
  loading: boolean;
  onClick: () => void;
  text: string;
  type?: 'submit' | 'button';
}

export function Button({ loading, onClick, text, type = 'button' }: Props) {
  return (
    <button
      aria-busy={loading}
      className={CN(styles.button, { [styles.loading]: loading })}
      disabled={loading}
      onClick={onClick}
      type={type}
    >
      <div className={styles.loaderBox}>
        <ClipLoader
          aria-label="Loading Spinner"
          color={'#fff'}
          loading={loading}
          size={20}
        />
      </div>
      {text}
    </button>
  );
}
