// Estructura principal: estudiante con notas por periodo
export const students = [
  {
    id: 1029642802,
    name: "Santiago Fonseca",
    periodos: {
      "2025-1": [
        { materia: "Matemáticas", nota: 4.5 },
        { materia: "Sociales", nota: 4.5 },
        { materia: "Física", nota: 3.8 }
      ],
      "2025-2": [
        { materia: "Catedra", nota: 4.5 },
        { materia: "Programación", nota: 4.2 },
        { materia: "Bases de Datos", nota: 4.0 }
      ]
    }
  },
  {
    id: 1002345678,
    name: "María Pérez",
    periodos: {
      "2025-1": [
        { materia: "Matemáticas", nota: 4.7 },
        { materia: "Lengua", nota: 4.3 }
      ],
      "2025-2": [
        { materia: "Historia", nota: 3.9 },
        { materia: "Inglés", nota: 4.6 }
      ]
    }
  },
  {
    id: 1011222333,
    name: "Carlos Gómez",
    periodos: {
      "2025-1": [
        { materia: "Programación", nota: 3.5 },
        { materia: "Bases de Datos", nota: 3.9 }
      ],
      "2025-2": [
        { materia: "Redes", nota: 4.1 },
        { materia: "Sistemas Operativos", nota: 4.0 }
      ]
    }
  }
];

// Compatibilidad: construir lista plana `notas` a partir de `students`
export const notas = students.flatMap(student =>
  Object.entries(student.periodos).flatMap(([periodo, asignaturas]) =>
    asignaturas.map(item => ({
      id: student.id,
      name: student.name,
      periodo,
      materia: item.materia,
      nota: item.nota,
    }))
  )
);
