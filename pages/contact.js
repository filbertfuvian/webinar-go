import Head from "next/head";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us" />
      </Head>
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>Contact Us</h1>
        <p className={styles.pageDescription}>This is the Contact page. Here you can get in touch with us.</p>
      </div>
    </>
  );
}