import React from 'react';
import styles from './styles.module.scss';
import { Container } from '(view)/components/Container';
import Link from 'next/link';
import { homeIdRef } from '../constants';

export function Menu() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.row}>
          <div>
            <img src="/assets/logo.png" alt="Logo" className={styles.logo} />
          </div>
          <div className={styles.menu}>
            <Link href={`#${homeIdRef.openingTimes}`}>Opening Times</Link>
            <Link href={`#${homeIdRef.howToVolunteer}`}>Voluunter</Link>
            <Link href={`#${homeIdRef.about}`}>About</Link>
            <Link href={`#${homeIdRef.findUs}`}>Find Us</Link>
            <Link href={`#${homeIdRef.contactUs}`}>Contact</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
