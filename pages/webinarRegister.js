import Head from "next/head";
import styles from "@/styles/WebinarRegister.module.css";

export default function WebinarRegister() {
  return (
    <>
      <Head>
        <title>Register for Webinar</title>
        <meta name="description" content="Register for the upcoming webinar" />
      </Head>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Register for Webinar</h1>
          <p>Fill out the form below to register for the upcoming webinar.</p>
        </header>
        <main className={styles.main}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="webinar">Select Webinar:</label>
              <select id="webinar" name="webinar" required>
                <option value="webinar1">Webinar 1</option>
                <option value="webinar2">Webinar 2</option>
                <option value="webinar3">Webinar 3</option>
              </select>
            </div>
            <button type="submit" className={styles.submitButton}>Register</button>
          </form>
        </main>
        <footer className={styles.footer}>
          <p>&copy; 2023 WebinarGo. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}