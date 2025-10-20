
import Image from 'next/image';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image
          src="/stTomas.png"
          alt="Universidad Santo Tomás"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.bannerOverlay}>
            <Image
                src="/santoTomasDarkBanerLogo.png"
                alt="Universidad Santo Tomás Villavicencio"
                width={350}
                height={280}
                priority
            />
        </div>
      </div>

      <div className={styles.newsSection}>
        <div className={styles.newsCard}>
          <div className={styles.cardImage}></div>
          <div className={styles.cardText}>
            <h3>Noticia</h3>
            <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo</p>
          </div>
        </div>
        <div className={styles.newsCard}>
          <div className={styles.cardImage}></div>
          <div className={styles.cardText}>
            <h3>Noticia</h3>
            <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo</p>
          </div>
        </div>
        <div className={styles.newsCard}>
          <div className={styles.cardImage}></div>
          <div className={styles.cardText}>
            <h3>Noticia</h3>
            <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo</p>
          </div>
        </div>
        <div className={styles.newsCard}>
          <div className={styles.cardImage}></div>
          <div className={styles.cardText}>
            <h3>Noticia</h3>
            <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo</p>
          </div>
        </div>
      </div>

      <div className={styles.banner}>
        <Image
          src="/stTomas2.png"
          alt="Campus"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className={styles.nosotrosSection}>
        <h2>NOSOTROS</h2>
        <div className={styles.nosotrosContainer}>
          <div className={styles.nosotrosCard}>
            <h3>Misión</h3>
            <p>
              Formar profesionales íntegros que contribuyan al bien común mediante
              investigación, innovación, docencia y extensión, inspirados en la
              verdad, justicia y servicio.
            </p>
          </div>
          <div className={styles.nosotrosCard}>
            <h3>Visión</h3>
            <p>
              Ser universidad de excelencia reconocida en Colombia y Latinoamérica,
              líder en investigación aplicada y proyectos que transformen la
              sociedad.
            </p>
          </div>
          <div className={styles.nosotrosCard}>
            <h3>Presencia</h3>
            <p>
              Con estructura multicampus en Bogotá, Bucaramanga, Medellín,
              Villavicencio, Tunja y centros regionales, garantiza acceso
              equitativo a la educación superior.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
