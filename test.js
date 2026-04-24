const preguntas = [
    {
        pregunta: "¿Qué elemento especial permite recorrer los registros de un fichero encadenado en un orden concreto?",
        opciones: ["Índices", "Punteros", "Huecos", "Claves"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es la única capa que realmente accede a los datos físicos en el disco?",
        opciones: ["Núcleo", "Sistema operativo", "Driver", "SGBD"],
        correcta: 1
    },
    {
        pregunta: "¿Qué operación prepara el fichero para su proceso inmediato?",
        opciones: ["Cerrar", "Leer", "Abrir", "Escribir"],
        correcta: 2
    },
    {
        pregunta: "¿Cómo se define el concepto de 'dato' en informática?",
        opciones: ["Proceso", "Recurso", "Dato", "Archivo"],
        correcta: 2
    },
    {
        pregunta: "¿En qué tipo de ficheros se deben leer todos los datos anteriores para llegar al registro deseado?",
        opciones: ["Secuenciales", "Encadenados", "Indexados", "Aleatorios"],
        correcta: 0
    },
    {
        pregunta: "¿Qué nombre recibe la secuencia de números binarios que organiza información relacionada?",
        opciones: ["Archivo", "Campo", "Puntero", "Registro"],
        correcta: 0
    },
    {
        pregunta: "¿Quién tiene la misión de vigilar y gestionar los datos para evitar su destrucción o contaminación?",
        opciones: ["Programador", "Usuario final", "Administrador", "Diseñador"],
        correcta: 2
    },
    {
        pregunta: "¿Dónde deben almacenarse los datos de forma permanente en una computadora?",
        opciones: ["Buffer", "Memoria secundaria", "ATU", "Memoria RAM"],
        correcta: 1
    },
    {
        pregunta: "¿Cómo se conceptualiza normalmente una relación en el modelo relacional?",
        opciones: ["Grafo", "Tabla", "Objeto", "Árbol"],
        correcta: 1
    },
    {
        pregunta: "¿Cómo se llaman las unidades que contienen datos relativos a un mismo objeto dentro de un fichero?",
        opciones: ["Archivos", "Punteros", "Registros", "Índices"],
        correcta: 2
    },
    {
        pregunta: "¿Qué nombre reciben las bases de datos pensadas para rapidez y alta disponibilidad en servicios web?",
        opciones: ["UML", "IMS", "Codasyl", "NoSQL"],
        correcta: 3
    },
    {
        pregunta: "¿Cuál es el objetivo principal de la técnica de cifrado de datos?",
        opciones: ["Seguridad", "Ahorro", "Rapidez", "Compactación"],
        correcta: 0
    },
    {
        pregunta: "¿Qué indicador señala que se ha alcanzado el límite final de un fichero?",
        opciones: ["open", "eof", "seek", "close"],
        correcta: 1
    },
    {
        pregunta: "¿Qué elemento describe la información de la base de datos, es decir, datos sobre los datos?",
        opciones: ["Registros", "Ficheros", "Buffers", "Metadatos"],
        correcta: 3
    },
    {
        pregunta: "¿Qué usuarios se centran en el contenido de la base de datos y no en su estructura?",
        opciones: ["Administradores", "Analistas", "Usuarios finales", "Programadores"],
        correcta: 2
    },
    {
        pregunta: "¿Cuál es una desventaja de implantar un sistema de bases de datos?",
        opciones: ["Instalación costosa", "Menor redundancia", "Mayor seguridad", "Independencia"],
        correcta: 0
    },
    {
        pregunta: "¿Qué diseñadores transforman estructuras lógicas en físicas buscando máxima eficiencia?",
        opciones: ["Diseñadores lógicos", "Diseñadores físicos", "Administradores", "Analistas"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es la principal desventaja de la compresión de datos?",
        opciones: ["Manipulación lenta", "Más espacio", "Fragmentación", "Menos seguridad"],
        correcta: 0
    },
    {
        pregunta: "¿Qué operación coloca el puntero de lectura en una posición concreta del fichero?",
        opciones: ["Seek", "Write", "Read", "Open"],
        correcta: 0
    },
    {
        pregunta: "¿Qué nombre recibe el segundo fichero que contiene una tabla con direcciones en los archivos indexados?",
        opciones: ["Overflow", "Índice", "Principal", "Buffer"],
        correcta: 1
    },
    {
        pregunta: "¿Qué ventaja principal tienen los ficheros secuenciales?",
        opciones: ["Consultas rápidas", "Ordenación fácil", "Borrado sencillo", "Registros contiguos rápidos"],
        correcta: 3
    },
    {
        pregunta: "¿Cómo se denomina al hecho de que los datos se repitan continuamente en un sistema orientado al proceso?",
        opciones: ["Inconsistencia", "Integridad", "Dependencia", "Redundancia"],
        correcta: 3
    },
    {
        pregunta: "¿Qué nivel de abstracción corresponde a la visión de los datos que poseen los usuarios finales?",
        opciones: ["Nivel físico", "Nivel conceptual", "Nivel interno", "Nivel externo"],
        correcta: 3
    },
    {
        pregunta: "¿En qué se basa el éxito de un SGBD según el texto?",
        opciones: ["Rapidez y coste", "Seguridad e integridad", "Personal y usuarios", "Hardware y software"],
        correcta: 1
    },
    {
        pregunta: "¿Qué capa actúa como interfaz entre el usuario y la base de datos, como páginas web o apps?",
        opciones: ["Sistema operativo", "Núcleo", "Facilidades de usuario", "Capa de acceso"],
        correcta: 2
    },
    {
        pregunta: "¿Cómo se denominan las normas que debe cumplir la información para ser manejada en un sistema?",
        opciones: ["Dato", "Hardware", "Software", "Protocolo"],
        correcta: 3
    },
    {
        pregunta: "¿Qué modelo se basa en la lógica de predicados y la teoría de conjuntos?",
        opciones: ["Jerárquico", "NoSQL", "Orientado a objetos", "Relacional"],
        correcta: 3
    },
    {
        pregunta: "¿Qué esquema se considera el plano o modelo general de la base de datos?",
        opciones: ["Esquema externo", "Esquema conceptual", "Esquema físico", "Esquema interno"],
        correcta: 1
    },
    {
        pregunta: "¿Qué lenguaje implementa la función de control de seguridad en la base de datos?",
        opciones: ["DCL", "DML", "DQL", "DDL"],
        correcta: 0
    },
    {
        pregunta: "¿Qué componente de un sistema digital se encarga de la gestión de la base de datos?",
        opciones: ["Personal", "Software", "Datos", "Hardware"],
        correcta: 1
    },
    {
        pregunta: "¿A qué tipo de procedimientos pertenecen el rearranque tras caída y las copias de seguridad?",
        opciones: ["Manipulación", "Servicio", "Protección", "Seguridad física"],
        correcta: 3
    },
    {
        pregunta: "¿Qué técnica permite eliminar los huecos interiores de un archivo de datos?",
        opciones: ["Fragmentación", "Compactación", "Compresión", "Cifrado"],
        correcta: 1
    },
    {
        pregunta: "¿Qué elemento del sistema de información incluye carpetas, documentos y discos?",
        opciones: ["Recursos humanos", "Software", "Protocolo", "Recursos físicos"],
        correcta: 3
    },
    {
        pregunta: "¿Qué modelo organiza los datos en una estructura en árbol y está en desuso?",
        opciones: ["Relacional", "Red", "Jerárquico", "NoSQL"],
        correcta: 2
    },
    {
        pregunta: "¿Qué nombre recibe el conjunto de todas las vistas de usuario?",
        opciones: ["Esquema conceptual", "Esquema físico", "Esquema externo global", "Diccionario de datos"],
        correcta: 2
    },
    {
        pregunta: "En los sistemas orientados al proceso, ¿qué inconveniente surge cuando un dato cambia en un proceso y no en el resto?",
        opciones: ["Datos inconsistentes", "Seguridad alta", "Datos redundantes", "Acceso rápido"],
        correcta: 0
    },
    {
        pregunta: "¿Cómo se denomina la existencia de huecos interiores en un archivo por borrado de datos?",
        opciones: ["Cifrado", "Compresión", "Compactación", "Fragmentación"],
        correcta: 3
    },
    {
        pregunta: "¿Qué elemento de la estructura multicapa posee todos los metadatos?",
        opciones: ["Diccionario de datos", "Núcleo", "ATU", "Buffer"],
        correcta: 0
    },
    {
        pregunta: "¿Qué siglas inglesas se usan habitualmente para referirse al Sistema Gestor de Bases de Datos?",
        opciones: ["CASE", "ANSI", "DBMS", "SGBD"],
        correcta: 2
    },
    {
        pregunta: "¿Qué estándar integra mejoras de orientación a objetos en bases relacionales?",
        opciones: ["ODMG", "SQL 99", "SQL 92", "ANSI X3"],
        correcta: 1
    },
    {
        pregunta: "¿Qué función permite añadir, eliminar, modificar y buscar datos?",
        opciones: ["Control", "Manipulación", "Definición", "Descripción"],
        correcta: 1
    },
    {
        pregunta: "¿Cómo se accede a un dato en un fichero de acceso directo o aleatorio?",
        opciones: ["Por índice", "Por puntero", "Por lectura previa", "Por posición"],
        correcta: 3
    },
    {
        pregunta: "¿Dónde se almacenan los datos que pasan del disco antes de ir al área de trabajo del usuario?",
        opciones: ["Diccionario", "Memoria RAM", "Capa de acceso", "Buffer"],
        correcta: 3
    },
    {
        pregunta: "¿Qué herramienta permitió al ser humano gestionar bases cada vez más grandes de datos y compartirlas?",
        opciones: ["La memoria", "El ábaco", "El cálculo", "La escritura"],
        correcta: 3
    },
    {
        pregunta: "¿Cómo se llama el esquema que representa la forma real en que están almacenados los datos?",
        opciones: ["Esquema físico", "Esquema externo", "Esquema lógico", "Esquema conceptual"],
        correcta: 0
    },
    {
        pregunta: "¿Para qué se utiliza el archivo de overflow o desbordamiento en ficheros indexados?",
        opciones: ["Copia de seguridad", "Registros borrados", "Nuevos registros", "Tabla de índices"],
        correcta: 2
    },
    {
        pregunta: "¿Qué lenguaje se utiliza para crear, eliminar o modificar metadatos y estructuras?",
        opciones: ["SQL", "DDL", "DML", "DCL"],
        correcta: 1
    },
    {
        pregunta: "En un sistema digital, ¿qué elemento corresponde al equipamiento físico?",
        opciones: ["Dato", "Protocolo", "Hardware", "Software"],
        correcta: 2
    },
    {
        pregunta: "¿Qué ventaja ofrecen los sistemas orientados a datos respecto a la modificación de aplicaciones?",
        opciones: ["Independencia", "Instalación cara", "Inconsistencia", "Redundancia"],
        correcta: 0
    },
    {
        pregunta: "Según la RAE, ¿qué es un conjunto de cosas que ordenadamente relacionadas contribuyen a un objeto?",
        opciones: ["Dato", "Sistema", "Software", "Hardware"],
        correcta: 1
    }
];

let indiceActual = 0;
let puntaje = 0;
let respondido = false;

const progreso = document.getElementById("progreso");
const pregunta = document.getElementById("pregunta");
const opciones = document.getElementById("opciones");
const btnSiguiente = document.getElementById("btn-siguiente");
const resultado = document.getElementById("resultado");
const puntajeFinal = document.getElementById("puntaje-final");
const btnReiniciar = document.getElementById("btn-reiniciar");

function mostrarPregunta() {
    respondido = false;
    btnSiguiente.style.display = "none";
    opciones.innerHTML = "";

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
    const correcta = preguntas[indiceActual].correcta;

    const botones = opciones.querySelectorAll("button");

    botones.forEach((btn, i) => {
        if (i === correcta) {
            btn.style.backgroundColor = "green";
        } else if (i === index) {
            btn.style.backgroundColor = "red";
        }
    });

    if (index === correcta) {
        puntaje++;
    }

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
    progreso.style.display = "none";
    pregunta.style.display = "none";
    opciones.style.display = "none";
    btnSiguiente.style.display = "none";

    resultado.style.display = "block";

    puntajeFinal.textContent = `${puntaje}/${preguntas.length} correctas`;
}

btnReiniciar.addEventListener("click", () => {
    indiceActual = 0;
    puntaje = 0;

    progreso.style.display = "block";
    pregunta.style.display = "block";
    opciones.style.display = "block";

    resultado.style.display = "none";

    mostrarPregunta();
});

mostrarPregunta();