import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Container } from "../../../components/Container";
import { OpeningTimes } from "../OpeningTimes";
import { About } from "../About";

export const HomeContent = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <Container>
          <div>
            <img src="/assets/logo.png" alt="Logo" className={styles.logo} />
          </div>
          <div className={styles.menu}>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </Container>
      </nav>

      <section className={styles.mainSection}>
        <h1>Nightingale Garden</h1>
        <p>For everyone to enjoy</p>
      </section>

      <OpeningTimes />
      <About />

      <section id="contact" className={styles.contactSection}>
        <h2>Contact Section</h2>
        <p>This is the contact section content.</p>
      </section>
    </div>
  );
};
