
const div = document.getElementById("simulacion");

div.innerHTML = `
  <p>Ves un semáforo en rojo. ¿Qué haces?</p>
  <button onclick="alert('Correcto. Espera el verde.')">Esperar</button>
  <button onclick="alert('Incorrecto. Respeta las señales.')">Cruzar</button>

  <p>Te acercas a una rotonda. ¿A quién cedes el paso?</p>
  <button onclick="alert('Correcto. A los que ya están dentro.')">Vehículos en la rotonda</button>
  <button onclick="alert('Incorrecto. Debes ceder el paso.')">Yo paso primero</button>

  <p>Está lloviendo y la visibilidad es baja. ¿Qué haces?</p>
  <button onclick="alert('Correcto. Reduce la velocidad y enciende luces.')">Reducir velocidad</button>
  <button onclick="alert('Incorrecto.')">Seguir igual</button>

  <p>Un peatón está cruzando en paso de cebra.</p>
  <button onclick="alert('Correcto.')">Detenerse</button>
  <button onclick="alert('Incorrecto.')">Acelerar</button>

  <p>Estás en una calle de doble sentido con línea continua.</p>
  <button onclick="alert('Correcto. No debes adelantar.')">No adelantar</button>
  <button onclick="alert('Incorrecto.')">Adelantar igual</button>

  <p>Un niño cruza inesperadamente.</p>
  <button onclick="alert('Correcto. Siempre atento y frena.')">Frenar de inmediato</button>
  <button onclick="alert('Incorrecto.')">No frenar</button>
`;
