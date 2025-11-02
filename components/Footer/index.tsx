import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>&copy; {currentYear} Nine Dragon Labs. All rights reserved.</p>
          <div className={styles.contact}>
            <a href="mailto:info@ninedragonlabs.com" className={styles.link}>
              info@ninedragonlabs.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
