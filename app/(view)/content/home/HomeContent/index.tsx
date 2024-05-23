'use client';
import React from 'react';
import styles from './styles.module.scss';
import { OpeningTimes } from '../OpeningTimes';
import { About } from '../About';
import { ContactUs } from '../ContactUs';
import { FindUs } from '../FindUs';
import { HowToVolunteer } from '../HowToVolunteer';
import { Menu } from '../Menu';
import { Footer } from '../Footer';

export const HomeContent = () => {
  return (
    <div>
      <Menu />

      <section className={styles.mainSection}>
        <h1>Nightingale Community Garden</h1>
        <p>For everyone to enjoy</p>
      </section>

      <OpeningTimes />
      <HowToVolunteer />
      <About />
      <FindUs />
      <ContactUs />
      <Footer />
    </div>
  );
};
