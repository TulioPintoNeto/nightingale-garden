import React from "react";
import styles from "./styles.module.scss";
import { Container } from "(view)/components/Container";
import { Title } from "(view)/components/Title";

interface Props {}

export function OpeningTimes({}: Props) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("gardenatnightingale@gmail.com");
  };

  return (
    <Container padding>
      <section id="opening-times" className={styles.openingTimesSection}>
        <div className={styles.contentContainer}>
          <Title>Opening Times</Title>
          <p>
            We are open during the following hours. Please note that these times
            are subject to change.
          </p>

          <div className={styles.highlighted}>
            <p className={styles.highlighted}>
              <strong>Everyday</strong>
            </p>
            <p className={styles.highlighted}>
              Between <strong>10am</strong> and <strong>6pm</strong>
            </p>
          </div>

          <p>
            The exact times depend on the availability of volunteers to do the
            gate. In Summer, it is open later into the evening.
          </p>

          <p>
            For special events or requests, please contact us for additional
            opening times.
          </p>
        </div>
      </section>
    </Container>
  );
}
