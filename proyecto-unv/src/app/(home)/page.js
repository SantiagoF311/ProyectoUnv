import styles from "./home.module.css";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Inscripciones abiertas para el curso de Excel",
      description:
        "Ya puedes registrarte en el curso de Excel intermedio. Cupos limitados.",
      author: "Coordinación Académica",
      date: "27 Ago 2025",
      tag: "Cursos",
    },
    {
      id: 2,
      title: "Inscripciones abiertas para antiguos",
      description:
        "Si eres estudiante antiguo, recuerda realizar la inscripción antes del 15 de septiembre.",
      author: "Secretaría",
      date: "25 Ago 2025",
      tag: "Admisiones",
    },
    {
      id: 3,
      title: "Nueva sala disponible en las instalaciones",
      description:
        "Se habilitó la sala de estudio 304 en el bloque C para uso libre de estudiantes.",
      author: "Bienestar Universitario",
      date: "20 Ago 2025",
      tag: "Noticias",
    },
    {
      id: 4,
      title: "Convocatoria abierta para monitorías académicas",
      description:
        "Los estudiantes con promedio superior a 4.0 pueden aplicar hasta el 10 de septiembre.",
      author: "Decanatura",
      date: "18 Ago 2025",
      tag: "Convocatorias",
    },
    {
      id: 5,
      title: "Se actualizó el reglamento estudiantil",
      description:
        "Consulta el nuevo reglamento estudiantil disponible en la página institucional.",
      author: "Consejo Académico",
      date: "15 Ago 2025",
      tag: "Normatividad",
    },
    {
      id: 6,
      title: "Torneo interno de fútbol",
      description:
        "Las inscripciones para el torneo interno están abiertas hasta el 5 de septiembre.",
      author: "Bienestar Deportivo",
      date: "10 Ago 2025",
      tag: "Deportes",
    },
    {
      id: 7,
      title: "Semana de la Ciencia y Tecnología",
      description:
        "Del 12 al 16 de septiembre se realizarán charlas y talleres con invitados internacionales.",
      author: "Facultad de Ingeniería",
      date: "05 Ago 2025",
      tag: "Eventos",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Reportes importantes</h1>
      <div className={styles.postsWrapper}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <div className={styles.postHeader}>
              <span className={styles.postTag}>{post.tag}</span>
              <span className={styles.postDate}>{post.date}</span>
            </div>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postDescription}>{post.description}</p>
            <div className={styles.postFooter}>
              <span className={styles.postAuthor}>✍ {post.author}</span>
              <button className={styles.postButton}>Ver más</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
