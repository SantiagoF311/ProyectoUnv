'use client';

import { useState } from 'react';
import { notas } from '../data/data';
import { getStudentData } from '../scripts/notas';
import styles from './notas.module.css';

export default function NotasPage() {
  const [studentId, setStudentId] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [filteredNotas, setFilteredNotas] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [average, setAverage] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // Obtener períodos únicos de las notas
  const periodos = [...new Set(notas.map(nota => nota.periodo))].sort().reverse();

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (!studentId || !periodo) {
      alert('Por favor, ingrese su ID y seleccione un período');
      return;
    }

    // Usar la función del script notas.js
    const studentData = getStudentData(studentId, periodo);

    if (studentData.notas.length === 0) {
      alert('No se encontraron notas para el ID y período ingresados');
      setShowResults(false);
      return;
    }

    setStudentName(studentData.studentName);
    setAverage(studentData.average.toFixed(2));
    setFilteredNotas(studentData.notas);
    setShowResults(true);
  };

  const handleReset = () => {
    setStudentId('');
    setPeriodo('');
    setFilteredNotas([]);
    setStudentName('');
    setAverage(null);
    setShowResults(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Consultar Notas</h1>
        <p>Ingrese su número de identificación y seleccione el período académico</p>
      </div>

      <form className={styles.searchForm} onSubmit={handleSearch}>
        <div className={styles.formGroup}>
          <label htmlFor="studentId">Número de Identificación</label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Ej: 1029642802"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="periodo">Período Académico</label>
          <select
            id="periodo"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            required
          >
            <option value="">Seleccione un período</option>
            {periodos.map((per) => (
              <option key={per} value={per}>
                {per}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.searchButton}>
            Consultar Notas
          </button>
          {showResults && (
            <button type="button" onClick={handleReset} className={styles.resetButton}>
              Nueva Búsqueda
            </button>
          )}
        </div>
      </form>

      {showResults && (
        <div className={styles.results}>
          <div className={styles.studentInfo}>
            <h2>Información del Estudiante</h2>
            <div className={styles.infoCard}>
              <p><strong>Nombre:</strong> {studentName}</p>
              <p><strong>ID:</strong> {studentId}</p>
              <p><strong>Período:</strong> {periodo}</p>
              <p className={styles.average}><strong>Promedio:</strong> {average}</p>
            </div>
          </div>

          <div className={styles.notasTable}>
            <h2>Calificaciones</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Materia</th>
                  <th>Nota</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {filteredNotas.map((nota, index) => (
                  <tr key={index}>
                    <td>{nota.materia}</td>
                    <td className={styles.notaCell}>{nota.nota}</td>
                    <td>
                      <span className={nota.nota >= 3.0 ? styles.aprobado : styles.reprobado}>
                        {nota.nota >= 3.0 ? 'Aprobado' : 'Reprobado'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

