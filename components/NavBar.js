import Link from 'next/link';
import styles from '@/styles/NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/" className={styles.navLink}>
                        Home
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/about" className={styles.navLink}>
                        About
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/contact" className={styles.navLink}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;