
'use client';

import Header from './Header';
import Footer from './Footer';
import styles from './layout.module.css';

export default function ClientLayout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
