'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import styles from './layout.module.css';

export default function ClientLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const handleProfileClick = () => {
    router.push('/settings');
  };

  return (
    <div className={styles.layoutContainer}>
      <aside className={styles.sidebarLeftContainer}>
        <div className={styles.sidebarLeftContent}>
          <h1 className={styles.sidebarLeftTitle}>
            <Link href="/">SAC</Link>
          </h1>

          <nav className={styles.sidebarLeftNav}>
            <Link href="/about">Nosotros</Link>
            <a href="#">Horario Del Estudiante</a>
            <a href="#">Matricula Individual</a>
            <a href="#">Semaforo Del Estudiante</a>
            <a href="#">Notas Registradas</a>
            <a href="#">Historico De Notas</a>
          </nav>

          <div className={styles.sidebarLeftFooter}>
            <Image 
              src="/santoTomasDarkBanerLogo.png" 
              alt="Universidad Santo Tomás Villavicencio" 
              width={200}     
              height={160} 
              className={styles.sidebarLeftLogo}
              priority
            />
          </div>
        </div>            
      </aside>

      <div className={styles.contentContainer}>          
        <main id="main-content" className={styles.main}>
          
          <div 
            className={styles.profileButton} 
            onMouseEnter={() => setSidebarOpen(true)}
            onMouseLeave={() => setSidebarOpen(false)}
            onClick={handleProfileClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleProfileClick();
              }
            }}
          >
            LC
          </div>

          {children} 

          <aside 
            className={`${styles.innerSidebar} ${sidebarOpen ? styles.open : ""}`}
            onMouseEnter={() => setSidebarOpen(true)}
            onMouseLeave={() => setSidebarOpen(false)}
          >
            <div className={styles.userInfo}>
              <div>
                <p className={styles.userName}>Lauren Castro</p>
                <p className={styles.userCC}>CC: 1122515214</p>
              </div>
            </div>
    
            <div className={styles.notificationsContainer}>
              <div className={styles.notificationsTextContainer}>
                <h3>Notificaciones</h3>
                <h2>Avisos</h2>
              </div>
              <ul className={styles.notifications}>
                <li>
                  <p className={styles.notificationsTitle}>Evaluación Docente Pendiente</p>
                  <p className={styles.notificationsText}>El periodo de evaluación docente estará habilitado...</p>
                </li>
                <li>
                  <p className={styles.notificationsTitle}>Problemas de Inscripción</p>
                  <p className={styles.notificationsText}>Hace falta el pago de la matrícula...</p>
                </li>
                <li>
                  <p className={styles.notificationsTitle}>Estado de Solicitud</p>
                  <p className={styles.notificationsText}>Su certificado de notas está disponible...</p>
                </li>
              </ul>
            </div>
          
            <p className={styles.contact}>
              Contactar al: <a href="tel:86614361">86614361</a>
            </p>
          </aside>
        </main>              
      </div>
    </div>
  );
}
