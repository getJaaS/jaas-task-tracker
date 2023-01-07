import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>JaaS Task Tracker</title>
        <meta name="description" content="JaaS Task Tracker Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            This is the JaaS Task Tracker.
          </p>
        </div>

        <div className={`${styles.center} ${styles.logo}`}>
          <Image
            className={styles.logo}
            src="/jaas-logo.png"
            alt="JAAS Logo"
            fill
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Get Started <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get started with the JaaS Task Tracker.
            </p>
          </a>

          <a
            href="/signup"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Sign Up <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Create an account.
            </p>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Sign In <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Log into your account.
            </p>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn More <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get more information about the Task Tracker.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
