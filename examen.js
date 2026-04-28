const preguntas = [
    {
        pregunta: "¿Qué elemento especial permite recorrer los registros de un fichero encadenado en un orden concreto?",
        opciones: ["Índices", "Punteros", "Huecos", "Claves"],
        correcta: 1,
        explicacion: "Los punteros permiten enlazar registros y recorrerlos en un orden determinado."
    },
    {
        pregunta: "¿Cuál es la única capa que realmente accede a los datos físicos en el disco?",
        opciones: ["Núcleo", "Sistema operativo", "Driver", "SGBD"],
        correcta: 1,
        explicacion: "El sistema operativo es quien gestiona realmente el acceso físico al disco."
    },
    {
        pregunta: "¿Qué operación prepara el fichero para su proceso inmediato?",
        opciones: ["Cerrar", "Leer", "Abrir", "Escribir"],
        correcta: 2,
        explicacion: "Abrir un fichero es el paso previo para poder trabajar con él."
    }
];

let indiceActual = 0;
let puntaje = 0;
let respondido = false;

let segundos = 0;
let intervaloCronometro;

const progreso = document.getElementById("progreso");
const cronometro = document.getElementById("cronometro");
const pregunta = document.getElementById("pregunta");
const opciones = document.getElementById("opciones");
const explicacion = document.getElementById("explicacion");
const btnSiguiente = document.getElementById("btn-siguiente");
const resultado = document.getElementById("resultado");
const puntajeFinal = document.getElementById("puntaje-final");
const btnReiniciar = document.getElementById("btn-reiniciar");

function iniciarCronometro() {
    clearInterval(intervaloCronometro);

    intervaloCronometro = setInterval(() => {
        segundos++;

        const minutos = Math.floor(segundos / 60);
        const segs = segundos % 60;

        cronometro.textContent =
            `Tiempo: ${String(minutos).padStart(2, "0")}:${String(segs).padStart(2, "0")}`;
    }, 1000);
}

function mostrarPregunta() {
    respondido = false;
    btnSiguiente.style.display = "none";
    opciones.innerHTML = "";
    explicacion.style.display = "none";

    const actual = preguntas[indiceActual];

    progreso.textContent = `Pregunta ${indiceActual + 1} de ${preguntas.length}`;
    pregunta.textContent = actual.pregunta;

    actual.opciones.forEach((opcion, index) => {
        const boton = document.createElement("button");
        boton.textContent = opcion;
        boton.addEventListener("click", () => seleccionarRespuesta(index));
        opciones.appendChild(boton);
    });
}

function seleccionarRespuesta(index) {
    if (respondido) return;

    respondido = true;
    const actual = preguntas[indiceActual];
    const correcta = actual.correcta;

    const botones = opciones.querySelectorAll("button");

    botones.forEach((btn, i) => {
        if (i === correcta) {
            btn.style.backgroundColor = "green";
            btn.style.color = "white";
        } else if (i === index) {
            btn.style.backgroundColor = "red";
            btn.style.color = "white";
        }

        btn.disabled = true;
    });

    if (index === correcta) {
        puntaje++;
    }

    explicacion.textContent = actual.explicacion;
    explicacion.style.display = "block";

    btnSiguiente.style.display = "block";
}

btnSiguiente.addEventListener("click", () => {
    indiceActual++;

    if (indiceActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
});

function mostrarResultado() {
    clearInterval(intervaloCronometro);

    progreso.style.display = "none";
    pregunta.style.display = "none";
    opciones.style.display = "none";
    explicacion.style.display = "none";
    btnSiguiente.style.display = "none";

    resultado.style.display = "block";

    puntajeFinal.textContent =
        `${puntaje}/${preguntas.length} correctas | Tiempo total: ${cronometro.textContent.replace("Tiempo: ", "")}`;
}

btnReiniciar.addEventListener("click", () => {
    indiceActual = 0;
    puntaje = 0;
    segundos = 0;

    cronometro.textContent = "Tiempo: 00:00";

    progreso.style.display = "block";
    pregunta.style.display = "block";
    opciones.style.display = "block";

    resultado.style.display = "none";

    iniciarCronometro();
    mostrarPregunta();
});

iniciarCronometro();
mostrarPregunta();
