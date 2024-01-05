import React from 'react';
import styles from './styles.module.scss';
import { FormGroup } from '(view)/components/Form/FormGroup';
import { Button } from '(view)/components/Button';
import { Title } from '(view)/components/Title';
import { Container } from '(view)/components/Container';

export function ContactUs() {
    return (
        <Container padding>
            <section id="contact" className={styles.section}>
                <Title>Contact Section</Title>
                <p>This is the contact section content.</p>

                <form>
                    <FormGroup
                        id="exampleInputEmail1"
                        label="Email address"
                        placeholder="Enter email"
                        type="email"
                    />
                    <FormGroup
                        id="name"
                        label="Name"
                        placeholder="Enter name"
                        type="text"
                    />
                    <FormGroup
                        id="message"
                        label="Message"
                        placeholder="What do you want to tell us?"
                        type="text"
                    />
                    <Button text="Submit" />
                </form>
            </section>
        </Container>
    );
}
