import React from "react";
import styles from "./styles.module.scss";

export function HomeContent() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Nightingale Garden</h1>

        <section>
          <h2>Contacts</h2>
          <p>Contact us at: nightingale@example.com</p>
        </section>

        <section>
          <h2>Opening Times</h2>
          <p>Visit us Monday to Friday, 9:00 AM - 5:00 PM</p>
        </section>

        <section>
          <h2>How to Volunteer</h2>
          <p>
            Interested in volunteering? Learn how to get involved and make a
            difference!
          </p>
        </section>

        <section>
          <h2>What and Who We Are</h2>
          <p>
            Welcome to Nightingale Garden, a community oasis dedicated to...
          </p>
        </section>

        <section>
          <h2>Safeguarding</h2>
          <p>
            Learn about our commitment to creating a safe and inclusive
            environment.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        {/* Add your footer content here */}
      </footer>
    </>
  );
}
