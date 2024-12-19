import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/WebinarPlatform.module.css";

export default function WebinarPlatform() {
  return (
    <>
      <Head>
        <title>Webinar</title>
        <meta name="description" content="Webinar Page" />
      </Head>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Webinar Session</h1>
        </header>
        <main className={styles.main}>
          <section className={styles.webinarContent}>
            <Image
              src="/icon.png"
              alt="Webinar Placeholder"
              width={800}
              height={450}
            />
          </section>
          <section className={styles.chatSection}>
            <h2>Webinar Chat</h2>
            <div className={styles.chatBox}>
              <p className={styles.chatMessage}><strong>User1:</strong> Lorem ipsum dolor sit amet.</p>
              <p className={styles.chatMessage}><strong>User2:</strong> Consectetur adipiscing elit.</p>
              <input type="text" className={styles.chatInput} placeholder="Type your message..." />
            </div>
          </section>
          <button className={styles.certificateButton}>Receive Certificate</button>
        </main>
        <footer className={styles.footer}>
          <p>&copy; 2023 WebinarGo. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
