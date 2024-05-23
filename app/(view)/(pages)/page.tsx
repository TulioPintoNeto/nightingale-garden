import Head from 'next/head';
import { HomeContent } from '../content/home/HomeContent';

export const metadata = {
  title: 'Nightingale Community Garden',
};

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Welcome to Nightingale Community Garden - A Community Oasis"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContent />
    </div>
  );
}
