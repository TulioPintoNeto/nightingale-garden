import React, { PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import { Title } from '../Title';
import { Container } from '../Container';

type Props = PropsWithChildren & {
  id: string;
  title: string;
};

export function Section({ children, id, title }: Props) {
  return (
    <Container padding>
      <section id={id} className={styles.section}>
        <Title>{title}</Title>
        {children}
      </section>
    </Container>
  );
}
