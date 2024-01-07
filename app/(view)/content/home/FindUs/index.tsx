import React from 'react';
import { Section } from '(view)/components/Section';
import styles from './styles.module.scss';

export function FindUs() {
  return (
    <Section background="image" id="find-us" title={'Find Us'}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.5663927076844!2d0.14727977590241603!3d52.17857666145246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d87a88d174cd69%3A0x349428dd3a0bc73c!2sNightingale%20Community%20Garden!5e0!3m2!1spt-BR!2suk!4v1704628569151!5m2!1spt-BR!2suk"
        width="600"
        height="450"
        className={styles.map}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Section>
  );
}
