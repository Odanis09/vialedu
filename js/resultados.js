// js/resultados.js
import { db, collection, getDocs } from './firebase-config.js';

const tbody = document.querySelector("#tablaResultados tbody");

async function cargarResultados() {
  try {
    const querySnapshot = await getDocs(collection(db, "resultados"));

    tbody.innerHTML = ""; // Limpiar antes de cargar

    querySnapshot.forEach((doc) => {
      const r = doc.data();
      const fecha = r.fecha?.seconds
        ? new Date(r.fecha.seconds * 1000).toLocaleString()
        : "Sin fecha";
      const fila = `
        <tr>
          <td>${r.nombre}</td>
          <td>${r.correo}</td>
          <td>${r.puntaje}</td>
          <td>${fecha}</td>
        </tr>`;
      tbody.innerHTML += fila;
    });

  } catch (error) {
    console.error("Error al cargar resultados:", error);
    tbody.innerHTML = `<tr><td colspan="4">Error al cargar resultados.</td></tr>`;
  }
}

cargarResultados();
