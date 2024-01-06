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
                            id="name"
                            inputControls={c.nameInput}
                            label="Name*"
                            placeholder="Enter name"
                            type="text"
                        />
                        <FormGroup
                            id="exampleInputEmail1"
                            inputControls={c.emailInput}
                            label="Email address"
                            placeholder="Please inform an email if you want a reply"
                            type="email"
                        />
                    </div>
                    <FormGroup
                        id="message"
                        inputControls={c.messageInput}
                        label="Message*"
                        placeholder="What do you want to tell us?"
                        type="textarea"
                    />
                    <Button text="Submit" />
                </form>
            </section>
        </Container>
    );
}
