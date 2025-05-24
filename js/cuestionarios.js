// js/cuestionario.js
import { db, collection, addDoc } from './firebase-config.js';

document.getElementById("quizForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const respuestas = document.querySelectorAll("input[type=radio]:checked");
  let puntaje = 0;
  respuestas.forEach((r) => {
    puntaje += parseInt(r.value);
  });

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;

  try {
    await addDoc(collection(db, "resultados"), {
      nombre: nombre,
      correo: correo,
      puntaje: puntaje,
      fecha: new Date()
    });
    alert("Resultado guardado en Firebase");
  } catch (error) {
    console.error("Error al guardar:", error);
    alert("Error al guardar resultado");
  }
});
