'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './home.module.css';
import { validateForm, validateNombre, validateEmail, validateTelefono, validateAsunto, validateMensaje } from '../scripts/formulario';

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validar campo cuando pierde el foco
    let validation = {};
    switch (name) {
      case 'nombre':
        validation = validateNombre(value);
        break;
      case 'email':
        validation = validateEmail(value);
        break;
      case 'telefono':
        validation = validateTelefono(value);
        break;
      case 'asunto':
        validation = validateAsunto(value);
        break;
      case 'mensaje':
        validation = validateMensaje(value);
        break;
      default:
        break;
    }

    if (!validation.isValid) {
      setErrors(prev => ({
        ...prev,
        [name]: validation.message
      }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Marcar todos los campos como tocados
    const allTouched = {
      nombre: true,
      email: true,
      telefono: true,
      asunto: true,
      mensaje: true
    };
    setTouched(allTouched);

    // Validar el formulario completo
    const validation = validateForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Aquí iría la lógica de envío del formulario
    try {
      // Simulación de envío
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('¡Mensaje enviado exitosamente!');
      
      // Limpiar formulario
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
      setErrors({});
      setTouched({});
    } catch (error) {
      alert('Error al enviar el mensaje. Por favor, intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image
          src="/imgHeader.jpg"
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

      <div className={styles.bannerIntermediate}>
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

      <div className={styles.contactSection}>
        <h2>Formulario de contacto</h2>
        <div className={styles.contactContainer}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="nombre">Nombre completo</label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={formData.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.nombre && touched.nombre ? styles.error : ''}
              />
              {errors.nombre && touched.nombre && (
                <span className={styles.errorMessage}>{errors.nombre}</span>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Correo electrónico</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? styles.error : ''}
              />
              {errors.email && touched.email && (
                <span className={styles.errorMessage}>{errors.email}</span>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="telefono">Teléfono</label>
              <input 
                type="tel" 
                id="telefono" 
                name="telefono" 
                value={formData.telefono}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.telefono && touched.telefono ? styles.error : ''}
              />
              {errors.telefono && touched.telefono && (
                <span className={styles.errorMessage}>{errors.telefono}</span>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="asunto">Asunto</label>
              <input 
                type="text" 
                id="asunto" 
                name="asunto" 
                value={formData.asunto}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.asunto && touched.asunto ? styles.error : ''}
              />
              {errors.asunto && touched.asunto && (
                <span className={styles.errorMessage}>{errors.asunto}</span>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="mensaje">Mensaje</label>
              <textarea 
                id="mensaje" 
                name="mensaje" 
                rows="5" 
                value={formData.mensaje}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.mensaje && touched.mensaje ? styles.error : ''}
              ></textarea>
              {errors.mensaje && touched.mensaje && (
                <span className={styles.errorMessage}>{errors.mensaje}</span>
              )}
            </div>
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
