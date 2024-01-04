import React from "react";
import styles from "./styles.module.scss";
import { Container } from "(view)/components/Container";
import { Title } from "(view)/components/Title";
import { AboutText } from "./AboutText";
import Image from "next/image";

export function About() {
  return (
    <Container backgroundColor="green" padding>
      <section id="about">
        <Title>About</Title>
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
      </section>
    </Container>
  );
}
