'use client';
import Head from 'next/head';
import { HomeContent } from '../content/home/HomeContent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nightingale Garden</title>
        <meta name="description" content="Welcome to Nightingale Garden - A Community Oasis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContent />
    </div>
  );
}
