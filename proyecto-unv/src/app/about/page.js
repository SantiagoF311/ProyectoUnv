import styles from "./about.module.css";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Universidad Santo Tomás</h1>

      <div className={styles.contentWrapper}>
        <article className={styles.article}>
          <section className={styles.section}>
            <h2 className={styles.subtitle}>¿Quiénes somos?</h2>
            <p className={styles.text}>
              La Universidad Santo Tomás es la primera universidad de Colombia,
              fundada en 1580 por la Orden de Predicadores (Padres Dominicos). A
              lo largo de más de cuatro siglos, ha sido referente en formación
              humanista, académica y social, comprometida con el desarrollo del
              país y con la promoción de valores éticos y ciudadanos.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subtitle}>Nuestra Misión</h2>
            <p className={styles.text}>
              Formar integralmente a profesionales y ciudadanos capaces de
              aportar al bien común mediante la investigación, la innovación, la
              extensión y la docencia, inspirados en los principios de Santo
              Tomás de Aquino: la verdad, la justicia y el servicio a la
              sociedad.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subtitle}>Nuestra Visión</h2>
            <p className={styles.text}>
              Ser reconocida nacional e internacionalmente como una universidad
              de excelencia académica y humana, líder en investigación aplicada
              y en la generación de proyectos que transformen la realidad social,
              económica y cultural de Colombia y Latinoamérica.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subtitle}>Presencia Nacional</h2>
            <p className={styles.text}>
              Contamos con una estructura multicampus que nos permite estar
              presentes en diferentes ciudades del país, como Bogotá,
              Bucaramanga, Medellín, Villavicencio y Tunja, además de Centros de
              Atención Universitaria en otras regiones, garantizando así un
              acceso más equitativo a la educación superior.
            </p>
          </section>

          <section className={styles.sectionHighlight}>
            <blockquote className={styles.quote}>
              “La Universidad Santo Tomás, fiel a su lema{" "}
              <strong>Facientes Veritatem</strong> (Hacedores de la verdad),
              trabaja cada día por la formación integral de profesionales
              comprometidos con la sociedad colombiana.”
            </blockquote>
          </section>
        </article>
      </div>
    </div>
  );
}
