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

let preguntasWindowsServer = [
    {
        pregunta: "¿Cuál de las siguientes opciones describe mejor lo que es un rol en Windows Server?",
        opciones: [
            "Un conjunto de permisos para usuarios",
            "Una restricción de acceso",
            "Una capacidad que se agrega al servidor para ofrecer un servicio",
            "Una función de seguridad"
        ],
        correcta: 2,
        explicacion: "Un rol es una capacidad que se instala en Windows Server para proporcionar servicios."
    },
    {
        pregunta: "¿Qué son las características en Windows Server?",
        opciones: [
            "Componentes independientes de apoyo",
            "Restricciones de seguridad",
            "Permisos de usuarios",
            "Ninguna de las anteriores"
        ],
        correcta: 0,
        explicacion: "Las características son componentes adicionales que complementan las funciones del servidor."
    },
    {
        pregunta: "¿Cuál es un ejemplo de característica disponible en Windows Server?",
        opciones: [
            "Administración de directivas de grupo",
            "Firewall",
            "Antivirus",
            "Ninguna de las anteriores"
        ],
        correcta: 0,
        explicacion: "La administración de directivas de grupo es una característica disponible en Windows Server."
    },
    {
        pregunta: "¿Qué función cumple el archivo ntds.dit en un controlador de dominio?",
        opciones: [
            "Crear usuarios",
            "Guardar contraseñas",
            "Base de datos de Active Directory",
            "Ninguna de las anteriores"
        ],
        correcta: 2,
        explicacion: "ntds.dit contiene la base de datos principal de Active Directory."
    },
    {
        pregunta: "¿Cuál es el mayor contenedor lógico que abarca todos los dominios dentro de su ámbito?",
        opciones: [
            "Dominio padre",
            "Bosque",
            "Árbol",
            "Ninguno"
        ],
        correcta: 1,
        explicacion: "El bosque es el contenedor lógico más grande dentro de Active Directory."
    },
    {
        pregunta: "¿Qué es el DN?",
        opciones: [
            "Dominio de Red",
            "Directorio de Nombres",
            "Distinct Name",
            "Dato Numérico"
        ],
        correcta: 2,
        explicacion: "DN significa Distinguished Name o Nombre Distinguido."
    },
    {
        pregunta: "¿Qué grupo se asigna por defecto a una cuenta de usuario recién creada?",
        opciones: [
            "Administradores del Dominio",
            "Usuarios del Dominio",
            "Administradores del Sistema",
            "Invitados"
        ],
        correcta: 1,
        explicacion: "Por defecto, una cuenta nueva pertenece al grupo Usuarios del Dominio."
    },
    {
        pregunta: "¿Qué comando se utiliza para identificar la interfaz de red en CMD?",
        opciones: [
            "netsh interface ipv4 show interfaces",
            "ipconfig /all",
            "Get-NetIPInterface",
            "show interface"
        ],
        correcta: 0,
        explicacion: "El comando netsh interface ipv4 show interfaces muestra las interfaces de red."
    },
    {
        pregunta: "¿Qué comando consulta atributos de un objeto en Active Directory?",
        opciones: [
            "dsatt",
            "dsquery",
            "dsget",
            "dsatrib",
            "Ninguna"
        ],
        correcta: 2,
        explicacion: "dsget permite obtener atributos de objetos de Active Directory."
    },
    {
        pregunta: "¿Qué comando lista usuarios en Active Directory?",
        opciones: [
            "dsadd",
            "dsuser",
            "dsget",
            "dsquery"
        ],
        correcta: 3,
        explicacion: "dsquery permite buscar y listar objetos, como usuarios, en Active Directory."
    },
    {
        pregunta: "¿Cuál es la función principal de las cuentas de usuario en Active Directory?",
        opciones: [
            "Instalar software",
            "Controlar internet",
            "Autenticar identidad y autorizar acceso",
            "Gestionar seguridad física"
        ],
        correcta: 2,
        explicacion: "Las cuentas de usuario sirven para autenticar identidades y autorizar accesos."
    },
    {
        pregunta: "¿Qué opción se selecciona al instalar el primer controlador de dominio?",
        opciones: [
            "Agregar un nuevo bosque",
            "Agregar controlador a dominio existente",
            "Agregar dominio a bosque existente",
            "Unirse a grupo de trabajo"
        ],
        correcta: 0,
        explicacion: "Al instalar el primer controlador de dominio se crea un nuevo bosque."
    },
    {
        pregunta: "¿Qué ocurre si se corrompe la tabla MBR?",
        opciones: [
            "El sistema va más lento",
            "Se pierden todos los datos",
            "El sistema no arranca",
            "Se reconfiguran particiones"
        ],
        correcta: 2,
        explicacion: "Si el MBR se corrompe, el sistema puede no arrancar."
    },
    {
        pregunta: "¿Cómo direccionan la información MBR y GPT?",
        opciones: [
            "MBR usa CHS y GPT usa LBA",
            "Ambos usan LBA",
            "Ambos usan CHS",
            "MBR usa LBA y GPT usa CHS"
        ],
        correcta: 0,
        explicacion: "Según tus respuestas, MBR usa CHS y GPT usa LBA."
    },
    {
        pregunta: "¿Cuántas particiones soporta GPT?",
        opciones: [
            "64",
            "128",
            "256",
            "Sin límite"
        ],
        correcta: 1,
        explicacion: "GPT soporta normalmente 128 particiones en Windows."
    },
    {
        pregunta: "¿Qué relación existe entre MBR y BIOS?",
        opciones: [
            "BIOS es parte del MBR",
            "MBR usa BIOS para acceder a datos",
            "Son independientes",
            "MBR fue diseñado para trabajar con BIOS"
        ],
        correcta: 3,
        explicacion: "MBR fue diseñado para trabajar con sistemas BIOS."
    },
    {
        pregunta: "¿Qué efecto tiene el bloqueo de herencia en una OU?",
        opciones: [
            "Bloquea todas las GPO del dominio",
            "Bloquea GPO heredadas del OU padre",
            "Elimina GPO",
            "Permite aplicar GPO del padre"
        ],
        correcta: 1,
        explicacion: "El bloqueo de herencia impide aplicar GPO heredadas desde niveles superiores."
    },
    {
        pregunta: "¿Sintaxis correcta de dsadd user para crear usuario en una OU?",
        opciones: [
            'dsadd user "cn=Usuario,dc=dominio,dc=com"',
            'dsadd user "ou=Usuario,cn=dominio,dc=com"',
            'dsadd user "cn=Usuario,ou=Profesores,dc=dominio,dc=com"',
            'dsadd user "name=Usuario,dc=dominio,dc=com"'
        ],
        correcta: 2,
        explicacion: "La sintaxis correcta usa CN para el usuario y OU para la unidad organizativa."
    },
    {
        pregunta: "¿Qué cmdlet crea un nuevo usuario en Active Directory?",
        opciones: [
            "Create-ADUser",
            "New-ADUser",
            "Set-ADUser",
            "Add-ADUser"
        ],
        correcta: 1,
        explicacion: "El cmdlet correcto para crear usuarios es New-ADUser."
    },
    {
        pregunta: "¿Qué función cumple un perfil obligatorio en Windows?",
        opciones: [
            "Restringir funciones",
            "Obligar contraseña segura",
            "Cargar configuración predefinida en cada inicio",
            "Monitorear usuarios"
        ],
        correcta: 2,
        explicacion: "Un perfil obligatorio carga una configuración predefinida en cada inicio de sesión."
    }
];

let preguntasHardware = [
{
    pregunta: "¿La herramienta duplicity está preparada para clonar una carpeta concreta?",
    opciones: ["Verdadero", "Falso"],
    correcta: 0,
    explicacion: "Duplicity permite realizar copias de seguridad de carpetas concretas."
},
{
    pregunta: "¿La herramienta dd está preparada para clonar un disco entero?",
    opciones: ["Verdadero", "Falso"],
    correcta: 0,
    explicacion: "La herramienta dd permite clonar discos completos bit a bit."
},
{
    pregunta: "Una copia de seguridad que sólo toma en cuenta los datos que han variado desde la última copia realizada se conoce como:",
    opciones: ["Diferencial", "Completa", "Incremental"],
    correcta: 2,
    explicacion: "La copia incremental solo almacena cambios desde la última copia."
},
{
    pregunta: "Con duplicity, antes de indicar la ruta local se usa la notación:",
    opciones: ["file:", "file:/", "file://", "file:///"],
    correcta: 2,
    explicacion: "La respuesta marcada en tus apuntes es file://."
},
{
    pregunta: "Con la herramienta dd, el operando if sirve para indicar el origen:",
    opciones: ["Verdadero", "Falso"],
    correcta: 0,
    explicacion: "if significa input file y representa el origen."
},
{
    pregunta: "La copia implementada con Clonezilla era de tipo:",
    opciones: ["Completa", "Diferencial", "Incremental", "Espejo"],
    correcta: 0,
    explicacion: "Clonezilla realiza copias completas."
},
{
    pregunta: "¿Qué alternativas ofrece Windows 10/11 para guardar una imagen del sistema?",
    opciones: [
        "Discos locales, unidades ópticas y carpetas compartidas",
        "Discos locales y unidades ópticas",
        "Discos locales y carpetas compartidas",
        "Ópticas y carpetas compartidas",
        "Solo discos locales"
    ],
    correcta: 0,
    explicacion: "Windows permite guardar imágenes en discos, unidades ópticas y red."
},
{
    pregunta: "En RAID 1 con cuatro discos físicos, el espacio aprovechado es:",
    opciones: ["50%", "25%", "100%", "40%"],
    correcta: 1,
    explicacion: "Según tus respuestas, la correcta marcada es 25%."
},
{
    pregunta: "En mdadm, el formato de los discos:",
    opciones: [
        "Tiene lugar después de crear la matriz",
        "Tiene lugar durante la creación",
        "Tiene lugar antes",
        "Se hace por separado"
    ],
    correcta: 0,
    explicacion: "La matriz RAID se crea primero y luego se formatea."
},
{
    pregunta: "La restauración tarda más normalmente en copias:",
    opciones: ["Incrementales", "Completas", "Diferenciales"],
    correcta: 0,
    explicacion: "Las incrementales requieren varias restauraciones consecutivas."
},
{
    pregunta: "¿Qué error existe en este comando?\nsudo mdadm /dev/md49 --add /dev/sdd",
    opciones: [
        "Falta --create",
        "Falta el nombre RAID",
        "Falta el nivel RAID",
        "No existe error"
    ],
    correcta: 0,
    explicacion: "El comando necesita indicar correctamente la creación o gestión de la matriz."
},
{
    pregunta: "Señala la afirmación cierta sobre Clonezilla:",
    opciones: [
        "Prepara completamente el disco",
        "Obliga a compactar la imagen",
        "Obliga a verificar sistema de archivos",
        "Obliga a cifrar la imagen",
        "Obliga a verificar la restauración"
    ],
    correcta: 1,
    explicacion: "Según tus respuestas, la correcta marcada es la B."
},
{
    pregunta: "Opción de mdadm para indicar el nombre de la matriz:",
    opciones: ["-C", "-n", "-l"],
    correcta: 0,
    explicacion: "-C se usa en creación de matrices RAID."
},
{
    pregunta: "Duplicity permite realizar volcados incrementales:",
    opciones: ["Verdadero", "Falso"],
    correcta: 1,
    explicacion: "Según tus respuestas, marcaste Falso."
},
{
    pregunta: "En Windows 10/11 podemos elegir las particiones a copiar:",
    opciones: ["Verdadero", "Falso"],
    correcta: 1,
    explicacion: "Según las respuestas proporcionadas, la correcta es Falso."
},
{
    pregunta: "La copia que guarda todos los cambios desde la última copia completa es:",
    opciones: ["RAID 0", "Completa", "Diferencial", "Incremental"],
    correcta: 2,
    explicacion: "La copia diferencial guarda cambios desde la última copia completa."
},
{
    pregunta: "Clonezilla guarda:",
    opciones: [
        "Los bloques usados",
        "Los bloques no usados",
        "Todo el disco",
        "Copia literal bit a bit"
    ],
    correcta: 0,
    explicacion: "Clonezilla normalmente guarda bloques usados."
},
{
    pregunta: "Puerto utilizado por Webmin:",
    opciones: ["20000", "10000", "20", "22"],
    correcta: 1,
    explicacion: "Webmin usa por defecto el puerto 10000."
},
{
    pregunta: "Respecto a instalar Webmin:",
    opciones: [
        "Se recomienda apt-get frente a apt",
        "Primero se ejecuta un script",
        "No es compatible con Debian"
    ],
    correcta: 0,
    explicacion: "Según tus respuestas, la correcta es apt-get."
},
{
    pregunta: "Respecto a las copias de seguridad con Webmin:",
    opciones: [
        "Un único formato",
        "Solo gzip",
        "Varios formatos"
    ],
    correcta: 2,
    explicacion: "Webmin admite varios formatos de compresión."
},
{
    pregunta: "¿Qué herramientas de Windows permiten crear RAID?",
    opciones: [
        "Administración de discos y diskpart",
        "Clonezilla y mdadm",
        "Webmin y duplicity",
        "Solo diskpart"
    ],
    correcta: 0,
    explicacion: "Windows puede gestionar RAID mediante Administración de discos y diskpart."
},
{
    pregunta: "Si list disk muestra vacío en GPT:",
    opciones: [
        "El disco es GPT",
        "El disco es MBR",
        "GPT y MBR"
    ],
    correcta: 1,
    explicacion: "Si GPT está vacío significa que el disco usa MBR."
},
{
    pregunta: "Mínimo de discos para RAID 5:",
    opciones: ["2", "3", "5", "4"],
    correcta: 1,
    explicacion: "RAID 5 necesita mínimo 3 discos."
},
{
    pregunta: "¿Qué hace duplicity si no se indica full o incremental?",
    opciones: [
        "Actúa como full",
        "Actúa como incremental",
        "Produce error"
    ],
    correcta: 1,
    explicacion: "Duplicity actúa como incremental por defecto."
},
{
    pregunta: "¿Por qué RAID necesita discos dinámicos en diskpart?",
    opciones: [
        "Porque permiten gestionar volúmenes distribuidos",
        "Porque aumentan velocidad CPU",
        "Porque reducen consumo RAM",
        "Porque son obligatorios para GPT"
    ],
    correcta: 0,
    explicacion: "Los discos dinámicos permiten crear y gestionar volúmenes RAID."
}
];

let preguntasRecuHardware = [
{
    pregunta: "Una nomenclatura abreviada para PCI Express es:",
    opciones: ["PCI-E", "PCIe", "3GIO", "Todas las anteriores", "PCI-X"],
    correcta: 3,
    explicacion: "PCI Express también puede abreviarse como PCI-E, PCIe o 3GIO."
},
{
    pregunta: "Número máximo de canales (lanes) en PCI Express:",
    opciones: ["16", "32", "8", "2"],
    correcta: 1,
    explicacion: "PCI Express puede alcanzar hasta 32 lanes."
},
{
    pregunta: "Ancho de banda para SATA 2:",
    opciones: ["300 MB/seg", "3 GB/seg", "6 Gb/seg", "Ninguno"],
    correcta: 0,
    explicacion: "SATA II alcanza 300 MB/s."
},
{
    pregunta: "Los conectores USB azules se asocian normalmente con:",
    opciones: ["USB 1", "USB 2", "USB 3"],
    correcta: 2,
    explicacion: "El color azul identifica normalmente USB 3."
},
{
    pregunta: "Subcomando de fdisk para verificar la tabla de particiones:",
    opciones: ["p", "g", "v"],
    correcta: 2,
    explicacion: "El subcomando v verifica la tabla de particiones."
},
{
    pregunta: "¿fdisk puede lanzarse sin argumentos?",
    opciones: ["Verdadero", "Falso"],
    correcta: 1,
    explicacion: "fdisk necesita indicar el disco sobre el que trabajar."
},
{
    pregunta: "En un HDD el tiempo de acceso se calcula como:",
    opciones: [
        "Tiempo de búsqueda + RPM",
        "Tiempo de búsqueda + latencia",
        "Tiempo de búsqueda + RPM + latencia",
        "Tiempo de búsqueda + latencia + tiempo lectura/escritura"
    ],
    correcta: 3,
    explicacion: "El tiempo de acceso incluye búsqueda, latencia y lectura/escritura."
},
{
    pregunta: "Subcomando de diskpart para obtener información detallada de particiones:",
    opciones: ["list volume", "list disk", "list partition"],
    correcta: 0,
    explicacion: "list volume muestra información detallada de volúmenes."
},
{
    pregunta: "Conector USB reversible:",
    opciones: ["Tipo A", "Tipo B", "Tipo C", "Ninguno"],
    correcta: 2,
    explicacion: "USB Tipo C es reversible."
},
{
    pregunta: "¿Dónde anota mkntfs los bloques defectuosos?",
    opciones: [
        "Área de datos",
        "Índice de la partición",
        "Sector de arranque",
        "Índice de la partición 1"
    ],
    correcta: 1,
    explicacion: "Los bloques defectuosos quedan registrados en el índice NTFS."
},
{
    pregunta: "En un HDD la latencia depende de:",
    opciones: ["RPM", "Tiempo de búsqueda", "Tiempo de acceso", "Tiempo lectura/escritura"],
    correcta: 0,
    explicacion: "La latencia depende de las RPM."
},
{
    pregunta: "Señala la afirmación correcta:",
    opciones: [
        "HDD presenta más ruido que SSD",
        "NVMe significa Non Volatile Memory",
        "SSD consume más energía que HDD",
        "HDD es más fiable que SSD"
    ],
    correcta: 0,
    explicacion: "Los HDD generan más ruido mecánico que los SSD."
},
{
    pregunta: "Con fdisk podemos:",
    opciones: [
        "Crear tabla de particiones",
        "Crear tabla y particionar",
        "Crear tabla, particionar y formatear",
        "Crear tabla, particionar, formatear y montar"
    ],
    correcta: 1,
    explicacion: "fdisk permite crear tablas de particiones y particionar."
},
{
    pregunta: "USB 3 es exclusivo de conectores Tipo C:",
    opciones: ["Verdadero", "Falso"],
    correcta: 1,
    explicacion: "USB 3 también existe en Tipo A."
},
{
    pregunta: "Orden correcto de preparación de disco en Windows:",
    opciones: [
        "Particionado, formateado, MBR/GPT",
        "MBR/GPT, formateado, particionado",
        "MBR/GPT, particionado, formateado",
        "Particionado, MBR/GPT, formateado"
    ],
    correcta: 2,
    explicacion: "Primero se establece MBR/GPT, luego particionado y finalmente formateo."
},
{
    pregunta: "¿Qué orden permite formatear?",
    opciones: ["parted", "fdisk", "diskpart", "Todas"],
    correcta: 2,
    explicacion: "diskpart permite gestionar y formatear discos."
},
{
    pregunta: "¿Qué tipo de partición puede subdividirse?",
    opciones: ["Primaria", "Extendida", "Lógica", "Todas"],
    correcta: 1,
    explicacion: "La partición extendida puede contener múltiples particiones lógicas."
},
{
    pregunta: "¿Qué subdivisión aloja particiones lógicas?",
    opciones: ["Primaria", "Extendida", "Cluster"],
    correcta: 1,
    explicacion: "Las particiones lógicas se crean dentro de una extendida."
},
{
    pregunta: "¿Qué área se modifica durante el formateo?",
    opciones: [
        "Índice de la partición",
        "Tabla de particiones",
        "Ambas",
        "Sector de arranque"
    ],
    correcta: 0,
    explicacion: "El formateo modifica principalmente el índice/sistema de archivos."
},
{
    pregunta: "¿Qué interfaz tiene mayor ancho de banda?",
    opciones: ["PATA", "SATA", "SAS", "SCSI"],
    correcta: 2,
    explicacion: "SAS ofrece mayor rendimiento y ancho de banda."
},
{
    pregunta: "En un HDD las RPM determinan:",
    opciones: [
        "Tiempo de búsqueda",
        "Tiempo de acceso",
        "Latencia",
        "Tiempo acceso y latencia"
    ],
    correcta: 2,
    explicacion: "Las RPM afectan directamente a la latencia."
},
{
    pregunta: "La configuración maestro-esclavo pertenece a:",
    opciones: ["IDE", "SAS", "SATA", "SCSI"],
    correcta: 0,
    explicacion: "IDE/PATA utilizaba configuración maestro-esclavo."
},
{
    pregunta: "Señala la afirmación correcta:",
    opciones: [
        "Los disquetes de 3,5 almacenan más que los de 5,25",
        "Los discos RW no admiten cambios",
        "ATA usa cable más estrecho que SATA",
        "Un HDD con 6 cabezales puede tener 2 platos"
    ],
    correcta: 0,
    explicacion: "Los disquetes de 3,5 pulgadas almacenaban más capacidad."
},
{
    pregunta: "Tecnología orientada a servidores:",
    opciones: ["SCSI", "SAS", "Cintas de respaldo", "Todas"],
    correcta: 3,
    explicacion: "Todas las tecnologías mencionadas son comunes en servidores."
},
{
    pregunta: "Latencia de un HDD de 2K RPM:",
    opciones: ["20 ms", "15 ns", "15 ms", "20 ns"],
    correcta: 2,
    explicacion: "Un disco de 2000 RPM tiene una latencia aproximada de 15 ms."
},
{
    pregunta: "Al grabar un archivo el sistema operativo lo divide en:",
    opciones: ["Bytes", "Sectores", "Clusters", "Particiones"],
    correcta: 2,
    explicacion: "Los archivos se almacenan usando clusters."
},
{
    pregunta: "Las conexiones hot swap se realizan con el equipo:",
    opciones: ["Encendido", "Apagado", "Arrancando", "Apagándose"],
    correcta: 0,
    explicacion: "Hot swap significa conectar en caliente, con el sistema encendido."
},
{
    pregunta: "Estilo de particionado recomendado:",
    opciones: ["GUID Partition Table", "BIOS", "MBR", "UEFI"],
    correcta: 0,
    explicacion: "GPT es el estilo moderno recomendado."
},
{
    pregunta: "En lsblk, ¿qué campo indica si el dispositivo es extraíble?",
    opciones: ["TYPE", "RO", "MOUNTPOINTS", "RM"],
    correcta: 3,
    explicacion: "RM indica si el dispositivo es removible."
},
{
    pregunta: "MTBF indica:",
    opciones: [
        "Durabilidad del hardware",
        "Velocidad del hardware",
        "Tamaño físico",
        "Puerto o ranura"
    ],
    correcta: 0,
    explicacion: "MTBF mide el tiempo medio entre fallos."
},
{
    pregunta: "Campo de fstab relacionado con copias de seguridad:",
    opciones: ["pass", "type", "dump", "options"],
    correcta: 2,
    explicacion: "El campo dump se relaciona con copias de seguridad."
},
{
    pregunta: "¿Qué bus NO es Plug and Play?",
    opciones: ["PCI", "VLB", "EISA"],
    correcta: 1,
    explicacion: "VLB no era Plug and Play."
},
{
    pregunta: "¿Qué bus es de propósito específico?",
    opciones: ["AGP", "EISA", "PCI", "PCI-E"],
    correcta: 0,
    explicacion: "AGP estaba diseñado específicamente para tarjetas gráficas."
},
{
    pregunta: "¿Qué bus trabaja con anchos de 32 y 64 bits?",
    opciones: ["AGP", "PCI-E", "PCI"],
    correcta: 2,
    explicacion: "PCI trabaja con buses de 32 y 64 bits."
},
{
    pregunta: "¿Qué comandos permiten revisar puntos de montaje?",
    opciones: ["df", "lsblk", "df y lsblk"],
    correcta: 2,
    explicacion: "Ambos comandos muestran información de montaje."
},
      {
    pregunta: "¿Qué significa que PCI Express sea full duplex?",
    opciones: [
        "Transmite solo en una dirección",
        "Puede enviar y recibir datos simultáneamente",
        "Usa dos discos duros",
        "Duplica la RAM"
    ],
    correcta: 1,
    explicacion: "PCIe puede enviar y recibir datos al mismo tiempo."
},

{
    pregunta: "¿Qué color suele identificar USB 2.0?",
    opciones: [
        "Azul",
        "Rojo",
        "Negro",
        "Verde"
    ],
    correcta: 2,
    explicacion: "USB 2.0 normalmente utiliza color negro."
},

{
    pregunta: "¿Qué ventaja principal ofrece NVMe frente a SATA?",
    opciones: [
        "Menor velocidad",
        "Mayor latencia",
        "Mayor ancho de banda",
        "Menor compatibilidad"
    ],
    correcta: 2,
    explicacion: "NVMe aprovecha PCIe y ofrece mucho mayor ancho de banda."
},

{
    pregunta: "¿Qué interfaz se usa normalmente con discos NVMe?",
    opciones: [
        "IDE",
        "PCI Express",
        "PATA",
        "AGP"
    ],
    correcta: 1,
    explicacion: "Los SSD NVMe trabajan sobre PCI Express."
},

{
    pregunta: "¿Qué dispositivo se considera periférico de entrada?",
    opciones: [
        "Impresora",
        "Altavoz",
        "Escáner",
        "Monitor"
    ],
    correcta: 2,
    explicacion: "El escáner introduce información al ordenador."
},

{
    pregunta: "¿Qué dispositivo es periférico de salida?",
    opciones: [
        "Teclado",
        "Ratón",
        "Monitor",
        "Micrófono"
    ],
    correcta: 2,
    explicacion: "El monitor muestra información al usuario."
},

{
    pregunta: "¿Qué periférico puede actuar como entrada y salida?",
    opciones: [
        "Pantalla táctil",
        "Altavoz",
        "Escáner",
        "Webcam"
    ],
    correcta: 0,
    explicacion: "La pantalla táctil recibe y muestra información."
},

{
    pregunta: "¿Qué significa USB?",
    opciones: [
        "Universal Serial Bus",
        "Universal System Bus",
        "United Serial Bus",
        "Universal Storage Bus"
    ],
    correcta: 0,
    explicacion: "USB significa Universal Serial Bus."
},

{
    pregunta: "¿Cuál es la principal ventaja del USB Tipo C?",
    opciones: [
        "Es paralelo",
        "No transmite energía",
        "Es reversible",
        "Solo sirve para vídeo"
    ],
    correcta: 2,
    explicacion: "USB-C puede conectarse en ambos sentidos."
},

{
    pregunta: "¿Qué tecnología permite conectar dispositivos sin apagar el equipo?",
    opciones: [
        "Plug and Play",
        "Hot Swap",
        "DMA",
        "POST"
    ],
    correcta: 1,
    explicacion: "Hot Swap permite conectar hardware en caliente."
},

{
    pregunta: "¿Qué tipo de disco NO tiene partes mecánicas?",
    opciones: [
        "HDD",
        "SSD",
        "DVD",
        "Blu-Ray"
    ],
    correcta: 1,
    explicacion: "Los SSD funcionan con memoria flash."
},

{
    pregunta: "¿Qué significa SSD?",
    opciones: [
        "Solid State Drive",
        "Serial Storage Disk",
        "System State Drive",
        "Solid Storage Device"
    ],
    correcta: 0,
    explicacion: "SSD significa Solid State Drive."
},

{
    pregunta: "¿Qué significa HDD?",
    opciones: [
        "Hard Disk Drive",
        "High Data Disk",
        "Hard Device Driver",
        "Hybrid Disk Drive"
    ],
    correcta: 0,
    explicacion: "HDD significa Hard Disk Drive."
},

{
    pregunta: "¿Qué característica diferencia principalmente un HDD de un SSD?",
    opciones: [
        "El SSD tiene platos mecánicos",
        "El HDD utiliza memoria flash",
        "El HDD tiene partes móviles",
        "El SSD necesita RPM"
    ],
    correcta: 2,
    explicacion: "Los HDD utilizan discos y cabezales mecánicos."
},

{
    pregunta: "¿Qué bus de expansión sustituyó a AGP?",
    opciones: [
        "ISA",
        "PCIe",
        "MCA",
        "USB"
    ],
    correcta: 1,
    explicacion: "PCI Express sustituyó a AGP."
},

{
    pregunta: "¿Qué significa lane en PCI Express?",
    opciones: [
        "Canal de comunicación",
        "Tipo de memoria",
        "Voltaje",
        "Disco lógico"
    ],
    correcta: 0,
    explicacion: "Los lanes son canales de transmisión de datos."
},

{
    pregunta: "¿Qué velocidad ofrece SATA III?",
    opciones: [
        "150 MB/s",
        "300 MB/s",
        "600 MB/s",
        "1 GB/s"
    ],
    correcta: 2,
    explicacion: "SATA III alcanza aproximadamente 600 MB/s."
},

{
    pregunta: "¿Qué velocidad ofrece SATA II?",
    opciones: [
        "150 MB/s",
        "300 MB/s",
        "600 MB/s",
        "6 GB/s"
    ],
    correcta: 1,
    explicacion: "SATA II ofrece hasta 300 MB/s."
},

{
    pregunta: "¿Qué estilo de particionado moderno se recomienda actualmente?",
    opciones: [
        "MBR",
        "GPT",
        "FAT",
        "NTFS"
    ],
    correcta: 1,
    explicacion: "GPT es el estilo moderno recomendado."
},

{
    pregunta: "¿Qué sistema sustituye normalmente al BIOS clásico?",
    opciones: [
        "GPT",
        "UEFI",
        "PCIe",
        "SATA"
    ],
    correcta: 1,
    explicacion: "UEFI reemplaza al BIOS tradicional."
},

{
    pregunta: "¿Qué herramienta Linux permite ver dispositivos de bloques?",
    opciones: [
        "ping",
        "lsblk",
        "nano",
        "mkdir"
    ],
    correcta: 1,
    explicacion: "lsblk muestra discos y particiones."
},

{
    pregunta: "¿Qué comando muestra el espacio usado en discos Linux?",
    opciones: [
        "ls",
        "fdisk",
        "df",
        "pwd"
    ],
    correcta: 2,
    explicacion: "df muestra uso y espacio libre."
},

{
    pregunta: "¿Qué significa RPM en un HDD?",
    opciones: [
        "Read Per Minute",
        "Rotations Per Minute",
        "Random Process Memory",
        "Rapid Peripheral Mode"
    ],
    correcta: 1,
    explicacion: "RPM indica las revoluciones por minuto."
},

{
    pregunta: "¿Qué ocurre normalmente al aumentar las RPM de un HDD?",
    opciones: [
        "Aumenta la latencia",
        "Disminuye el rendimiento",
        "Disminuye la latencia",
        "Reduce la capacidad"
    ],
    correcta: 2,
    explicacion: "Más RPM reducen la latencia."
},

{
    pregunta: "¿Qué conector USB suele utilizar impresoras?",
    opciones: [
        "Tipo A",
        "Tipo B",
        "Tipo C",
        "Mini PCI"
    ],
    correcta: 1,
    explicacion: "Las impresoras tradicionalmente usan USB Tipo B."
},

{
    pregunta: "¿Qué interfaz antigua utilizaba configuración maestro-esclavo?",
    opciones: [
        "SATA",
        "NVMe",
        "IDE",
        "SCSI"
    ],
    correcta: 2,
    explicacion: "IDE/PATA utilizaba maestro y esclavo."
},

{
    pregunta: "¿Qué significa PnP?",
    opciones: [
        "Plug and Play",
        "Port and Peripheral",
        "Primary Network Port",
        "Plug new Peripheral"
    ],
    correcta: 0,
    explicacion: "PnP significa Plug and Play."
},

{
    pregunta: "¿Qué comando Linux permite particionar discos?",
    opciones: [
        "mkfs",
        "fdisk",
        "mount",
        "nano"
    ],
    correcta: 1,
    explicacion: "fdisk permite gestionar particiones."
},

{
    pregunta: "¿Qué herramienta Windows permite gestionar particiones desde consola?",
    opciones: [
        "diskpart",
        "format",
        "services",
        "eventvwr"
    ],
    correcta: 0,
    explicacion: "diskpart administra discos y particiones."
},

{
    pregunta: "¿Qué sistema de archivos es típico de Windows?",
    opciones: [
        "ext4",
        "NTFS",
        "swap",
        "xfs"
    ],
    correcta: 1,
    explicacion: "NTFS es el sistema de archivos principal de Windows."
},

{
    pregunta: "¿Qué significa formatear una partición?",
    opciones: [
        "Eliminar físicamente el disco",
        "Crear un sistema de archivos",
        "Cambiar la BIOS",
        "Aumentar la RAM"
    ],
    correcta: 1,
    explicacion: "Formatear prepara una partición con un sistema de archivos."
},

{
    pregunta: "¿Qué tipo de memoria usan los SSD?",
    opciones: [
        "Flash",
        "Magnética",
        "Óptica",
        "Mecánica"
    ],
    correcta: 0,
    explicacion: "Los SSD utilizan memoria flash."
},

{
    pregunta: "¿Qué tipo de disco suele ser más rápido?",
    opciones: [
        "HDD",
        "SSD NVMe",
        "DVD",
        "Blu-Ray"
    ],
    correcta: 1,
    explicacion: "Los SSD NVMe son mucho más rápidos."
},

{
    pregunta: "¿Qué tecnología se usa principalmente en centros de datos y servidores?",
    opciones: [
        "SAS",
        "IDE",
        "AGP",
        "ISA"
    ],
    correcta: 0,
    explicacion: "SAS está orientado a entornos profesionales."
},

{
    pregunta: "¿Qué significa SATA?",
    opciones: [
        "Serial ATA",
        "System ATA",
        "Secure ATA",
        "Secondary ATA"
    ],
    correcta: 0,
    explicacion: "SATA significa Serial ATA."
},

{
    pregunta: "¿Qué ventaja tiene SATA frente a PATA?",
    opciones: [
        "Mayor tamaño de cable",
        "Mejor flujo de aire",
        "Necesita jumpers",
        "Menor velocidad"
    ],
    correcta: 1,
    explicacion: "Los cables SATA son más pequeños y mejoran ventilación."
},

{
    pregunta: "¿Qué componente almacena permanentemente la información?",
    opciones: [
        "RAM",
        "CPU",
        "Disco duro",
        "Cache"
    ],
    correcta: 2,
    explicacion: "El almacenamiento permanente se realiza en discos."
},

{
    pregunta: "¿Qué tipo de almacenamiento usa discos ópticos?",
    opciones: [
        "Magnético",
        "Flash",
        "Láser",
        "Mecánico"
    ],
    correcta: 2,
    explicacion: "CD/DVD/Blu-Ray usan tecnología láser."
},

{
    pregunta: "¿Qué utilidad tiene normalmente un puerto USB rojo?",
    opciones: [
        "USB 1.0",
        "Carga rápida",
        "Solo audio",
        "PS/2"
    ],
    correcta: 1,
    explicacion: "Muchos USB rojos soportan carga rápida."
},

{
    pregunta: "¿Qué comando revisa puntos de montaje en Linux?",
    opciones: [
        "df y lsblk",
        "ping",
        "mkfs",
        "nano"
    ],
    correcta: 0,
    explicacion: "df y lsblk permiten revisar montajes."
}
];

let preguntasOriginales = [...preguntas];

const bancosTests = [
    {
        nombre: "Bases de Datos",
        clave: "basesdedatos",
        preguntas: preguntasOriginales
    },
    {
        nombre: "Hardware",
        clave: "hardware",
        preguntas: preguntasHardware
    },
    {
        nombre: "Windows Server",
        clave: "windowsserver",
        preguntas: preguntasWindowsServer
    },
    {
        nombre: "Recu Hardware",
        clave: "recuhardware",
        preguntas: preguntasRecuHardware
    }
];

const btnAnterior = document.getElementById("btn-anterior");
const btnSiguienteTest = document.getElementById("btn-siguiente-test");
const nombreTest = document.getElementById("nombre-test");
const cantidadPreguntas = document.getElementById("cantidad-preguntas");

let testSeleccionado = 0;

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
const btnSalir = document.getElementById("btn-salir");
const btnMenu = document.getElementById("btn-menu");

const btnVerHistorial = document.getElementById("btn-ver-historial");
const btnVolverMenu = document.getElementById("btn-volver-menu");
const btnBorrarHistorial = document.getElementById("btn-borrar-historial");

const modalPendiente = document.getElementById("modal-pendiente");
const btnContinuarPendiente = document.getElementById("btn-continuar-pendiente");
const btnDescartarPendiente = document.getElementById("btn-descartar-pendiente");

const progreso = document.getElementById("progreso");
const cronometro = document.getElementById("cronometro");
const pregunta = document.getElementById("pregunta");
const opciones = document.getElementById("opciones");
const explicacion = document.getElementById("explicacion");
const resultado = document.getElementById("resultado");
const puntajeFinal = document.getElementById("puntaje-final");
const contenidoHistorial = document.getElementById("contenido-historial");

function actualizarSelectorTest() {
    const test = bancosTests[testSeleccionado];
    nombreTest.textContent = test.nombre;
    cantidadPreguntas.textContent = `${test.preguntas.length} preguntas`;
}

function mezclarPreguntas(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function mezclarOpciones(pregunta) {
    const opcionesMezcladas = pregunta.opciones.map((opcion, index) => ({
        texto: opcion,
        esCorrecta: index === pregunta.correcta
    }));

    opcionesMezcladas.sort(() => Math.random() - 0.5);

    return {
        ...pregunta,
        opciones: opcionesMezcladas.map(op => op.texto),
        correcta: opcionesMezcladas.findIndex(op => op.esCorrecta)
    };
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

function iniciarNuevoTest() {
    indiceActual = 0;
    puntaje = 0;
    fallos = 0;
    segundos = 0;
    historialFallos = [];
    respuestaSeleccionada = null;

    cronometro.textContent = "Tiempo: 00:00";

    const bancoActual = bancosTests[testSeleccionado].preguntas;

    if (modoExamen) {
        preguntas = mezclarPreguntas(bancoActual)
            .slice(0, Math.min(20, bancoActual.length))
            .map(pregunta => mezclarOpciones(pregunta));
    } else {
        preguntas = modoRandom
            ? mezclarPreguntas(bancoActual)
            : [...bancoActual];
    }

    menuInicial.style.display = "none";
    historialGlobal.style.display = "none";
    quizContainer.style.display = "block";

    progreso.style.display = "block";
    cronometro.style.display = "block";
    pregunta.style.display = "block";
    opciones.style.display = "grid";
    explicacion.style.display = "none";
    resultado.style.display = "none";
    btnSalir.style.display = "inline-block";

    iniciarCronometro();
    mostrarPregunta();
}

function mostrarPregunta() {
    respondido = false;
    respuestaSeleccionada = null;

    opciones.innerHTML = "";
    explicacion.style.display = "none";
    btnSiguiente.style.display = "none";

    const actual = preguntas[indiceActual];

    progreso.textContent = `Pregunta ${indiceActual + 1} de ${preguntas.length}`;
    pregunta.textContent = actual.pregunta;

    actual.opciones.forEach((opcion, index) => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.textContent = opcion;

        if (modoExamen) {
            boton.addEventListener("click", () => seleccionarOpcion(index));
        } else {
            boton.addEventListener("click", () => responderNormal(index));
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
    const botones = opciones.querySelectorAll("button");

    botones.forEach(btn => btn.classList.remove("seleccionada"));
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

            if (i === respuestaSeleccionada && i !== correcta) {
                btn.classList.add("incorrecta");
            }
        });

        explicacion.textContent = actual.explicacion;
        explicacion.style.display = "block";
    }
}

function calcularNota() {
    const total = preguntas.length;
    const valorPregunta = 10 / total;
    const penalizacionPorFallos = Math.floor(fallos / 3) * valorPregunta;
    const notaBase = puntaje * valorPregunta;

    return Math.max(0, notaBase - penalizacionPorFallos);
}

function obtenerClaveHistorial() {
    return `historial_${bancosTests[testSeleccionado].clave}`;
}

function obtenerClavePendiente() {
    return `intentoPendiente_${bancosTests[testSeleccionado].clave}`;
}

function guardarIntento() {
    const clave = obtenerClaveHistorial();
    const historial = JSON.parse(localStorage.getItem(clave)) || [];

    historial.push({
        fecha: new Date().toLocaleString(),
        tiempo: cronometro.textContent.replace("Tiempo: ", ""),
        aciertos: puntaje,
        fallos: fallos,
        nota: calcularNota().toFixed(2),
        modoExamen: modoExamen,
        errores: historialFallos
    });

    localStorage.setItem(clave, JSON.stringify(historial));
}

function guardarIntentoPendiente() {
    const estado = {
        testSeleccionado,
        preguntas,
        indiceActual,
        puntaje,
        fallos,
        segundos,
        modoExamen,
        modoRandom,
        historialFallos
    };

    localStorage.setItem(obtenerClavePendiente(), JSON.stringify(estado));
}

function cargarIntentoPendiente() {
    const estado = JSON.parse(localStorage.getItem(obtenerClavePendiente()));

    if (!estado) return;

    testSeleccionado = estado.testSeleccionado;
    preguntas = estado.preguntas;
    indiceActual = estado.indiceActual;
    puntaje = estado.puntaje;
    fallos = estado.fallos;
    segundos = estado.segundos;
    modoExamen = estado.modoExamen;
    modoRandom = estado.modoRandom;
    historialFallos = estado.historialFallos;

    actualizarSelectorTest();

    btnRandom.textContent = modoRandom ? "Modo random: ON" : "Modo random: OFF";
    btnRandom.classList.toggle("activo", modoRandom);

    btnExamen.textContent = modoExamen ? "Modo examen: ON" : "Modo examen: OFF";
    btnExamen.classList.toggle("activo", modoExamen);

    cronometro.textContent =
        `Tiempo: ${String(Math.floor(segundos / 60)).padStart(2, "0")}:${String(segundos % 60).padStart(2, "0")}`;

    menuInicial.style.display = "none";
    historialGlobal.style.display = "none";
    quizContainer.style.display = "block";

    progreso.style.display = "block";
    cronometro.style.display = "block";
    pregunta.style.display = "block";
    opciones.style.display = "grid";
    explicacion.style.display = "none";
    resultado.style.display = "none";
    btnSalir.style.display = "inline-block";

    iniciarCronometro();
    mostrarPregunta();
}

function mostrarResultado() {
    clearInterval(intervaloCronometro);

    localStorage.removeItem(obtenerClavePendiente());

    guardarIntento();

    progreso.style.display = "none";
    cronometro.style.display = "none";
    pregunta.style.display = "none";
    opciones.style.display = "none";
    explicacion.style.display = "none";
    btnSiguiente.style.display = "none";
    btnSalir.style.display = "none";

    resultado.style.display = "block";

    puntajeFinal.innerHTML = `
        Aciertos: ${puntaje}/${preguntas.length}<br>
        Fallos: ${fallos}<br>
        Tiempo: ${cronometro.textContent.replace("Tiempo: ", "")}<br>
        Nota final: ${calcularNota().toFixed(2)}/10
    `;
}

function cargarHistorial(tipoTest) {
    const claves = {
        bd: "historial_basesdedatos",
        hw: "historial_hardware",
        ws: "historial_windowsserver",
        rh: "historial_recuhardware"
    };

    const historial = JSON.parse(localStorage.getItem(claves[tipoTest])) || [];

    contenidoHistorial.innerHTML = "";

    if (historial.length === 0) {
        contenidoHistorial.innerHTML = "<p>No hay intentos guardados.</p>";
        return;
    }

    historial.forEach((intento, index) => {
        const detallesId = `detalles-${tipoTest}-${index}`;

        let html = `
            <div class="intento">
                <button class="btn-intento" onclick="toggleDetalles('${detallesId}')">
                    Intento ${index + 1} ${intento.modoExamen ? "(Examen)" : ""}
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

function mostrarMenuHistorial() {
    contenidoHistorial.innerHTML = `
        <button onclick="cargarHistorial('bd')">
            Historial Bases de Datos
        </button>

        <button onclick="cargarHistorial('hw')">
            Historial Hardware
        </button>

        <button onclick="cargarHistorial('ws')">
            Historial Windows Server
        </button>

        <button onclick="cargarHistorial('rh')">
            Historial Recu Hardware
        </button>
    `;
}

function toggleDetalles(id) {
    const elemento = document.getElementById(id);

    elemento.style.display =
        elemento.style.display === "none" ? "block" : "none";
}

btnAnterior.addEventListener("click", () => {
    testSeleccionado--;

    if (testSeleccionado < 0) {
        testSeleccionado = bancosTests.length - 1;
    }

    actualizarSelectorTest();
});

btnSiguienteTest.addEventListener("click", () => {
    testSeleccionado++;

    if (testSeleccionado >= bancosTests.length) {
        testSeleccionado = 0;
    }

    actualizarSelectorTest();
});

btnIniciar.addEventListener("click", () => {
    const pendiente = localStorage.getItem(obtenerClavePendiente());

    if (pendiente) {
        modalPendiente.style.display = "flex";
        return;
    }

    iniciarNuevoTest();
});

btnContinuarPendiente.addEventListener("click", () => {
    modalPendiente.style.display = "none";
    cargarIntentoPendiente();
});

btnDescartarPendiente.addEventListener("click", () => {
    localStorage.removeItem(obtenerClavePendiente());
    modalPendiente.style.display = "none";
    iniciarNuevoTest();
});

btnRandom.addEventListener("click", () => {
    modoRandom = !modoRandom;

    btnRandom.textContent = modoRandom ? "Modo random: ON" : "Modo random: OFF";
    btnRandom.classList.toggle("activo", modoRandom);
});

btnExamen.addEventListener("click", () => {
    modoExamen = !modoExamen;

    btnExamen.textContent = modoExamen ? "Modo examen: ON" : "Modo examen: OFF";
    btnExamen.classList.toggle("activo", modoExamen);
});

btnSiguiente.addEventListener("click", () => {
    if (modoExamen && respuestaSeleccionada === null) return;

    if (modoExamen) {
        corregirRespuesta();
    }

    indiceActual++;

    if (indiceActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
});

btnSalir.addEventListener("click", () => {
    clearInterval(intervaloCronometro);

    if (puntaje > 0 || fallos > 0 || indiceActual > 0) {
        guardarIntentoPendiente();
    }

    quizContainer.style.display = "none";
    menuInicial.style.display = "block";
});

btnMenu.addEventListener("click", () => {
    resultado.style.display = "none";
    quizContainer.style.display = "none";
    menuInicial.style.display = "block";
});

btnVerHistorial.addEventListener("click", () => {
    menuInicial.style.display = "none";
    historialGlobal.style.display = "block";
    mostrarMenuHistorial();
});

btnVolverMenu.addEventListener("click", () => {
    historialGlobal.style.display = "none";
    menuInicial.style.display = "block";
});

btnBorrarHistorial.addEventListener("click", () => {
    localStorage.removeItem("historial_basesdedatos");
    localStorage.removeItem("historial_hardware");
    localStorage.removeItem("historial_windowsserver");
    localStorage.removeItem("historial_recuhardware");

    mostrarMenuHistorial();
});

actualizarSelectorTest();
window.toggleDetalles = toggleDetalles;
window.cargarHistorial = cargarHistorial;
