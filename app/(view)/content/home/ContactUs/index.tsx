import React from 'react';
import styles from './styles.module.scss';
import { FormGroup } from '(view)/components/Form/FormGroup';
import { Button } from '(view)/components/Button';
import { Title } from '(view)/components/Title';
import { Container } from '(view)/components/Container';
import useContactUsController from '(view)/controllers/useContactUsController';

export function ContactUs() {
  const c = useContactUsController();

  return (
    <Container padding>
      <section id="contact" className={styles.section}>
        <Title>Contact Us</Title>

        <form>
          <div className={styles.row}>
            <FormGroup
              inputProps={{
                id: 'name',
                inputControls: c.nameInput,
                placeholder: 'Enter name',
                type: 'text',
              }}
              label="Name*"
            />
            <FormGroup
              inputProps={{
                id: 'exampleInputEmail1',
                inputControls: c.emailInput,
                placeholder: 'Please inform an email if you want a reply',
                type: 'email',
              }}
              label="Email address"
            />
          </div>
          <FormGroup
            inputProps={{
              id: 'message',
              inputControls: c.messageInput,
              placeholder: 'What do you want to tell us?',
              type: 'textarea',
            }}
            label="Message*"
          />
          <Button loading={c.loading} onClick={c.onSubmit} text="Submit" />
        </form>
      </section>
    </Container>
  );
}
