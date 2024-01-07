import React from 'react';
import styles from './styles.module.scss';
import { AboutText } from './AboutText';
import Image from 'next/image';
import { Section } from '(view)/components/Section';

export function About() {
  return (
    <Section id="about" title="About">
      <div className={styles.grid}>
        <AboutText />
        <div className={styles.boxImage}>
          <Image
            src="/assets/seat-image.jpg"
            alt="The image contains a bank and flowers"
            fill
          />
        </div>
      </div>
    </Section>
  );
}
