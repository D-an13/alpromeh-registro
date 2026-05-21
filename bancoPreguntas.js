// --- ALPROMEH BANK OF TRIVIA QUESTIONS (50 DAYS OF CONTENT) ---
const bancoTrivia = [
    {
        "cat": "Laboratorio 🔬",
        "p": "¿Cuál es la verdadera función de los tubos de tapón Lila (EDTA K3)?",
        "o": [
            "Tienen un polvo que tiñe la sangre de morado para identificarla.",
            "Evitan que la sangre se coagule atrapando el calcio, ideal para hematologías.",
            "Aceleran la coagulación para separar el suero rápidamente."
        ],
        "c": 1,
        "e": "¡Fino papá! El EDTA K3 es un anticoagulante potente que atrapa el calcio de la sangre. Como la sangre necesita calcio para hacerse masa, al quitárselo se queda líquida. Se usa en hematologías completas para que las máquinas del hospital cuenten bien los glóbulos rojos, blancos y plaquetas sin que se trabe el sistema."
    },
    {
        "cat": "Médico Quirúrgico 💉",
        "p": "Si te piden un catéter Venoclisis No. 24 (Amarillo) y uno No. 18 (Verde)... ¿Cuál es el más grueso?",
        "o": [
            "El No. 24 es el más grueso porque el número es más grande.",
            "El No. 18 es más grueso porque en agujas médicas el número menor es más tubo.",
            "Los dos son exactamente del mismo grosor."
        ],
        "c": 1,
        "e": "¡Nítido! En el mundo de las agujas y catéteres (Gauges), la medida funciona al revés: entre MÁS CHICO es el número, MÁS GRUESO es el tubo. El 18 (Verde) es un cañón usado en emergencias para meter fluidos o sangre rápido, mientras que el 24 (Amarillo) es finito, especial para bebés o pacientes con venas bien difíciles."
    },
    {
        "cat": "Descartables 🧪",
        "p": "¿Para qué sirve el gel transparente que traen al fondo los tubos de tapón Amarillo?",
        "o": [
            "Es un pegamento para que la sangre no se mueva del fondo.",
            "Sirve para separar físicamente el suero (líquido) de las células sanguíneas al centrifugarse.",
            "Es un reactivo que le añade vitaminas a la muestra de sangre."
        ],
        "c": 1,
        "e": "¡Exacto! Cuando meten este tubo a la centrífuga (la máquina que da vueltas rápido), el gel, por densidad, se acomoda justo en medio. Deja el suero limpio arriba (para pruebas de química como glucosa o colesterol) y atrapa los glóbulos rojos abajo para que no contaminen la muestra."
    },
    {
        "cat": "Laboratorio 🔬",
        "p": "¿Qué color de tapón tiene el tubo utilizado para pruebas de Coagulación (Tiempos de TP y TPT)?",
        "o": [
            "Tapón Celeste (Citrato de Sodio).",
            "Tapón Rojo (Seco).",
            "Tapón Verde (Heparina)."
        ],
        "c": 0,
        "e": "¡Esa es! El tapón Celeste contiene Citrato de Sodio al 3.2%. Este químico es el único que mantiene la sangre en un estado perfecto y reversible para medir qué tan rápido o lento coagula el paciente antes de entrar a una cirugía en el IGSS o cualquier hospital."
    },
    {
        "cat": "Médico Quirúrgico ✂️",
        "p": "¿Cuál es la diferencia principal entre una hoja de bisturí No. 11 y una No. 20?",
        "o": [
            "La No. 11 es recta y puntiaguda para cortes finos; la No. 20 es grande y curva para incisiones largas.",
            "La No. 11 es para cirugías de huesos y la No. 20 es para la piel.",
            "Son iguales, solo cambia el tamaño del mango que utilizan."
        ],
        "c": 0,
        "e": "¡Fino! La hoja No. 11 es recta, parece un triángulo afilado y sirve para punciones o cortes súper finos (como abrir un absceso o un vaso sanguíneo). La No. 20 es una hoja grande y panzona que se usa en cirugías mayores para abrir la piel en áreas grandes como el abdomen."
    },
    {
        "cat": "Descartables 🩹",
        "p": "Al despachar jeringas, ¿qué significa que sean de acople 'Luer-Lock'?",
        "o": [
            "Que la aguja entra a presión y se puede salir si se empuja muy duro.",
            "Que la aguja se enrosca en la punta de la jeringa para que quede fija y segura.",
            "Que la jeringa ya trae la aguja fundida y no se puede separar."
        ],
        "c": 1,
        "e": "¡Cabal! 'Luer-Lock' significa que tiene rosca de seguridad. Al meter la aguja y darle vuelta, se asegura en su lugar. Esto evita que la aguja salga volando por la presión cuando se inyectan medicamentos densos o pesados."
    },
    {
        "cat": "Instrumental 🩻",
        "p": "¿Para qué sirve una Pinza Mosquito (Halsted) en una sala de operaciones?",
        "o": [
            "Para atrapar insectos dentro del quirófano.",
            "Para hacer hemostasia, o sea, prensar vasos sanguíneos pequeños y detener sangrados.",
            "Para sostener los huesos mientras los suturan."
        ],
        "c": 1,
        "e": "¡Exacto! Las pinzas Mosquito son pequeñas y finas. Su función principal es pinzar (apretar) vasos sanguíneos chiquitos que están goteando sangre durante la cirugía. Al cerrarlas, se quedan trabadas solas gracias a su cremallera, parando el sangrado al tiro."
    },
    {
        "cat": "Laboratorio 🔬",
        "p": "¿Qué tipo de muestra se recolecta en un tubo de tapón Rojo sin aditivos?",
        "o": [
            "Sangre con anticoagulante para ver las plaquetas.",
            "Suero puro, ya que la sangre se coagula de forma natural al no tener aditivos.",
            "Plasma cargado de glóbulos blancos intactos."
        ],
        "c": 1,
        "e": "¡Nítido! El tubo Rojo no tiene anticoagulantes (algunos traen activador de coágulo de sílice). Al meter la sangre ahí, se hace un coágulo natural. Al centrifugarlo, el coágulo se va al fondo y te deja el suero limpio arriba para hacer pruebas inmunológicas o de banco de sangre."
    },
    {
        "cat": "Médico Quirúrgico 🫁",
        "p": "¿Qué función tiene una Sonda Foley de dos vías en un paciente hospitalizado?",
        "o": [
            "Alimentar al paciente directo al estómago.",
            "Drenar la orina de la vejiga de forma continua y mantenerla fija con un balón inflable.",
            "Meter oxígeno directo a los pulmones."
        ],
        "c": 1,
        "e": "¡Cabal! La sonda Foley entra por la uretra hasta la vejiga. Una de las vías es para que salga la orina de forma constante hacia una bolsa recolectora, y la otra vía sirve para inflar un globito interno con agua estéril para que la sonda no se salga sola cuando el paciente se mueva."
    },
    {
        "cat": "Descartables 🩲",
        "p": "¿Qué diferencia hay entre una Sonda Foley y una Sonda Nelaton?",
        "o": [
            "La Foley se queda fija en la vejiga por días; la Nelaton es para vaciar la vejiga al tiro y retirarla de una vez.",
            "La Nelaton es de metal y la Foley es de látex suave.",
            "La Foley es para adultos y la Nelaton es exclusiva para pediatría."
        ],
        "c": 0,
        "e": "¡Fino! La Foley tiene el balón inflable para quedarse fija en el paciente por días o semanas. La Nelaton es una sonda simple, recta y sin balón; se introduce solo para sacar una muestra de orina limpia o vaciar la vejiga rápido, y se saca inmediatamente."
    },
    {
        "cat": "Médico Quirúrgico 🧵",
        "p": "En el mundo de las suturas, ¿cuál es la diferencia clave entre el Seda y el Catgut Crómico?",
        "o": [
            "La Seda la absorbe el cuerpo solo; el Catgut hay que retirarlo después de unos días.",
            "La Seda es NO absorbible (se queda fija o se retira); el Catgut es absorbible (el cuerpo lo deshace solo).",
            "Son lo mismo, solo cambia el color del empaque."
        ],
        "c": 1,
        "e": "¡Así es! El Catgut Crómico es de origen orgánico y el cuerpo lo absorbe por sí mismo con el tiempo (se usa en tejidos internos). La Seda es un material que no se absorbe; se usa en la piel por fuera y el médico tiene que quitar los puntos a los días de la cirugía."
    },
    {
        "cat": "Laboratorio 🔬",
        "p": "¿Para qué se usa el tubo de tapón Gris en el laboratorio?",
        "o": [
            "Para medir la glucosa (azúcar), porque conserva la azúcar intacta en la muestra.",
            "Para pruebas de ADN y paternidad.",
            "Para medir los niveles de alcohol únicamente."
        ],
        "c": 0,
        "e": "¡Esa es! El tubo Gris tiene oxalato de potasio y fluoruro de sodio. El fluoruro es el truco de magia aquí: detiene la 'glucólisis' (evita que las células se sigan comiendo el azúcar de la muestra de sangre mientras está en espera). Así el resultado de glucosa sale exacto."
    },
    {
        "cat": "Médico Quirúrgico 🩻",
        "p": "¿Qué miden los números de calibre en las suturas (ej: Sutura 2-0 vs Sutura 4-0)?",
        "o": [
            "Entre más ceros tiene (4-0), el hilo es más delgado; entre menos ceros (2-0), es más grueso.",
            "Entre más ceros tiene, el hilo es más largo.",
            "Los ceros significan los meses que tarda en absorberse en el cuerpo."
        ],
        "c": 0,
        "e": "¡Fino papá! Al igual que las agujas, esto va al revés. Una sutura `4-0` (cuatro ceros) es delgadísima, ideal para cirugías en la cara o vasos sanguíneos delicados. Una sutura `2-0` (dos ceros) es muchísimo más gruesa y fuerte, usada para amarrar tejidos internos pesados o músculos."
    },
    {
        "cat": "Descartables 🩸",
        "p": "¿Qué volumen aproximado de sangre se necesita para llenar correctamente un tubo de hematología pediátrico (Microtainer)?",
        "o": [
            "Unos 5 a 10 mililitros.",
            "Apenas de 0.25 a 0.5 mililitros (unas cuantas gotas).",
            "Exactamente 3 mililitros."
        ],
        "c": 1,
        "e": "¡Cabal! Los Microtainers son esos tubitos chiquitos especiales para bebés o niños pequeños. Como a un tierno no se le puede sacar un tubón de sangre sin descompensarlo, estos tubitos están diseñados para llenarse con un par de gotitas de sangre quitadas con un pinchazo en el talón o dedo."
    },
    {
        "cat": "Instrumental 🩻",
        "p": "¿Para qué sirve un separador Farabeuf en una cirugía?",
        "o": [
            "Para cortar tejidos duros como tendones.",
            "Para jalar y mantener abiertos los bordes de la herida y que el cirujano pueda ver bien adentro.",
            "Para machacar los huesos antes de poner un yeso."
        ],
        "c": 1,
        "e": "¡Exacto! El Farabeuf es una pieza de metal en forma de 'C' o 'L' con las puntas romas (sin filo). Sirve para que el asistente jale la piel y los tejidos hacia los lados, manteniendo el campo de la cirugía abierto y despejado para que el cirujano trabaje cómodo."
    },
    {
        "cat": "Médico Quirúrgico 🫁",
        "p": "¿Qué es un Espirómetro de incentivo y para qué se lo dan a los pacientes post-operados?",
        "o": [
            "Un aparato para medir la presión de los ojos.",
            "Un dispositivo con bolitas de plástico para que el paciente sople/aspire y ejercite sus pulmones tras una cirugía.",
            "Una máquina que inyecta anestesia gaseosa."
        ],
        "c": 1,
        "e": "¡Nítido! Cuando operan a alguien y pasa mucho tiempo acostado bajo anestesia, sus pulmones se ponen perezosos y pueden colapsar o agarrar neumonía. Ese aparato con bolitas los obliga a respirar profundo para que las bolitas suban, abriendo y limpiando los pulmones."
    },
    {
        "cat": "Descartables 🧪",
        "p": "¿Qué diferencia hay entre una jeringa de 3cc y una jeringa de Insulina de 1cc?",
        "o": [
            "La de insulina viene graduada en 'Unidades Internacionales' (UI) y trae una aguja fija ultra delgada.",
            "Solo cambia el largo del plástico, miden lo mismo.",
            "La de insulina se usa para inyectar directo en las venas del cuello."
        ],
        "c": 0,
        "e": "¡Exacto! La insulina es un medicamento súper delicado que se mide en microdosis (Unidades). Por eso su jeringa viene marcada en UI (ej: 10, 20, 100 unidades) en lugar de mililitros, y su aguja es cortita y delgadísima porque va directo en la grasita del cuerpo, no en el músculo."
    },
    {
        "cat": "Laboratorio 🔬",
        "p": "¿Qué significa que un tubo de laboratorio tenga tapón Verde?",
        "o": [
            "Que contiene Heparina de Litio o Sodio, un anticoagulante para pruebas de plasma rápido.",
            "Que está vacío por completo para muestras fecales.",
            "Que contiene ácidos fuertes para disolver tejidos."
        ],
        "c": 0,
        "e": "¡Cabal! La Heparina evita que la sangre coagule bloqueando la trombina. Lo genial del tubo Verde es que se usa mucho en laboratorios de emergencias porque se puede centrifugar inmediatamente sin esperar a que la sangre se haga masa, acelerando los resultados."
    },
    {
        "cat": "Médico Quirúrgico 🌡️",
        "p": "¿Cuál es la función de una llave de tres vías (o tres pasos) en un sistema de venoclisis?",
        "o": [
            "Regular la velocidad de las gotas por minuto a mano.",
            "Conectar varias soluciones o meter medicamentos a la misma vena sin necesidad de pinchar otra vez al paciente.",
            "Apagar todo el sistema si hay un cortocircuito en la sala."
        ],
        "c": 1,
        "e": "¡Fino! Es como una T de plomería pero médica. Tiene tres conexiones y una perilla central que gira. Permite pasarle al paciente el suero normal, y si hay una emergencia, el enfermero gira la llave y mete un medicamento directo por la otra entrada sin tener que meterle otro agujazo."
    },
    {
        "cat": "Descartables 🩸",
        "p": "¿Para qué se usa una lanceta de seguridad en los centros de salud?",
        "o": [
            "Para cortar el cordón umbilical de los recién nacidos.",
            "Para dar un pinchazo rápido en el dedo y sacar gotitas de sangre (ej: para medir azúcar o tipo de sangre).",
            "Para coser heridas pequeñas sin usar aguja."
        ],
        "c": 1,
        "e": "¡Exacto! La lanceta es esa aguja diminuta que tiene un botón. Da un piquete rápido en el dedo del paciente y la aguja se retrae sola hacia adentro del plástico inmediatamente. Esto último es ley para que el enfermero no se pinche por accidente con sangre contagiada."
    },
    {
        "cat": "Instrumental 🩻",
        "p": "¿Cuál es el uso de las Pinzas Kocher en el instrumental quirúrgico?",
        "o": [
            "Tienen dientes fuertes en la punta para sujetar tejidos pesados y duros (como fascias o músculos) sin que se resbalen.",
            "Son pinzas de disección fina para operar los ojos.",
            "Sirven para cortar el yeso de las piernas."
        ],
        "c": 0,
        "e": "¡Esa es! Las pinzas Kocher son rudas, papá. Tienen unos dientes como de cocodrilo en la pura punta (`1x2 dientes`). Sirven para agarrar tejidos súper duros y resbalosos que necesitan ser jalados con fuerza. Lo malo es que muerden tan duro que dañan el tejido, por lo que no se usan en órganos delicados como el intestino."
    },
    {
        "cat": "Médico Quirúrgico 🧵",
        "p": "¿Por qué las suturas de 'Nailon' se usan casi siempre para cerrar la piel por fuera?",
        "o": [
            "Porque el cuerpo las absorbe en menos de 24 horas.",
            "Porque es un material liso, súper fuerte, no produce infecciones y se puede retirar fácil sin que se pegue a la carne.",
            "Porque cambia de color si el paciente tiene fiebre."
        ],
        "c": 1,
        "e": "¡Cabal! El Nailon es un monofilamento (un solo hilo plástico liso). Al ser liso, las bacterias no tienen dónde esconderse, lo que evita infecciones en la herida. Además, como no se pega al tejido vivo, cuando le quitan los puntos al paciente a los 10 días, el hilo se desliza suavemente sin dolor."
    },
    {
        "cat": "Laboratorio 🔬",
        "p": "¿Para qué sirve un frasco con 'Formalina al 10%' en un hospital?",
        "o": [
            "Para limpiar los pisos y desinfectar los baños de la sala de operaciones.",
            "Para meter pedazos de órganos o tejidos retirados en cirugías (biopsias) y evitar que se pudran antes de ir a análisis.",
            "Es un jarabe especial para la tos severa."
        ],
        "c": 1,
        "e": "¡Exacto! La formalina es formaldehído diluido. Funciona como un fijador químico de tejidos. Cuando el cirujano saca un tumor o un apéndice, si lo deja al aire se descompone rápido. Al meterlo al frasco con formalina, las células se 'congelan' en el tiempo para que el patólogo las vea en el microscopio intactas."
    },
    {
        "cat": "Descartables 🩸",
        "p": "¿Qué es un equipo de 'Buretrol' (o Volumétrico) y cuándo se usa?",
        "o": [
            "Un tubo gigante para medir la orina de 24 horas.",
            "Un sistema de venoclisis con una cámara graduada de 100ml o 150ml para pasar dosis exactas de medicamentos, vital en niños.",
            "Un aparato electrónico para bombear aire caliente."
        ],
        "c": 1,
        "e": "¡Fino! Los niños o pacientes críticos no aguantan que se les pase un gran canchón de suero de un solo porque se les satura el corazón. El Buretrol permite llenar una recámara pequeña con la cantidad exacta de líquido (ej: 45ml) y cerrarle el paso al frasco grande. Así, si el enfermero se descuida, al niño solo le pasa lo que estaba en la recámara."
    },
    {
        "cat": "Médico Quirúrgico 🫁",
        "p": "¿Para qué sirve una mascarilla de oxígeno con sistema 'Venturi'?",
        "o": [
            "Para dormir al paciente por completo antes de operarlo.",
            "Para asegurar que al paciente le llegue un porcentaje de oxígeno exacto y controlado (FiO2) mezclado con el aire ambiente.",
            "Es una mascarilla protectora contra gases venenosos."
        ],
        "c": 1,
        "e": "¡Nítido! Las mascarillas Venturi traen unas piezas plásticas intercambiables de colores en la base. Gracias a la física, estas piezas regulan la entrada exacta de aire y oxígeno. Son clave para pacientes con problemas pulmonares crónicos (EPOC) donde meterles mucho oxígeno de golpe puede ser peligroso."
    },
    {
        "cat": "Instrumental ✂️",
        "p": "¿Cuál es la diferencia entre una tijera quirúrgica 'Mayo' y una 'Metzenbaum'?",
        "o": [
            "La Mayo es robusta para cortar materiales fuertes (hilos, gasas, fascias); la Metzenbaum es fina y delgada para tejidos delicados.",
            "La Mayo es solo para cortar huesos y la Metzenbaum es para hilos.",
            "Son iguales, solo que una la inventaron en Estados Unidos y la otra en Alemania."
        ],
        "c": 0,
        "e": "¡Así se habla! Las tijeras Mayo son las 'todoterreno' de la bandeja, tienen hojas gruesas para cortar cosas duras sin perder el filo. Las Metzenbaum son estilizadas, largas y finas; se usan únicamente para disecar o cortar tejidos suaves por dentro del cuerpo (órganos, vasos). Si usás una Metzenbaum para cortar hilos o gasas, le arruinás el filo al tiro."
    },
    {
        "cat": "Descartables 🧪",
        "p": "¿Para qué se utiliza un recolector de orina con sistema de 'Bolsa Pediátrica'?",
        "o": [
            "Para guardar los pañales usados de los bebés.",
            "Es una bolsita plástica con adhesivo hipoalergénico que se pega alrededor de los genitales del bebé para capturar su orina.",
            "Sirve para meter las muestras de sangre al refrigerador."
        ],
        "c": 1,
        "e": "¡Exacto! Como a un bebé no se le puede decir 'orine en este vasito', estas bolsitas traen una pega suave médica. Se les limpia bien su zona, se les pega la bolsita y se les pone el pañal encima. En cuanto el bebé hace pipí, la bolsa la recolecta limpia para llevarla al laboratorio."
    },
    {
        "cat": "Laboratorio 🔬",
        "p": "¿Qué es un medio de cultivo 'Agar Stuart' que traen los hisopos de transporte?",
        "o": [
            "Un gel especial que mantiene vivas a las bacterias de la muestra sin que se multipliquen durante el viaje al laboratorio.",
            "Un líquido para desinfectar la herida antes de tomar la muestra.",
            "Un tinte para que las bacterias brillen en la oscuridad."
        ],
        "c": 0,
        "e": "¡Cabal! Si tomás una muestra con un hisopo seco de una secreción de la garganta o una herida, las bacterias se mueren en el camino por falta de humedad. El medio Stuart es un gel nutritivo protector neutro: no deja que mueran por hambre, pero tampoco deja que crezcan de más, manteniendo la muestra idéntica a cómo se tomó."
    },
    {
        "cat": "Médico Quirúrgico 🩻",
        "p": "¿Cuál es el propósito de una venda elástica de 'Cremallera' o alta compresión?",
        "o": [
            "Servir de adorno sobre los yesos de los pacientes.",
            "Dar soporte firme, exprimir el exceso de líquido en las venas y evitar la hinchazón en esguinces o cirugías de várices.",
            "Calentar los músculos para evitar calambres nocturnos."
        ],
        "c": 1,
        "e": "¡Esa es! Estas vendas tienen un tejido elástico fuerte que ejerce presión constante hacia adentro. Ayuda a que la sangre de las venas regrese bien al corazón y evita que los líquidos se estanquen en los tejidos (edema) después de un golpe fuerte o cuando operan las piernas."
    },
    {
        "cat": "Descartables 🩹",
        "p": "¿Qué significa el término 'Estéril' impreso en los empaques de gasas, jeringas y guantes?",
        "o": [
            "Que el producto es completamente libre de cualquier microorganismo vivo (bacterias, virus, hongos).",
            "Que el producto es lavable y se puede usar muchas veces.",
            "Que fue fabricado con materiales plásticos reciclados de alta calidad."
        ],
        "c": 0,
        "e": "¡Fino! Estéril significa limpieza absoluta nivel Dios. Estos insumos pasan por procesos extremos de gas de óxido de etileno o radiación gama en las fábricas para matar hasta la última espora. Por eso, si el empaque se rompe o se moja, deja de ser estéril inmediatamente y ya no se puede meter a una herida abierta."
    },
    {
        "cat": "Médico Quirúrgico 🫁",
        "p": "¿Para qué sirve un circuito de 'Anestesia de Dos Ramas' (Corrugado)?",
        "o": [
            "Para pasar suero caliente a los dos brazos al mismo tiempo.",
            "Es el tubo doble de plástico por donde viaja el oxígeno y los gases anestésicos desde la máquina hacia los pulmones del paciente, y regresa el CO2.",
            "Para limpiar las secreciones de la garganta por succión."
        ],
        "c": 1,
        "e": "¡Exacto! Esos tubos con anillos (corrugados) se conectan a la máquina de anestesia. Una rama lleva los gases limpios y dormitivos para que el paciente los respire, y la otra rama atrapa el aire exhalado por el paciente para pasarlo por un filtro especial (cal sodada) que le quita el dióxido de bono dañino."
    },
    {
        "cat": "Laboratorio 🔬",
        "p": "¿Cuál es la función del tubo de tapón Azul Oscuro (o Royal Blue)?",
        "o": [
            "Se usa para pruebas de toxicología, medición de metales pesados (plomo, mercurio) y nutrición.",
            "Es un repuesto para cuando se acaban los tubos de tapón celeste.",
            "Sirve exclusivamente para guardar muestras de saliva."
        ],
        "c": 0,
        "e": "¡Nítido! Estos tubos especiales tienen un vidrio y un tapón súper puros, libres por completo de cualquier residuo de metal. Si usaras un tubo normal para medir plomo, el mismo plástico o hule del tapón podría alterar el resultado con micropartículas. Son clave para el monitoreo de trabajadores expuestos a químicos."
    },
    {
        "cat": "Instrumental 🦴",
        "p": "¿Qué es una gubia quirúrgica y en qué especialidades se utiliza más?",
        "o": [
            "Una pinza fina para agarrar las gasas empapadas de sangre.",
            "Un instrumento fuerte con puntas afiladas en forma de cuchara para morder y retirar pedacitos de hueso, usado en Traumatología.",
            "Un martillo de goma para probar los reflejos de las rodillas."
        ],
        "c": 1,
        "e": "¡Cabal! La gubia es como un alicate pesado pero con filo interno en las puntas redondas. Sirve para ir cortando o 'mordiendo' fragmentos de hueso duro poco a poco cuando están limpiando una fractura o abriendo espacio en la columna vertebral. Requiere una fuerza bárbara en las manos del cirujano."
    },
    {
        "cat": "Descartables 🩸",
        "p": "¿Qué diferencia hay entre un equipo de Normogotero y uno de Microgotero?",
        "o": [
            "El Normogotero da gotas normales (20 gotas = 1ml); el Microgotero da gotitas finas (60 microgotas = 1ml) para dosis bien controladas.",
            "El Microgotero es solo para sacar muestras de laboratorio chiquitas.",
            "El Normogotero funciona solo con agua pura y el otro con medicamentos densos."
        ],
        "c": 0,
        "e": "¡Fino! La clave está en el conteo. El Normogotero es el estándar para adultos (pasa suero normal a buena velocidad). El Microgotero trae una aguja diminuta dentro de la cámara de goteo; se usa en pediatría o cuidados intensivos donde pasar una gota de más puede alterar la presión o los medicamentos del paciente."
    },
    {
        "cat": "Médico Quirúrgico 🩲",
        "p": "¿Para qué sirve un recolector de orina tipo 'Cystoflo' (Bolsa de drenaje urinario)?",
        "o": [
            "Para lavarle los riñones al paciente con suero estéril.",
            "Es la bolsa grande graduada que se cuelga a la par de la cama del paciente para almacenar la orina que viene de la sonda Foley.",
            "Un contenedor hermético para muestras de heces de 24 horas."
        ],
        "c": 1,
        "e": "¡Exacto! El Cystoflo es esa bolsa plástica con un tubo largo que se conecta a la sonda del paciente. Trae una válvula abajo para vaciarla sin tener que desconectar nada (evitando que entren bacterias a la vejiga) y una escala marcada en mililitros para que enfermería mida exactamente cuánto orina la persona por turno."
    },
    {
        "cat": "Laboratorio 🔬",
        "p": "¿Qué uso se le da a las láminas portaobjetos con 'Extremo Esmerilado'?",
        "o": [
            "Tienen una esquina opaca de vidrio rayado especial para escribir ahí el nombre o código del paciente con lápiz sin que se borre.",
            "Sirven para lijar las uñas de los pacientes antes de sacarles sangre.",
            "Tienen más filo para cortar las muestras de tejido blando."
        ],
        "c": 0,
        "e": "¡Esa es! El área esmerilada es como un pedazo de vidrio lijado mate. Si escribís en el vidrio liso con marcador, los químicos del laboratorio (como el alcohol o la tinción) borran las letras al tiro. En la zona esmerilada, el grafito del lápiz se queda atrapado y la muestra nunca pierde el nombre del paciente."
    },
    {
        "cat": "Médico Quirúrgico 🩹",
        "p": "¿Para qué sirve un apósito transparente tipo 'Tegaderm'?",
        "o": [
            "Para tapar heridas infectadas y que suden.",
            "Es una película plástica estéril y transparente que cubre los catéteres intravenosos, protegiéndolos del agua y bacterias pero dejando ver la piel.",
            "Un parche con pegamento caliente para calmar los dolores de espalda."
        ],
        "c": 1,
        "e": "¡Fino papá! El Tegaderm es una maravilla de la tecnología médica: es impermeable al agua y bacterias desde afuera (el paciente se puede bañar), pero es transpirable para el vapor de la piel interna. Al ser transparente, las enfermeras pueden vigilar todos los días que el sitio de la vena no se ponga rojo o infectado sin quitar el parche."
    },
    {
        "cat": "Descartables 🧪",
        "p": "¿Qué es un tubo de 'Wintrobe' y qué prueba se realiza en él?",
        "o": [
            "Un tubo de vidrio largo y delgado graduado, usado para medir la Velocidad de Sedimentación Globular (VSG).",
            "Un envase de plástico grueso para congelar virus.",
            "Un frasco gigante para recolectar líquido de la espalda."
        ],
        "c": 0,
        "e": "¡Nítido! El tubo de Wintrobe se llena con sangre y se deja paradito en una grada por una hora exacta. Se mide cuántos milímetros caen los glóbulos rojos hacia el fondo por gravedad. Si caen muy rápido, significa que el paciente tiene algún proceso inflamatorio o infección activa en el cuerpo."
    },
    {
        "cat": "Instrumental 🩻",
        "p": "¿Para qué sirve un 'Porta-agujas Mayo-Hegar' en el quirófano?",
        "o": [
            "Para guardar las agujas de repuesto en la gaveta.",
            "Es una pinza robusta con ranuras cruzadas en las mandíbulas diseñada específicamente para agarrar las agujas curvas de sutura sin que giren.",
            "Una herramienta para clavar clavos en los huesos rotos."
        ],
        "c": 1,
        "e": "¡Cabal! Parece una pinza normal, pero si le mirás la punta por dentro, tiene un labrado de diamantes o ranuras finas y fuertes. Está hecho para morder la aguja de metal de la sutura con una fuerza tremenda. Esto evita que la aguja se mueva o rote cuando el cirujano está haciendo fuerza para atravesar la piel o un músculo duro."
    },
    {
        "cat": "Médico Quirúrgico 🧵",
        "p": "Al hablar de suturas, ¿cuál es la característica principal del 'Poliglactina 910' (frecuentemente llamado Vicryl)?",
        "o": [
            "Es una sutura sintética, trenzada y absorbible que mantiene su fuerza por unas semanas y luego desaparece sola.",
            "Un hilo metálico indestructible para amarrar costillas.",
            "Una goma líquida que pega la piel con el calor del sol."
        ],
        "c": 0,
        "e": "¡Exacto! El Vicryl es el rey de las cirugías internas (como operar el apéndice o la vesícula). Al ser sintético y trenzado, corre suave y amarra con nudos súper firmes que no se zafan. El cuerpo lo va degradando poco a poco por humedad (hidrólisis) hasta desaparecerlo por completo en unos 60-90 días, ahorrando una segunda cirugía."
    },
    {
        "cat": "Descartables 🩸",
        "p": "¿Para qué sirve un 'Grip' o Camisa porta-tubos (Holders) en la toma de muestras de sangre?",
        "o": [
            "Para guardar las jeringas usadas en el basurero.",
            "Es el capuchón de plástico donde se enrosca la aguja de dos puntas para poder meter los tubos al vacío de forma segura sin tocar la aguja.",
            "Un estuche acolchado para transportar los tubos en moto."
        ],
        "c": 1,
        "e": "¡Así es! Es la pieza central del sistema de extracción al vacío (Vacutainer). Enroscás la aguja especial ahí, pinchás la vena del paciente, y por el otro extremo de la camisa vas metiendo y sacando los tubos uno por uno. El vacío del tubo jala la sangre solo y vos no arriesgás tus dedos para nada."
    },
    {
        "cat": "Laboratorio 🔬",
        "p": "¿Qué contiene y para qué se usa el frasco de 'Hemocultivo'?",
        "o": [
            "Contiene un caldo nutritivo estéril y se usa para buscar bacterias o bacterias directamente en la sangre de pacientes con fiebres altas.",
            "Es un frasco vacío para guardar coágulos de sangre grandes.",
            "Un reactivo químico para limpiar las máquinas de laboratorio."
        ],
        "c": 0,
        "e": "¡Cabal! Si una bacteria llega a la sangre (septicemia), el paciente se puede morir rápido. En este frasco se mete una buena cantidad de sangre. El caldo de adentro alimenta a las bacterias para que se multipliquen rápido en una incubadora, avisando al laboratorio en pocas horas qué bicho es para meterle el antibiótico correcto."
    },
    {
        "cat": "Médico Quirúrgico 🫁",
        "p": "¿Cuál es la función de una cánula de Guedel (o cánula Mayo) en un paciente inconsciente?",
        "o": [
            "Servir de popote para que tome líquidos acostado.",
            "Es una pieza plástica curva que se mete a la boca para mantener la lengua abajo y evitar que obstruya la garganta (que se ahogue con su lengua).",
            "Un conector para meter aire por la nariz."
        ],
        "c": 1,
        "e": "¡Fino papá! Cuando alguien queda desmayado o bajo anestesia profunda, todos los músculos se relajan, y la lengua (que es un músculo pesado) se va para atrás y tapa el paso del oxígeno. Esta cánula tiene forma de 'J'; se mete al revés, se gira y acomoda la lengua en su lugar, dejando un canal central libre para que el aire pase nitidísimo."
    },
    {
        "cat": "Descartables 🩹",
        "p": "¿Qué diferencia hay entre el esparadrapo de papel (Micropore) y el de tela (Transpore o de Seda)?",
        "o": [
            "El de papel es hipoalergénico suave para pieles sensibles; el de tela pega muchísimo más fuerte pero puede irritar.",
            "El de papel no se puede cortar con la mano y el de tela sí.",
            "El de tela es solo para amarrar mangueras pesadas fuera de la medicina."
        ],
        "c": 0,
        "e": "¡Exacto! El Micropore (papel) es una bendición para viejitos o niños porque su pega es suave y deja respirar la piel; al quitarlo no arranca la capa de afuera de la piel. El Transpore (tela plástica perforada) o el esparadrapo de tela clásico son de combate: pegan duro y aguantan el peso de sondas o tubos pesados para que no se zafen con el sudor."
    },
    {
        "cat": "Instrumental 🩻",
        "p": "¿Para qué sirve un espéculo vaginal en una clínica médica?",
        "o": [
            "Para revisar los conductos del oído interno.",
            "Es un instrumento de dos valvas (plástico o metal) que se introduce y abre para separar las paredes vaginales, permitiendo ver el cuello del útero.",
            "Una pinza para machacar los frascos de vidrio usados."
        ],
        "c": 1,
        "e": "¡Nítido! Es la herramienta número uno para hacer la prueba del Papanicolau o revisiones ginecológicas. Al girar su tornillo central, las valvas se abren con cuidado, dándole al médico una vista perfecta y luz directa al fondo para tomar muestras o colocar dispositivos como la T de cobre."
    },
    {
        "cat": "Médico Quirúrgico 🩹",
        "p": "¿Qué es una venda de 'Guata' (Algodón laminado) y dónde se coloca siempre?",
        "o": [
            "Una venda con pegamento para limpiar la grasa de las heridas.",
            "Es un rollo de algodón suave que se pone directo sobre la piel antes de colocar el yeso de París o fibra de vidrio, para proteger la piel de quemaduras y roces.",
            "Una tela especial para tapar los ojos en cirugías de párpados."
        ],
        "c": 1,
        "e": "¡Esa es! El yeso, cuando se está secando y endureciendo en la pierna o brazo del paciente, genera una reacción química que calienta un montón y se pone rígido como piedra. La Guata funciona como un colchón térmico y protector: evita que el yeso queme la piel o cause llagas por presión en los huesos salidos (como los tobillos)."
    },
    {
        "cat": "Laboratorio 🔬",
        "p": "¿Cuál es la función de los tubos de tapón Negro en los laboratorios?",
        "o": [
            "Se usan exclusivamente para medir la velocidad de sedimentación globular (VSG) con una proporción exacta de citrato de sodio.",
            "Es un tubo de seguridad blindado para transportar venenos.",
            "Sirven para guardar muestras de tejido canceroso."
        ],
        "c": 0,
        "e": "¡Cabal! Traen Citrato de Sodio pero en una concentración diferente a los celestes (4:1). Están diseñados con un largo especial para calzar directo en las máquinas automáticas que miden la inflamación en la sangre (Westergren). Al terminar el conteo, te dicen rápido el nivel de defensas o desgaste del cuerpo."
    },
    {
        "cat": "Descartables 🩸",
        "p": "¿Qué significa el calibre marcado con una 'G' en las agujas hipodérmicas (ej: Aguja 21G)?",
        "o": [
            "Gauges (Calibre), que mide el diámetro externo de la aguja.",
            "Gramos, que indica cuánto pesa el metal de la aguja.",
            "Grados, que define el ángulo en el que debe entrar a la piel."
        ],
        "c": 0,
        "e": "¡Fino! 'G' viene de 'Gauge', un sistema inglés de medición de alambres. Recordá la ley de oro de tu sistema: entre más grande el número G (ej: 25G - Naranja), la aguja es un pelito de delgada; entre más chico el número G (ej: 16G - Gris), la aguja es un tubo grueso para jalar fluidos pesados."
    },
    {
        "cat": "Médico Quirúrgico 🩲",
        "p": "¿Para qué sirve un catéter doble J (Endoprótesis ureteral)?",
        "o": [
            "Para conectar dos sueros al mismo brazo.",
            "Es un tubo plástico delgado con las dos puntas en espiral que se coloca por dentro desde el riñón hasta la vejiga para asegurar que la orina pase si hay una piedra tapando.",
            "Una sonda especial para alimentar pacientes por la nariz."
        ],
        "c": 1,
        "e": "¡Cabal! Las puntas curvas tienen forma de 'J' para que no se mueva: una curva se queda trabada adentro del riñón y la otra curva flotando en la vejiga. Es un salvavidas cuando una piedra en el riñón inflama el conducto (uréter), evitando que el riñón se sature de orina y falle por completo."
    },
    {
        "cat": "Instrumental 🩻",
        "p": "¿Qué herramienta utiliza el cirujano para cortar los alambres de acero o clavos oseos en Traumatología?",
        "o": [
            "Una tijera Metzenbaum con mucha fuerza.",
            "Un alicate cortador de alambre quirúrgico de alta resistencia con doble articulación.",
            "Un bisturí de diamante No. 11."
        ],
        "c": 1,
        "e": "¡Exacto! Los clavos de Kirschner y alambres de acero que se usan para armar los huesos rotos son durísimos. Si usás una tijera normal, la quebrás. Estos alicates traen un sistema de doble fuerza o insertos de carburo de tungsteno en los filos que permiten cortar el metal quirúrgico como si fuera mantequilla."
    }
];
