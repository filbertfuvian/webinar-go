import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/WebinarJoin.module.css";

export default function WebinarJoin() {
  return (
    <>
      <Head>
        <title>Request to Join Webinar</title>
        <meta name="description" content="Request to join the webinar" />
      </Head>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Webinar Prototype</h1>
          <p className={styles.topic}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula ex eu nunc consectetur, eget suscipit eros scelerisque.</p>
          <p className={styles.speaker}><strong>Speaker:</strong> John Doe</p>
          <p className={styles.date}><strong>Date:</strong> January 1, 2024</p>
        </header>
        <main className={styles.main}>
          <Link href="/webinarPlatform">
            <button className={styles.joinButton}>Join Webinar</button>
          </Link>
        </main>
        <footer className={styles.footer}>
          <p>&copy; 2023 WebinarGo. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
