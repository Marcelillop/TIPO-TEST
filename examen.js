let preguntas = [
      {
        pregunta: "¿Qué elemento especial permite recorrer los registros de un fichero encadenado en un orden concreto?",
        opciones: ["Índices", "Punteros", "Huecos", "Claves"],
        correcta: 1,
        explicacion: "Los punteros permiten enlazar registros y recorrerlos siguiendo un orden concreto."
    },
    {
        pregunta: "¿Cuál es la única capa que realmente accede a los datos físicos en el disco?",
        opciones: ["Núcleo", "Sistema operativo", "Driver", "SGBD"],
        correcta: 1,
        explicacion: "El sistema operativo es quien gestiona el acceso físico real al disco."
    },
    {
        pregunta: "¿Qué operación prepara el fichero para su proceso inmediato?",
        opciones: ["Cerrar", "Leer", "Abrir", "Escribir"],
        correcta: 2,
        explicacion: "Abrir un fichero lo prepara para poder leerlo, escribirlo o procesarlo."
    },
    {
        pregunta: "¿Cómo se define el concepto de 'dato' en informática?",
        opciones: ["Proceso", "Recurso", "Dato", "Archivo"],
        correcta: 2,
        explicacion: "Un dato es una unidad básica de información que puede ser tratada por un sistema informático."
    },
    {
        pregunta: "¿En qué tipo de ficheros se deben leer todos los datos anteriores para llegar al registro deseado?",
        opciones: ["Secuenciales", "Encadenados", "Indexados", "Aleatorios"],
        correcta: 0,
        explicacion: "En los ficheros secuenciales se accede a los registros en orden, uno tras otro."
    },
    {
        pregunta: "¿Qué nombre recibe la secuencia de números binarios que organiza información relacionada?",
        opciones: ["Archivo", "Campo", "Puntero", "Registro"],
        correcta: 0,
        explicacion: "Un archivo es una secuencia de información almacenada de forma organizada."
    },
    {
        pregunta: "¿Quién tiene la misión de vigilar y gestionar los datos para evitar su destrucción o contaminación?",
        opciones: ["Programador", "Usuario final", "Administrador", "Diseñador"],
        correcta: 2,
        explicacion: "El administrador se encarga de proteger, mantener y gestionar los datos."
    },
    {
        pregunta: "¿Dónde deben almacenarse los datos de forma permanente en una computadora?",
        opciones: ["Buffer", "Memoria secundaria", "ATU", "Memoria RAM"],
        correcta: 1,
        explicacion: "La memoria secundaria permite almacenar datos de forma permanente, como discos duros o SSD."
    },
    {
        pregunta: "¿Cómo se conceptualiza normalmente una relación en el modelo relacional?",
        opciones: ["Grafo", "Tabla", "Objeto", "Árbol"],
        correcta: 1,
        explicacion: "En el modelo relacional, una relación se representa normalmente como una tabla."
    },
    {
        pregunta: "¿Cómo se llaman las unidades que contienen datos relativos a un mismo objeto dentro de un fichero?",
        opciones: ["Archivos", "Punteros", "Registros", "Índices"],
        correcta: 2,
        explicacion: "Los registros agrupan datos relacionados con un mismo objeto o entidad."
    },
    {
        pregunta: "¿Qué nombre reciben las bases de datos pensadas para rapidez y alta disponibilidad en servicios web?",
        opciones: ["UML", "IMS", "Codasyl", "NoSQL"],
        correcta: 3,
        explicacion: "Las bases de datos NoSQL están pensadas para escalabilidad, rapidez y alta disponibilidad."
    },
    {
        pregunta: "¿Cuál es el objetivo principal de la técnica de cifrado de datos?",
        opciones: ["Seguridad", "Ahorro", "Rapidez", "Compactación"],
        correcta: 0,
        explicacion: "El cifrado protege la información para que no pueda ser leída por usuarios no autorizados."
    },
    {
        pregunta: "¿Qué indicador señala que se ha alcanzado el límite final de un fichero?",
        opciones: ["open", "eof", "seek", "close"],
        correcta: 1,
        explicacion: "EOF significa End Of File, es decir, final del fichero."
    },
    {
        pregunta: "¿Qué elemento describe la información de la base de datos, es decir, datos sobre los datos?",
        opciones: ["Registros", "Ficheros", "Buffers", "Metadatos"],
        correcta: 3,
        explicacion: "Los metadatos son datos que describen otros datos."
    },
    {
        pregunta: "¿Qué usuarios se centran en el contenido de la base de datos y no en su estructura?",
        opciones: ["Administradores", "Analistas", "Usuarios finales", "Programadores"],
        correcta: 2,
        explicacion: "Los usuarios finales usan la base de datos sin preocuparse por su estructura interna."
    },
    {
        pregunta: "¿Cuál es una desventaja de implantar un sistema de bases de datos?",
        opciones: ["Instalación costosa", "Menor redundancia", "Mayor seguridad", "Independencia"],
        correcta: 0,
        explicacion: "Implantar un sistema de bases de datos puede requerir inversión en software, hardware y personal."
    },
    {
        pregunta: "¿Qué diseñadores transforman estructuras lógicas en físicas buscando máxima eficiencia?",
        opciones: ["Diseñadores lógicos", "Diseñadores físicos", "Administradores", "Analistas"],
        correcta: 1,
        explicacion: "Los diseñadores físicos se encargan de optimizar cómo se almacenan realmente los datos."
    },
    {
        pregunta: "¿Cuál es la principal desventaja de la compresión de datos?",
        opciones: ["Manipulación lenta", "Más espacio", "Fragmentación", "Menos seguridad"],
        correcta: 0,
        explicacion: "La compresión ahorra espacio, pero puede ralentizar la manipulación de los datos."
    },
    {
        pregunta: "¿Qué operación coloca el puntero de lectura en una posición concreta del fichero?",
        opciones: ["Seek", "Write", "Read", "Open"],
        correcta: 0,
        explicacion: "Seek permite mover el puntero de lectura o escritura a una posición concreta."
    },
    {
        pregunta: "¿Qué nombre recibe el segundo fichero que contiene una tabla con direcciones en los archivos indexados?",
        opciones: ["Overflow", "Índice", "Principal", "Buffer"],
        correcta: 1,
        explicacion: "El índice contiene referencias o direcciones para acceder más rápido a los registros."
    },
    {
        pregunta: "¿Qué ventaja principal tienen los ficheros secuenciales?",
        opciones: ["Consultas rápidas", "Ordenación fácil", "Borrado sencillo", "Registros contiguos rápidos"],
        correcta: 3,
        explicacion: "Al estar los registros contiguos, la lectura secuencial puede ser rápida y sencilla."
    },
    {
        pregunta: "¿Cómo se denomina al hecho de que los datos se repitan continuamente en un sistema orientado al proceso?",
        opciones: ["Inconsistencia", "Integridad", "Dependencia", "Redundancia"],
        correcta: 3,
        explicacion: "La redundancia consiste en repetir los mismos datos varias veces."
    },
    {
        pregunta: "¿Qué nivel de abstracción corresponde a la visión de los datos que poseen los usuarios finales?",
        opciones: ["Nivel físico", "Nivel conceptual", "Nivel interno", "Nivel externo"],
        correcta: 3,
        explicacion: "El nivel externo muestra la visión particular que tienen los usuarios de los datos."
    },
    {
        pregunta: "¿En qué se basa el éxito de un SGBD según el texto?",
        opciones: ["Rapidez y coste", "Seguridad e integridad", "Personal y usuarios", "Hardware y software"],
        correcta: 1,
        explicacion: "Un SGBD debe garantizar que los datos sean seguros e íntegros."
    },
    {
        pregunta: "¿Qué capa actúa como interfaz entre el usuario y la base de datos, como páginas web o apps?",
        opciones: ["Sistema operativo", "Núcleo", "Facilidades de usuario", "Capa de acceso"],
        correcta: 2,
        explicacion: "Las facilidades de usuario permiten interactuar con la base de datos mediante aplicaciones."
    },
    {
        pregunta: "¿Cómo se denominan las normas que debe cumplir la información para ser manejada en un sistema?",
        opciones: ["Dato", "Hardware", "Software", "Protocolo"],
        correcta: 3,
        explicacion: "Un protocolo es un conjunto de normas que regulan cómo se maneja o transmite la información."
    },
    {
        pregunta: "¿Qué modelo se basa en la lógica de predicados y la teoría de conjuntos?",
        opciones: ["Jerárquico", "NoSQL", "Orientado a objetos", "Relacional"],
        correcta: 3,
        explicacion: "El modelo relacional se basa en fundamentos matemáticos como conjuntos y lógica de predicados."
    },
    {
        pregunta: "¿Qué esquema se considera el plano o modelo general de la base de datos?",
        opciones: ["Esquema externo", "Esquema conceptual", "Esquema físico", "Esquema interno"],
        correcta: 1,
        explicacion: "El esquema conceptual representa la estructura general de la base de datos."
    },
    {
        pregunta: "¿Qué lenguaje implementa la función de control de seguridad en la base de datos?",
        opciones: ["DCL", "DML", "DQL", "DDL"],
        correcta: 0,
        explicacion: "DCL se usa para controlar permisos y seguridad en la base de datos."
    },
    {
        pregunta: "¿Qué componente de un sistema digital se encarga de la gestión de la base de datos?",
        opciones: ["Personal", "Software", "Datos", "Hardware"],
        correcta: 1,
        explicacion: "El software, concretamente el SGBD, gestiona la base de datos."
    },
    {
        pregunta: "¿A qué tipo de procedimientos pertenecen el rearranque tras caída y las copias de seguridad?",
        opciones: ["Manipulación", "Servicio", "Protección", "Seguridad física"],
        correcta: 3,
        explicacion: "Estos procedimientos ayudan a recuperar el sistema ante fallos o daños físicos."
    },
    {
        pregunta: "¿Qué técnica permite eliminar los huecos interiores de un archivo de datos?",
        opciones: ["Fragmentación", "Compactación", "Compresión", "Cifrado"],
        correcta: 1,
        explicacion: "La compactación reorganiza el archivo para eliminar huecos internos."
    },
    {
        pregunta: "¿Qué elemento del sistema de información incluye carpetas, documentos y discos?",
        opciones: ["Recursos humanos", "Software", "Protocolo", "Recursos físicos"],
        correcta: 3,
        explicacion: "Los recursos físicos incluyen elementos materiales como discos, documentos o soportes."
    },
    {
        pregunta: "¿Qué modelo organiza los datos en una estructura en árbol y está en desuso?",
        opciones: ["Relacional", "Red", "Jerárquico", "NoSQL"],
        correcta: 2,
        explicacion: "El modelo jerárquico organiza los datos en forma de árbol."
    },
    {
        pregunta: "¿Qué nombre recibe el conjunto de todas las vistas de usuario?",
        opciones: ["Esquema conceptual", "Esquema físico", "Esquema externo global", "Diccionario de datos"],
        correcta: 2,
        explicacion: "El esquema externo global agrupa todas las vistas externas de los usuarios."
    },
    {
        pregunta: "En los sistemas orientados al proceso, ¿qué inconveniente surge cuando un dato cambia en un proceso y no en el resto?",
        opciones: ["Datos inconsistentes", "Seguridad alta", "Datos redundantes", "Acceso rápido"],
        correcta: 0,
        explicacion: "Si un dato se modifica en un lugar pero no en otro, aparecen inconsistencias."
    },
    {
        pregunta: "¿Cómo se denomina la existencia de huecos interiores en un archivo por borrado de datos?",
        opciones: ["Cifrado", "Compresión", "Compactación", "Fragmentación"],
        correcta: 3,
        explicacion: "La fragmentación aparece cuando quedan huecos dentro de un archivo tras borrar datos."
    },
    {
        pregunta: "¿Qué elemento de la estructura multicapa posee todos los metadatos?",
        opciones: ["Diccionario de datos", "Núcleo", "ATU", "Buffer"],
        correcta: 0,
        explicacion: "El diccionario de datos almacena los metadatos de la base de datos."
    },
    {
        pregunta: "¿Qué siglas inglesas se usan habitualmente para referirse al Sistema Gestor de Bases de Datos?",
        opciones: ["CASE", "ANSI", "DBMS", "SGBD"],
        correcta: 2,
        explicacion: "DBMS significa Database Management System."
    },
    {
        pregunta: "¿Qué estándar integra mejoras de orientación a objetos en bases relacionales?",
        opciones: ["ODMG", "SQL 99", "SQL 92", "ANSI X3"],
        correcta: 1,
        explicacion: "SQL 99 incorporó mejoras relacionadas con la orientación a objetos."
    },
    {
        pregunta: "¿Qué función permite añadir, eliminar, modificar y buscar datos?",
        opciones: ["Control", "Manipulación", "Definición", "Descripción"],
        correcta: 1,
        explicacion: "La función de manipulación permite operar con los datos: insertar, borrar, modificar y consultar."
    },
    {
        pregunta: "¿Cómo se accede a un dato en un fichero de acceso directo o aleatorio?",
        opciones: ["Por índice", "Por puntero", "Por lectura previa", "Por posición"],
        correcta: 3,
        explicacion: "En un fichero de acceso directo se accede al dato mediante su posición."
    },
    {
        pregunta: "¿Dónde se almacenan los datos que pasan del disco antes de ir al área de trabajo del usuario?",
        opciones: ["Diccionario", "Memoria RAM", "Capa de acceso", "Buffer"],
        correcta: 3,
        explicacion: "El buffer actúa como memoria intermedia entre el disco y el área de trabajo."
    },
    {
        pregunta: "¿Qué herramienta permitió al ser humano gestionar bases cada vez más grandes de datos y compartirlas?",
        opciones: ["La memoria", "El ábaco", "El cálculo", "La escritura"],
        correcta: 3,
        explicacion: "La escritura permitió registrar, conservar y compartir grandes cantidades de información."
    },
    {
        pregunta: "¿Cómo se llama el esquema que representa la forma real en que están almacenados los datos?",
        opciones: ["Esquema físico", "Esquema externo", "Esquema lógico", "Esquema conceptual"],
        correcta: 0,
        explicacion: "El esquema físico describe cómo se almacenan realmente los datos."
    },
    {
        pregunta: "¿Para qué se utiliza el archivo de overflow o desbordamiento en ficheros indexados?",
        opciones: ["Copia de seguridad", "Registros borrados", "Nuevos registros", "Tabla de índices"],
        correcta: 2,
        explicacion: "El archivo de overflow se usa para almacenar nuevos registros cuando no caben en su lugar original."
    },
    {
        pregunta: "¿Qué lenguaje se utiliza para crear, eliminar o modificar metadatos y estructuras?",
        opciones: ["SQL", "DDL", "DML", "DCL"],
        correcta: 1,
        explicacion: "DDL se usa para definir y modificar estructuras de la base de datos."
    },
    {
        pregunta: "En un sistema digital, ¿qué elemento corresponde al equipamiento físico?",
        opciones: ["Dato", "Protocolo", "Hardware", "Software"],
        correcta: 2,
        explicacion: "El hardware es el conjunto de componentes físicos del sistema."
    },
    {
        pregunta: "¿Qué ventaja ofrecen los sistemas orientados a datos respecto a la modificación de aplicaciones?",
        opciones: ["Independencia", "Instalación cara", "Inconsistencia", "Redundancia"],
        correcta: 0,
        explicacion: "La independencia permite modificar datos o estructuras sin afectar tanto a las aplicaciones."
    },
    {
        pregunta: "Según la RAE, ¿qué es un conjunto de cosas que ordenadamente relacionadas contribuyen a un objeto?",
        opciones: ["Dato", "Sistema", "Software", "Hardware"],
        correcta: 1,
        explicacion: "Un sistema es un conjunto de elementos relacionados entre sí para cumplir un objetivo."
    }
];

let preguntasOriginales = [...preguntas];

let indiceActual = 0;
let puntaje = 0;
let fallos = 0;
let segundos = 0;
let respondido = false;
let intervaloCronometro;
let modoRandom = false;
let modoExamen = false;
let historialFallos = [];
let respuestaSeleccionada = null;

const menuInicial = document.getElementById("menu-inicial");
const quizContainer = document.getElementById("quiz-container");
const historialGlobal = document.getElementById("historial-global");

const btnIniciar = document.getElementById("btn-iniciar");
const btnRandom = document.getElementById("btn-random");
const btnExamen = document.getElementById("btn-examen");
const btnSiguiente = document.getElementById("btn-siguiente");
const btnMenu = document.getElementById("btn-menu");

const btnVerHistorial = document.getElementById("btn-ver-historial");
const btnVolverMenu = document.getElementById("btn-volver-menu");
const btnBorrarHistorial = document.getElementById("btn-borrar-historial");

const progreso = document.getElementById("progreso");
const cronometro = document.getElementById("cronometro");
const pregunta = document.getElementById("pregunta");
const opciones = document.getElementById("opciones");
const explicacion = document.getElementById("explicacion");
const resultado = document.getElementById("resultado");
const puntajeFinal = document.getElementById("puntaje-final");
const contenidoHistorial = document.getElementById("contenido-historial");

function mezclarPreguntas(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

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
    respuestaSeleccionada = null;

    opciones.innerHTML = "";
    explicacion.style.display = "none";
    btnSiguiente.style.display = "none";

    const actual = preguntas[indiceActual];

    progreso.textContent =
        `Pregunta ${indiceActual + 1} de ${preguntas.length}`;

    pregunta.textContent = actual.pregunta;

    actual.opciones.forEach((opcion, index) => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.textContent = opcion;

        if (modoExamen) {
            boton.addEventListener("click", () =>
                seleccionarOpcion(index)
            );
        } else {
            boton.addEventListener("click", () =>
                responderNormal(index)
            );
        }

        opciones.appendChild(boton);
    });
}

function responderNormal(index) {
    if (respondido) return;

    respondido = true;
    respuestaSeleccionada = index;

    corregirRespuesta();

    btnSiguiente.style.display = "block";
}

function seleccionarOpcion(index) {
    if (!modoExamen) return;

    const botones = opciones.querySelectorAll("button");

    botones.forEach(btn =>
        btn.classList.remove("seleccionada")
    );

    botones[index].classList.add("seleccionada");

    respuestaSeleccionada = index;

    btnSiguiente.style.display = "block";
}

function corregirRespuesta() {
    const actual = preguntas[indiceActual];
    const correcta = actual.correcta;
    const botones = opciones.querySelectorAll("button");

    if (respuestaSeleccionada === correcta) {
        puntaje++;
    } else {
        fallos++;

        historialFallos.push({
            pregunta: actual.pregunta,
            correcta: actual.opciones[correcta]
        });
    }

    if (!modoExamen) {
        botones.forEach((btn, i) => {
            btn.disabled = true;

            if (i === correcta) {
                btn.classList.add("correcta");
            }

            if (
                i === respuestaSeleccionada &&
                i !== correcta
            ) {
                btn.classList.add("incorrecta");
            }
        });

        explicacion.textContent = actual.explicacion;
        explicacion.style.display = "block";
    }
}

function calcularNota() {
    let notaBase = (puntaje / preguntas.length) * 10;
    let penalizacion = Math.floor(fallos / 3) * 0.33;

    return Math.max(0, notaBase - penalizacion);
}

function guardarIntento() {
    const historial =
        JSON.parse(localStorage.getItem("historialTest")) || [];

    historial.push({
        fecha: new Date().toLocaleString(),
        tiempo: cronometro.textContent.replace("Tiempo: ", ""),
        aciertos: puntaje,
        fallos: fallos,
        nota: calcularNota().toFixed(2),
        modoExamen: modoExamen,
        errores: historialFallos
    });

    localStorage.setItem(
        "historialTest",
        JSON.stringify(historial)
    );
}

function mostrarResultado() {
    clearInterval(intervaloCronometro);

    guardarIntento();

    progreso.style.display = "none";
    cronometro.style.display = "none";
    pregunta.style.display = "none";
    opciones.style.display = "none";
    explicacion.style.display = "none";
    btnSiguiente.style.display = "none";

    resultado.style.display = "block";

    puntajeFinal.innerHTML = `
        Aciertos: ${puntaje}/${preguntas.length}<br>
        Fallos: ${fallos}<br>
        Tiempo: ${cronometro.textContent.replace("Tiempo: ", "")}<br>
        Nota final: ${calcularNota().toFixed(2)}/10
    `;
}

function cargarHistorial() {
    const historial =
        JSON.parse(localStorage.getItem("historialTest")) || [];

    contenidoHistorial.innerHTML = "";

    historial.forEach((intento, index) => {
        const detallesId = `detalles-${index}`;

        let html = `
            <div class="intento">
                <button 
                    class="btn-intento"
                    onclick="toggleDetalles('${detallesId}')">
                    Intento ${index + 1}
                    ${intento.modoExamen ? "(Examen)" : ""}
                </button>

                <div id="${detallesId}" class="detalles-intento" style="display:none;">
                    Fecha: ${intento.fecha}<br>
                    Tiempo: ${intento.tiempo}<br>
                    Aciertos: ${intento.aciertos}<br>
                    Fallos: ${intento.fallos}<br>
                    Nota: ${intento.nota}/10
        `;

        intento.errores.forEach(error => {
            html += `
                <div class="error-item">
                    ${error.pregunta}<br>
                    Correcta: ${error.correcta}
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;

        contenidoHistorial.innerHTML += html;
    });
}

function toggleDetalles(id) {
    const elemento = document.getElementById(id);

    elemento.style.display =
        elemento.style.display === "none"
            ? "block"
            : "none";
}

btnIniciar.addEventListener("click", () => {
    indiceActual = 0;
    puntaje = 0;
    fallos = 0;
    segundos = 0;
    historialFallos = [];

    preguntas = modoRandom
        ? mezclarPreguntas(preguntasOriginales)
        : [...preguntasOriginales];

    menuInicial.style.display = "none";
    historialGlobal.style.display = "none";
    quizContainer.style.display = "block";

    progreso.style.display = "block";
    cronometro.style.display = "block";
    pregunta.style.display = "block";
    opciones.style.display = "grid";
    resultado.style.display = "none";

    iniciarCronometro();
    mostrarPregunta();
});

btnRandom.addEventListener("click", () => {
    modoRandom = !modoRandom;

    btnRandom.textContent =
        modoRandom ? "Modo random: ON" : "Modo random: OFF";

    btnRandom.classList.toggle("activo");
});

btnExamen.addEventListener("click", () => {
    modoExamen = !modoExamen;

    btnExamen.textContent =
        modoExamen ? "Modo examen: ON" : "Modo examen: OFF";

    btnExamen.classList.toggle("activo");
});

btnSiguiente.addEventListener("click", () => {
    if (modoExamen) {
        if (respuestaSeleccionada === null) return;

        corregirRespuesta();

        indiceActual++;

        if (indiceActual < preguntas.length) {
            mostrarPregunta();
        } else {
            mostrarResultado();
        }

        return;
    }

    indiceActual++;

    if (indiceActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
});

btnMenu.addEventListener("click", () => {
    resultado.style.display = "none";
    quizContainer.style.display = "none";
    menuInicial.style.display = "block";
});

btnVerHistorial.addEventListener("click", () => {
    menuInicial.style.display = "none";
    historialGlobal.style.display = "block";

    cargarHistorial();
});

btnVolverMenu.addEventListener("click", () => {
    historialGlobal.style.display = "none";
    menuInicial.style.display = "block";
});

btnBorrarHistorial.addEventListener("click", () => {
    localStorage.removeItem("historialTest");
    cargarHistorial();
});
