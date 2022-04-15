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
          
          <a href="https://top.gg/bot/815153881217892372/invite" className={styles.card}>
            <h2> Invite the bot! &rarr;</h2>
            <p>Invite our bot and enjoy the experience!</p>
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
    </div>
  )
}
