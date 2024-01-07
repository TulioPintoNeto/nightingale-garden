import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { Container } from '../../../components/Container';
import { OpeningTimes } from '../OpeningTimes';
import { About } from '../About';
import { ContactUs } from '../ContactUs';
import { FindUs } from '../FindUs';
import { HowToVolunteer } from '../HowToVolunteer';
import { Menu } from '../Menu';

export const HomeContent = () => {
  return (
    <div>
      <Menu />

      <section className={styles.mainSection}>
        <h1>Nightingale Garden</h1>
        <p>For everyone to enjoy</p>
      </section>

      <OpeningTimes />
      <HowToVolunteer />
      <About />
      <FindUs />
      <ContactUs />
    </div>
  );
};
