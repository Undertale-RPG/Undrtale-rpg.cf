import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Undertale RPG</title>
        <meta name="description" content="An Undertale RPG discord bot, Fight, gain and evolve, Become the strongest in a merciless world!" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Undertale RPG!
        </h1>

        <p className={styles.description}>
          An Undertale RPG bot, Fight, gain and evolve, Become the strongest in a merciless world!
        </p>

        <div className={styles.grid}>
          <a href="https://Will see" className={styles.card}>
            <h2>Commands list &rarr;</h2>
            <p>Look at the commands and see what can you do!</p>
          </a>

          <a href="https://github.com/LetsChill/Undertale-RPG" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Check our the source code, Contributions are open!</p>
          </a>

          <a
            href="https://discord.gg/FQYVpuNz4Q"
            className={styles.card}
          >
            <h2>Support server &rarr;</h2>
            <p>Join our community and support server, look for others, and get support there!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
