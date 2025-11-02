import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Nine Dragon Labs
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/blog" className={styles.link}>
                Blog
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/users" className={styles.link}>
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
