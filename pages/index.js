import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>WebinarGo</title>
        <meta name="description" content="Join live webinars and learn from experts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <header className={styles.header}>
          <Image
            src="/icon.png"
            alt="Webinar Platform Logo"
            width={150}
            height={50}
            priority
          />
          <h1>Welcome to WebinarGo</h1>
          <p>Join live webinars and learn from experts in various fields.</p>
        </header>
        <main className={styles.main}>
          <section className={styles.featuredWebinars}>
            <h2>Featured Webinars</h2>
            <div className={styles.webinarList}>
              <Link href="/webinarJoin">
                <div className={styles.webinarItem}>
                  <Image
                    src="/icon.png"
                    alt="Webinar Prototype"
                    width={300}
                    height={200}
                  />
                  <h3>Webinar Prototype</h3>
                  <p>Join us for an in-depth discussion on topic.</p>
                </div>
              </Link>
              <div className={styles.webinarItem}>
                <Image
                  src="/icon.png"
                  alt="Webinar 2"
                  width={300}
                  height={200}
                />
                <h3>Webinar Title 2</h3>
                <p>Learn the latest trends in topic 2.</p>
              </div>
              <div className={styles.webinarItem}>
                <Image
                  src="/icon.png"
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
          <p>&copy; 2023 WebinarGo. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
