
import styles from './layout.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        2015 Universidad Santo Tomás - Villavicencio - PBX (608) 678 43 83
      </p>
      <p>
        Campus Aguas Claras: Carrera 22 con Calle 1a - Vía Puerto López / Campus Loma Linda: Carrera 48 N° 19 - 95 Sur - Vía Acacías, Villavicencio, Meta
      </p>
      <p>Notificaciones Judiciales y/o Extrajudiciales</p>
      <p>
        El siguiente correo es de uso exclusivo para juzgados, tribunales y altas cortes o requerimientos de autoridades administrativas: <a href="mailto:juridica@ustavillavicencio.edu.co">juridica@ustavillavicencio.edu.co</a>
      </p>
      <p>© Todos los derechos reservados</p>
    </footer>
  );
}
