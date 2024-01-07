import React from 'react';
import styles from './styles.module.scss';
import { FormGroup } from '(view)/components/Form/FormGroup';
import { Button } from '(view)/components/Button';
import useContactUsController from '(view)/controllers/useContactUsController';
import { email } from 'globals/constants';
import { FeedbackMessage } from '(view)/components/FeedbackMessage';
import { Section } from '(view)/components/Section';
import { homeIdRef } from '../constants';

export function ContactUs() {
  const c = useContactUsController();
  const copyToClipboard = () => {
    navigator.clipboard.writeText('gardenatnightingale@gmail.com');
  };

  return (
    <Section id={homeIdRef.contactUs} title="Contact Us">
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
      <FeedbackMessage onClose={c.resetSuccess} show={c.success} type="success">
        <div aria-live="polite">We received your message, thanks!</div>
      </FeedbackMessage>
      <FeedbackMessage onClose={c.resetFailure} show={c.failure} type="failure">
        <div role="alert" aria-live="assertive">
          Something went wrong.
          <br />
          If the error persists please try to send your message directly to our
          email: {email}. We are sorry for the inconvenience.
        </div>
      </FeedbackMessage>
    </Section>
  );
}
