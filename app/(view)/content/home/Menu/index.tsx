import React from 'react';
import styles from './styles.module.scss';
import { Container } from '(view)/components/Container';
import Link from 'next/link';
import { homeIdRef } from '../constants';
import { BlackRow } from '(view)/components/BlackRow';
import { Drawer } from '(view)/components/Drawer';

const links = [
  { href: `#${homeIdRef.openingTimes}`, text: 'Opening Times' },
  { href: `#${homeIdRef.howToVolunteer}`, text: 'Voluunter' },
  { href: `#${homeIdRef.about}`, text: 'About' },
  { href: `#${homeIdRef.findUs}`, text: 'Find Us' },
  { href: `#${homeIdRef.contactUs}`, text: 'Contact' },
];

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
              {links.map(({ href, text }) => (
                <Link href={href}>{text}</Link>
              ))}
            </nav>
            <Drawer links={links} />
          </div>
        </div>
      </Container>
    </BlackRow>
  );
}
