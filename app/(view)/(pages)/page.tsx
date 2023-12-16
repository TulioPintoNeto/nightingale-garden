import Head from 'next/head';
import { HomeContent } from '../components/home/HomeContent';
// import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    // <div className={styles.container}>
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
