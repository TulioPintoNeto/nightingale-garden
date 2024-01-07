import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

interface Props {
  href: string;
  text: string;
}

export function Anchor({ href, text }: Props) {
  return (
    <Link className={styles.anchor} href={href}>
      {text}
    </Link>
  );
}
