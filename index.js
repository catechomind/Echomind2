import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Echomind</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>EchoMind</h1>
        <h2 className={styles.subtitle}>Welcome back, Cat</h2>
        <p className={styles.prompt}>What’s on your mind today?</p>

        <button className={styles.brainerButton}>
          🧠 Brainer
        </button>

        <div className={styles.searchBox}>
          🔍 Search Memory
        </div>

        <div className={styles.categories}>
          <div className={styles.category}>💡 Ideas</div>
          <div className={styles.category}>❤️ Goals</div>
          <div className={styles.category}>💭 Dreams</div>
          <div className={styles.category}>📓 Journal</div>
        </div>

        <div className={styles.highlights}>
          <h3>This Week’s Highlights</h3>
          <p>You talked a lot about launching a business. Here’s what you said...</p>
        </div>
      </main>
    </div>
  );
}
