
'use client';

import Link from 'next/link';
import styles from './layout.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        <Link href="/">SAC</Link>
      </h1>
      <nav className={styles.headerNav}>
        <Link href="/" className={pathname === '/' ? styles.activeLink : ''}>
          Inicio
        </Link>
        <Link href="/matricula" className={pathname === '/matricula' ? styles.activeLink : ''}>
          Matricula
        </Link>
        <Link href="/solicitudes" className={pathname === '/solicitudes' ? styles.activeLink : ''}>
          Solicitudes
        </Link>
        <Link href="/horarios" className={pathname === '/horarios' ? styles.activeLink : ''}>
          Horarios
        </Link>
        <Link href="/informacion" className={pathname === '/informacion' ? styles.activeLink : ''}>
          Información
        </Link>
        <Link href="/grado" className={pathname === '/grado' ? styles.activeLink : ''}>
          Grado
        </Link>
      </nav>
      <div className={styles.profileButton}>LC</div>
    </header>
  );
}
