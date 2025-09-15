'use client';

import React from 'react';
import styles from '../settings.module.css'; 

export default function AccountSettingsForm() {
  return (
    <form className={styles.formContainer}>
      <div className={styles.formElementContainer}>
        <label htmlFor="nombre">Nombre:</label>
        <input className={styles.ingresado} type="text" id="nombre" name="nombre" />
      </div>

      <div className={styles.formElementContainer}>
        <label htmlFor="correo">Correo:</label>
        <input className={styles.ingresado} type="email" id="correo" name="correo" />
      </div>

      <div className={styles.formElementContainer}>
        <label htmlFor="numero">Número:</label>
        <input className={styles.ingresado} type="text" id="numero" name="numero" />
      </div>

      <div className={styles.formElementContainer}>
        <label htmlFor="direccion">Dirección:</label>
        <input className={styles.ingresado} type="text" id="direccion" name="direccion" />
      </div>

      <button className={styles.submitButton} type="submit">Enviar</button>
    </form>
  );
}
