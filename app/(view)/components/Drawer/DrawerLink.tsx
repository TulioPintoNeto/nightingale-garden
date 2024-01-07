import React from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  onClick: () => void;
  text: string;
};

export const DrawerLink = ({ href, onClick, text }: Props) => {
  return (
    <Link href={href} onClick={onClick}>
      {text}
    </Link>
  );
};
