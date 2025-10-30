import { notas, students } from '../data/data';


export const getStudentData = (id, periodo) => {
    const student = students.find(s => s.id.toString() === id.toString());
    if (!student) {
        return { notas: [], studentName: null, average: null };
    }
    const materiasDelPeriodo = (student.periodos && student.periodos[periodo]) || [];

    // Adaptar al formato plano esperado por la UI
    const fromStudents = materiasDelPeriodo.map(item => ({
        id: student.id,
        name: student.name,
        periodo,
        materia: item.materia,
        nota: item.nota,
    }));

    // Fallback/merge: también tomar de la lista plana por si hay desincronización
    const fromFlat = notas.filter(
        n => n.id.toString() === id.toString() && n.periodo === periodo
    );

    // Unir y deduplicar por materia (prioriza datos de students)
    const mergedMap = new Map();
    for (const n of [...fromFlat, ...fromStudents]) {
        if (!mergedMap.has(n.materia)) mergedMap.set(n.materia, n);
        else if (fromStudents.find(s => s.materia === n.materia)) {
            mergedMap.set(n.materia, fromStudents.find(s => s.materia === n.materia));
        }
    }
    const merged = Array.from(mergedMap.values());
    if (!merged.length) {
        return { notas: [], studentName: student.name, average: null };
    }

    const average = getStudentAverage(merged);

    return { notas: merged, studentName: student.name, average };
}

const getStudentAverage = (notasArray) => {
    if (!notasArray || notasArray.length === 0) {
        return 0;
    }
    const suma = notasArray.reduce((acc, nota) => acc + nota.nota, 0);
    return suma / notasArray.length;
}
