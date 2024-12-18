import Head from "next/head";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our webinar platform" />
      </Head>
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>About Us</h1>
        <p className={styles.pageDescription}>This is the About page. Here you can learn more about our webinar platform.</p>
      </div>
    </>
  );
}