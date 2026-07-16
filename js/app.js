/* ===========================================
   CONFIGURACIÓN
=========================================== */

// Cambia esta fecha por el día en que empezaron su relación
const fechaRelacion = new Date("2025-10-24");

// Elemento donde aparecen los días
const dias = document.getElementById("dias");

/* ===========================================
   CONTADOR DE DÍAS
=========================================== */

function actualizarDias() {
  if (!dias) return;

  const hoy = new Date();

  const diferencia = hoy - fechaRelacion;

  const totalDias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  dias.textContent = totalDias;
}

actualizarDias();

/* ===========================================
   BOTÓN DEL REGALO
=========================================== */

const boton = document.querySelector(".btn-regalo");

if (boton) {
  boton.addEventListener("click", abrirRegalo);
}

function abrirRegalo() {
  crearConfeti();

  crearCorazones();

  boton.innerHTML = "❤️ Abriendo sorpresa...";

  boton.disabled = true;

  setTimeout(() => {
    window.location.href = "games.html";
  }, 2500);
}

/* ===========================================
   CONFETI
=========================================== */

function crearConfeti() {
  for (let i = 0; i < 120; i++) {
    const confeti = document.createElement("div");

    confeti.classList.add("confetti");

    confeti.style.left = Math.random() * 100 + "vw";

    confeti.style.top = "-20px";

    confeti.style.background = colores();

    confeti.style.animationDuration = Math.random() * 3 + 2 + "s";

    confeti.style.opacity = Math.random();

    confeti.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(confeti);

    setTimeout(() => {
      confeti.remove();
    }, 5000);
  }
}

/* ===========================================
   COLORES DEL CONFETI
=========================================== */

function colores() {
  const lista = [
    "#FFD700",

    "#FF4D6D",

    "#4ECDC4",

    "#1A73E8",

    "#FFFFFF",

    "#F4C542",
  ];

  return lista[Math.floor(Math.random() * lista.length)];
}

/* ===========================================
   CORAZONES
=========================================== */

function crearCorazones() {
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const corazon = document.createElement("div");

      corazon.innerHTML = "❤";

      corazon.className = "heart";

      corazon.style.left = Math.random() * 100 + "vw";

      corazon.style.fontSize = 20 + Math.random() * 30 + "px";

      corazon.style.animationDuration = 3 + Math.random() * 2 + "s";

      document.body.appendChild(corazon);

      setTimeout(() => {
        corazon.remove();
      }, 5000);
    }, i * 150);
  }
}

/* ===========================================
   MÚSICA (SE ACTIVARÁ MÁS ADELANTE)
=========================================== */

let musica = null;

function iniciarMusica() {
  if (musica) return;

  musica = new Audio("music/cancion.mp3");

  musica.loop = true;

  musica.volume = 0.5;

  musica.play();
}

/* ===========================================
   EFECTO AL CARGAR LA PÁGINA
=========================================== */

window.addEventListener("load", () => {
  document.body.style.opacity = "0";

  document.body.style.transition = "1s";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

/* ===========================================
   EFECTO PARALLAX SUAVE
=========================================== */

window.addEventListener("scroll", () => {
  const regalo = document.querySelector(".gift");

  if (!regalo) return;

  regalo.style.transform = `translateY(${window.scrollY * 0.15}px)`;
});

/* ===========================================
   MENSAJE EN CONSOLA
=========================================== */

console.log("❤️ Bienvenida a Yoiner's Day ❤️");
