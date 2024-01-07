import React from 'react';
import styles from './styles.module.scss';
import { Container } from '(view)/components/Container';
import Link from 'next/link';
import { homeIdRef } from '../constants';
import { BlackRow } from '(view)/components/BlackRow';
import { Drawer } from '(view)/components/Drawer';

export function Menu() {
  return (
    <BlackRow>
      <Container>
        <div className={styles.navbar}>
          <div>
            <img src="/assets/logo.png" alt="Logo" className={styles.logo} />
          </div>
          <div>
            <nav className={styles.menu}>
              <Link href={`#${homeIdRef.openingTimes}`}>Opening Times</Link>
              <Link href={`#${homeIdRef.howToVolunteer}`}>Voluunter</Link>
              <Link href={`#${homeIdRef.about}`}>About</Link>
              <Link href={`#${homeIdRef.findUs}`}>Find Us</Link>
              <Link href={`#${homeIdRef.contactUs}`}>Contact</Link>
            </nav>
            <Drawer />
            {/* <nav className={styles.menu}>
            <Link href={`#${homeIdRef.openingTimes}`}>Opening Times</Link>
            <Link href={`#${homeIdRef.howToVolunteer}`}>Voluunter</Link>
            <Link href={`#${homeIdRef.about}`}>About</Link>
            <Link href={`#${homeIdRef.findUs}`}>Find Us</Link>
            <Link href={`#${homeIdRef.contactUs}`}>Contact</Link>
          </nav> */}
          </div>
        </div>
      </Container>
    </BlackRow>
  );
}
