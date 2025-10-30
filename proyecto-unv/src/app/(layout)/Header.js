
'use client';

import Link from 'next/link';
import styles from './layout.module.css';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { toggleTheme } from '../scripts/theme';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const attr = document.documentElement.getAttribute('data-theme');
      if (attr) {
        setIsDark(attr === 'dark');
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(prefersDark);
      }
    }
  }, []);

  const onToggleTheme = useCallback(() => {
    toggleTheme();
    const updated = document.documentElement.getAttribute('data-theme');
    if (updated) {
      setIsDark(updated === 'dark');
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  return (
    <header className={`${styles.header} ${isHome ? styles.headerTransparent : ''}`}>
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
        <Link href="/notas" className={pathname === '/notas' ? styles.activeLink : ''}>
          Consultar Notas
        </Link>
        <Link href="/informacion" className={pathname === '/informacion' ? styles.activeLink : ''}>
          Información
        </Link>
        <Link href="/grado" className={pathname === '/grado' ? styles.activeLink : ''}>
          Grado
        </Link>
        <button onClick={onToggleTheme} aria-label="Cambiar tema" className={styles.themeButton}>
          {isDark ? 'Light' : 'Dark'}
        </button>
      </nav>
    </header>
  );
}
