/* ==========================================
   FECHAS CORRECTAS
   CAMBIA ESTAS FECHAS POR LAS TUYAS
========================================== */

const respuestas = {
  1: "2024-10-15", // Nos conocimos

  2: "2025-09-13", // Primera cita

  3: "2026-05-30", // Primer cumpleaños juntos
};

let aciertos = 0;

let desbloqueadas = [];

/* ==========================================
   VALIDAR FECHAS
========================================== */

function comprobarFecha(numero) {
  if (desbloqueadas.includes(numero)) {
    return;
  }

  const input = document.getElementById("fecha" + numero);

  const valor = input.value;

  if (valor === respuestas[numero]) {
    desbloqueadas.push(numero);

    aciertos++;

    input.disabled = true;

    actualizarProgreso();

    mostrarCorrecto();
  } else {
    mostrarIncorrecto();
  }
}

/* ==========================================
   ACTUALIZAR PROGRESO
========================================== */

function actualizarProgreso() {
  const porcentaje = (aciertos / 3) * 100;

  document.getElementById("progressBar").style.width = porcentaje + "%";

  document.getElementById("progressText").innerHTML =
    aciertos + " de 3 recuerdos desbloqueados";

  if (aciertos === 3) {
    document.getElementById("mensajeFinal").style.display = "block";

    crearConfeti();
  }
}

/* ==========================================
   MENSAJE CORRECTO
========================================== */

function mostrarCorrecto() {
  crearConfeti();

  alert("❤️ ¡Correcto! Has desbloqueado un recuerdo.");
}

/* ==========================================
   MENSAJE INCORRECTO
========================================== */

function mostrarIncorrecto() {
  alert("❌ Esa fecha no es correcta. Intenta nuevamente.");
}

/* ==========================================
   CONFETI
========================================== */

function crearConfeti() {
  for (let i = 0; i < 100; i++) {
    const confeti = document.createElement("div");

    confeti.className = "confetti";

    confeti.style.left = Math.random() * 100 + "vw";

    confeti.style.top = "-20px";

    confeti.style.background = colorRandom();

    confeti.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.body.appendChild(confeti);

    setTimeout(() => {
      confeti.remove();
    }, 5000);
  }
}

/* ==========================================
   COLORES
========================================== */

function colorRandom() {
  const colores = [
    "#FFD700",

    "#00BCD4",

    "#FF4081",

    "#4CAF50",

    "#FFFFFF",

    "#FFC107",
  ];

  return colores[Math.floor(Math.random() * colores.length)];
}

/* ==========================================
   ANIMACIÓN DE LA BARRA
========================================== */

const barra = document.getElementById("progressBar");

if (barra) {
  barra.style.transition = "width .7s ease";
}

/* ==========================================
   EFECTO DE ENTRADA
========================================== */

window.addEventListener("load", () => {
  document.body.style.opacity = "0";

  document.body.style.transition = ".8s";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});
