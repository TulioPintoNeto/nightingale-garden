import React from 'react';
import { BlackRow } from '(view)/components/BlackRow';
import styles from './styles.module.scss';

export function Footer() {
  return (
    <BlackRow>  
      <footer className={styles.footer}>
        Developt by{' '}
        <a href="https://github.com/TulioPintoNeto/" target="_blank">
          Tulio Pinto Neto
        </a>
      </footer>
    </BlackRow>
  );
}
