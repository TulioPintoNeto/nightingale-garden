import React, { ComponentProps, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import { Title } from '../Title';
import { Container } from '../Container';

type ContainerProps = ComponentProps<typeof Container>;

type Props = PropsWithChildren & {
  background?: ContainerProps['background'];
  id: string;
  title: string;
};

export function Section({ background, children, id, title }: Props) {
  return (
    <Container padding background={background}>
      <section id={id} className={styles.section}>
        <Title>{title}</Title>
        {children}
      </section>
    </Container>
  );
}
