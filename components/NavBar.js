import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/NavBar.module.css';

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <Link href="/" className={styles.logo}>
                    <img src="/icon.png" alt="Logo" className={styles.logoImage} />
                </Link>
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
            </div>
            <div className={styles.right}>
                <div className={styles.profile} onClick={toggleMenu}>
                    <span className={styles.profileText}>Profile</span>
                    <img src="/icon.png" alt="Profile" className={styles.profileImage} />
                </div>
                {menuOpen && (
                    <div className={styles.menu}>
                        {isLoggedIn ? (
                            <>
                                <Link href="/profile" className={styles.menuItem}>
                                    Profile Settings
                                </Link>
                                <Link href="/logout" className={styles.menuItem}>
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className={styles.menuItem}>
                                    Login
                                </Link>
                                <Link href="/register" className={styles.menuItem}>
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;