import React from 'react';
import { Section } from '(view)/components/Section';
import { Anchor } from '(view)/components/Anchor';
import { homeIdRef } from '../constants';
import styles from './styles.module.scss';

export function HowToVolunteer() {
  return (
    <Section
      background="green"
      id={homeIdRef.howToVolunteer}
      title="How to Volunteer"
    >
      <p className={styles.paragraph}>
        We are always looking for new volunteers.
      </p>
      <Anchor href={`/#${homeIdRef.contactUs}`} text="Contact us"></Anchor>
    </Section>
  );
}
