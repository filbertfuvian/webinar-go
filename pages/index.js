import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Webinar Platform</title>
        <meta name="description" content="Join live webinars and learn from experts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <header className={styles.header}>
          <Image
            src="/logo.png"
            alt="Webinar Platform Logo"
            width={150}
            height={50}
            priority
          />
          <h1>Welcome to Webinar Platform</h1>
          <p>Join live webinars and learn from experts in various fields.</p>
        </header>
        <main className={styles.main}>
          <section className={styles.featuredWebinars}>
            <h2>Featured Webinars</h2>
            <div className={styles.webinarList}>
              <div className={styles.webinarItem}>
                <Image
                  src="/webinar1.jpg"
                  alt="Webinar 1"
                  width={300}
                  height={200}
                />
                <h3>Webinar Title 1</h3>
                <p>Join us for an in-depth discussion on topic 1.</p>
              </div>
              <div className={styles.webinarItem}>
                <Image
                  src="/webinar2.jpg"
                  alt="Webinar 2"
                  width={300}
                  height={200}
                />
                <h3>Webinar Title 2</h3>
                <p>Learn the latest trends in topic 2.</p>
              </div>
              <div className={styles.webinarItem}>
                <Image
                  src="/webinar3.jpg"
                  alt="Webinar 3"
                  width={300}
                  height={200}
                />
                <h3>Webinar Title 3</h3>
                <p>Discover new insights on topic 3.</p>
              </div>
            </div>
          </section>
        </main>
        <footer className={styles.footer}>
          <p>&copy; 2023 Webinar Platform. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
