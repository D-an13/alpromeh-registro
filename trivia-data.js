// trivia-data.js
const bancoDePreguntas = [
  {
    "cat": "Laboratorio",
    "p": "Un cliente te pide un tubo para 'la sangre completa' (hematología), ¿cuál le das?",
    "o": ["El tubo rojo", "El tubo amarillo (con gel)", "El tubo morado (con EDTA)"],
    "c": 2,
    "e": "¡Exacto! El morado lleva EDTA, que es el químico que mantiene la sangre líquida para que la máquina pueda contar bien las células.",
    "curioso": "El EDTA es tan efectivo que se usa desde 1950 para análisis sanguíneos sin alterar la forma de las células."
  },
  {
    "cat": "Urgencias",
    "p": "Llega un doctor apurado buscando una aguja verde para una emergencia, ¿qué número de catéter es?",
    "o": ["Número 24", "Número 18", "Número 14"],
    "c": 1,
    "e": "El catéter 18 es el verde. En medicina, entre más pequeño es el número, más gruesa es la aguja. ¡Es el ideal para que pasen líquidos rápido!",
    "curioso": "El calibre 18 (verde) es el 'rey' de las urgencias porque permite pasar volúmenes grandes de suero en muy poco tiempo."
  },
  {
    "cat": "Laboratorio",
    "p": "¿Para qué sirve el recipiente recolector de orina de 24 horas?",
    "o": ["Para juntar toda la orina del paciente durante un día entero", "Para guardar orina de un bebé", "Para una muestra rápida de 5 minutos"],
    "c": 0,
    "e": "Exacto, es para recolectar la orina durante todo un día y así el laboratorio puede hacer un análisis completo.",
    "curioso": "Se usa para medir sustancias como proteínas o creatinina que cambian mucho a lo largo del día."
  },
  {
    "cat": "Laboratorio",
    "p": "¿Qué le explicas a alguien que busca un 'Tubo con activador' (Tubo rojo)?",
    "o": ["Que sirve para que la sangre no se coagule", "Que es para ponerle agua a la muestra", "Que sirve para que la sangre se coagule rápido y separar el suero"],
    "c": 2,
    "e": "El activador rojo hace que la sangre se coagule rápido, así separamos el suero para hacer pruebas de química sanguínea.",
    "curioso": "Dentro del tubo hay partículas de sílice que aceleran la anticoagulación en menos de 30 minutos."
  },
  {
    "cat": "Protección",
    "p": "Te piden guantes de nitrilo, ¿por qué son diferentes a los de látex?",
    "o": ["Son lo mismo, solo cambia el nombre", "Los de nitrilo son azules y resistentes, ideales para alérgicos al látex", "Los de nitrilo son de tela"],
    "c": 1,
    "e": "¡Así es! Los de nitrilo son sintéticos, no causan alergia al látex y aguantan más químicos.",
    "curioso": "El nitrilo es un caucho sintético que ofrece tres veces más resistencia a pinchazos que el látex."
  },
  {
    "cat": "Cirugía",
    "p": "Un enfermero necesita una sonda para alguien que no puede orinar por sí mismo, ¿cuál es la mejor opción?",
    "o": ["Una sonda Foley de dos vías", "Una jeringa de 3ml", "Un cubrezapatos"],
    "c": 0,
    "e": "La sonda Foley es la que se queda puesta en la vejiga; la de dos vías permite vaciar la orina y también inflar el baloncito para que no se salga.",
    "curioso": "Se llama Foley en honor a Frederic Foley, el cirujano que la inventó en 1929."
  },
  {
    "cat": "Cirugía",
    "p": "¿Qué haces si te piden una 'Sonda nasogástrica' para un adulto?",
    "o": ["Le das una sonda para orinar", "Le das un tubo para respirar", "Le das una sonda que va de la nariz al estómago"],
    "c": 2,
    "e": "Correcto. These sondas llevan alimento o medicamentos directo al estómago de pacientes que no pueden tragar.",
    "curioso": "El material es de PVC grado médico diseñado para ser suave y no lastimar la nariz del paciente al pasar."
  },
  {
    "cat": "Inyectables",
    "p": "Te preguntan: ¿La jeringa de 1ml con aguja 30x1/2 es para inyectar un músculo grande?",
    "o": ["No, esa aguja es súper fina y corta, es para algo superficial", "Sí, es la más grande que tenemos", "Sirve para lo que sea"],
    "c": 0,
    "e": "¡Correcto! Esa aguja es muy fina (tipo insulina). No sirve para músculos profundos, es para inyecciones pequeñas en la piel.",
    "curioso": "El calibre 30 es tan fino que a veces el paciente casi ni siente el pinchazo."
  },
  {
    "cat": "Laboratorio",
    "p": "¿Para qué sirven las famosas 'Puntas de pipeta' amarillas?",
    "o": ["Para decorar el laboratorio", "Para limpiar microscopios", "Para que la pipeta automática succione cantidades exactas sin tocar la muestra"],
    "c": 2,
    "e": "Se usan en el laboratorio para medir gotas diminutas con precisión y sin contaminar el equipo.",
    "curioso": "El color amarillo estandariza que son para volúmenes pequeños, usualmente de 1 a 200 microlitros."
  },
  {
    "cat": "Laboratorio",
    "p": "Un cliente busca un tubo 'Eppendorf' de 1.5 ml, ¿qué es?",
    "o": ["Un tubo largo para sacar sangre", "Un tubito pequeño con tapa a presión para muestras pequeñitas", "Un recipiente de 1 litro"],
    "c": 1,
    "e": "Son esos tubitos chiquitos que se usan mucho en biología o pruebas genéticas para guardar pequeñas cantidades de líquido.",
    "curioso": "¡El nombre viene de la empresa Eppendorf, pero ahora todo mundo les dice así a cualquier tubito similar!"
  },
  {
    "cat": "Cirugía",
    "p": "Si te piden una 'Tijera Iris', ¿qué tipo de herramienta es?",
    "o": ["Una tijera muy pequeña y fina para trabajos de precisión o cirugía", "Una tijera grande para cortar vendas", "Es una herramienta para arreglar tuberías"],
    "c": 0,
    "e": "Exacto, las tijeras Iris son finas, de precisión, muy usadas en salas de curación o cirugías menores.",
    "curioso": "Originalmente fueron diseñadas para cirugía ocular (oftalmología), por eso son tan precisas."
  },
  {
    "cat": "Soluciones",
    "p": "¿Qué es el 'Equipo de venoclisis'?",
    "o": ["Es un aparato para tomar la presión", "Es el tubito que conecta la bolsa de suero con la vena del paciente", "Es una jeringa de 60ml"],
    "c": 1,
    "e": "¡Muy bien! Es la manguerita que lleva el suero o medicina desde la bolsa hacia el catéter del paciente.",
    "curioso": "Incluyen una cámara de goteo donde puedes conocer cuántas gotas por minuto están entrando al paciente."
  },
  {
    "cat": "Laboratorio",
    "p": "¿Por qué vendemos 'Cubreobjetos' junto a los 'Portaobjetos'?",
    "o": ["El portaobjetos sostiene la muestra y el cubreobjetos la protege para verla al microscopio", "Porque son del mismo tamaño", "Solo para ganar más dinero"],
    "c": 0,
    "e": "El porta es la lámina de vidrio donde va la muestra; el cubre es el cristalito fino que va encima para que no se ensucie el lente del microscopio.",
    "curioso": "El cubreobjetos es extremadamente delgado (aprox. 0.17 mm) para no distorsionar la imagen del microscopio."
  },
  {
    "cat": "Desechos",
    "p": "¿Qué le ofreces a un hospital para tirar agujas usadas?",
    "o": ["Una bolsa de basura negra", "Un recipiente de vidrio", "Un recipiente de punzocortantes (biotrasher)"],
    "c": 2,
    "e": "¡Seguridad primero! Los punzocortantes son rígidos para que las agujas no pinchen a nadie al tirar la basura.",
    "curioso": "Se llaman 'guardianes' o 'biotrasher' y son obligatorios para prevenir accidentes laborales con fluidos infecciosos."
  },
  {
    "cat": "Diagnóstico",
    "p": "Un cliente necesita medir la temperatura de varias personas sin contacto, ¿qué le das?",
    "o": ["Un termómetro de mercurio", "Un termómetro infrarrojo digital", "Un estetoscopio"],
    "c": 1,
    "e": "El infrarrojo mide la temperatura a distancia con un láser, súper útil y rápido.",
    "curioso": "El sensor detecta la radiación infrarroja que emite el cuerpo, no necesita tocar la piel para medir."
  },
  {
    "cat": "Curación",
    "p": "¿Qué es la 'Venda de guata'?",
    "o": ["Es un algodón acolchado que va debajo del yeso para proteger la piel", "Es una venda elástica que aprieta mucho", "Es una venda para heridas con sangre"],
    "c": 0,
    "e": "Correcto. Evita que el yeso raspe o irrite la piel del paciente.",
    "curioso": "Aunque parece algodón simple, está diseñada para no absorber humedad y mantener la piel seca bajo el yeso."
  },
  {
    "cat": "Soluciones",
    "p": "Te piden una 'llave de tres vías', ¿para qué es?",
    "o": ["Para cerrar puertas", "Para medir la orina", "Para conocer el flujo de líquidos en una vena (abrir o cerrar el paso)"],
    "c": 2,
    "e": "Es como un interruptor de luz, pero para líquidos médicos. Permite cambiar de dónde viene el suero sin pinchar al paciente otra vez.",
    "curioso": "Permite pasar dos medicamentos distintos al mismo tiempo por la misma vía si se ajusta correctamente."
  },
  {
    "cat": "Curación",
    "p": "Un doctor pide 'Cinta de castilla' para una curación, ¿qué es?",
    "o": ["Una cinta adhesiva de tela muy resistente", "Un tipo de papel de regalo", "Es una venda elástica"],
    "c": 0,
    "e": "Es la cinta clásica de tela (esparadrapo); pega muy bien y es ideal para sujetar gasas que se mueven mucho.",
    "curioso": "Se llama 'de Castilla' por tradición, aunque técnicamente es una cinta de óxido de zinc muy resistente."
  },
  {
    "cat": "Diagnóstico",
    "p": "Cuál es la función del gel conductor?",
    "o": ["Es un gel para curar heridas", "Es para lubricar la piel y que el ultrasonido o ECG se vea bien en la pantalla", "Es para que los guantes no se peguen"],
    "c": 1,
    "e": "El gel ayuda a que las ondas de sonido del ultrasonido entren al cuerpo; sin gel, no se ve nada en la pantalla.",
    "curioso": "El gel tiene una impedancia acústica muy similar a la de la piel, por eso 'puentea' el aire que estorba."
  },
  {
    "cat": "Diagnóstico",
    "p": "¿Qué es un estetoscopio?",
    "o": ["Un aparato para ver el interior del cuerpo", "Una lámpara para ver gargantas", "Un equipo para escuchar los sonidos del corazón y pulmones"],
    "c": 2,
    "e": "¡Exacto! Es la herramienta básica de todo médico para escuchar qué está pasando adentro del pecho.",
    "curioso": "Fue inventado en 1816. Al principio era solo un cilindro de madera, ¡antes usaban una trompetilla!"
  },
  {
    "cat": "Protección",
    "p": "Un cliente te pide batas para una cirugía mayor, ¿cuál de nuestras opciones le ofreces?",
    "o": ["La bata estéril quirúrgica empaquetada individualmente", "La bata no estéril de examen", "Un cubrezapatos grande"],
    "c": 0,
    "e": "¡Exacto! Para cirugías y quirófano se exige estrictamente la bata estéril para mantener el ambiente libre de bacterias. Las no estériles son solo para aislamiento o revisiones físicas.",
    "curioso": "Nuestras batas estériles están diseñadas con materiales que repelen fluidos para proteger tanto al médico como al paciente durante horas."
  },
  {
    "cat": "Protección",
    "p": "Llega un pedido para el área de maternidad de un hospital, buscan identificar a los recién nacidos junto a sus madres, ¿qué producto de la lista les das?",
    "o": ["Cinta de testigo", "Pulseras de identificación madre y niño/a", "Curitas de colores"],
    "c": 1,
    "e": "¡Correcto! Estas pulseras vienen en juego con la misma numeración o código correlativo para asegurar que el bebé correcto esté con la madre correcta desde el primer segundo.",
    "curioso": "El sistema de pulseras gemelas es una norma internacional de seguridad para evitar errores de identidad en los hospitales."
  },
  {
    "cat": "Cirugía",
    "p": "Un anestesiólogo nos pide tubos endotraqueales para adultos promedio, ¿qué calibres de nuestra lista deberías tener listos?",
    "o": ["Calibres pequeños como 3 y 4", "Sondas Foley de dos vías", "Calibres estándar de 6.5, 7 y 7.5"],
    "c": 2,
    "e": "¡Exacto! Los números 6.5, 7 y 7.5 son los diámetros estándar más utilizados para asegurar la vía aérea en pacientes adultos durante una anestesia general.",
    "curioso": "El número del tubo representa el diámetro interno en milímetros. Un tubo 7 significa que mide exactamente 7 mm por dentro."
  },
  {
    "cat": "Urgencias",
    "p": "Si un doctor busca un catéter intravenoso para un paciente pediátrico (un niño) o venas muy difíciles, ¿qué número le recomiendas?",
    "o": ["El catéter No. 22 (Azul)", "El catéter No. 18 (Verde)", "Una aguja dental"],
    "c": 0,
    "e": "¡Así es! Recuerda la regla médica: a mayor número, más fina es la aguja. El calibre 22 es delgado y corto, ideal para venas pequeñas o niños.",
    "curioso": "El catéter 22 suele ser azul texturizado en la mayoría de hospitales del mundo para que la enfermera lo identifique al instante sin leer la caja."
  },
  {
    "cat": "Diagnóstico",
    "p": "Un cliente quiere equipar una bodega de medicamentos y el ministerio le exige medir la temperatura y la humedad del ambiente, ¿qué equipo le vendes?",
    "o": ["Un termómetro infrarrojo", "Un esfigmomanómetro digital", "Un termohigrómetro"],
    "c": 2,
    "e": "¡Correcto! El termohigrómetro mide ambas variables a la vez. Es obligatorio para demostrar que los medicamentos están bien guardados y no se van a arruinar.",
    "curioso": "La mayoría de medicamentos deben mantenerse a menos de 25°C y con una humedad controlada para no perder su efectividad."
  },
  {
    "cat": "Diagnóstico",
    "p": "Un cliente busca un aparato clásico para tomar la presión arterial que use brazalete y manómetro de aguja (manual), ¿cómo se llama técnicamente?",
    "o": ["Esfigmomanómetro aneroide", "Oxímetro de pulso", "Estetoscopio de madera"],
    "c": 0,
    "e": "¡Exacto! El esfigmomanómetro aneroide es el famoso aparato manual de presión. Se complementa con el estetoscopio para escuchar los latidos del corazón.",
    "curioso": "La palabra viene del griego 'sphygmos' (pulso) y 'manometros' (medidor de presión). ¡Un buen trabalenguas médico!"
  },
  {
    "cat": "Laboratorio",
    "p": "Nos piden tubos al vacío para pruebas de coagulación (como tiempos de protrombina), ¿cuál de nuestros colores de tubo es el correcto?",
    "o": ["El tubo rojo (con activador)", "El tubo gris", "El tubo celeste (con citrato de sodio)"],
    "c": 2,
    "e": "¡Perfecto! El tubo celeste contiene citrato de sodio, el anticoagulante exacto que se necesita para analizar cómo está coagulando la sangre del paciente.",
    "curioso": "Es súper importante llenarlo exactamente hasta la marca que trae el tubo, porque la proporción entre sangre y químico debe ser exacta."
  },
  {
    "cat": "Laboratorio",
    "p": "Llega un encargado de laboratorio buscando recipientes para muestras de orina grandes de pacientes de consulta externa, ¿qué capacidades le ofreces?",
    "o": ["Recipientes de 30ml", "Recipientes de 60ml y 120ml grado médico", "Tubos Eppendorf"],
    "c": 1,
    "e": "¡Así es! Los de 60ml y 120ml son los tamaños ideales para muestras de orina estándar, garantizando espacio suficiente y un cierre hermético para evitar derrames.",
    "curioso": "Nuestros frascos están hechos de polipropileno transparente de alta resistencia, lo que permite al laboratorista ver el aspecto físico de la muestra sin abrirla."
  },
  {
"cat": "Cirugía",
"p": "Al revisar empaques de material quirúrgico, se lee la frase 'Libre de Pirógenos'. ¿Qué significa técnicamente?",
"o": ["Que el plástico resiste altas temperaturas sin derretirse", "Que no contiene restos bacterianos que puedan causar fiebre alta al paciente", "Que el empaque es transparente para ver el instrumental"],
"c": 1,
"e": "¡Exacto! Aunque un insumo esté estéril, si tiene restos de bacterias muertas (pirógenos), causará fiebre. Por eso deben certificar que están libres de ellos.",
"curioso": "Las jeringas y equipos de suero siempre traen este sello para garantizar seguridad total en procedimientos invasivos."
  },
  {
    "cat": "Cirugía",
    "p": "Están armando paquetes de gasas e instrumental para esterilizar y necesitan una forma visual de comprobar que el calor penetró el paquete, ¿qué les ofreces?",
    "o": ["Cinta de testigo (o cinta indicadora)", "Rollo de papel Kraft solo", "Guantes de examen"],
    "c": 0,
    "e": "¡Correcto! La cinta de testigo cambia de color (le salen unas líneas verdes) cuando alcanza la temperatura correcta dentro del esterilizador, sirviendo como prueba visual.",
    "curioso": "Aunque cambia de color y avisa que el paquete entró al autoclave, no sustituye a las pruebas biológicas semanales que exigen los hospitales."
  },
  {
    "cat": "Cirugía",
    "p": "Un médico va a realizar una cirugía y necesita un drenaje suave en forma de tubo de látex flexible para evitar que se acumulen líquidos en la herida, ¿cuál le das?",
    "o": ["Una sonda nasogástrica", "Un tubo Penrose", "Una llave de 3 vías"],
    "c": 1,
    "e": "¡Cabal! El tubo Penrose es un drenaje capilar de látex muy blando que se deja colocado en la herida para que los líquidos salgan por gravedad.",
    "curioso": "Fue inventado por el ginecólogo estadounidense Charles Bingham Penrose en 1890 y sigue siendo un éxito por su simplicidad."
  },
  {
    "cat": "Soluciones",
    "p": "Para un paciente en pediatría que necesita pasar suero de forma extremadamente lenta y controlada en microgotas, ¿qué equipo de venoclisis es el adecuado?",
    "o": ["El equipo de venoclisis normal (Normogotero)", "El equipo Microgotero", "Una sonda de aspiración"],
    "c": 1,
    "e": "¡Esa es! El microgotero está calibrado para que 60 microgotas equivalgan exactamente a 1 mililitro (ml), ideal para controlar dosis exactas en niños o tratamientos delicados.",
    "curioso": "En el normogotero normal de adulto, se necesitan solo 20 gotas para hacer 1 ml. ¡El microgotero es tres veces más preciso!"
  },
  {
    "cat": "Curación",
    "p": "Un doctor te pide guantes quirúrgicos estériles, pero te dice que su mano es estándar, ni muy grande ni muy pequeña, ¿qué tallas de nuestra lista le muestras?",
    "o": ["Tallas XS o L", "Talla 6", "Tallas intermedias como 7 o 7 1/2"],
    "c": 2,
    "e": "¡Perfecto! A diferencia de los guantes de examen (que van por letras S, M, L), los quirúrgicos van por números exactos para un ajuste perfecto a los dedos del cirujano. El 7 y 7.5 son los más comunes para manos medianas.",
    "curioso": "Vimen empacados por pares (izquierdo y derecho por separado) con un doble envoltorio estéril para que el médico no contamine al ponérselos."
  },
  {
    "cat": "Laboratorio",
    "p": "Si un cliente te pide 'sellos de heparina' (también llamados tapones amarillos), ¿para qué sirven en una clínica?",
    "o": ["Para tapar los tubos de ensayo vacíos", "Para sellar un catéter intravenoso intermitente y mantener la vía lista sin pasar suero todo el tiempo", "Para limpiar los microscopios"],
    "c": 1,
    "e": "¡Correcto! Se enrosca en el catéter del paciente. Permite inyectar medicamentos a través de su gomita protectora cuantas veces sea necesario sin tener que dejar al paciente amarrado a una bolsa de suero.",
    "curioso": "Se les llama históricamente 'de heparina' porque antes se les colocaba ese anticoagulante adentro para que la sangre no tapara el catéter."
  },
  {
    "cat": "Curación",
    "p": "Un enfermero necesita inmovilizar un esguince y va a colocar una venda elástica, pero antes necesita proteger la piel del paciente para que la elasticidad no le cause alergia o roce, ¿qué le pone abajo?",
    "o": ["Cinta de testigo", "Papel kraft", "Una venda de guata (algodón acolchado)"],
    "c": 2,
    "e": "¡Correcto! La guata actúa como un colchón protector para la piel, absorbe el sudor y evita que las vendas rígidas o elásticas lastimen por fricción.",
    "curioso": "También es el paso obligatorio número uno antes de colocar cualquier yeso de París o de fibra de vidrio."
  },
  {
    "cat": "Soluciones",
    "p": "Un paciente que puede caminar necesita una bolsa para recolectar orina, pero quiere que sea discreta debajo del pantalón, ¿cuál de nuestras opciones le das?",
    "o": ["La bolsa de orina para pierna con tiras de sujeción", "La bolsa de orina para cama (estándar)", "Un recipiente de heces de 30ml"],
    "c": 0,
    "e": "¡Exacto! La bolsa de pierna es más pequeña y se sujeta al muslo de forma súper discreta para que el paciente mantenga su movilidad. La de cama es de gran volumen (normalmente 2 litros) y no sirve para andar caminando.",
    "curioso": "Nuestras bolsas de pierna incluyen una válvula antirretorno para evitar que la orina regrese a la vejiga cuando el paciente se mueve, previniendo infecciones graves."
  },
  {
    "cat": "Diagnóstico",
    "p": "Una ginecóloga nos pide una herramienta desechable para realizar una citología o examen pélvico de forma cómoda y segura, ¿cuál le ofreces?",
    "o": ["Una sonda de alimentación", "Un espéculo vaginal descartable", "Una pinza Iris"],
    "c": 1,
    "e": "¡Cabal! El espéculo vaginal de plástico transparente permite una visión perfecta y, al ser desechable, le garantiza a la paciente higiene total y cero riesgo de contaminación cruzada.",
    "curioso": "Vienen en tallas (S, M, L) y cuentan con un sistema de cremallera o tornillo silencioso para fijar la apertura de forma segura sin lastimar."
  },
  {
    "cat": "Laboratorio",
    "p": "Llega un microbiólogo buscando hisopos para tomar muestras biológicas que se van a procesar de inmediato en el laboratorio, ¿cuál es la diferencia clave entre nuestras opciones?",
    "o": ["Los estériles vienen sellados individualmente para no contaminar la muestra; los no estériles son de uso general", "Solo cambia el color de la madera", "Los estériles son de plástico y los no estériles de metal"],
    "c": 0,
    "e": "¡Así es! Para cultivos microbiológicos (como un hisopado de garganta) es obligatorio usar el hisopo estéril. Si usas uno común, las bacterias del ambiente arruinan el análisis.",
    "curioso": "El algodón de los hisopos médicos está firmemente adherido al aplicador para evitar que se desprenda dentro de las cavidades del paciente."
  },
  {
    "cat": "Protección",
    "p": "En un hospital piden mascarillas para el área de urgencias o partos, donde hay alto riesgo de que salpiquen fluidos o sangre directo a la cara, ¿cuál es la mejor opción?",
    "o": ["La mascarilla normal de tres pliegues", "Un gorro de cirujano", "La mascarilla con visor o pantalla protectora integrada"],
    "c": 2,
    "e": "¡Correcto! La mascarilla con visor protege dos zonas críticas a la vez: las vías respiratorias y los ojos del médico contra salpicaduras accidentales de fluidos.",
    "curioso": "El visor de estas mascarillas tiene un tratamiento antirreflejante y antiempañante para que el médico no pierda visibilidad en plena acción."
  },
  {
    "cat": "Curación",
    "p": "Un cliente de una clínica estética busca guantes de examen que le queten totalmente ajustados a una mano sumamente pequeña y delgada, ¿qué talla le recomiendas?",
    "o": ["Talla M o L", "Talla XS", "Talla 8 de cirugía"],
    "c": 1,
    "e": "¡Exacto! La talla XS (Extra Small) es la ideal para manos muy delgadas, asegurando que el guante no quede flojo y el profesional no pierda el sentido del tacto en procedimientos finos.",
    "curioso": "Nuestros guantes de examen vienen texturizados en las yemas de los dedos para ofrecer un agarre perfecto incluso si el guante está mojado."
  },
  {
    "cat": "Diagnóstico",
    "p": "Un doctor nota que su oxímetro de pulso marca lecturas extrañas y quiere confirmar si el paciente tiene buena temperatura en los dedos para que el sensor lea bien, ¿qué herramienta básica usa?",
    "o": ["Un termohigrómetro", "Un tubo endotraqueal", "Un termómetro digital flexible o infrarrojo"],
    "c": 2,
    "e": "¡Muy bien! El termómetro digital flexible es ideal para lecturas rápidas y seguras. Si el paciente tiene las manos sumamente frías (hipotermia), el oxímetro no puede medir bien la saturación.",
    "curioso": "Los termómetros digitales emiten un pitido automático cuando la temperatura se estabiliza, eliminando las adivinanzas del viejo termómetro de mercurio."
  },
  {
    "cat": "Inyectables",
    "p": "Un cliente nos pide jeringas para aplicar insulina y enfatiza que quiere la aguja más delgada y corta posible, ¿cuál de nuestra lista es la que busca?",
    "o": ["La jeringa de 1ml con aguja fina 30x1/2", "La jeringa de 10ml con aguja verde No. 18", "Una jeringa de 60ml"],
    "c": 0,
    "e": "¡Esa es! La jeringa de 1ml (tipo insulina) con aguja calibre 30 es sumamente fina y corta, diseñada para inyecciones subcutáneas (en la grasita bajo la piel) sin causar dolor.",
    "curioso": "El volumen de 1ml está graduado en unidades internacionales, lo que facilita a los pacientes diabéticos medir su dosis exacta sin cometer errores."
  },
  {
    "cat": "Curación",
    "p": "Para un consultorio dental nos piden agujas específicas para aplicar anestesia local en las encías, ¿qué producto les preparamos?",
    "o": ["Catéter No. 14", "Agujas dentales cortas/largas", "Tijeras Iris"],
    "c": 1,
    "e": "¡Correcto! Las agujas dentales tienen una rosca especial tipo 'Carpule' para adaptarse directo a la jeringa metálica que usan los odontólogos, permitiendo una infiltración suave en la boca.",
    "curioso": "Nuestras agujas dentales son ultra siliconadas para que penetren el tejido de la encía con el menor roce y molestia posible para el paciente."
  },
  {
    "cat": "Cirugía",
    "p": "Un cirujano va a realizar un corte fino en piel y necesita montar una hoja de bisturí nueva en su mango, ¿qué cuidado principal se debe tener con este insumo?",
    "o": ["Verificar que el empaque esté sellado de fábrica para garantizar su esterilidad", "Lavarlo con agua común antes de usar", "Usarlo varias veces en distintos pacientes"],
    "c": 0,
    "e": "¡Cabal! Las hojas de bisturí son estrictamente de un solo uso y vienen estériles. Cualquier daño en su empaque individual significa que debe descartarse de inmediato.",
    "curioso": "Están fabricadas en acero al carbono o acero inoxidable de alto grado quirúrgico para garantizar un filo perfecto que no rasgue los tejidos."
  },
  {
    "cat": "Curación",
    "p": "Nos piden un tipo de venda de gasa común, ¿cuál es su función principal a diferencia de una venda elástica o de guata?",
    "o": ["Sirve para apretar un esguince con fuerza", "Es para poner debajo del yeso", "Sirve para sostener apósitos o gasas sobre una herida abierta sin ejercer presión excesiva"],
    "c": 2,
    "e": "¡Exacto! La venda de gasa es ligera y ventilada; su única misión es fijar curaciones en su lugar permitiendo que la piel respire, no inmovilizar ni apretar.",
    "curioso": "Al ser tejida de forma abierta, no se pega con fuerza a los fluidos de las heridas, facilitando su retiro en las curaciones."
  },
  {
    "cat": "Cirugía",
    "p": "Llega un instrumentista buscando bolsas y rollos especiales para meter instrumental al esterilizador, ¿qué elemento clave traen estos empaques impreso en el papel?",
    "o": ["Una regla para medir las jeringas", "Un indicador químico impreso (testigo) que cambia de color al completarse la esterilización", "El nombre de los cirujanos de la región"],
    "c": 1,
    "e": "¡Perfecto! Tanto los rollos como las bolsas listas para esterilizar traen marcas indicadoras que cambian de color (por ejemplo, de rosa a marrón) para asegurar que el vapor hizo su trabajo.",
    "curioso": "Están hechos con una cara de papel grado médico (que filtra bacterias) y una cara de plástico transparente que permite ver qué instrumental está guardado adentro."
  },
  {
    "cat": "Laboratorio",
    "p": "En un banco de sangre necesitan separar las células del plasma metiendo tubos a una máquina giratoria de alta velocidad, ¿qué tipo de tubo resistente a la fuerza centrífuga les ofreces?",
    "o": ["Tubos de centrífuga cónicos graduados", "Sello de heparina", "Bajalenguas de madera"],
    "c": 0,
    "e": "¡Esa es! Los tubos de centrífuga están fabricados con polipropileno especial de paredes gruesas para aguantar miles de revoluciones por minuto sin rajarse ni estallar dentro de la máquina.",
    "curioso": "Su fondo cónico es clave para que todo el sedimento o las células pesadas se concentren en la pura puntita del tubo al terminar de girar."
  },
  {
    "cat": "Curación",
    "p": "Un pediatra nos compra bajalenguas de madera tradicionales, ¿cuál es el uso correcto de este insumo en su consulta diaria?",
    "o": ["Para mezclar reactivos de laboratorio", "Para entablillar dedos rotos únicamente", "Para deprimir la lengua del niño y tener una visión limpia de la garganta y amígdalas"],
    "c": 2,
    "e": "¡Exacto! Es la herramienta de madera pulida por excelencia para revisar gargantas sin lastimar la boca. Al terminar el chequeo, se descarta de una vez.",
    "curioso": "Nuestras bajalenguas pasan por un proceso de pulido estricto para garantizar bordes perfectamente redondeados y libres de astillas peligrosas."
  },
  {
    "cat": "Protección",
    "p": "Un hospital quiere comprar gorros descartables para el personal de quirófano, pero recalcan que el modelo de cirujano y de enfermera es distinto, ¿por qué?",
    "o": ["El de enfermera (estilo hongo) es más amplio para recoger cabellos largos; el de cirujano es tipo amarrar o tiras", "Solo cambia el precio", "Uno es de tela de algodón gruesa y el otro es transparente"],
    "c": 0,
    "e": "¡Cabal! El gorro de enfermera o cofia redonda está diseñado para cubrir cabelleras voluminosas por completo, mientras que el de cirujano cubre la cabeza de forma más ajustada con cintas de amarre.",
    "curioso": "El uso de gorros descartables reduce drásticamente la caída de caspa o micro cabellos en los campos estériles de operación."
  },
  {
    "cat": "Laboratorio",
    "p": "Un cliente busca una superficie de vidrio ultra limpia y plana de 26x76 mm para colocar muestras líquidas que se van a observar bajo el microscopio, ¿cómo se llama?",
    "o": ["Cubreobjetos", "Portaobjetos de vidrio", "Tubo Eppendorf"],
    "c": 1,
    "e": "¡Exacto! El portaobjetos es la base de vidrio grueso donde se coloca la gota de sangre, orina o tejido. Luego encima se le deja caer el cubreobjetos que es mucho más fino.",
    "curioso": "Nuestros portaobjetos vienen con bordes pulidos a 90° o 45° para evitar que el laboratorista se corte los dedos al manipularlos rápido."
  },
  {
    "cat": "Laboratorio",
    "p": "Un cliente busca un tubo al vacío diseñado específicamente para pruebas de glucosa (azúcar en sangre), ¿cuál de nuestros colores de tapa le das?",
    "o": ["El tubo morado", "El tubo gris", "El tubo rojo"],
    "c": 1,
    "e": "¡Exacto! El tubo gris contiene fluoruro de sodio y oxalato de potasio, químicos que detienen la descomposición de la glucosa para que la muestra sea exacta.",
    "curioso": "El fluoruro actúa como un 'congelador' químico que evita que las células se sigan comiendo el azúcar dentro del tubo antes de analizarla."
  },
  {
    "cat": "Protección",
    "p": "Para ingresar al área de cuidado crítico, neonatología o quirófano, ¿qué insumo se coloca en los pies para no contaminar el suelo?",
    "o": ["Venda de guata", "Zapatones descartables", "Bolsas de papel para esterilizar"],
    "c": 1,
    "e": "¡Cabal! Los zapatones o cubrecalzados evitan que la suciedad de la calle o de los pasillos comunes entre a las zonas de máxima pureza del hospital.",
    "curioso": "Están fabricados con tela no tejida y elásticos ajustables para asegurar que no se desprendan ni deslicen mientras el médico camina."
  },
  {
    "cat": "Laboratorio",
    "p": "Te piden un frasco pequeño para examen de parásitos o coprológico, ¿cuál es el volumen de nuestro recipiente de heces?",
    "o": ["Un frasco de 120ml", "Un tubo de centrífuga cónico", "Un recipiente de heces de 30ml"],
    "c": 2,
    "e": "¡Así es! Para muestras de heces basta con un frasco pequeño de 30ml. Traen una paleta o cuchara integrada en la tapa para facilitar la toma de la muestra.",
    "curioso": "El tamaño de 30ml está estandarizado para evitar el exceso de gases dentro del frasco y mantener la muestra segura hacia el laboratorio."
  },
  {
    "cat": "Urgencias",
    "p": "Un enfermero necesita liberar las vías respiratorias de un paciente acumulando flemas o secreciones, ¿qué insumo utiliza con la máquina de succión?",
    "o": ["Una sonda Foley", "Una sonda de aspiración", "Un tubo endotraqueal"],
    "c": 1,
    "e": "¡Perfecto! La sonda de aspiración es flexible, de punta suave y cuenta con conectores especiales para limpiar la garganta o tráquea de fluidos que ahoguen al paciente.",
    "curioso": "Tienen ojos laterales en la punta para evitar que la succión dañe las mucosas internas de la vía respiratoria si se pega a las paredes."
  },
  {
    "cat": "Cirugía",
    "p": "Un paciente delicado no puede comer por la boca y el médico ordena pasarle nutrientes líquidos directo al estómago, ¿cuál sonda le despachas?",
    "o": ["Sonda de aspiración", "Tubo Penrose", "Sonda de alimentación (nasogástrica o enteral)"],
    "c": 2,
    "e": "¡Exacto! La sonda de alimentación está diseñada con un material ultra suave que puede quedarse varios días puesta sin irritar el tracto digestivo.",
    "curioso": "Vienen con marcas numéricas a lo largo del tubo para que el enfermero sepa exactamente cuántos centímetros han entrado hacia el estómago."
  },
  {
    "cat": "Soluciones",
    "p": "Un paciente en cama requiere una bolsa recolectora de orina que se cuelgue fijo a la estructura de la camilla, ¿cuál de nuestras opciones le entregas?",
    "o": ["La bolsa de orina para cama", "La bolsa de orina para pierna", "Un recipiente de 60ml"],
    "c": 0,
    "e": "¡Cabal! La bolsa de cama tiene gran capacidad (2000ml) y cuenta con un gancho resistente para mantenerse vertical al lado del colchón sin riesgo de caídas.",
    "curioso": "Nuestras bolsas de cama traen un puerto de vaciado en la parte inferior para que la enfermera retire la orina de forma higiénica y rápida."
  },
  {
    "cat": "Cirugía",
    "p": "Un anestesiólogo va a intubar a una mujer adulta de contextura delgada, ¿cuál de nuestros diámetros de tubo endotraqueal es el más probable que pida?",
    "o": ["Tubo endotraqueal de 7.5", "Catéter No. 18", "Tubo endotraqueal de 6.5"],
    "c": 2,
    "e": "¡Muy bien! El calibre 6.5 se utiliza mucho en mujeres adultas de complexión pequeña, asegurando que pase suave por las cuerdas vocales sin lastimar.",
    "curioso": "Nuestros tubos endotraqueales incluyen un balón inflable en la punta que sella la tráquea para que el oxígeno no se escape durante la ventilación."
  },
  {
    "cat": "INSUMOS",
    "p": "¿Cuál es la diferencia real entre usar un equipo de venoclisis normogotero y uno microgotero para pasar un suero?",
    "o": ["El normogotero pasa gotas grandes (ideal para adultos) y el microgotero pasa gotitas finas (para dosis exactas o niños)", "El microgotero se usa solo para pasar sangre y el normogotero para agua pura", "El normogotero funciona con baterías y el microgotero funciona por pura gravedad"],
    "c": 0,
    "e": "¡Exacto! El normogotero estándar da 20 gotas por mililitro, ideal para pasar suero rápido a un adulto. El microgotero da 60 gotitas por mililitro, lo que permite un control ultra preciso para que no se sature el corazón del paciente.",
    "curioso": "Un tip rápido: 1 gota de normogotero equivale exactamente a 3 gotitas de un microgotero. ¡Matemática pura de enfermería!"
  },
  {
    "cat": "INSUMOS",
    "p": "Las jeringas de Insulina de 1 ml o 0.5 ml vienen con una escala de graduación diferente a las jeringas comunes. ¿Cómo se mide en ellas?",
    "o": ["Se miden en miligramos (mg) de azúcar por cada línea grabada", "Se miden en Unidades Internacionales (UI) y jamás en mililitros (ml) para evitar errores fatales de dosis", "Se miden en centímetros cúbicos estándar dependiendo del peso del paciente"],
    "c": 1,
    "e": "¡Cabal, esa es! La insulina es un medicamento delicadísimo. Si un paciente se inyecta 1 ml de insulina pensando que es una dosis normal, podría caer en coma. Por eso estas jeringas vienen marcadas directamente en Unidades (ej. 10, 20, 100 UI).",
    "curioso": "La aguja de la jeringa de insulina es la más delgada y corta del mercado (suele ser calibre 31G), diseñada así para que el pinchazo diario en la grasa de la panza casi no se sienta."
  },
  {
    "cat": "CURACIÓN",
    "p": "¿Para qué sirve exactamente el uso de la Solución Salina Normal al 0.9% en lugar de usar agua de chorro o jabón común al limpiar una herida?",
    "o": ["Porque el agua de chorro duerme los nervios y quita el dolor de golpe", "Porque contiene antibióticos fuertes que matan cualquier bacteria en segundos", "Porque tiene la misma concentración de sal que los fluidos del cuerpo, limpiando sin deshidratar ni dañar las células vivas"],
    "c": 2,
    "e": "¡Exactamente, mi bro! Se le llama 'isotónica' porque es idéntica a nuestras lágrimas o sangre. Si lavas una herida abierta con agua pura, las células de la piel se hinchan y mueren, retrasando la cicatrización. La solución salina limpia sin agredir.",
    "curioso": "Aunque es súper segura para limpiar, una vez abierta la botella de solución salina, se debe descartar en 24 o 48 horas porque se contamina de bacterias del ambiente muy fácil."
  },
  {
    "cat": "INSUMOS",
    "p": "Llega un pedido de mascarillas de oxígeno tipo 'Venturi'. ¿Cuál es la característica principal de este producto frente a una mascarilla de oxígeno simple?",
    "o": ["Permite regular con total precisión el porcentaje exacto de oxígeno (FiO2) que recibe el paciente gracias a unos dispositivos de colores", "Viene con un motor integrado que calienta el aire para que no le dé tos al paciente", "Está hecha de un material transparente que permite al paciente hablar por teléfono sin quitársela"],
    "c": 0,
    "e": "¡Nítido, diste en el clavo! Las mascarillas simples tiran oxígeno al cálculo. La mascarilla Venturi usa unos adaptadores de colores (válvulas) que mezclan el oxígeno con el aire de la habitación de forma exacta, entregando desde un 24% hasta un 50% exacto según lo que pida el doctor.",
    "curioso": "Cada color de la válvula Venturi representa un flujo de litros por minuto específico. El azul es el más bajo y el naranja es el que más flujo permite."
  },
  {
    "cat": "INSUMOS",
    "p": "¿Cuál es la función principal del gel conductor transparente que se vende junto a los equipos de ultrasonido o de electrodos (EKG)?",
    "o": ["Funciona como un pegamento temporal para que el aparato no se resbale de la piel", "Elimina el aire entre el equipo y la piel, permitiendo que las ondas sonoras o corrientes eléctricas pasen de forma limpia y sin interferencias", "Trae un anestésico suave para que el paciente no sienta frío al tocar la máquina"],
    "c": 1,
    "e": "¡Esa es! El aire es el peor enemigo de los ultrasonidos y los electrocardiogramas porque bloquea las ondas. El gel crea un puente perfecto de agua que transmite la señal de la piel a la máquina al 100%, garantizando que el diagnóstico salga nítido.",
    "curioso": "Este gel está hecho a base de agua purificada, es totalmente hipoalergénico y no mancha la ropa; con una simple toallita se quita sin dejar rastro pegajoso."
  },
  {
    "cat": "Cirugía",
    "p": "Para esterilizar instrumental pequeño en autoclaves pequeños de clínicas dentales, ¿qué formato de empaque es el más práctico?",
    "o": ["El rollo de papel Kraft grande", "Las bolsas para esterilizar autoadhesivas", "Un recipiente de heces"],
    "c": 1,
    "e": "¡Así es! Las bolsas de esterilización ya vienen precortadas y selladas por tres lados. Son perfectas para meter espejos dentales, pinzas o tijeras de forma individual.",
    "curioso": "Tienen un cierre autoadhesivo de alta resistencia que sella el paquete por completo sin necesidad de usar máquinas selladoras térmicas."
  },
  {
    "cat": "Diagnóstico",
    "p": "Un pediatra prefiere un termómetro digital para tomar la temperatura en la axila de los bebés sin riesgo de que se quiebre si el niño se mueve, ¿cuál le das?",
    "o": ["Termómetro digital flexible", "Termómetro infrarrojo láser", "Termohigrómetro"],
    "c": 0,
    "e": "¡Perfecto! El termómetro digital flexible tiene la punta de goma suave. Si el bebé da un tirón, la punta se dobla y no lastima ni se rompe.",
    "curioso": "Son 100% libres de mercurio, lo que los hace completamente seguros para el uso en el hogar y en clínicas pediátricas modernas."
  },
  {
    "cat": "Diagnóstico",
    "p": "Un médico quiere un aparato moderno de presión para que el propio paciente se lo coloque en casa y se tome la lectura tocando un solo botón, ¿cuál de nuestra lista busca?",
    "o": ["Esfigmomanómetro aneroide manual", "Oxímetro de pulso", "Esfigmomanómetro digital"],
    "c": 2,
    "e": "¡Exacto! El digital infla y desinfla el brazalete de forma automática y muestra la presión y el pulso en una pantalla grande. Ideal para pacientes hipertensos.",
    "curioso": "Nuestros esfigmomanómetros digitales guardan memorias de las últimas lecturas para que el paciente se las enseñe a su cardiólogo en la consulta."
  },
  {
    "cat": "Curación",
    "p": "Para limpiar heridas grandes o rellenar campos de absorción en una sala de urgencias, ¿en qué presentación al por mayor vendemos el algodón puro?",
    "o": ["En bolsas de bolitas de algodón", "En presentación de Libra de Algodón", "Venda de guata"],
    "c": 1,
    "e": "¡Cabal! La libra de algodón es el formato industrial y clínico por excelencia. Permite a las enfermeras cortar los pedazos del tamaño exacto que necesiten.",
    "curioso": "Nuestro algodón es 100% hidrófilo, lo que significa que ha sido procesado para absorber hasta 20 veces su propio peso en líquidos."
  },
  {
    "cat": "Curación",
    "p": "Una clínica de inyecciones busca algodón listo y cortado para limpiar la piel antes de un pinchazo de forma rápida, ¿qué opción de nuestra lista es la mejor?",
    "o": ["La Bolsa de Bolitas de Algodón", "La Libra de Algodón en rollo", "Cinta de testigo"],
    "c": 0,
    "e": "¡Así es! Las bolitas de algodón ahorran tiempo valioso. Solo se toma una, se moja en alcohol y el enfermero está listo para limpiar e inyectar en dos segundos.",
    "curioso": "Vienen preformadas con un tamaño uniforme para no desperdiciar alcohol ni algodón en los procedimientos diarios."
  },
  {
    "cat": "Protección",
    "p": "Para el personal administrativo, visitas o personal médico en áreas generales sin fluidos pesados, ¿cuál es la mascarilla estándar que vendemos?",
    "o": ["La mascarilla normal de tres pliegues con elástico", "La mascarilla con visor integrado", "Gorro de cirujano"],
    "c": 0,
    "e": "¡Exacto! La mascarilla normal de tres pliegues es ligera, cómoda y cuenta con una eficiencia de filtración bacteriana excelente para el día a día.",
    "curioso": "Tienen un clip nasal moldeable en la parte superior para ajustarlo al puente de la nariz y evitar que el aire contaminado entre por los lados."
  },
  {
    "cat": "Curación",
    "p": "Un cirujano con manos sumamente grandes y dedos largos nos pide guantes estériles para una operación, ¿cuál es la talla más grande de nuestra lista?",
    "o": ["Guante quirúrgico estéril talla 6", "Guante de examen talla L", "Guante quirúrgico estéril talla 8"],
    "c": 2,
    "e": "¡Perfecto! La talla 8 es la medida más amplia que manejamos en guantes quirúrgicos estériles, garantizando comodidad y que no se rompan por exceso de tensión.",
    "curioso": "Usar la talla correcta es crucial: si el guante le queda muy apretado, al cirujano se le entumecen los dedos a la mitad de la cirugía."
  },
  {
    "cat": "Curación",
    "p": "Una instrumentista médica de manos pequeñas y finas busca guantes estériles que no le dejen bolsas de aire en la punta de los dedos, ¿qué talla le das?",
    "o": ["Guante quirúrgico estéril talla 6", "Guante quirúrgico estéril talla 7.5", "Guante de examen talla XS"],
    "c": 0,
    "e": "¡Exacto! La talla 6 es la más pequeña en guantes de cirugía estériles. Queda como una segunda piel en manos delgadas, manteniendo la precisión intacta.",
    "curioso": "Vienen ligeramente entalcados con almidón de maíz grado médico para facilitar que la mano resbale hacia adentro sin atorarse."
  },
  {
    "cat": "Curación",
    "p": "Si un doctor nos pide guantes quirúrgicos estériles para una mano de tamaño promedio de hombre o mano grande de mujer, ¿qué tallas intermedias le ofreces?",
    "o": ["Tallas 6 y 6.5", "Tallas 7 y 7.5", "Talla 8 únicamente"],
    "c": 1,
    "e": "¡Cabal! Las tallas 7 y 7.5 son el corazón del inventario de guantes quirúrgicos, ya que cubren a la gran mayoría del personal de salud adulto.",
    "curioso": "Nuestros guantes quirúrgicos tienen un puño largo con borde texturizado para que se agarren firmemente a la manga de la bata estéril y no se deslicen."
  },
  {
    "cat": "Curación",
    "p": "Un cliente de una clínica de masajes o de tatuajes busca guantes desechables económicos para usar por miles en revisiones generales, ¿qué le vendes?",
    "o": ["Guantes quirúrgicos estériles talla 7", "Venda de gasa", "Guantes de examen tallas S, M, L"],
    "c": 2,
    "e": "¡Así es! Para procedimientos no quirúrgicos se usan los guantes de examen. Vienen sueltos en cajas de 100, son súper económicos y no requieren ser estériles.",
    "curioso": "Manejamos desde la talla S hasta la L para adaptarnos a todo el equipo de trabajo de nuestros clientes de forma masiva."
  },
  {
    "cat": "Cirugía",
    "p": "Un cirujano va a hacer una incisión muy limpia y fina en el abdomen de un paciente, ¿cuál es la herramienta desechable de metal que corta con precisión milimétrica?",
    "o": ["Una jeringa dental", "Un bisturí (hoja con mango)", "Una tijera Iris"],
    "c": 1,
    "e": "¡Exacto! El bisturí de acero quirúrgico es el encargado de hacer los cortes principales en los tejidos vivos gracias a su filo extremo.",
    "curioso": "El diseño moderno de las hojas de bisturí permite cambiarlas del mango metálico en segundos usando una pinza de seguridad."
  },
  {
    "cat": "Laboratorio",
    "p": "Para hacer análisis químicos automatizados donde se procesan gotas diminutas de suero, el laboratorista usa pipetas automáticas, ¿qué insumo descartable se acopla en la punta?",
    "o": ["Puntas de pipeta (amarillas/azules)", "Tubos Eppendorf de 1.5ml", "Portaobjetos de vidrio"],
    "c": 0,
    "e": "¡Correcto! Las puntas de pipeta son conos de plástico desechables que aspiran el líquido con precisión milimétrica sin que la máquina toque la muestra directa.",
    "curioso": "Son hidrofóbicas para asegurar que no se quede pegada ni una microgota dentro del cono al momento de vaciar el líquido."
  },
  {
    "cat": "Laboratorio",
    "p": "Un genetista o biólogo molecular trabaja con volúmenes microscópicos de ADN y necesita guardarlos en tubitos individuales con tapón hermético, ¿cuáles le vendes?",
    "o": ["Tubos de centrífuga de 50ml", "Frascos de orina de 60ml", "Tubos microcentrífuga tipo Eppendorf de 1.5ml"],
    "c": 2,
    "e": "¡Esa es! Los tubitos tipo Eppendorf de 1.5ml son el estándar mundial para laboratorios de alta tecnología y pruebas de ADN por su tamaño compacto.",
    "curioso": "Tienen una zona esmerilada en el lateral para que el laboratorista pueda escribir el código del paciente con un marcador permanente sin que se borre."
  },
  {
    "cat": "Laboratorio",
    "p": "Para montar muestras biológicas y analizarlas en el microscopio, se coloca el portaobjetos de vidrio abajo, ¿pero qué cristal ultra fino va arriba cubriendo la muestra?",
    "o": ["Otro portaobjetos grueso", "El cubreobjetos de vidrio", "Un sello de heparina"],
    "c": 1,
    "e": "¡Cabal! El cubreobjetos aplana la gota de la muestra para que quede uniforme y evita que los líquidos entren en contacto directo con el lente del microscopio.",
    "curioso": "Son tan delgados que se quiebran con una presión mínima. ¡Se deben manipular con pinzas finas o con mucho cuidado!"
  },
  {
    "cat": "Curación",
    "p": "Un cliente nos pide cajas de tiras adhesivas listas con almohadilla central para cubrir pequeños pinchazos de jeringas o cortadas leves en los dedos, ¿qué producto busca?",
    "o": ["Cinta de Castilla", "Venda de gasa", "Curitas tradicionales"],
    "c": 2,
    "e": "¡Exacto! Las curitas son el insumo básico de primeros auxilios. Protegen la pequeña herida de la suciedad exterior mientras la piel inicia su reparación.",
    "curioso": "Nuestras curitas cuentan con un adhesivo hipoalergénico que no irrita la piel y se despega sin arrancar los vellos."
  },
  {
    "cat": "Soluciones",
    "p": "Si un hospital va a canalizar a un paciente con un suero y necesita regular el flujo mediante una manguera que incluye una cámara de goteo estándar para adultos, ¿qué le das?",
    "o": ["Un equipo de venoclisis (Normogotero)", "Un microgotero", "Una llave de tres vías"],
    "c": 0,
    "e": "¡Correcto! El equipo de venoclisis normal está calibrado para adultos (20 gotas equivalen a 1ml), permitiendo pasar sueros hidratantes de forma constante.",
    "curioso": "Incluyen un filtro de aire dentro de la cámara para evitar que burbujas grandes viajen por la manguera directo al torrente sanguíneo del paciente."
  },
  {
    "cat": "Curación",
    "p": "Para un esguince de tobillo o para sujetar firmemente un apósito que requiere compresión elástica moderada para que no se mueva al caminar, ¿qué venda despachas?",
    "o": ["Venda de guata", "Venda elástica tradicional", "Venda de gasa ligera"],
    "c": 1,
    "e": "¡Exacto! La venda elástica se estira y ejerce una presión uniforme que ayuda a disminuir la inflamación y da soporte a los ligamentos lastimados.",
    "curioso": "Nuestras vendas elásticas incluyen broches metálicos o de plástico para fijar el final del vendaje de forma segura sin necesidad de usar esparadrapo."
  },
  {
    "cat": "Diagnóstico",
    "p": "Un neumólogo quiere medir de forma instantánea y sin pinchar al paciente el porcentaje de oxígeno que lleva en la sangre a través del dedo, ¿qué aparato le vendes?",
    "o": ["Esfigmomanómetro digital", "Termohigrómetro", "Oxímetro de pulso"],
    "c": 2,
    "e": "¡Cabal! El oxímetro de pulso mide la saturación de oxígeno emitiendo una luz que cruza la uña del paciente. Lo normal es que marque entre 95% y 100%.",
    "curioso": "Mide también la frecuencia cardíaca (las pulsaciones por minuto), dándote dos signos vitales clave en menos de cinco segundos."
  },
  {
    "cat": "Diagnóstico",
    "p": "Para hacer un chequeo clásico de pulmones o escuchar los soplos del corazón, ¿cuál es la herramienta icónica que el médico se cuelga en el cuello?",
    "o": ["Estetoscopio clínico", "Esfigmomanómetro aneroide", "Termómetro infrarrojo"],
    "c": 0,
    "e": "¡Exacto! El estetoscopio amplifica los sonidos acústicos internos del cuerpo (corazón, pulmones e intestinos) para que el médico evalúe su estado.",
    "curioso": "Tiene dos lados en la campana: el lado grande (diafragma) para sonidos de alta frecuencia y el pequeño (campana) para sonidos graves de niños."
  },
  {
    "cat": "Laboratorio",
    "p": "Un laboratorio clínico procesa muestras de sangre para biometrías hemáticas. ¿Qué aditivo especial e invisible tiene nuestro tubo de tapa morada por dentro?",
    "o": ["Gel separador", "EDTA (Anticoagulante)", "Citrato de sodio"],
    "c": 1,
    "e": "¡Perfecto! El tubo morado lleva EDTA, el químico estrella que evita que la sangre se vuelva sólida, manteniendo las células intactas para el conteo de la máquina.",
    "curioso": "El EDTA atrapa los iones de calcio de la sangre. Como la cascada de coagulación necesita calcio para activarse, al no haberlo, la sangre se queda líquida."
  },
  {
    "cat": "Laboratorio",
    "p": "Un médico quiere hacer una prueba de química sanguínea (como colesterol o triglicéridos) y necesita separar perfectamente el suero limpio de las células, ¿qué tubo le vendes?",
    "o": ["El tubo morado con EDTA", "El tubo celeste", "El tubo amarillo con gel separador y activador"],
    "c": 2,
    "e": "¡Esa es! El tubo amarillo tiene un gel especial en el fondo. Al meterlo a la centrífuga, el gel se mete como una barrera física en medio del suero y las células.",
    "curioso": "Esa barrera de gel impide que las células se mezclen otra vez con el suero si el tubo se mueve o se transporta hacia otro laboratorio."
  },
  {
    "cat": "Cirugía",
    "p": "Para sellar y amarrar paquetes de gasas que van a entrar al vapor del autoclave, las enfermeras usan una cinta de tela especial que resiste el calor, ¿cómo se llama?",
    "o": ["Cinta de testigo (indicadora de esterilización)", "Cinta de Castilla", "Venda de gasa"],
    "c": 0,
    "e": "¡Cabal! La cinta de testigo es el adhesivo oficial de los departamentos de esterilización. Soporta la humedad y el calor extremo sin despegarse de los envoltorios.",
    "curioso": "Sus líneas diagonales cambian a color negro o café oscuro gracias a una reacción química con el calor, demostrando que el paquete pasó por el proceso."
  },
  {
    "cat": "Cirugía",
    "p": "Un cirujano busca una tijera metálica muy pequeña, delgada y con puntas sumamente afiladas para cortar tejidos finos o hacer curaciones delicadas, ¿cuál de nuestra lista elige?",
    "o": ["Tubo Penrose", "Tijera Iris de precisión", "Bajalenguas de madera"],
    "c": 1,
    "e": "¡Exacto! Las tijeras Iris son las reinas de la precisión quirúrgica menor. Al ser compactas, le permiten al médico maniobrar en espacios milimétricos sin dañar nada.",
    "curioso": "Aunque nacieron para cirugías del ojo humano, su éxito fue tan grande que hoy en día se usan en todas las áreas de curación y enfermería."
  },
  {
    "cat": "Soluciones",
    "p": "Un doctor quiere conectar una manguera de suero y al mismo tiempo inyectar dosis intermitentes de medicamentos por otra línea sin desconectar al paciente, ¿qué interruptor usa?",
    "o": ["Un microgotero", "Un sello de heparina", "Una llave de tres vías"],
    "c": 2,
    "e": "¡Exacto! La llave de tres vías funciona como una rotonda de líquidos médicos. El cirujano gira la manecilla para abrir o cerrar el paso de los diferentes sueros.",
    "curioso": "Soportan altas presiones y están fabricadas en policarbonato transparente para vigilar que no entren burbujas de aire a la vena."
  },
  {
    "cat": "Curación",
    "p": "Llega un pedido para el kit de emergencias de una fábrica, buscan rollos de esparadrapo de tela clásico, súper fuerte, que sujete vendajes pesados bajo el sudor, ¿qué le vendes?",
    "o": ["Cinta de Castilla (Esparadrapo de tela)", "Cinta de testigo", "Venda de guata"],
    "c": 0,
    "e": "¡Así es! La cinta de Castilla es de tela de algodón de alta resistencia. Pega durísimo sobre la piel y es la preferida para fijar tubos y gasas que no se deben mover por nada.",
    "curioso": "Contiene óxido de zinc en el adhesivo, un compound que ayuda a prevenir que las bacterias crezcan debajo de la cinta húmeda."
  },
  {
    "cat": "Laboratorio",
    "p": "Un de ensayo plásticos de fondo cónico con marcas de volumen grabadas a los lados para medir sedimentos en el laboratorio, ¿cómo los buscas en el inventario?",
    "o": ["Tubos Eppendorf de 1.5ml", "Tubos de centrífuga cónicos graduados", "Portaobjetos de vidrio"],
    "c": 1,
    "e": "¡Perfecto! Estos tubos vienen graduados (con los números de mililitros impresos) para que el laboratorista sepa exactamente cuánta cantidad de líquido colocó.",
    "curioso": "Tienen una tapa de rosca hermética de alta seguridad para evitar que los fluidos biológicos salgan volando por la fuerza de la máquina centrífuga."
  },
  {
    "cat": "Curación",
    "p": "Para un consultorio médico general, nos piden depresores de madera desechables para revisar la boca de los pacientes, ¿qué nombre comercial tienen en nuestra lista?",
    "o": ["Portaobjetos", "Tubos Eppendorf", "Bajalenguas de madera"],
    "c": 2,
    "e": "¡Cabal! Los bajalenguas son tiras de madera pulida y plana. Permiten empujar la lengua hacia abajo para evaluar si las amígdalas están inflamadas o tienen infección.",
    "curioso": "En las clínicas de pediatría se usan muchísimo porque, al ser desechables, los niños se los llevan a veces para hacer manualidades en casa."
  },
  {
    "cat": "Laboratorio",
    "p": "Un patólogo va a realizar una tinción de muestras y necesita dejar caer una lámina transparente muy fina encima de la célula para que el microscopio enfoque plano, ¿qué insumo utiliza?",
    "o": ["Cubreobjetos de vidrio", "Portaobjetos grueso", "Sello de heparina"],
    "c": 0,
    "e": "¡Exacto! El cubreobjetos mantiene la muestra totalmente quieta, plana y protegida contra las corrientes de aire o la humedad del laboratorio.",
    "curioso": "Su grosor estándar número 1 mide apenas entre 0.13 y 0.16 milímetros de espesor. ¡Es una obra de arte de la cristalería médica!"
  },
  {
    "cat": "Protección",
    "p": "Un hospital compra cajas de gorros para el personal de enfermería de encajes elásticos redondos que parecen un hongo plisado, ¿cuál es su nombre correcto?",
    "o": ["Gorro de cirujano con tiras", "Gorro de enfermera (o cofia redonda descartable)", "Zapatones"],
    "c": 1,
    "e": "¡Así es! El gorro de enfermera es redondo y amplio. Su elástico permite recoger cabellos largos o amarrados con total facilidad para que no caigan en las camillas.",
    "curioso": "Están fabricados con polipropileno soplado de bajo peso que permite que el cuero cabelludo respire durante los turnos de 12 horas."
  },
  {
    "cat": "Laboratorio",
    "p": "Un laboratorio veterinario nos pide tubitos pequeños con tapa unida a presión para guardar micro-muestras de suero congelado, ¿qué producto les das?",
    "o": ["Tubos de centrífuga de 15ml", "Recipiente de orina de 60ml", "Tubos microcentrífuga tipo Eppendorf de 1.5ml"],
    "c": 2,
    "e": "¡Esa es! Los tubos tipo Eppendorf tienen su propia tapita unida por un brazo plástico flexible. Se cierran a presión con un clic hermético perfecto para congelación.",
    "curioso": "Resisten temperaturas extremas de hasta -80°C en ultra-congeladores de nitrógeno líquido sin rajarse."
  },
  {
    "cat": "Laboratorio",
    "p": "Para empacar y vender gasas estériles hechas por nosotros, usamos rollos de papel marrón grado médico que resisten el calor del autoclave, ¿cómo se llama este insumo?",
    "o": ["Rollo de papel Kraft grado médico", "Bolsas de esterilización autoadhesivas", "Cinta de Castilla"],
    "c": 0,
    "e": "¡Cabal! El rollo de papel Kraft médico permite cortar los tramos del tamaño exacto de nuestros apósitos o sábanas para meterlos a esterilizar en lotes grandes.",
    "curioso": "Su porosidad está calculada científicamente: deja entrar las moléculas de vapor de agua caliente, pero es demasiado pequeña para dejar pasar una bacteria."
  },
  {
    "cat": "Diagnóstico",
    "p": "Una clínica ginecológica atiende a decenas de pacientes al día y prefiere usar espéculos vaginales de plástico transparente en lugar de los de metal antiguos, ¿cuál es el motivo?",
    "o": ["Porque los de plástico se lavan con cloro común", "Porque son desechables, eliminan el costo de esterilización y dan total seguridad a la paciente", "Porque son más grandes"],
    "c": 1,
    "e": "¡Exacto! El espéculo desechable se usa una vez y va directo a la basura. Esto ahorra tiempo de lavado y le da una tranquilidad absoluta a la paciente de que está limpio.",
    "curioso": "El plástico transparente transmite mejor la luz de la lámpara del médico, mejorando la visibilidad interna en comparación con el metal opaco."
  },
  {
    "cat": "Laboratorio",
    "p": "Para tomar muestras biológicas secas o hisopados de superficies sin alterar el conteo celular posterior, ¿qué insumo básico se despacha?",
    "o": ["Puntas de pipeta amarillas", "Portaobjetos", "Hisopos estériles o no estériles"],
    "c": 2,
    "e": "¡Así es! Contamos con hisopos de madera pulida con puntas de algodón de alta absorción. El estéril va para cuerpos humanos y el no estéril para limpieza o laboratorio general.",
    "curioso": "La madera de nuestros hisopos es tratada para que no suelte resinas ni ácidos naturales que puedan matar a las bacterias que el médico quiere sembrar."
  },
  {
    "cat": "Protección",
    "p": "En la entrada de una sala de operaciones de un hospital público, exigen mascarillas que tengan una mica plástica transparente cubriendo el área de la vista, ¿cómo se llaman?",
    "o": ["Mascarillas con visor integrado", "Mascarillas normales de tres pliegues", "Zapatones"],
    "c": 0,
    "e": "¡Exacto! Son las mascarillas con visor. Protegen la boca, nariz y los ojos de salpicaduras de sangre que salten con presión de las arterias en cirugía.",
    "curioso": "La mica plástica está unida con sellado ultrasónico para que no queden costuras ni agujeros por donde pasen los virus."
  },
  {
    "cat": "Curación",
    "p": "Un cliente quiere comprar guantes de examen de nitrilo o látex para una persona con una mano extremadamente pequeña y delgada, ¿qué talla le recomiendas?",
    "o": ["Talla M de examen", "Talla XS", "Talla 6 de cirugía"],
    "c": 1,
    "e": "¡Cabal! La talla XS es ideal para manos pequeñas. Queda ceñida y evita que se formen pliegues sueltos que estorben al manipular jeringas o pinzas.",
    "curioso": "Vienen en cajas de dispensador vertical para que las enfermeras arranquen un par a la vez con una sola mano durante las emergencias."
  },
  {
    "cat": "Diagnóstico",
    "p": "Un doctor nota que el oxímetro de pulso de un paciente no lee la saturación debido a que el paciente tiene las manos heladas por el frío, ¿qué herramienta usa para medir la fiebre rápido?",
    "o": ["Termohigrómetro de bodega", "Termómetro digital flexible o infrarrojo", "Esfigmomanómetro manual"],
    "c": 1,
    "e": "¡Perfecto! El termómetro digital flexible o el infrarrojo láser te dan la lectura corporal en segundos, confirmando el estado real del paciente de forma segura.",
    "curioso": "Los termómetros infrarrojos capturan las ondas de calor de la frente en menos de un segundo gracias a un sensor óptico avanzado."
  },
  {
    "cat": "Inyectables",
    "p": "Nos piden jeringas de insulina con la aguja más fina del catálogo para que el pinchazo diario sea casi imperceptible en la piel del paciente, ¿qué calibre le ofreces?",
    "o": ["Jeringa de 1ml con aguja fina 30x1/2", "Jeringa de 5ml aguja No. 21", "Jeringa de 20ml"],
    "c": 0,
    "e": "¡Esa es! El calibre No. 30 representa una aguja microscópica y súper corta (media pulgada), perfecta para depositar la insulina en el tejido graso sin tocar los músculos.",
    "curioso": "Al ser tan delgada, el bisel de la aguja corta la piel limpiamente sin desgarrarla, reduciendo el dolor al mínimo absoluto."
  },
  {
    "cat": "Curación",
    "p": "Un dentista nos compra agujas para anestesia dental locales y nos aclara que usa jeringas tipo 'Carpule' metálicas, ¿qué característica tienen nuestras agujas dentales?",
    "o": ["Tienen una base cilíndrica lisa de plástico", "Son iguales a las agujas de las jeringas comunes", "Tienen una rosca interna especial de plástico que se atornilla al cartucho metálico"],
    "c": 2,
    "e": "¡Exacto! Las agujas dentales tienen un diseño único con doble punta (una para la encía y otra interna que perfora el cartucho de vidrio de la anestesia) y una base roscada.",
    "curioso": "Vienen con un sello de seguridad de papel en el capuchón; si el sello está roto, significa que la aguja ya no está estéril."
  },
  {
    "cat": "Curación",
    "p": "Una enfermera va a realizar un vendaje protector ligero sobre una gasa empapada en crema para quemaduras, ¿qué venda de nuestra lista utiliza para que no apriete la zona?",
    "o": ["Venda de gasa", "Venda elástica de compresión", "Venda de guata de algodón"],
    "c": 0,
    "e": "¡Cabal! La venda de gasa común es perfecta para curaciones ligeras. Mantiene el apósito en su sitio, permite el paso de aire y no ejerce presión dolorosa en la herida.",
    "curioso": "Nuestras vendas de gasa tienen bordes limpios para evitar que se deshilachen dentro de las heridas abiertas del paciente."
  },
  {
    "cat": "Cirugía",
    "p": "Estás empacando cajas de cirugía mayor en un hospital y necesitas envolver pinzas y separadores pesados en rollos que resistan el calor húmedo, ¿qué papel utilizas?",
    "o": ["Bolsas plásticas normales", "Rollo de papel Kraft grado médico", "Cinta de Castilla"],
    "c": 1,
    "e": "¡Exacto! El rollo de papel Kraft médico es grueso, resistente y no se rompe con las puntas afiladas del instrumental de acero inoxidable dentro del autoclave.",
    "curioso": "Mantiene el instrumental estéril hasta por un año entero si el paquete se almacena en un lugar seco y cerrado tras salir del esterilizador."
  },
  {
    "cat": "Urgencias",
    "p": "Un médico en la emergencia grita que el paciente está en 'paro cardiorrespiratorio'. ¿Cuál es la primera acción que realiza el equipo de enfermería de inmediato?",
    "o": ["Iniciar maniobras de RCP (reanimación) y pedir el carro de paros", "Llenar la ficha de ingreso administrativo", "Llevar al paciente a tomarse una radiografía"],
    "c": 0,
    "e": "¡Exacto! En un paro, cada segundo cuenta. Lo primero es iniciar las compresiones en el pecho (RCP) para mantener la sangre fluyendo al cerebro mientras se alista el desfibrilador.",
    "curioso": "El carro de paros es un mueble con llantas que contiene desfibrilador, laringoscopios, medicamentos de emergencia y tubos endotraqueales listos en segundos."
  },
  {
    "cat": "Cirugía",
    "p": "Antes de iniciar cualquier cirugía, el cirujano y su equipo realizan un 'lavado de manos quirúrgico'. ¿En qué se diferencia de un lavado de manos común?",
    "o": ["Es más rápido y solo usa agua tibia", "Se hace con jabón antiséptico, dura entre 3 y 5 minutos e incluye las manos, muñecas y antebrazos", "Se realiza usando guantes de examen puestos"],
    "c": 1,
    "e": "¡Cabal! El lavado quirúrgico es sumamente estricto para eliminar la mayor cantidad de bacterias de la piel. Además, los brazos deben mantenerse siempre hacia arriba para no contaminarse.",
    "curioso": "Después de este lavado, los médicos no pueden tocar nada (ni las puertas) hasta que la enfermera instrumentista les coloque la bata y los guantes estériles."
  },
  {
    "cat": "Diagnóstico",
    "p": "Cuando una enfermera toma los 'signos vitales' en la mañana a todos los pacientes internados, ¿qué cuatro parámetros principales está midiendo?",
    "o": ["Estatura, peso, color de ojos y reflejos", "Presión arterial, frecuencia cardíaca, frecuencia respiratoria y temperatura", "Nivel de azúcar, tipo de sangre, peso y fuerza"],
    "c": 1,
    "e": "¡Perfecto! Esos cuatro signos reflejan el estado de las funciones más básicas y críticas del cuerpo humano. Cualquier alteración avisa que algo anda mal.",
    "curioso": "Hoy en día, el oxímetro de pulso se ha convertido prácticamente en el quinto signo vital obligatorio en las evaluaciones médicas."
  },
  {
    "cat": "Cirugía",
    "p": "En los quirófanos se realiza un proceso llamado 'Tiempo Fuera' (Time Out) justo antes de hacer la primera incisión. ¿Para qué sirve?",
    "o": ["Para que el cirujano descanse 5 minutos", "Para verificar en voz alta el nombre del paciente, el procedimiento exacto y el sitio quirúrgico correcto, evitando errores", "Para esperar a que los sueros se terminen"],
    "c": 1,
    "e": "¡Así es! Es una lista de verificación de seguridad obligatoria en todo el mundo. Todo el equipo se detiene y confirma que es el paciente correcto y la pierna o zona correcta a operar.",
    "curioso": "Esta práctica salvavidas fue promovida por la Organización Mundial de la Salud para reducir a cero las cirugías en lugares equivocados."
  },
  {
    "cat": "Urgencias",
    "p": "Cuando un paciente llega a la emergencia y los doctores dicen que está en estado de 'Shock', ¿a qué se refieren médicamente?",
    "o": ["A que el paciente recibió una mala noticia y está asustado", "A que la presión arterial cayó tanto que el oxígeno no está llegando a los órganos vitales", "A que el paciente tiene un ataque de nervios"],
    "c": 1,
    "e": "¡Exacto! El shock es una emergencia médica extrema. Puede ser por pérdida masiva de sangre (hipovolémico), por una infección severa (séptico) o por falla del corazón.",
    "curioso": "En el shock hipovolémico, canalizar al paciente con catéteres gruesos para pasar sueros a chorro es la primera línea de supervivencia."
  },
  {
    "cat": "Laboratorio",
    "p": "A un paciente le ordenan un examen de 'Tiempos de Coagulación' antes de meterlo a quirófano. ¿Por qué es tan importante para el cirujano saber este dato?",
    "o": ["Para calcular cuánta anestesia le van a poner", "Para saber si la sangre del paciente cierra bien las heridas o si corre riesgo de hemorragia grave en la operación", "Para ver si el paciente tiene anemia"],
    "c": 1,
    "e": "¡Cabal! Si los tiempos están prolongados, significa que la sangre tarda mucho en formar coágulos. Operar así es peligrosísimo porque el paciente podría desangrarse.",
    "curioso": "Estas muestras se recolectan de forma obligatoria en los tubos de vacío con tapa de color celeste, los cuales contienen citrato de sodio."
  },
  {
    "cat": "Curación",
    "p": "Al curar heridas, los doctores hablan mucho de tejido de 'granulación'. ¿Qué significa que una herida esté granulando?",
    "o": ["Que la herida se está infectando y tiene pus", "Que está sanando bien, formando tejido nuevo, rojizo y con vasos sanguíneos sanos", "Que la piel se está secando y descamando"],
    "c": 1,
    "e": "¡Muy bien! El tejido de granulación es una excelente señal. Es ese color rojo vivo y brillante que aparece en el fondo de la herida, indicando que el cuerpo está reparando la zona.",
    "curioso": "Este tejido es sumamente delicado; por eso las curaciones deben hacerse con gasas suaves y vendas elásticas sin arrancar el proceso."
  },
  {
    "cat": "Protección",
    "p": "En las salas de aislamiento por Tuberculosis u otras enfermedades respiratorias severas, los médicos usan un respirador especial en lugar de la mascarilla normal. ¿Cuál es?",
    "o": ["El respirador N95 (o equivalente de alta filtración)", "La mascarilla con visor de plástico fina", "Un gorro de cirujano cerrado"],
    "c": 0,
    "e": "¡Exacto! La mascarilla quirúrgica común frena las gotas grandes, pero el respirador N95 sella la cara por completo y filtra el 95% de las micropartículas suspendidas en el aire.",
    "curioso": "La tuberculosis puede flotar en el aire durante horas en habitaciones cerradas, por lo que el N95 es el escudo obligatorio para el médico."
  },
  {
    "cat": "Urgencias",
    "p": "Un paciente llega con un trauma craneal y los doctores evalúan la 'Escala de Glasgow'. ¿Qué mide esta famosa escala en los hospitales?",
    "o": ["El nivel de dolor del paciente del 1 al 10", "El nivel de conciencia y respuesta neurológica del paciente", "La presión arterial máxima"],
    "c": 1,
    "e": "¡Perfecto! La Escala de Glasgow evalúa tres cosas: la respuesta ocular, la respuesta verbal y los movimientos. Un puntaje de 15 es perfecto (alguien despierto) y 3 es el estado más profundo de coma.",
    "curioso": "Si un paciente tiene un Glasgow de 8 o menos, la regla médica internacional dicta que se debe intubar de inmediato con un tubo endotraqueal para proteger su vida."
  },
  {
    "cat": "Cirugía",
    "p": "Durante una cirugía, ¿cuál es la función principal de la 'Enfermera Instrumentista' dentro del área estéril?",
    "o": ["Escribir el reporte en la computadora", "Conocer la técnica quirúrgica a fondo para anticiparse y pasarle los bisturís, pinzas y suturas exactas al cirujano", "Ir a traer los sueros a la bodega general"],
    "c": 1,
    "e": "¡Esa es! La instrumentista es la mano derecha del cirujano. Está completamente vestida de estéril y mantiene la mesa de instrumental perfectamente ordenada para no perder ni un segundo.",
    "curioso": "Un buen cirujano y una buena instrumentista pueden operar casi sin hablar; ella sabe qué instrumento sigue solo con ver el avance de la cirugía."
  },
  {
    "cat": "Desechos",
    "p": "Al terminar una cirugía o un procedimiento en emergencias, las enfermeras hacen un conteo estricto de gasas y agujas. ¿Por qué hacen esto antes de cerrar al paciente?",
    "o": ["Para ver cuánto material van a cobrar en la factura final", "Para asegurarse de que no se haya quedado ningún objeto olvidado dentro del cuerpo del paciente", "Para guardarlas y usarlas en otro turno"],
    "c": 1,
    "e": "¡Cabal! Olvidar una gasa o una aguja dentro de un paciente es una complicación grave que causa infecciones severas. Nadie cierra la herida hasta que el conteo da exacto.",
    "curioso": "Las gasas quirúrgicas profesionales traen un hilo azul que se detecta en las radiografías si por accidente se llega a quedar una adentro."
  },
  {
    "cat": "Soluciones",
    "p": "Un doctor ordena que a un paciente deshidratado se le aplique una solución 'Isotónica' como el Suero Fisiológico al 0.9%. ¿Qué significa esto en medicina?",
    "o": ["Que el suero tiene la misma concentración de sal y agua que las células de nuestro cuerpo", "Que el suero tiene muchísima más azúcar que la sangre", "Que es agua pura destilada sin ningún mineral"],
    "c": 0,
    "e": "¡Exacto! Al tener la misma concentración que el cuerpo, el suero entra a las venas e hidrata al paciente de forma perfecta sin alterar ni desinflar los glóbulos rojos.",
    "curioso": "Es el suero más usado en el mundo para limpiar heridas, diluir medicamentos e hidratar pacientes en emergencias."
  },
  {
    "cat": "Urgencias",
    "p": "Llega un paciente con una herida cortante profunda por un accidente. Además de suturar la piel, ¿qué vacuna obligatoria pregunta siempre el médico si tiene al día?",
    "o": ["La vacuna contra la Hepatitis B", "La vacuna contra el Tétanos", "La vacuna de la Influenza"],
    "c": 1,
    "e": "¡Correcto! Cualquier herida abierta con objetos sucios, metales o tierra corre el riesgo de contraer la bacteria del tétanos, una enfermedad mortal que ataca el sistema nervioso.",
    "curioso": "La bacteria del tétanos vive en el suelo y en ambientes polvorientos en forma de esporas ultra resistentes que pueden durar años esperando entrar a una herida."
  },
  {
    "cat": "Diagnóstico",
    "p": "Un médico sospecha que un paciente tiene una infección bacteriana en la sangre y ordena un 'Hemocultivo'. ¿En qué consiste este procedimiento hospitalario?",
    "o": ["En extraer muestras de sangre y ponerlas en frascos especiales con nutrientes para ver si crecen bacterias y saber qué antibiótico usar", "En contar cuántos glóbulos rojos tiene el paciente", "En medir el nivel de grasa en las arterias"],
    "c": 0,
    "e": "¡Cabal! El hemocultivo busca 'cazar' a la bacteria causante de la fiebre. Es vital para cambiar los antibióticos generales por uno específico que mate directamente al microbio.",
    "curioso": "Para este examen la desinfección de la piel al extraer la sangre debe ser extrema, usando hisopos estériles y alcohol, para no contaminar la muestra con bacterias de la piel."
  },
  {
    "cat": "Cirugía",
    "p": "Cuando un paciente entra a una cirugía programada, el anestesiólogo le pide estrictamente un ayuno de al menos 8 horas. ¿Cuál es el peligro real de no cumplirlo?",
    "o": ["Que los medicamentos de la anestesia no hagan efecto", "Que el paciente vomite estando dormido y los fluidos del estómago viajen a los pulmones causando asfixia o neumonía grave", "Que el paciente tenga mucha hambre durante la operación"],
    "c": 1,
    "e": "¡Exacto! Al estar bajo anestesia general, el cuerpo pierde los reflejos protectores (como el de tragar o toser). Si el estómago está lleno, el contenido puede regresar y entrar a la vía aérea.",
    "curioso": "Este peligroso accidente se conoce médicamente como 'Broncoaspiración' y es una de las mayores pesadillas en los quirófanos."
  },
  {
    "cat": "Urgencias",
    "p": "En los hospitales se usa el sistema de 'Triage' en la entrada de emergencias. ¿Cuál es el objetivo principal de este sistema?",
    "o": ["Cobrar la consulta antes de que el paciente vea al doctor", "Clasificar a los pacientes por colores según la gravedad de su estado para atender primero a los que corren riesgo de muerte", "Asignar las camas libres por orden de llegada"],
    "c": 1,
    "e": "¡Perfecto! El Triage destruye la idea de 'atender por orden de llegada'. Un código rojo (un infarto) pasa directo a reanimación, mientras que un código verde (una gripe) debe esperar.",
    "curioso": "El Triage usa colores internacionales: Rojo (emergencia crítica), Naranja/Amarillo (urgencia severa) y Verde/Azul (situaciones no urgentes)."
  },
  {
    "cat": "Inyectables",
    "p": "Una enfermera va a colocar una inyección por vía 'Intramuscular' en el glúteo. ¿Por qué siempre divide mentalmente la nalga en cuatro cuadrantes y pincha solo en el cuadrante superior externo?",
    "o": ["Porque ahí la piel es menos gruesa y duele menos", "Para evitar pinchar por accidente el Nervio Ciático, lo que podría causar parálisis o dolor extremo en la pierna", "Porque es la zona que más rápido absorbe los sueros"],
    "c": 1,
    "e": "¡Exacto! El nervio ciático pasa justo por el centro y la parte baja del glúteo. Pinchar en el cuadrante superior externo es la única zona segura y libre de grandes nervios o arterias principales.",
    "curioso": "Esta técnica es una de las primeras lecciones prácticas obligatorias que aprende cualquier estudiante de enfermería o medicina del mundo."
  },
  {
    "cat": "Cirugía",
    "p": "En el reporte de un paciente operado, el médico anota que la herida quirúrgica cerró por 'Primera Intención'. ¿A qué se refiere?",
    "o": ["A que la herida se dejó abierta para que sanara sola con los días", "A que los bordes limpios de la piel se unieron directamente con suturas o grapas de forma inmediata", "A que la herida se infectó y requirió antibióticos"],
    "c": 1,
    "e": "¡Cabal! La primera intención ocurre cuando el corte es limpio (como el de un bisturí) y el doctor junta los bordes con hilo de sutura, permitiendo que sane rápido y deje poca cicatriz.",
    "curioso": "Si una herida se infecta o pierde tejido, se deja abierta para que llene desde el fondo con tejido de granulación; a eso se le llama cierre por Segunda Intención."
  },
  {
    "cat": "Laboratorio",
    "p": "Un doctor sospecha que un paciente internado tiene una hemorragia interna interna oculta. ¿Qué parámetro de la hematología completa revisa con urgencia para ver si bajó?",
    "o": ["El recuento de plaquetas", "Los niveles de glucosa en ayunas", "La Hemoglobina y el Hematocrito"],
    "c": 2,
    "e": "¡Exacto! La hemoglobina mide la proteína que transporta oxígeno en los glóbulos rojos. Si un paciente está sangrando por dentro, sus niveles de hemoglobina caen rápidamente en pocas horas.",
    "curioso": "Un valor normal en adultos ronda los 12 a 16 g/dL. Si cae por debajo de 7, los médicos suelen ordenar una transfusión de sangre de emergencia."
  },
  {
    "cat": "Curación",
    "p": "A los pacientes que pasan muchas semanas acostados en una cama de hospital sin poder moverse se les forman heridas graves en la espalda o talones. ¿Cómo se llaman técnicamente?",
    "o": ["Quemaduras por fricción clínica", "Úlceras por presión (o escaras)", "Micosis intrahospitalarias"],
    "c": 1,
    "e": "¡Cabal! El peso del cuerpo aplasta los vasos sanguíneos contra el colchón, dejando a la piel sin sangre ni oxígeno hasta que el tejido muere y se abre una úlcera.",
    "curioso": "Para prevenirlas, las enfermeras realizan 'cambios de posición' obligatorios al paciente cada 2 horas y usan colchones de aire especiales."
  },
  {
    "cat": "Diagnóstico",
    "p": "Un médico se coloca el estetoscopio para escuchar los pulmones de un paciente con asma y menciona que escucha 'Sibilancias'. ¿A qué suena este ruido clínico?",
    "o": ["A un silbido agudo continuo provocado por el aire al pasar por bronquios que están muy estrechos e inflamados", "A un burbujeo de agua líquida dentro del pecho", "Al roce de dos papeles secos"],
    "c": 0,
    "e": "¡Perfecto! Las sibilancias son el sonido clásico del asma o la bronquitis. Al cerrarse los bronquios, el aire pasa con dificultad y silba, como un túnel de viento estrecho.",
    "curioso": "Escuchar que las sibilancias desaparecen tras aplicar una nebulización es la prueba de que los bronquios se abrieron con éxito."
  },
  {
    "cat": "Cirugía",
    "p": "En los quirófanos, ¿cuál es el papel de la 'Enfermera Circulante', a diferencia de la instrumentista?",
    "o": ["Es la encargada de operar junto al cirujano principal", "Está fuera del área estéril, asiste al equipo trayendo materiales, abriendo empaques estériles y coordinando el quirófano", "Controla únicamente las máquinas de anestesia"],
    "c": 1,
    "e": "¡Exacto! La circulante es los ojos y manos del equipo fuera de la zona limpia. Ella abre las cajas de guantes o suturas para que la instrumentista los tome sin perder su esterilidad.",
    "curioso": "También es la responsable de llenar la bitácora oficial de la cirugía y asegurar que los equipos eléctricos funcionen a la perfección."
  },
  {
    "cat": "Inyectables",
    "p": "Cuando un médico receta un medicamento por vía 'Subcutánea', ¿en qué capa o zona del cuerpo debe aplicarse la aguja?",
    "o": ["Directamente adentro de una vena grande", "En el tejido graso que se encuentra justo debajo de la piel", "En el fondo del músculo esquelético"],
    "c": 1,
    "e": "¡Cabal! La vía subcutánea deposita el fármaco en la grasita. Como ahí hay menos flujo de sangre que en el músculo, el medicamento se absorbe de forma lenta y continua.",
    "curioso": "Es la vía oficial para la aplicación de la insulina diaria y de anticoagulantes como la heparina de bajo peso molecular."
  },
  {
    "cat": "Curación",
    "p": "Cuando un médico realiza una sutura en la cara de un paciente, prefiere usar un hilo de calibre '5-0' o '6-0' en lugar de uno '2-0'. ¿Por qué?",
    "o": ["Porque los hilos con números acompañados de ceros (como 6-0) son muchísimo más delgados y dejan cicatrices finas e invisibles", "Porque el hilo 2-0 es de plástico transparente", "Porque los hilos finos se absorben solos en la piel"],
    "c": 0,
    "e": "¡Cabal! En las suturas, cuantos más ceros tenga el número, más delgada es la hebra. Un hilo 6-0 es casi tan fino como un cabello humano, ideal para la estética de la cara.",
    "curioso": "Los hilos gruesos como el 2-0 o 1 se reservan para tejidos internos pesados o capas de grasa profunda que requieren mucha fuerza de tensión."
  },
  {
    "cat": "Diagnóstico",
    "p": "Al revisar los ojos de un paciente con un trauma en la cabeza, el médico nota que una pupila está muy grande y la otra está muy pequeña. ¿Cómo se llama técnicamente esta diferencia?",
    "o": ["Isocoria pupilar clínica", "Anisocoria", "Miosis bilateral profunda"],
    "c": 1,
    "e": "¡Perfecto! Lo normal es tener las pupilas del mismo tamaño (Isocoria). La Anisocoria (pupilas desiguales) es una señal de alerta roja neurológica que indica daño cerebral severo.",
    "curioso": "Si una pupila no se encoge cuando le pegas luz con una linterna médica, avisa que hay presión extrema dentro del cráneo del paciente."
  },
  {
    "cat": "Soluciones",
    "p": "Un paciente requiere recibir un medicamento diluido en suero durante exactamente una hora y con una precisión de gotas matemática. ¿Qué aparato electrónico se usa al lado de la cama?",
    "o": ["Un esfigmomanómetro digital", "Una bomba de infusión continua", "Un monitor de signos vitales portátil"],
    "c": 1,
    "e": "¡Exacto! Las bombas de infusión programan el flujo exacto en mililitros por hora (ml/h). Si la vena se tapa o el suero se acaba, la máquina pita de inmediato avisando a enfermería.",
    "curioso": "Son vitales en las unidades de cuidados intensivos (UCI) para pasar medicamentos delicados que controlan la presión o el corazón gota a gota."
  },
  {
    "cat": "Urgencias",
    "p": "Un paciente llega ahogándose debido a una reacción alérgica severa (Anafilaxia) provocada por un piquete de insecto. ¿Cuál es el medicamento salvavidas inmediato?",
    "o": ["Adrenalina (Epinefrina) inyectada de inmediato", "Un jarabe para la tos común", "Una dosis alta de suero glucosado"],
    "c": 0,
    "e": "¡Exacto! La anafilaxia cierra la garganta y baja la presión a niveles mortales. La adrenalina abre las vías respiratorias en segundos y sube la presión, salvando al paciente de morir asfixiado.",
    "curioso": "Los médicos y personas alérgicas severas cargan lápices de auto-inyección de adrenalina que traspasan la ropa para aplicarse en el muslo en segundos."
  },
  {
    "cat": "Cirugía",
    "p": "Al terminar una operación, las heridas grandes de la piel suelen cubrirse con un apósito estéril durante las primeras 24 a 48 horas. ¿Cuál es el motivo científico?",
    "o": ["Para que el paciente no se mire la herida y se asuste", "Para aislar la herida mientras la capa externa de la piel vuelve a sellarse, evitando que entren bacterias del ambiente hospitalario", "Para mantener la piel completamente húmeda con agua"],
    "c": 1,
    "e": "¡Cabal! En las primeras horas la piel aún no ha soldado. Dejarla tapada con un apósito estéril evita que los microbios del aire o las sábanas infecten el corte fresco.",
    "curioso": "Pasadas 48 horas, si la herida no supura, muchos médicos prefieren dejarla al aire libre porque el propio cuerpo ya creó una micro-barrera natural."
  },
  {
    "cat": "Laboratorio",
    "p": "En un hospital, los médicos ordenan un examen de 'Gases Arteriales'. ¿En qué se diferencia esta extracción de sangre de una muestra común de laboratorio?",
    "o": ["Se extrae de una arteria profunda (como la de la muñeca), la sangre es roja brillante y mide directamente el oxígeno y el pH del cuerpo", "Se toma pinchando un dedo con una lanceta pequeña", "Se extrae de las venas del pie usando tubos amarillos únicamente"],
    "c": 0,
    "e": "¡Perfecto! La sangre de las venas ya va de regreso sin oxígeno. Los gases arteriales toman sangre directo de las arterias (que viene limpia del pulmón) para ver exactamente cómo está respirando el paciente.",
    "curioso": "Esta prueba es dolorosa porque las arterias son más profundas y tienen más nervios alrededor. Al terminar, la enfermera debe presionar firme por 5 minutos para evitar un hematoma."
  },
  {
    "cat": "Urgencias",
    "p": "Llega un paciente intoxicado con humo por un incendio en una casa. ¿Por qué el oxímetro de pulso común puede dar una lectura de 100% falsa y engañar al médico?",
    "o": ["Porque la máquina se arruina con el humo del ambiente", "Porque el monóxido de carbono se pega a la hemoglobina y el sensor del oxímetro lo confunde con oxígeno real", "Porque el humo calienta los dedos del paciente"],
    "c": 1,
    "e": "¡Exacto! El monóxido de carbono engaña al oxímetro clásico porque brilla igual que la hemoglobina oxigenada. El paciente puede estar muriendo por falta de oxígeno real aunque la pantalla marque 100%.",
    "curioso": "Para estos pacientes los médicos confían ciegamente en los Gases Arteriales, que miden los niveles reales de gases disuelvos en la sangre."
  },
  {
    "cat": "Inyectables",
    "p": "Un médico indica pasar un medicamento por vía 'Intravenosa Directa' (o Bolo). ¿Cómo ejecuta esta orden la enfermera a la par del paciente?",
    "o": ["Inyecta el medicamento directamente en el catéter de la vena en un periodo corto de 1 a 5 minutos usando una jeringa", "Diluye el medicamento en una bolsa grande de un litro de suero para pasar en todo el día", "Aplica el medicamento directo en el músculo del brazo"],
    "c": 0,
    "e": "¡Así es! Pasar un medicamento en bolo significa que entra concentrado y rápido directo al torrente sanguíneo. El efecto es casi inmediato, por lo que se debe vigilar de cerca al paciente.",
    "curioso": "Muchos medicamentos potentes se pasan de forma lenta en bolo (diluidos en una jeringa de 10ml de suero) para evitar que le baje la presión de golpe al paciente."
  },
  {
    "cat": "Diagnóstico",
    "p": "Un doctor está revisando a un paciente con dolor abdominal agudo en la emergencia y presiona el 'Punto de McBurney' en el lado derecho. ¿Qué enfermedad busca confirmar?",
    "o": ["Una gastritis severa crónica", "Una Apendicitis Aguda", "Cálculos en la vesícula biliar"],
    "c": 1,
    "e": "¡Cabal! El punto de McBurney está ubicado en el cuadrante inferior derecho del abdomen, justo sobre el apéndice. Si el paciente salta de dolor al presionar y soltar ahí, es señal casi segura de apendicitis.",
    "curioso": "Si el apéndice inflamado no se opera rápido mediante una cirugía, puede reventarse y causar Peritonitis, una infección generalizada del abdomen que es mortal."
  },
  {
    "cat": "Cirugía",
    "p": "Al preparar la piel del paciente para una incisión en quirófano, el personal aplica antisépticos con movimientos espirales desde el centro hacia afuera. ¿Por qué se hace así?",
    "o": ["Para que el líquido se seque más rápido con el aire", "Para arrastrar las bacterias lejos de la zona donde el cirujano va a cortar con el bisturí, evitando contaminar el centro", "Por pura estética del campo quirúrgico"],
    "c": 1,
    "e": "¡Perfecto! Es una regla básica de oro de la asepsia: siempre se limpia de lo más limpio a lo más sucio. Si regresas el hisopo al centro, vuelves a ensuciar la zona quirúrgica.",
    "curioso": "Hoy en día el antiséptico más usado en quirófano es la Clorhexidina o la Povidona Yodada debido a su largo efecto protector en la piel."
  },
  {
    "cat": "Urgencias",
    "p": "En un accidente de tránsito con sospecha de fractura de cuello, ¿cuál es el primer insumo de inmovilización que los paramédicos le colocan al paciente antes de moverlo?",
    "o": ["Una venda elástica en la cabeza", "Un collarín cervical rígido", "Una sonda de alimentación ajustable"],
    "c": 1,
    "e": "¡Exacto! El collarín cervical bloquea los movimientos del cuello. Si hay una vértebra rota, mover la cabeza sin protección podría cortar la médula espinal y dejar al paciente paralítico para siempre.",
    "curioso": "El collarín solo se retira en el hospital una vez que los médicos revisan las radiografías o tomografías y confirman que el cuello está intacto."
  },
  {
    "cat": "Laboratorio",
    "p": "Un médico ordena un examen de 'Creatinina y Nitrógeno Ureico (BUN)' a un paciente hipertenso. ¿Qué órganos del cuerpo está evaluando con esta prueba?",
    "o": ["El funcionamiento de los pulmones", "La salud y capacidad de filtración de los Riñones", "El estado del hígado"],
    "c": 1,
    "e": "¡Cabal! La creatinina es un desecho del cuerpo que los riñones sanos filtran y botan por la orina. Si los riñones están fallando, la creatinina se acumula y sube en la sangre.",
    "curioso": "Es la prueba reina para detectar la Insuficiencia Renal Crónica antes de que el paciente necesite tratamientos pesados como la diálisis."
  },
  {
    "cat": "Curación",
    "p": "Al retirar los puntos de sutura de una herida que ya sanó, ¿cuántos días promedio suele esperar el médico en una zona como el abdomen o la espalda?",
    "o": ["De 2 a 3 días como máximo", "De 7 a 14 días, dependiendo de la tensión de la piel y la evolución de la cicatriz", "Un mes entero de reposo"],
    "c": 1,
    "e": "¡Así es! La piel del cuerpo tarda entre una y dos semanas en ganar la fuerza suficiente para mantenerse unida sola. Retirar los puntos antes corre el riesgo de que la herida se vuelva a abrir.",
    "curioso": "En la cara, como hay excelente circulación de sangre, los puntos se quitan rápido (a los 5 días) para evitar que dejen marcas de costura feas."
  },
  {
    "cat": "CATÉTERES",
    "p": "Al revisar una orden de catéteres intravenosos periféricos para una emergencia de trauma donde se requiere pasar fluidos a velocidad ultra rápida, ¿qué calibre de Gauge (G) es el ideal?",
    "o": ["Catéter 24G (Color Amarillo)", "Catéter 22G (Color Azul)", "Catéter 14G o 16G (Color Naranja o Gris)"],
    "c": 2,
    "e": "¡Exacto! En la escala Gauge, a menor número corresponde un diámetro interno mucho más grueso. Los 14G y 16G son tubos anchos perfectos para meter litros de suero o sangre en segundos.",
    "curioso": "El catéter 24G (amarillo) es el más delgado de todos, usado casi siempre para las venas finitas de los bebés o pacientes de pediatría."
  },
  {
    "cat": "SUTURAS",
    "p": "Nos piden cotizar una sutura para una cirugía donde se necesita que el hilo mantenga la fuerza por semanas, pero que eventualmente el cuerpo la deshaga sola sin necesidad de retirar puntos. ¿Qué tipo de sutura buscamos?",
    "o": ["Sutura de Seda Negra (No absorbible)", "Sutura de Ácido Poliglicólico o Poliglactina 910 (Absorbible sintética)", "Hilo de Nylon Monofilamento (No absorbible)"],
    "c": 1,
    "e": "¡Cabal! Las suturas absorbibles sintéticas se degradan por hidrólisis (el agua del cuerpo las deshace). Son las reinas para coser tejidos internos como el útero o los músculos abdominales.",
    "curioso": "La seda y el nylon son no absorbibles; si se usan en la piel externa, el enfermero tiene que retirar los puntos con tijera y pinza a los 7 o 10 días."
  },
  {
    "cat": "INSUMOS",
    "p": "Un requerimiento técnico en Guatecompras solicita jeringas con sistema 'Luer Lock'. ¿Qué característica especial tiene este cono que lo hace superior al cono 'Luer Slip' común?",
    "o": ["Que la aguja se introduce a presión y se puede salir si el líquido es muy espeso", "Que tiene una rosca de seguridad donde la aguja se enrosca y queda totalmente bloqueada, evitando que salga volando por la presión", "Que la jeringa viene fabricada de vidrio templado"],
    "c": 1,
    "e": "¡Perfecto! El sistema Luer Lock es la norma de seguridad en quirófanos y áreas críticas. Al quedar enroscada, no hay riesgo de que la aguja se desprenda y salpique medicamento o sangre.",
    "curioso": "Las jeringas Luer Slip (a presión) son las que se usan típicamente para inyecciones rápidas en las nalgas o vacunas, donde no hay altas presiones."
  },
  {
    "cat": "PROTECCIÓN",
    "p": "Llega una licitación que exige 'Guantes Quirúrgicos Estériles de Látex'. ¿Cuál es la diferencia principal de este producto frente a los guantes de examen comunes que vienen en caja de 100 unidades?",
    "o": ["Que vienen empacados en pares individuales por talla, son más largos y pasaron por un proceso de esterilización por gas para entrar a quirófano", "Que son de un material plástico transparente idéntico al de las bolsas", "Que se pueden lavar con cloro y volver a usar en otra cirugía"],
    "c": 0,
    "e": "¡Así es! Los guantes quirúrgicos son insumos de alta precisión. Viven por tallas exactas (6.5, 7, 7.5, etc.) para ajustarse como una segunda piel y tienen un empaque doble que garantiza esterilidad total.",
    "curioso": "El diseño de estos guantes incluye un puño largo con reborde para que se sujete firmemente por encima de las mangas de la bata quirúrgica."
  },
  {
    "cat": "EQUIPOS",
    "p": "En el catálogo de insumos de vías aéreas, los Tubos Endotraqueales cuentan con un balón inflable en la punta llamado 'Cuff'. ¿Cuál es el propósito clínico de este componente?",
    "o": ["Hacer que el tubo flote dentro del cuerpo", "Sellar la tráquea para que el aire de la máquina no se escape y evitar que los jugos gástricos o saliva caigan a los pulmones", "Servir de filtro para las bacterias del ambiente"],
    "c": 1,
    "e": "¡Exacto! El cuff es un salvavidas. Al inflarlo con una jeringa desde afuera, el balón se expande como una llantita dentro de la tráquea, asegurando que el paciente solo respire el oxígeno limpio del ventilador.",
    "curioso": "Las enfermeras de intensivo usan un aparato llamado 'manómetro de cuff' para medir que la presión del balón no lastime ni corte la circulación de las paredes de la tráquea."
  },
  {
    "cat": "SONDAS",
    "p": "Nos piden una 'Sonda Foley de 2 vías'. ¿Para qué se utiliza específicamente este dispositivo médico en el hospital?",
    "o": ["Para alimentación directa hacia el estómago a través de la nariz", "Para introducir oxígeno a alta presión por la boca", "Para el drenaje continuo de orina desde la vejiga, quedando fija gracias a un balón interno"],
    "c": 2,
    "e": "¡Cabal! La sonda Foley va directo a la uretra hasta llegar a la vejiga. Tiene dos vías: una para que salga la orina hacia la bolsa recolectora y otra para inflar el balón de retención con agua estéril para que no se salga.",
    "curioso": "Existen sondas Foley de 3 vías; la tercera vía se utiliza para hacer lavados vesicales continuos con suero en pacientes operados de la próstata."
  },
  {
    "cat": "SOLUCIONES",
    "p": "Un médico pide una solución isotónica para reponer líquidos perdidos por deshidratación severa sin alterar la concentración de la sangre. ¿Cuál es el producto estándar en el mercado?",
    "o": ["Solución Salina Normal al 0.9% (o Cloruro de Sodio al 0.9%)", "Agua destilada pura en bolsa", "Solución de Glucosa al 50%"],
    "c": 0,
    "e": "¡Perfecto! La solución salina al 0.9% tiene la misma concentración de sal que los fluidos de nuestro cuerpo (por eso es isotónica). Es el suero de batalla en cualquier emergencia del mundo.",
    "curioso": "El agua destilada pura jamás se pasa directo a la vena porque rompería los glóbulos rojos al instante por un efecto de ósmosis extrema."
  },
  {
    "cat": "EQUIPOS",
    "p": "En una cotización de equipo para encamamiento, piden un 'Fluviómetro' (o Flujómetro) de Oxígeno. ¿Qué escala de medición maneja este dispositivo pegado a la pared del hospital?",
    "o": ["Mide la presión en milímetros de mercurio (mmHg)", "Mide el flujo de oxígeno entregado al paciente en Litros por Minuto (LPM)", "Mide la temperatura del gas en grados centígrados"],
    "c": 1,
    "e": "¡Exacto! El flujómetro controla cuántos litros de oxígeno puro le pasan al paciente cada minuto. Tiene una chibolita metálica que sube dentro de un tubo graduado para marcar el flujo exacto.",
    "curioso": "Para que el oxígeno no le reseque la nariz al paciente, el flujómetro siempre lleva enroscado un frasco humidificador con agua estéril o destilada."
  },
  {
    "cat": "CURACIÓN",
    "p": "Al revisar las gasas médicas para heridas en una licitación, vemos que unas dicen 'Gasa con Filamento Radiopaco'. ¿Qué ventaja tiene este insumo en un quirófano?",
    "o": ["Que brilla en la oscuridad si se apagan las luces", "Que contiene un hilo especial que se ve claramente en las Radiografías (Rayos X), evitando que se quede una gasa olvidada dentro del paciente", "Que absorbe el doble de líquido que una gasa común"],
    "c": 1,
    "e": "¡Cabal! Ese hilo que traen es radiopaco. Si al terminar una cirugía el conteo de gasas no cuadra, le toman una placa de Rayos X al paciente en la mesa y la gasa perdida va a brillar en la imagen.",
    "curioso": "Dejar un cuerpo extraño en una cirugía es un error grave llamado textiloma, por eso el conteo de gasas es una regla obligatoria para la enfermera instrumentista."
  },
  {
    "cat": "URGENCIAS",
    "p": "Para la preparación de la piel antes de meter cuchillo en quirófano, el estándar de oro actual es la 'Clorhexidina al 2% en base alcohólica'. ¿Por qué le está ganando la batalla a la Povidona Yodada?",
    "o": ["Porque la clorhexidina tiene un efecto residual más largo (sigue matando bacterias horas después) y causa menos alergias en la piel", "Porque la clorhexidina es de color rojo brillante", "Porque es mucho más barata y se hace con agua común"],
    "c": 0,
    "e": "¡Esa es! La clorhexidina se une a la queratina de la piel y sigue destruyendo microbios hasta por 6 u 8 horas. Además, no mancha la piel de marrón como el yodo, permitiendo ver bien las venas.",
    "curioso": "La povidona yodada se sigue usando mucho, pero tiene la desventaja de que se desactiva rápido si entra en contacto con fluidos como sangre o pus."
  },
  {
    "cat": "CATÉTERES",
    "p": "Un cirujano solicita un 'Catéter Venoso Central' (CVC) de 3 lúmenes. ¿Dónde se instala físicamente este dispositivo y cuál es su ventaja?",
    "o": ["Se instala en las venas pequeñas de la mano para pasar analgésicos", "Se introduce en una vena grande del cuello (Yugular) o tórax (Subclavia) llegando cerca del corazón, permitiendo pasar múltiples medicamentos fuertes a la vez sin mezclarse", "Es una sonda que va directo al riñón"],
    "c": 1,
    "e": "¡Excelente! Al tener 3 lúmenes (tres tubitos independientes dentro de un solo catéter), las enfermeras pueden pasar nutrición por una vía, antibióticos por otra y medir presiones por la tercera sin que los líquidos se choquen.",
    "curioso": "Como estos medicamentos van directo a venas con flujos de sangre gigantescos, no irritan las paredes del vaso como pasaría en el brazo."
  },
  {
    "cat": "DIAGNÓSTICO",
    "p": "Si te piden 'Electrodos para Electrocardiograma', vas a ver que esos parches redondos traen un gel húmedo en el centro. ¿Para qué sirve realmente ese pegoste?",
    "o": ["Para enfriar la piel del paciente y que no sude", "Es un puente para que la electricidad del corazón pase limpia al monitor", "Para pegar el parche con fuerza y que no se safe con los hilos"],
    "c": 1,
    "e": "¡Exacto! El corazón genera micro-corrientes eléctricas. Como la piel es seca y resiste la electricidad, ese gel húmedo funciona como una autopista para que las señales salten sin ruidos al cable y el monitor dibuje el ritmo cardíaco real.",
    "curioso": "Si dejas la caja de electrodos abierta y el gel se seca, el monitor se vuelve loco y empieza a tirar alarmas falsas de paro cardíaco porque pierde la señal por completo."
  },
  {
    "cat": "SUTURAS",
    "p": "Alistar hilos para coser es un arte. Si la aguja trae un dibujo de un círculo (Cilíndrica) en el empaque, ¿en qué parte del cuerpo se usa?",
    "o": ["En órganos blandos como el intestino para pasar separando fibras sin rajarlos", "En la piel externa porque es redonda y no deja cicatriz fea", "En tejidos duros como los tendones o huesos para poder perforarlos"],
    "c": 0,
    "e": "¡Cabal! La aguja cilíndrica es como un cono liso: hace el agujero empujando las fibras hacia los lados sin cortar. Si usaras una aguja con filo en un intestino, lo rajarías de lado a lado al jalar el hilo.",
    "curioso": "Para la piel externa se usa la aguja cortante (la del triángulo), porque la piel humana es durísima y necesitas un filo tipo bisturí para poder atravesarla."
  },
  {
    "cat": "CIRUGÍA",
    "p": "En las cajas de batas y campos descartables dice 'Tela SMS'. ¿Qué es ese sándwich de material en la vida real?",
    "o": ["Un sistema de hilos cruzados para que la bata no se rompa si el doctor engorda", "Tres capas de plástico que bloquean fluidos y bacterias pero dejan pasar el aire", "Una tela especial con seda orgánica que no causa alergias en el quirófano"],
    "c": 1,
    "e": "¡Pura tecnología! El SMS son tres capas de polipropileno fundido. La capa del centro es un micro-filtro que atrapa las bacterias y frena los chorros de sangre, manteniendo al cirujano seco y protegido.",
    "curioso": "Aunque frena los líquidos por completo, el SMS deja pasar el vapor del aire. Gracias a eso, los médicos no se asan del calor durante cirugías de tres horas."
  },
  {
    "cat": "INSUMOS",
    "p": "Las llaves de 3 vías son un éxito en los hospitales. ¿Cuál es su jale principal en las salas de encamamiento?",
    "o": ["Conectar dos sueros diferentes al mismo catéter y controlar el paso girando la manecilla", "Servir de tapón mecánico para que la sangre no se regrese cuando el suero se acaba", "Regular la presión del oxígeno en las mascarillas de la emergencia"],
    "c": 0,
    "e": "¡Perfecto! Es como un grifo de plomería pero para medicina. Girando la manecilla central, el enfermero puede pasar el medicamento A, cambiar al suero B, pasar ambos juntos o cerrar todo el paso en un segundo sin pinchar otra vez al paciente.",
    "curioso": "La manecilla tiene unas flechas grabadas en el plástico que le indican al enfermero qué camino está abierto y cuál está cerrado para evitar que mezclen medicinas por error."
  },
  {
    "cat": "SONDAS",
    "p": "Las sondas de aspiración traen un agujero extra cerca del conector de color. ¿Qué se supone que debe hacer el enfermero con ese hoyito?",
    "o": ["Conectar ahí una jeringa con agua para limpiar la manguera", "Dejarlo libre para que el aire de la sala regule la presión interna", "Taparlo con el dedo solo al salir para activar la succión de forma segura"],
    "c": 2,
    "e": "¡Al centavo! Si metes la sonda succionando desde el inicio, se va a pegar como ventosa a la garganta del paciente y lo vas a hacer sangrar. El hoyito es un freno: solo succiona cuando lo tapas con el pulgar mientras vas retirando la sonda.",
    "curioso": "El conector de color no es por estética; es un código universal de medidas. El conector verde siempre es medida 14 y el naranja siempre es medida 16."
  },
  {
    "cat": "INSUMOS",
    "p": "¿Por qué las jeringas de tres partes (las premium) traen un empaque negro de goma en la punta del émbolo en lugar de ser puro plástico transparente?",
    "o": ["Para que el médico pueda ver el nivel del líquido en la oscuridad", "Porque la goma negra reacciona cambiando de color si el medicamento está vencido", "Para asegurar un sello hermético que evite fugas y permita un deslizamiento suave sin dar tirones"],
    "c": 2,
    "e": "¡Exacto! Esa gomita negra es el secreto de la precisión. Si fuera puro plástico contra plástico, el émbolo se trabaría y al empujarlo saldría el chorro de golpe, lo cual puede romperle la vena al paciente o pasarle mal la dosis.",
    "curioso": "Esa pieza de hule está hecha de un compuesto sintético libre de látex para que ningún paciente sufra de alergias extrañas durante la inyección."
  },
  {
    "cat": "CURACIÓN",
    "p": "Al limpiar una herida abierta o una quemadura, las gasas tejidas de algodón tradicional a veces pueden retrasar la sanación. ¿Por qué pasa esto?",
    "o": ["Porque las fibras sueltas se pegan a la costra y al cambiarlas arrancan el tejido nuevo", "Porque el algodón absorbe los medicamentos y les quita el efecto por completo", "Porque el hilo de algodón tradicional altera el pH de la piel y causa ardor químico"],
    "c": 0,
    "e": "¡Cabal, diste en el clavo! La gasa de algodón común es buenísima para secar sangre, pero si la dejas sobre tejido vivo, los hilos se amarran a la carne nueva. Al quitarla al día siguiente, te traes la piel nueva y hacés sangrar al paciente otra vez.",
    "curioso": "Por eso para curaciones avanzadas se usan gasas no tejidas o apósitos para quemaduras, que son lisos como seda y no se pegan para nada."
  },
  {
    "cat": "INSUMOS",
    "p": "Los catéteres intravenosos vienen codificados por colores internacionales (Azul, Rosa, Verde, Gris). ¿Qué significa realmente este color?",
    "o": ["El grosor de la aguja (calibre), donde los números más pequeños son agujas más gruesas", "El tipo de medicamento que se puede pasar (analgésicos, antibióticos o sueros)", "La marca del fabricante para evitar que se mezclen insumos de baja calidad"],
    "c": 0,
    "e": "¡Esa es! El color te dice el calibre (Gauges). Por ejemplo, el Azul es un calibre 22 (delgadito, para venas difíciles o niños), mientras que el Verde es un calibre 18 (grueso, ideal para pasar sangre rápido en emergencias).",
    "curioso": "La regla es al revés de lo que dicta la lógica: entre más grande es el número del calibre (ej. 24G), más fina y delgada es la aguja por dentro."
  },
  {
    "cat": "CURACIÓN",
    "p": "Para cerrar heridas en la cara o cirugías estéticas sin dejar cicatrices feas de costuras, los médicos prefieren usar suturas mecánicas o cintas adhesivas (tipo Steri-Strip) en vez de hilo. ¿Cuál es la ventaja?",
    "o": ["Que las cintas tienen analgésico que se absorbe por los poros de la piel", "Que distribuyen la tensión de forma pareja sin perforar la piel ni estrangular los bordes de la herida", "Que se caen solas en menos de 24 horas para que el paciente se pueda maquillar"],
    "c": 1,
    "e": "¡Exacto! El hilo tradicional ocupa hacerle hoyos a la piel con una aguja y apretar con nudos. Si el médico aprieta mucho, corta la circulación de los bordes. Las cintas Steri-Strip solo abrazan la piel desde afuera y la mantienen unida de forma natural.",
    "curioso": "Estas tiritas son tan resistentes que mantienen la herida cerrada incluso si el paciente gesticula, habla o se ríe, ayudando a que la cicatriz quede como una línea invisible."
  },
  {
    "cat": "INSUMOS",
    "p": "Las bolsas de colostomía (las que recolectan desechos de pacientes operados del intestino) traen un pequeño parche o filtro negro en la parte de arriba. ¿Cuál es su función?",
    "o": ["Sirve de ventana para monitorear si la bolsa ya llegó a su máxima capacidad de llenado", "Es un filtro de carbón activado que deja salir los gases atrapados de forma segura y sin mal olor", "Es un sensor térmico que avisa si el contenido está dañando la piel del paciente"],
    "c": 1,
    "e": "¡Buenísima, esa es! Si la bolsa fuera completamente sellada, los gases del intestino la inflarían como un globo hasta explotarla o despegarla de la piel. El filtro de carbón deja salir el aire continuamente pero atrapa el mal olor por completo.",
    "curioso": "Si el paciente se va a meter a bañar, el fabricante incluye unos stickers especiales para tapar ese filtro, porque si el carbón se moja, deja de funcionar."
  },
  {
    "cat": "DESECHOS",
    "p": "Para lavar las pinzas de cirugía se exige usar 'Detergente Enzimático' en vez de jabón común de platos. ¿Cuál es el súper poder de este producto?",
    "o": ["Tiene un químico que le saca brillo espejo al acero inoxidable", "Contiene enzimas que devoran y deshacen los restos de sangre y tejido humano", "Es un desinfectante ultra fuerte que mata el 100% de los virus en frío"],
    "c": 1,
    "e": "¡Así es! La sangre humana seca se pega en las bisagras de las pinzas como si fuera cemento. Las enzimas de este jabón actúan como micro-pirañas biológicas que rompen las proteínas de la sangre en minutos, dejando el metal impecable sin necesidad de rayarlo.",
    "curioso": "Este detergente es delicado: trabaja con agua tibia. Si los muchachos lo preparan con agua hirviendo, las enzimas se 'cocinan' y el jabón pierde su poder por completo."
  },
  {
    "cat": "INYECTABLES",
    "p": "Si un cliente te pide en el mostrador la aguja estándar para poner una inyección intramuscular profunda en un adulto, ¿de qué color buscas el cono?",
    "o": ["Gris (27G x 1/2)", "Verde (21G x 1 1/2)", "Amarillo (20G x 1)"],
    "c": 1,
    "e": "¡La reina de las inyecciones! La aguja verde 21G tiene el largo perfecto (pulgada y media) para atravesar la capa de grasa del glúteo y depositar el medicamento directo en el músculo, que es donde se absorbe correctamente.",
    "curioso": "La aguja gris (27G) es un pelito de corta y delgada. Si intentas poner una intramuscular con esa, el líquido se va a quedar atrapado en la grasa, le va a hacer un canchinflón al paciente y le va a doler por semanas."
  },
  {
    "cat": "EQUIPOS",
    "p": "Las cánulas binasales (bigoteras de oxígeno) son cómodas, pero tienen un límite. ¿Qué pasa si le subes el flujo a más de 6 litros por minuto?",
    "o": ["La manguera se revienta por la presión del tanque", "No oxigena más y solo le reseca y lastima la nariz al paciente", "El oxígeno se empieza a salir por los lados y se desperdicia"],
    "c": 1,
    "e": "¡Cabal! Las bigoteras son para flujos bajos. Si el paciente necesita más de 5 o 6 litros, ponerle más presión con la bigotera es como meterle un compresor de aire en la nariz: le va a doler y sangrar. Para flujos altos se usa mascarilla.",
    "curioso": "Son las favoritas en los hospitales porque al no tapar la boca, el paciente puede hablar con su familia, comer sus alimentos y tomar agua sin quitarse el oxígeno."
  },
  {
    "cat": "INSUMOS",
    "p": "Al revisar las bolsas recolectoras de orina, hay un componente clave llamado 'Válvula Antirretorno'. ¿Qué evita este sistema?",
    "o": ["Que la orina vieja de la bolsa regrese a la vejiga del paciente y le cause una infección", "Que el olor de la orina se salga de la bolsa y apeste la habitación", "Que la bolsa se rompa si se llena a su máxima capacidad"],
    "c": 0,
    "e": "¡Exacto! Es una compuerta que solo abre en un sentido (hacia abajo). Si el paciente se da la vuelta en la cama o levanta la bolsa, la orina estancada no puede regresar por la manguera. Si regresara, arrastraría bacterias directo a los riñones.",
    "curioso": "Las bolsas estándar de adulto aguantan hasta 2,000 mL (2 litros) de líquido y traen los números marcados en el plástico para que la enfermera apunte cuánto está produciendo el cuerpo."
  },
  {
    "cat": "CIRUGÍA",
    "p": "El 'Tubo de Penrose' es literalmente una tira de látex plano y suave que se deja saliendo de las heridas de cirugía. ¿Cómo funciona este invento?",
    "o": ["Usa un resorte interno que empuja los líquidos hacia afuera", "La sangre y el suero resbalan por fuera del látex hacia la gasa por pura gravedad", "Absorbe los líquidos como si fuera una esponja y luego se exprime"],
    "c": 1,
    "e": "¡Perfecto! El Penrose funciona por capilaridad y gravedad. Es como un canalito abierto: si queda sangre atrapada dentro del cuerpo después de operar, el líquido busca el camino fácil y resbala por fuera de la tirita de látex hacia los apósitos exteriores.",
    "curioso": "Evitar que esos líquidos se queden atrapados es vital, porque la sangre estancada a temperatura del cuerpo (37°C) es el hotel de cinco estrellas perfecto para que crezcan bacterias."
  },
  {
    "cat": "DESECHOS",
    "p": "En las emergencias hay botes con bolsas rojas y botes con bolsas negras. ¿Qué es lo único que va dentro de la bolsa ROJA?",
    "o": ["Todo lo que esté contaminado con fluidos humanos como gasas con sangre o guantes usados", "Los cartones de las medicinas, botellas plásticas vacías y jeringas sin aguja", "Los restos de comida de los pacientes y las envolturas de los insumos"],
    "c": 0,
    "e": "¡Cabal! La bolsa roja significa 'Peligro Biológico'. Todo lo que toque sangre, fluidos o tejidos va ahí porque requiere un camión especial que lo lleva a incineradores industriales. Si tiras basura común ahí, metes al hospital en un gran problema.",
    "curioso": "Las empresas recolectoras le cobran a los hospitales por libra de bolsa roja. Mezclar cartones o botellas ahí es tirar el dinero de la empresa a la basura."
  },
  {
    "cat": "URGENCIAS",
    "p": "Cuando un paciente crítico está inconsciente, lo primero que hace el doctor es ordenarle una 'Sonda Foley'. ¿Cuál es el objetivo de este tubo?",
    "o": ["Llegar al estómago para vaciar los ácidos y evitar que vomite", "Entrar a la vejiga por la uretra para medir exactamente cuánta orina produce por hora", "Meterse en la tráquea para asegurar que los pulmones reciban aire limpio"],
    "c": 1,
    "e": "¡Exacto! Monitorear los riñones es clave en un paciente grave. Si los riñones dejan de producir orina (gasto urinario), es la primera alarma de que el cuerpo está entrando en shock o se está quedando sin líquido en las venas.",
    "curioso": "La sonda Foley tiene un truco en la punta: un canalito extra para inflar un globito con agua estéril dentro de la vejiga. Así, por más que el paciente se mueva, la sonda no se sale sola."
  },
  {
    "cat": "LABORATORIO",
    "p": "Las bolsas recolectoras de orina pediátricas traen un pegamento en la orilla. ¿Cómo se usan estas bolsitas con los bebés de meses que usan pañal?",
    "o": ["Se mete dentro del pañal suelta para que cache lo que caiga", "Se pega directo a la piel alrededor de sus partes genitales para sellar la zona", "Se conecta a una micro-sonda que entra a la vejiga del bebé"],
    "c": 1,
    "e": "¡Así es! Sacarle una muestra de orina a un bebé es un reto. Estas bolsitas traen un adhesivo suave que se pega a la piel limpia del niño. Cuando el bebé orina, el líquido cae directo a la bolsa plástica sin contaminarse con el pañal.",
    "curioso": "Hay que estar atentos en la bodega con la rotación de este insumo: el adhesivo es hipoalergénico y muy delicado; si la bolsa pasa años guardada en calor, el pegamento se vence y ya no se fija."
  },
  {
    "cat": "CATÉTERES",
    "p": "En la bodega manejamos catéteres (Abocaths) por números Gauge (G). Si un cliente te pide el catéter ideal para las venas de un bebé o un anciano, ¿cuál le despachas?",
    "o": ["El número 14G (Color Naranja)", "El número 18G (Color Verde)", "El número 24G (Color Amarillo)"],
    "c": 2,
    "e": "¡Exacto! En medicina la escala Gauge funciona al revés: entre más grande es el número, más delgada es la aguja. El catéter 24G es diminuto y delgado como un pelo, perfecto para no romper las venas frágiles de un recién nacido.",
    "curioso": "Por el contrario, el naranja 14G es un tubo enorme. Ese solo se usa en accidentes graves o balazos en la emergencia, donde necesitas meter litros de sangre en segundos para salvarle la vida al paciente."
  },
  {
    "cat": "INSUMOS",
    "p": "Manejamos jeringas con sistema 'Luer Lock' (de rosca) y 'Luer Slip' (a presión). ¿Cuál es la ventaja real del sistema de rosca en un procedimiento?",
    "o": ["Permite que la aguja se deslice más rápido para vacunar en masa", "Evita que la aguja salga disparada por la presión de líquidos espesos", "Hace que el plástico de la jeringa aguante más tiempo guardado sin rajarse"],
    "c": 1,
    "e": "¡Impecable! Con el sistema Luer Lock, la aguja se enrosca firmemente al cono de la jeringa. Si estás inyectando un medicamento espeso (como penicilina o vitaminas pesadas), tienes que hacer mucha fuerza; si usaras una de presión, la aguja saldría volando y salpicaría fluidos a todos.",
    "curioso": "Las jeringas Luer Slip (las comunes a presión) se dejan para cosas rápidas como vacunas líquidas o inyecciones simples donde no hay resistencia al empujar el émbolo."
  },
  {
    "cat": "CURACIÓN",
    "p": "Algunas gasas quirúrgicas grandes para licitaciones exigen 'Filamento Radiopaco'. ¿Qué es esa línea negra que traen cosida en el centro?",
    "o": ["Un hilo detectable en Rayos X para encontrar la gasa si se queda olvidada dentro del paciente", "Una fibra ultra absorbente que dobla la capacidad de retención de sangre de la gasa", "Un componente químico que hace que la gasa brille bajo las luces del quirófano"],
    "c": 0,
    "e": "¡Cabal! En el corre-corre de una cirugía de abdomen se usan docenas de gasas. Si al contar el equipo antes de cerrar los números no cuadran, le toman una radiografía rápida al paciente en la camilla y ese hilo negro brillará en la placa si la gasa se quedó adentro.",
    "curioso": "Olvidar un insumo dentro de un cuerpo se llama médicamente 'textiloma' y causa infecciones severas. Por eso, las enfermeras cuentan las gasas una por una antes de empezar y antes de cerrar."
  },
  {
    "cat": "LABORATORIO",
    "p": "Para un examen general de orina, el médico siempre le dice al paciente que descarte el 'primer chorrito' y guarde el 'chorro medio'. ¿Cuál es el motivo?",
    "o": ["Porque el primer chorro sale con mucha fuerza y puede romper el frasco de plástico", "Para que el primer chorro limpie las bacterias de la piel y el frasco lleve solo la orina pura", "Porque la primera orina viene muy concentrada y altera los reactivos químicos"],
    "c": 1,
    "e": "¡Exacto! La punta de la uretra siempre tiene microbios normales de la piel y el ambiente. Si recoges ese primer chorro, el laboratorio va a reportar una infección falsa. El chorro medio garantiza que la muestra venga directo de la vejiga sin contaminación.",
    "curioso": "Una vez recolectada, la muestra debe llegar al laboratorio en menos de dos horas. Si la dejas en la mesa todo el día, las bacterias del aire se meten al frasco y se duplican por el calor."
  },
  {
    "cat": "CURACIÓN",
    "p": "Para agarrar puntos en el cuero cabelludo tras un golpe, los médicos siempre buscan sutura de Nylon Monofilamento. ¿Por qué prefieren este hilo ahí?",
    "o": ["Porque es liso, plástico y no se enreda ni se pega con el cabello del paciente", "Porque se deshace solo con el sudor de la cabeza en un par de semanas", "Porque es el único hilo orgánico que ayuda a que el pelo vuelva a crecer rápido"],
    "c": 0,
    "e": "¡Perfecto! El Nylon es como un hilo de pescar: es una sola tira plástica ultra lisa. Al no tener trenzas ni poros, no arrastra bacterias hacia la herida y se desliza como seda cuando toca quitar los puntos a los 8 días sin jalarle los pelos al paciente.",
    "curioso": "Los fabricantes tiñen este hilo de color azul brillante o negro intenso por una razón operativa: para que el doctor pueda ver los nudos fácilmente en medio del pelo oscuro del paciente."
  },
  {
    "cat": "DIAGNÓSTICO",
    "p": "Si un enfermero apunta en su reporte que un paciente tiene 38.4°C de temperatura, ¿cuál es el término clínico correcto para ese estado?",
    "o": ["Hipertermia maligna crítica", "Hipotermia clínica moderada", "Fiebre (o Pirexia)"],
    "c": 2,
    "e": "¡Así es! Clínicamente se considera Fiebre en cuanto el termómetro pasa los 38.0°C. Si el paciente marca entre 37.5°C y 37.9°C, el cuerpo está tibio pero no llega a fiebre; a eso los doctores le llaman 'febrícula'.",
    "curioso": "La fiebre no es mala, es la defensa del cuerpo. El cerebro sube la temperatura del termostato interno para cocinar y matar a los virus o bacterias que invadieron el sistema."
  },
  {
    "cat": "LABORATORIO",
    "p": "El examen de Hemoglobina Glicosilada (HbA1c) da un porcentaje (por ejemplo, 9%). ¿Por qué los médicos aman este examen para controlar a los diabéticos?",
    "o": ["Muestra el promedio real del azúcar del paciente durante los últimos 3 meses", "Mide los miligramos de azúcar exactos que el paciente tiene en ese preciso segundo", "Indica la cantidad de glóbulos blancos que están defendiendo al páncreas"],
    "c": 0,
    "e": "¡Esa es! El azúcar de la sangre se va quedando pegado a los glóbulos rojos. Como estas células viven unos 120 días en el cuerpo, medir este examen le da al doctor un reporte histórico infalible. Un valor de 9% significa que el paciente no se cuidó nada.",
    "curioso": "Este examen es el terror de los pacientes tramposos. Muchos hacen una dieta estricta tres días antes de ir al laboratorio para salir bien en el examen común, pero la glicosilada saca a la luz la verdad de los últimos meses."
  },
  {
    "cat": "INYECTABLES",
    "p": "Cuando mandan un antibiótico fuerte por 'Infusión Intravenosa Intermitente', ¿cómo se opera esto físicamente en el encamamiento?",
    "o": ["Se inyecta puro en la vena en dos segundos usando una aguja dental delgada", "Se diluye en una bolsa pequeña de suero (100ml) para que pase goteando en 30 minutos", "Se mezcla con una crema para aplicarlo directo en la piel de los brazos"],
    "c": 1,
    "e": "¡Exacto! Hay antibióticos hospitalarios que son sumamente pesados. Si los inyectas puros en un bolo rápido, le quemas la vena al paciente (flebitis). Por eso se diluyen en un 'mini suero' de 100mL y se pasan lento cada 8 o 12 horas.",
    "curioso": "Para controlar estos goteos pequeños sin riesgo de pasarse, las enfermeras utilizan mucho los equipos de microgotero, que dosifican el líquido gota por gota de forma milimétrica."
  },
  {
    "cat": "DIAGNÓSTICO",
    "p": "Si una persona ingresa a la emergencia y el médico nota que sus pupilas están diminutas, como la punta de un alfiler, ¿como se llama este signo?",
    "o": ["Midriasis pupilar severa", "Miosis profunda", "Anisocoria neurológica"],
    "c": 1,
    "e": "¡Cabal! La miosis es la contracción extrema de la pupila. Es el chivato inmediato que ven los médicos en los ojos de pacientes que ingresan por sobredosis de narcóticos, opioides o intoxicaciones por químicos pesados.",
    "curioso": "Lo contrario (pupilas gigantescas y dilatadas como platos de comida) se conoce como Midriasis y ocurre en paros cardíacos, falta de oxígeno severa o traumas cerebrales mortales."
  },
  {
    "cat": "URGENCIAS",
    "p": "Un paciente llega con una quemadura por fuego en el brazo. La piel está roja, con ampollas grandes llenas de líquido y le duele al extremo. ¿De qué grado es?",
    "o": ["Quemadura de Primer Grado", "Quemadura de Segundo Grado", "Quemadura de Tercer Grado"],
    "c": 1,
    "e": "¡El sello indiscutible! Las ampollas (o flictenas) aparecen únicamente en las quemaduras de segundo grado. Duelen a morir porque destruyen la capa externa de la piel, pero dejan las terminaciones nerviosas vivas y expuestas al aire.",
    "curioso": "Las de tercer grado se ven horribles (la piel queda negra o acartonada como carbón), pero curiosamente el paciente casi no siente dolor en esa zona porque el fuego carbonizó los nervios por completo."
  },
  {
    "cat": "Laboratorio",
    "p": "Un laboratorista te pide tubos al vacío para una prueba de 'Tipaje Sanguíneo' (saber si el paciente es A, B, O positivo o negativo). ¿Qué color de tapa le entregas?",
    "o": ["El tubo morado con EDTA", "El tubo celeste con citrato", "El tubo gris de glucosa"],
    "c": 0,
    "e": "¡Exacto! El tubo morado mantiene las células de la sangre vivas y sueltas gracias al EDTA. Esto le permite al banco de sangre mezclar los glóbulos rojos con reactivos para ver su tipo.",
    "curioso": "Saber el tipo exacto es vital; transfundir un tipo de sangre equivocado activa un ataque masivo del sistema inmune que puede matar al paciente en minutos."
  },
  {
    "cat": "Curación",
    "p": "Cuando una herida quirúrgica se abre sola por accidente días después de la operación debido a un esfuerzo o tos del paciente, ¿cómo se le llama técnicamente a este problema?",
    "o": ["Evisceración total", "Dehiscencia de la herida", "Granulación tardía"],
    "c": 1,
    "e": "¡Cabal! La dehiscencia ocurre cuando los hilos de sutura se rompen o desgarran la piel antes de que esta haya soldado por completo. Requiere una revisión médica inmediata.",
    "curioso": "Si la dehiscencia es en el abdomen y los órganos internos (como los intestinos) se salen por la apertura, el cuadro pasa a llamarse Evisceración, una emergencia de quirófano directa."
  },
  {
    "cat": "Diagnóstico",
    "p": "Un médico utiliza un 'Abajaelenguas de madera' para revisar la garganta de un paciente y este hace un gesto de arcada o náusea. ¿Qué reflejo nervioso está evaluando el doctor?",
    "o": ["El reflejo corneal del ojo", "El reflejo nauseoso (o faríngeo)", "La fuerza de masticación de la mandíbula"],
    "c": 1,
    "e": "¡Perfecto! El reflejo nauseoso es una protección natural del cuerpo comandada por los nervios craneales para evitar que objetos extraños entren a la vía aérea de forma accidental.",
    "curioso": "Verificar que este reflejo esté activo es clave antes de darle de comer a un paciente que viene saliendo de una anestesia o de un derrame cerebral."
  },
  {
    "cat": "Urgencias",
    "p": "En un accidente masivo, un paramédico aplica un 'Torniquete táctico' en el muslo de un paciente para frenar una hemorragia arterial. ¿Cuál es la regla de oro al colocarlo?",
    "o": ["Anotar la hora exacta de colocación en la frente del paciente o en la banda del torniquete y nunca quitarlo a ciegas fuera del hospital", "Aflojarlo cada 5 minutos para que la herida respire", "Cubrirlo con vendas calientes de guata"],
    "c": 0,
    "e": "¡Exacto! El torniquete salva vidas al frenar el sangrado de inmediato, pero corta el flujo a todo el miembro. Anotar la hora es vital para que los cirujanos calculen cuánto tiempo lleva el músculo sin sangre.",
    "curioso": "Dejar un torniquete por más de dos horas sin control médico puede causar daños permanentes por falta de oxígeno en los tejidos de la pierna."
  },
  {
    "cat": "Cirugía",
    "p": "Al terminar una operación de huesos, el cirujano coloca un vendaje con 'Venda de Guata' antes de poner las vendas elásticas o el yeso. ¿Cuál es la función de la guata?",
    "o": ["Mantener el hueso caliente por las noches", "Funcionar como un colchón protector de algodón que evita que el yeso rígido o la compresión de las vendas elásticas llaguen la piel y las zonas huesudas", "Evitar que la sangre pase por la pierna"],
    "c": 1,
    "e": "¡Cabal! La venda de guata es una armadura de algodón suave. Protege tobillos, codos o rodillas de la fricción y presión del material exterior duro.",
    "curioso": "Nuestras vendas de guata absorben el exceso de sudor debajo del yeso, manteniendo la piel del paciente más fresca y libre de infecciones por hongos."
  },
  {
    "cat": "Laboratorio",
    "p": "Un médico ordena una prueba de 'Glucosa Post-Prandial'. ¿En qué momento exacto de la rutina del paciente se debe extraer esta muestra de sangre?",
    "o": ["Exactamente dos horas después de que el paciente terminó de comer un alimento o carga de carbohidratos", "En ayunas completo a las 5 de la mañana", "Justo en medio de una crisis de fiebre alta"],
    "c": 0,
    "e": "¡Exacto! 'Post-prandial' significa después de la comida. Esta prueba mide la capacidad que tiene el páncreas del paciente para soltar insulina y bajar el azúcar tras un almuerzo o desayuno.",
    "curioso": "En personas sanas el azúcar sube al comer pero vuelve a estar abajo de 140 mg/dL a las dos horas. En diabéticos el valor se queda pegado arriba."
  },
  {
    "cat": "Inyectables",
    "p": "Cuando una enfermera va a canalizar una vena en el brazo del paciente, le coloca una 'Ligadura' o torniquete de hule unos centímetros arriba del sitio del pinchazo. ¿Para qué hace esto?",
    "o": ["Para dormir los nervios del dolor del brazo", "Para frenar el retorno de la sangre por las venas, logrando que estas se inflen, se pongan duras y sean mucho más fáciles de ver y pinchar con el catéter", "Para desinfectar la piel por presión"],
    "c": 1,
    "e": "¡Perfecto! La ligadura detiene la sangre que va de regreso al corazón. Como la arteria sigue metiendo sangre con fuerza, las venas se llenan como globos de agua, facilitando el trabajo.",
    "curioso": "La ligadura no debe dejarse puesta por más de un minuto antes del pinchazo, ya que puede alterar las muestras de sangre o causarle dolor al paciente."
  },
  {
    "cat": "Diagnóstico",
    "p": "Un obstetra atiende a una mujer embarazada en control y usa un aparato de ultrasonido portátil llamado 'Doppler Fetal'. ¿Qué sonido específico busca escuchar en la clínica?",
    "o": ["Los movimientos de los intestinos de la madre", "Los latidos del corazón del bebé dentro del vientre, que son rápidos como el galope de un caballo", "El flujo de aire en los pulmones de la madre"],
    "c": 1,
    "e": "¡Cabal! El Doppler fetal amplifica las ondas de sonido del corazón del feto. El ritmo normal de un bebé es altísimo, entre 120 y 160 latidos por minuto.",
    "curioso": "Escuchar este galope rápido en cada consulta es la mayor tranquilidad para los padres y la prueba de que el bebé viene creciendo sano."
  },
  {
    "cat": "Soluciones",
    "p": "Un paciente deshidratado severo por el calor de la costa llega a emergencias y el doctor ordena pasar un suero 'Solución Hartman' (o Lactato de Ringer). ¿Qué ventaja tiene este suero sobre el salino común?",
    "o": ["Que contiene una mezcla balanceada de electrolitos (Sodio, Cloruro, Potasio, Calcio y Lactato) muy similar a los fluidos perdidos por el cuerpo", "Que tiene sabor dulce y colorante clínico", "Que espesa los líquidos del estómago de inmediato"],
    "c": 0,
    "e": "¡Exacto! La solución Hartman es el suero balanceado por excelencia para traumas y deshidrataciones extremas. Evita que la sangre se vuelva muy ácida si pasas volúmenes muy grandes de líquido.",
    "curioso": "Es el suero preferido por los cirujanos en las salas de operaciones para mantener estables las presiones de los pacientes durante las cirugías mayores."
  },
  {
    "cat": "Protección",
    "p": "Al ingresar a la central de equipos y esterilización o al pasillo limpio de quirófano, el personal médico debe colocarse un 'Gorro Quirúrgico'. ¿Cuál es su fin principal?",
    "o": ["Mantener la cabeza caliente bajo el aire acondicionado central", "Cubrir por completo el cabello y las orejas para evitar que caigan micropartículas, caspa o cabellos sueltos sobre el material estéril o la herida abierta", "Identificar quién es el jefe del turno por el color del gorro"],
    "c": 1,
    "e": "¡Perfecto! El cabello humano está lleno de bacterias del ambiente. Un solo pelo que caiga en una mesa de operaciones puede arruinar una cirugía de millones de quetzales provocando una infección interna.",
    "curioso": "Por eso los gorros descartables de polipropileno son obligatorios tanto para los cirujanos calvos como para los de cabello largo."
  },
  {
    "cat": "Insumos",
    "p": "Si un cliente llega buscando una 'Jeringa de Insulina', ¿cuál es su característica principal en el empaque y su aguja?",
    "o": ["Viene graduada en 'Unidades' (U-100) en lugar de mililitros y trae una aguja ultra delgada y corta fija", "Es una jeringa gigante de 50ml para lavado", "Viene con una aguja gruesa de color verde"],
    "c": 0,
    "e": "¡Exacto! La insulina se dosifica por unidades internacionales, no por ml. Por eso estas jeringas traen una escala especial y una aguja sumamente fina para que el paciente diabético no sufra al pincharse a diario.",
    "curioso": "Casi todas las jeringas de insulina del mercado vienen con el capuchón de la aguja de color naranja como estándar internacional de identificación."
  },
  {
    "cat": "Catéteres",
    "p": "Nos piden un 'Catéter Venoso Periférico No. 24 (Amarillo)'. ¿Para qué tipo de paciente está diseñado este tamaño tan específico?",
    "o": ["Para adultos con venas muy gruesas en emergencias", "Para bebés, pacientes pediátricos o ancianos con venas sumamente delgadas y frágiles", "Para conectar mangueras de alimentación pesadas"],
    "c": 1,
    "e": "¡Cabal! El No. 24 es el catéter más pequeño y delgado del catálogo hospitalario. Su color amarillo avisa de inmediato que es para uso neonatal o pediátrico.",
    "curioso": "En los catéteres, entre más alto es el número, más delgada es la aguja. El 24 es un hilo fino, mientras que el 14 es un tubo grueso."
  },
  {
    "cat": "Suturas",
    "p": "Un cliente nos pide una sutura de 'Seda Negra Trenzada'. ¿Qué propiedad física tiene este producto en la medicina?",
    "o": ["Es una sutura no reabsorbible de origen natural, muy flexible y fácil de amarrar, usada mucho en cirugía general", "Se disuelve sola en la piel en 3 días", "Es un hilo elástico invisible"],
    "c": 0,
    "e": "¡Así es! La seda es un clásico. Al ser trenzada es sumamente suave para las manos del cirujano y mantiene los nudos firmes sin aflojarse.",
    "curioso": "Aunque es excelente, por ser un material orgánico el cuerpo genera un poco de inflamación a su alrededor; por eso hoy se prefiere el Nylon para la piel exterior."
  },
  {
    "cat": "Sondas",
    "p": "Viene un cliente y nos pide una 'Sonda Nelaton'. ¿En qué se diferencia visualmente de una Sonda Foley común?",
    "o": ["Es una sonda rígida de metal pesado", "Es una manguera simple y recta sin balón de fijación en la punta, usada para vaciar la vejiga rápido y retirarse de inmediato", "Tiene tres bolsas de agua colgando"],
    "c": 1,
    "e": "¡Perfecto! La Nelaton es para alivios rápidos (sacar una muestra de orina o vaciar la vejiga retenida). Entra, saca el líquido y se retira; no se queda fija como la Foley.",
    "curioso": "Vienen codificadas por colores en el conector externo según su grosor (French), igual que las sondas de aspiración."
  },
  {
    "cat": "Laboratorio",
    "p": "Si te piden un 'Tubo de Vacío con Tapa Roja o Amarilla', ¿qué tienen por dentro estos tubos y para qué exámenes sirven?",
    "o": ["Contienen anticoagulante líquido para mantener la sangre fluida", "No tienen anticoagulante (el rojo es seco y el amarillo trae gel separador) y sirven para obtener suero para pruebas químicas", "Tienen agua destilada para lavar la aguja"],
    "c": 1,
    "e": "¡Cabal! Estos tubos buscan que la sangre se coagule a propósito. Al centrifugar el tubo, las células se van al fondo y arriba queda el suero limpio para medir glucosa, colesterol o triglicéridos.",
    "curioso": "El gel separador del tubo amarillo actúa como una barrera física para que las células del fondo no sigan consumiendo el azúcar del suero de arriba."
  },
  {
    "cat": "Vendas",
    "p": "Un doctor compra 'Vendas de Gasa Orilladas'. ¿Cuál es la ventaja de este tipo de venda sobre una gasa cortada común?",
    "o": ["Que sus bordes están tejidos de fábrica para que no suelten hilos ni pelusas dentro de la herida", "Que son completamente impermeables al agua", "Que vienen impregnadas con yeso blanco"],
    "c": 0,
    "e": "¡Exacto! El peligro de usar gasas deshilachadas es que los hilos sueltos se pegan al tejido nuevo o causan infecciones. Las orilladas garantizan un vendaje limpio y seguro.",
    "curioso": "Son las preferidas para fijar apósitos en zonas de mucho movimiento o para hacer empaquetamientos limpios."
  },
  {
    "cat": "Insumos",
    "p": "Nos piden un 'Equipo de Venoclisis con Microgotero'. ¿Cuántas microgotas equivalen clínicamente a 1 mililitro de solución?",
    "o": ["Exactamente 10 gotas pesadas", "Exactamente 60 microgotas", "Mil gotas diminutas"],
    "c": 1,
    "e": "¡Perfecto! La matemática de enfermería dice que 60 microgotas hacen 1 ml (mientras que en el normogotero de adultos son 20 gotas). Se usa para pasar medicamentos con alta precisión en niños.",
    "curioso": "Gracias a esta equivalencia, las microgotas por minuto que caen en la cámara equivalen exactamente a los mililitros por hora (ml/h) que recibe el paciente."
  },
  {
    "cat": "Insumos",
    "p": "Un cliente pregunta por un 'Llave de Tres Vías' (o de paso). ¿Para qué sirve este pequeño accesorio plástico conectado al suero?",
    "o": ["Para medir la presión del brazo", "Para conectar varias líneas de suero o medicamentos a un mismo catéter sin necesidad de volver a pinchar al paciente", "Para bloquear la entrada de aire al pulmón"],
    "c": 1,
    "e": "¡Cabal! La llave de tres vías permite desviar el flujo. El enfermero puede pasar el suero principal y, al girar la perilla, inyectar una ampolleta por el otro puerto de forma limpia.",
    "curioso": "Muchos modelos vienen con extensiones de tubo cortas (mangueras) para que la manipulación no mueva el catéter dentro de la vena del paciente."
  },
  {
    "cat": "Equipos",
    "p": "Si vendemos un 'Esfigmomanómetro Aneroide', ¿qué producto le estamos entregando físicamente al cliente?",
    "o": ["Un termómetro digital para la frente", "Un aparato manual para medir la presión arterial que incluye brazalete, pera de hule y manómetro de aguja", "Una máquina para medir el azúcar"],
    "c": 1,
    "e": "¡Exacto! Es el famoso aparato de presión de toda la vida. Requiere el uso obligatorio de un estetoscopio para escuchar los ruidos del golpe de la sangre (ruidos de Korotkoff).",
    "curioso": "La palabra 'aneroide' significa que funciona sin líquido (a diferencia de los antiguos aparatos hospitalarios que usaban columnas de mercurio pesado)."
  },
  {
    "cat": "Insumos",
    "p": "Nos solicitan 'Gasa Vaselinada' (o apósitos para quemaduras). ¿Por qué este producto viene impregnado con vaselina estéril?",
    "o": ["Para que la gasa no se pegue al tejido vivo de la quemadura y permita retirarla en la próxima curación sin arrancar la piel nueva", "Para que huela bien el vendaje", "Para acelerar la salida de sangre"],
    "c": 0,
    "e": "¡Cabal! Una gasa seca sobre una quemadura se convierte en una pesadilla porque se suelda con el líquido de la herida. La vaselinada mantiene la zona húmeda y protegida.",
    "curioso": "También se les conoce en el mercado por marcas famosas como Adaptic o Jelonet, y son insumos premium en las clínicas de heridas."
  },
  {
    "cat": "Catéteres",
    "p": "Un cliente pide un 'Catéter No. 18 (Verde)'. ¿Cuál es el uso principal de este calibre en las emergencias de los hospitales?",
    "o": ["Para pasar gotas de ojos con calma", "Para pasar grandes volúmenes de sueros a chorro, transfusiones de sangre o pacientes que van directo a cirugía mayor", "Únicamente para pacientes recién nacidos"],
    "c": 1,
    "e": "¡Esa es! El No. 18 es un catéter grueso. Su diámetro permite introducir litros de solución o paquetes de sangre espesa en minutos sin que el catéter oponga resistencia.",
    "curioso": "Es el catéter estándar obligatorio por protocolo internacional para todo paciente que ingresa por trauma severo o accidente de tránsito."
  },
  {
    "cat": "Suturas",
    "p": "Si un cirujano pide una sutura de 'Ácido Poliglicólico' (o Vycril), ¿qué característica clave busca para los tejidos internos?",
    "o": ["Que sea una sutura absorbible sintética que mantiene la fuerza por unas semanas y luego el cuerpo la destruye sola sin dejar rastro", "Que sea de metal para que nunca se deshaga", "Que sirva para pegar huesos rotos"],
    "c": 0,
    "e": "¡Perfecto! Al ser absorbible, el cirujano cose el útero, el estómago o los músculos por dentro. El hilo hace su trabajo mientras sana el tejido y luego desaparece por completo.",
    "curioso": "El proceso por el cual el cuerpo desintegra este hilo sintético se llama 'hidrólisis' (reacción con el agua del propio cuerpo), evitando infecciones."
  },
  {
    "cat": "Sondas",
    "p": "Nos piden una 'Sonda Levin'. ¿Hacia qué parte del cuerpo va dirigida y cuál es su empaque común?",
    "o": ["Es una sonda larga que entra por la nariz hasta el estómago para alimentación o lavado gástrico (Sonda Nasogástrica)", "Es un tubo para los oídos", "Se coloca en la vejiga para sacar piedras"],
    "c": 0,
    "e": "¡Cabal! La sonda Levin es una manguera flexible de plástico con marcas de distancia en centímetros. Permite vaciar los gases del estómago o pasar fórmulas nutritivas directo al paciente.",
    "curioso": "Trae una línea radiopaca a todo lo largo para que el doctor pueda ver en una radiografía de tórax si la sonda quedó bien posicionada en el estómago o si se desvió al pulmón."
  },
  {
    "cat": "Insumos",
    "p": "Un cliente busca un 'Tegaderm' (Apósito Transparente). ¿Para qué sirve este producto autoadhesivo tan vendido?",
    "o": ["Para cubrir quemaduras de tercer grado secas", "Para fijar y proteger los catéteres intravenosos, permitiendo ver la vena a través del plástico para vigilar que no se infecte", "Para limpiar el instrumental médico"],
    "c": 1,
    "e": "¡Exacto! El apósito de poliuretano transparente es estéril, impermeable al agua y bacterias, pero deja que la piel respire. El enfermero puede bañarse o ver el sitio del pinchazo sin quitarlo.",
    "curioso": "Reduce drásticamente las infecciones de las vías ya que sella la entrada de la aguja contra los microbios de las sábanas."
  },
  {
    "cat": "Vendas",
    "p": "Viene un traumatólogo y nos pide 'Venda de Yeso'. ¿Cómo se activa este producto en la clínica para inmovilizar un brazo?",
    "o": ["Se debe calentar con una secadora de pelo", "Se sumerge por completo en agua unos segundos para activar el polvo de yeso deshidratado y luego se moldea rápido antes de que se ponga duro", "Se aplica seca y se estira con fuerza"],
    "c": 1,
    "e": "¡Cabal! Al mojar la venda, el yeso se hidrata y empieza una reacción química que genera calor y solidifica el material en pocos minutos, creando el molde rígido.",
    "curioso": "Durante el fraguado (secado), el yeso se calienta de forma natural. Las enfermeras cuidan que el agua no esté hirviendo para no quemar la piel del paciente."
  },
  {
    "cat": "Laboratorio",
    "p": "Si vendemos un 'Tubo con Tapa Celeste', ¿qué aditivo trae adentro y para qué pruebas específicas lo pide el laboratorio?",
    "o": ["Contiene Citrato de Sodio y se usa exclusivamente para las pruebas de tiempos de coagulación (TP y TTP)", "Contiene gel de grasa para separar suero", "Trae alcohol puro para fijar células"],
    "c": 0,
    "e": "¡Exacto! El citrato de sodio atrapa el calcio de la sangre de forma reversible para frenar la coagulación dentro del tubo. Es vital para medir con exactitud exacta cuánto tarda la sangre en cerrar heridas.",
    "curioso": "Este tubo tiene una marca de llenado obligatoria. Si la sangre no llega exactamente a la línea, el laboratorio la rechaza porque la mezcla con el líquido citrato queda incorrecta."
  },
  {
    "cat": "Insumos",
    "p": "Un cliente nos pide 'Algodón Plisado'. ¿En qué se diferencia este formato del algodón común en bolitas?",
    "o": ["Es una manta continua de algodón puro doblada en capas en zigzag dentro del paquete, lo que permite cortar el tamaño exacto que se necesita", "Viene mezclado con plástico duro", "Está empapado en alcohol de fábrica"],
    "c": 0,
    "e": "¡Cabal! El algodón plisado es el estándar para clínicas y botiquines. Permite al enfermero desenrollar la manta, cortar un trozo cuadrado para hacer tórulas o almohadillas y optimizar el producto.",
    "curioso": "Nuestros algodones son 100% puros y altamente absorbentes, ideales para limpiar la piel antes de una inyección junto con el alcohol medicinal."
  },
  {
    "cat": "Equipos",
    "p": "Nos piden un 'Oxímetro de Pulso de Dedo'. ¿Qué parámetros principales dibuja en su pantalla digital este aparato electrónico?",
    "o": ["La presión arterial sistólica y la temperatura", "La saturación de oxígeno en la sangre (SpO2) y la frecuencia cardíaca (latidos por minuto)", "El nivel de azúcar y el peso de la persona"],
    "c": 1,
    "e": "¡Perfecto! Es el aparato de batalla que se volvió famoso mundialmente. Lanza un rayo de luz infrarroja a través de la uña para medir cuánta hemoglobina está cargada de oxígeno.",
    "curioso": "Tener las uñas pintadas de colores oscuros (como negro o rojo) bloquea el rayo de luz del oxímetro, dando lecturas falsas o errores en la pantalla."
  },
  {
    "cat": "Catéteres",
    "p": "Un cliente solicita un 'Catéter No. 22 (Azul)'. ¿En qué situación clínica es el más común de usar?",
    "o": ["Para transfusiones masivas de sangre en accidentes graves", "Para venas delgadas de adultos, pacientes de la tercera edad o tratamientos de sueros lentos que no requieren altas presiones", "Para cirugías de corazón abierto únicamente"],
    "c": 1,
    "e": "¡Cabal! El calibre 22 es un tamaño mediano tirando a delgado. Entra con facilidad en venas difíciles o colapsadas de pacientes deshidratados donde un catéter verde no pasaría jamás.",
    "curioso": "Es uno de los catéteres más vendidos en clínicas médicas generales para pasar sueros de hidratación diarios por desvelo o cuadros de diarrea."
  },
  {
    "cat": "Suturas",
    "p": "Viene un cirujano buscando una sutura de 'Nylon Monofilamento 3-0'. ¿Qué significa la palabra Monofilamento en este producto?",
    "o": ["Que el hilo está hecho de una sola hebra sólida y lisa, lo que evita que las bacterias se alojen entre tejidos y se deslice suave", "Que el hilo viene trenzado con muchas cuerdas", "Que se estira como un elástico de hule"],
    "c": 0,
    "e": "¡Exacto! Al ser una sola hebra pulida, no tiene los huequitos microscópicos que tienen los hilos trenzados. Esto reduce a cero el riesgo de que las bacterias 'viajen' por el hilo hacia adentro de la herida.",
    "curioso": "Por esta razón el Nylon es el rey indiscutible para coser la piel exterior; es limpio, fuerte y no se pega a los bordes de la herida."
  },
  {
    "cat": "Sondas",
    "p": "Un cliente nos pide una 'Sonda de Aspiración con Válvula de Control'. ¿Para qué sirve ese pequeño agujero o válvula que trae en la base?",
    "o": ["Para meter agua caliente al tubo", "Para que el enfermero tape el agujero con el dedo y active la succión de flemas solo cuando lo necesite, evitando dañar la garganta del paciente", "Para inflar un balón interno"],
    "c": 1,
    "e": "¡Cabal! Si la succión fuera continua desde que entra, la sonda se pegaría a las paredes de la boca o tráquea causando sangrados. Al tapar la válvula con el dedo, se controla el vacío de forma segura.",
    "curioso": "Vienen en empaques estériles individuales y sus calibres se miden en French (Fr), identificados por códigos de colores internacionales en el conector."
  },
  {
    "cat": "Laboratorio",
    "p": "Nos piden un 'Tubo de Vacío con Tapa Morada (o Lila)'. ¿Qué aditivo químico trae por dentro y cuál es su uso principal en la clínica?",
    "o": ["Contiene EDTA (un potente anticoagulante) y se usa para hacer la Hematología Completa o conteo de células", "Trae azúcar pura concentrada para conservar la muestra", "Contiene gel de sílice para espesar la sangre"],
    "c": 0,
    "e": "¡Exacto! El EDTA se une al calcio de la sangre y evita que se formen coágulos, manteniendo a los glóbulos rojos, blancos y plaquetas sueltos y perfectos para ser contados por las máquinas del laboratorio.",
    "curioso": "Es el tubo más sagrado del laboratorio; si tiene un microcoágulo por no haberse invertido suavemente tras la extracción, el resultado de las plaquetas dará un error total."
  },
  {
    "cat": "Vendas",
    "p": "Un cliente busca 'Venda Elástica de Alta Compresión'. ¿Cuál es la diferencia de este insumo con una venda de gasa común?",
    "o": ["Que está hecha de algodón mezclado con hilos elásticos que ejercen presión firme sobre los músculos y venas para controlar la hinchazón o dar soporte a un esguince", "Que es de papel desechable", "Que se pega sola sin ganchos"],
    "c": 0,
    "e": "¡Cabal! Las vendas elásticas estiran y aprietan de forma controlada. Son las reinas para tratar torceduras de tobillo, asegurar férulas de yeso o mejorar la circulación venosa.",
    "curioso": "Nuestras vendas incluyen ganchos metálicos o elásticos de fijación rápida para asegurar el cierre del vendaje sin necesidad de usar esparadrapo."
  },
  {
    "cat": "Insumos",
    "p": "Nos piden un 'Buretra' (o Equipo de Volumetría). ¿Qué es físicamente este producto y cuándo se despacha en la bodega?",
    "o": ["Es un equipo de suero que incluye un cilindro plástico graduado de 100ml o 150ml para diluir medicamentos con dosis exactas, muy usado en pediatría", "Es una jeringa gigante de metal", "Un frasco de vidrio para muestras de tejido"],
    "c": 0,
    "e": "¡Exacto! El buretra permite aislar una cantidad pequeña de suero (ej. 50ml), meter la ampolleta de antibiótico ahí y pasarla al niño con la seguridad de que no se le va a ir todo el litro de suero por error.",
    "curioso": "Trae una pequeña boya flotante en el fondo del cilindro que sella el paso cuando el medicamento se termina, evitando que entre aire a la manguera del suero."
  },
  {
    "cat": "Insumos",
    "p": "Un doctor nos solicita 'Esparadrapo de Tela' (Cinta de Castilla). ¿Cuál es la principal ventaja de este adhesivo tradicional en la bodega?",
    "o": ["Que su adhesivo de resina es sumamente fuerte y su tela es resistente, ideal para fijar vendajes pesados o tracciones que requieren máxima sujeción", "Que se deshace con el agua en segundos", "Que es transparente y estéril"],
    "c": 0,
    "e": "¡Cabal! El esparadrapo de tela es el de batalla. Aguanta el sudor, el movimiento y la tensión mecánica pesada en hospitales y clínicas de campo.",
    "curioso": "Tiene una alta adherencia, por lo que quitarlo de pieles muy finas o con vello puede doler un poco; de ahí que los enfermeros usen alcohol para ablandarlo antes de retirarlo."
  },
  {
    "cat": "Equipos",
    "p": "Nos compran un 'Estetoscopio de Doble Campana'. ¿Para qué sirve la parte pequeña (campana abierta) a diferencia de la grande (diafragma plano)?",
    "o": ["La campana pequeña sirve para escuchar ruidos corporales de tonos bajos y profundos, como soplos del corazón o sonidos en niños pequeños", "Es solo un adorno estético del metal", "Para conectar mangueras de oxígeno adicionales"],
    "c": 0,
    "e": "¡Exacto! El diafragma grande plano capta ruidos altos (pulmones y corazón normal). Al girar la pieza de metal, activas la campana pequeña abierta, ideal para la acústica fina de cardiología.",
    "curioso": "El estetoscopio fue inventado en Francia porque un médico tenía vergüenza de pegar su oreja directamente al pecho de las pacientes mujeres."
  },
  {
    "cat": "Catéteres",
    "p": "Un cliente nos pide un 'Catéter No. 20 (Rosado)'. ¿Por qué este color es considerado el rey de los catéteres en los pisos de encamamiento de adultos?",
    "o": ["Porque es el color favorito de las clínicas estéticas", "Porque es el tamaño intermedio perfecto: es lo suficientemente grueso para pasar medicamentos rápidos y lo bastante cómodo para no romper las venas normales", "Porque solo sirve para inyectar agua pura"],
    "c": 1,
    "e": "¡Así es! El No. 20 rosado es el balance perfecto en los hospitales. Si un paciente necesita antibióticos, sueros de mantenimiento o un examen con contraste, el rosado cumple la misión sin maltratar el brazo.",
    "curioso": "Es el insumo que más rota en las bodegas médicas debido a su versatilidad para hombres y mujeres adultos en hospitalización."
  },
  {
    "cat": "Suturas",
    "p": "Nos piden una sutura de 'Catgut Crómico'. ¿De qué material orgánico está hecho este famoso producto absorbible?",
    "o": ["De hilos de plástico reciclado pulido", "De colágeno puro obtenido de la capa submucosa del intestino de ovejas o vacas sanas, tratado con sales de cromo", "De fibras de plantas medicinales trenzadas"],
    "c": 1,
    "e": "¡Exacto! El Catgut es una sutura natural biológica. El cuerpo la reconoce y la digiere mediante enzimas (un proceso llamado fagocitosis) hasta desaparecerla por completo de los tejidos internos.",
    "curioso": "Las sales de cromo se le aplican para retrasar la absorción del hilo, logrando que dure fuerte más tiempo dentro del cuerpo antes de deshacerse solo."
  },
  {
    "cat": "Sondas",
    "p": "Viene una enfermera buscando una 'Bolsa Recolectora de Orina para Adulto'. ¿Cómo se conecta este producto al paciente en la cama?",
    "o": ["Se amarra al brazo con una venda elástica", "Se conecta directamente al extremo libre de la Sonda Foley que el paciente tiene instalada en la vejiga, formando un sistema cerrado", "Se coloca suelta debajo de las sábanas sin manguera"],
    "c": 1,
    "e": "¡Cabal! La bolsa tiene un tubo largo de PVC que encaja a presión de forma estéril con la sonda Foley. La orina baja por gravedad y se almacena de forma limpia en la bolsa graduada.",
    "curioso": "Nuestras bolsas traen una 'válvula antirretorno' que evita que la orina regrese por la manguera hacia la vejiga si la bolsa se mueve, reduciendo infecciones."
  },
  {
    "cat": "Laboratorio",
    "p": "Si te piden un 'Lanceta Estéril Descartable', ¿qué producto estás entregando de la bodega y cuál es su mecánica?",
    "o": ["Una aguja larga para raquidea", "Una micro-hoja de metal con punta triangular ultra fina diseñada para hacer un pinchazo rápido y superficial en el dedo para obtener gotas de sangre", "Un tubo de vidrio para centrífuga"],
    "c": 1,
    "e": "¡Exacto! La lanceta es el insumo clave para los chequeos de glucosa con glucómetro o para pruebas rápidas de laboratorio (como VIH o tipo de sangre de gota). Su diseño minimiza el dolor al máximo.",
    "curioso": "Vienen con protectores plásticos giratorios que cubren la punta metálica para asegurar que nadie se pinche por accidente antes de usarla."
  },
  {
    "cat": "Vendas",
    "p": "Un cliente busca una 'Férula de Yeso Prefabricada'. ¿En qué se diferencia de un rollo de venda de yeso común?",
    "o": ["Viene en capas ya cortadas en forma de bandas rectangulares listas para mojar y colocar en la parte de atrás del brazo o pierna, sin necesidad de dar vueltas completas", "Es de plástico inflable con aire", "No necesita agua para endurecerse"],
    "c": 0,
    "e": "¡Cabal! La férula solo cubre una mitad del miembro para inmovilizar sin apretar por completo. Es perfecta para emergencias donde el brazo está muy inflamado y un yeso cerrado cortaría la circulación.",
    "curioso": "Los traumatólogos la aseguran enrollando una venda elástica por fuera, lo que permite aflojar el vendaje si la extremidad se hincha más con las horas."
  },
  {
    "cat": "Insumos",
    "p": "Si vendemos un 'Catéter Intravenoso Tipo Mariposa' (o Scalp / Alita), ¿qué características físicas definen a este producto de despacho?",
    "o": ["Es una aguja de metal fija unida a una manguera transparente corta y dos alas plásticas flexibles para agarrar y fijar con facilidad", "Un catéter que deja un tubo de plástico largo adentro de la vena", "Una jeringa sin marcas de graduación"],
    "c": 0,
    "e": "¡Perfecto! Las mariposas son de metal entero. Se usan mucho para extracciones de sangre difíciles en niños o para inyecciones rápidas de medicamentos intravenosos en clínicas.",
    "curioso": "Como la aguja de metal se queda fija dentro de la vena, no se recomienda dejarla puesta si el paciente se va a mover mucho, ya que podría romper el vaso sanguíneo."
  },
  {
    "cat": "Insumos",
    "p": "Nos solicitan una 'Mascarilla de Oxígeno de Alta Concentración' (con Bolsa de Reservorio). ¿Cuál es la función de esa bolsa plástica inflable que trae abajo?",
    "o": ["Almacenar oxígeno puro al 100% para que el paciente respire una cantidad masiva de gas en cada inhalación, ideal en emergencias críticas", "Es para recolectar la saliva del paciente", "Sirve de contrapeso para que la mascarilla no se caiga"],
    "c": 0,
    "e": "¡Cabal! A diferencia de la mascarilla simple, el reservorio se llena de oxígeno de forma continua. Cuando el paciente jala aire, recibe casi puro oxígeno del tanque, subiendo los niveles en sangre de golpe.",
    "curioso": "Trae unas válvulas de hule unidireccionales que bloquean el aire de la habitación para que el paciente no diluya el gas médico puro."
  },
  {
    "cat": "Equipos",
    "p": "Un cliente compra un 'Nebulizador de Compresor' (Pistón). ¿Qué hace mecánicamente este aparato médico en casa?",
    "o": ["Mide la temperatura por el oído", "Lanza un chorro de aire a alta presión que transforma los medicamentos líquidos en una nube de vapor fino para que el paciente los respire directo a los pulmones", "Extrae sangre de forma automática"],
    "c": 1,
    "e": "¡Exacto! El nebulizador es vital para pacientes con asma, covid o bronquitis. Convierte el líquido salino y las ampolletas de broncodilatador en un rocío respirable que abre los bronquios tapados.",
    "curioso": "El tamaño de la microgota de vapor debe ser menor a 5 micras para que tenga éxito de bajar hasta el fondo de los alvéolos pulmonares."
  },
  {
    "cat": "Catéteres",
    "p": "Un doctor pide un 'Catéter Venoso Central' de Doble o Triple Lumen. ¿Hacia dónde va colocada esta guía y cuál es su gran ventaja?",
    "o": ["Se coloca en las venas grandes del cuello o tórax (Yugular o Subclavia) y llega directo al corazón para pasar tratamientos pesados por meses", "Se pone en el dedo del pie", "Es una aguja dental larga"],
    "c": 0,
    "e": "¡Cabal! Es un catéter premium. Al tener varios canales (lúmenes) independientes por dentro, permite pasar nutrición, medicamentos para la presión y sacar muestras de sangre a la vez sin que se mezclen.",
    "curioso": "Esta instalación es un procedimiento quirúrgico estricto que realiza el médico especialista usando campos estériles y suturas para fijarlo a la piel."
  },
  {
    "cat": "Suturas",
    "p": "Nos piden un hilo de sutura de 'Polipropileno' (o Prolene) de calibre 4-0 con aguja curva. ¿Cuál es el uso estrella de este plástico médico?",
    "o": ["Coser huesos rotos de las rodillas", "Cirugías cardiovasculares, hernias y suturas de piel fina, debido a que es ultra liso, no causa fricción y es eterno", "Hacer vendajes de compresión húmedos"],
    "c": 1,
    "e": "¡Exacto! El polipropileno es un polímero sintético sumamente inerte. Es el consentido de los cirujanos plásticos y cardiovasculares porque se desliza como seda y el cuerpo no reacciona contra él.",
    "curioso": "Su color azul eléctrico característico permite al médico identificarlo con total claridad al momento de operar bajo las luces potentes del quirófano."
  },
  {
    "cat": "Sondas",
    "p": "Un cliente nos pide una 'Sonda Sengstaken-Blakemore'. ¿Para qué tipo de emergencia extrema está diseñado este producto especializado de tres vías?",
    "o": ["Para alimentar bebés prematuros", "Para frenar hemorragias masivas en el esófago y estómago inflando balones internos que hacen presión sobre las venas rotas (várices esofágicas)", "Para aspirar cera de los oídos de forma neumática"],
    "c": 1,
    "e": "¡Perfecto! Es una sonda de salvamento crítico en gastroenterología. Al inflar sus balones de hule grandes por dentro, aplasta las varices sangrantes contra las paredes deteniendo el sangrado a presión.",
    "curioso": "Es un insumo de alta complejidad que solo manejan especialistas en las terapias intensivas de los hospitales grandes."
  },
  {
    "cat": "Laboratorio",
    "p": "Viene un laboratorista buscando un 'Tubo con Tapa Verde'. ¿Qué aditivo trae adentro y para qué pruebas especiales se utiliza?",
    "o": ["Contiene Heparina de Litio o Sodio y se usa para bioquímicas de urgencia y pruebas de gases en plasma", "Contiene agua oxigenada para desinfectar las células", "Es un tubo seco sin ningún componente interno"],
    "c": 0,
    "e": "¡Cabal! La heparina es un anticoagulante natural que frena la cascada de coagulación de inmediato. Permite al laboratorio obtener plasma limpio rápido tras centrifugar sin esperar a que la sangre se seque.",
    "curioso": "Es el tubo preferido en los laboratorios de cuidados intensivos donde necesitan resultados de electrolitos y enzimas en cuestión de 15 minutos."
  },
  {
    "cat": "Vendas",
    "p": "Nos solicitan una 'Venda de Red Elástica' (o malla tubular). ¿En qué parte del cuerpo o situación se utiliza este producto innovador?",
    "o": ["Para fijar apósitos en zonas difíciles como la cabeza, hombros o muñones sin necesidad de usar cintas adhesivas que arranquen la piel", "Para amarrar cajas de cartón en la bodega", "Para hacer yesos rígidos de colores"],
    "c": 0,
    "e": "¡Exacto! Parece una malla de pescar elástica. Se estira y se coloca encima de la cabeza o el pecho manteniendo las gasas de la curación perfectamente firmes y cómodas para el paciente.",
    "curioso": "Ahorra muchísimo tiempo en enfermería y evita el uso de pegamentos dolorosos en pacientes con quemaduras extensas o pieles de cristal."
  },
  {
    "cat": "Insumos",
    "p": "Un cliente pide una 'Jeringa Asepto' (o de bulbo). ¿Cuál es su forma física y cuál es su principal mercado de uso?",
    "o": ["Es una jeringa plástica grande con una escala de microgramos fina", "Es una jeringa que trae un bulbo de hule o pera en la base y un conector cónico largo, usada para lavados de heridas, oídos o aspiración de secreciones", "Una jeringa dental con agujas laterales"],
    "c": 1,
    "e": "¡Cabal! La jeringa Asepto funciona por vacío manual al aplastar la pera de hule. Permite succionar suero estéril e irrigar heridas grandes para limpiarlas de restos mecánicos o suciedad.",
    "curioso": "Es un insumo básico en las bandejas de cirugía menor y en los kits de lavado de oídos para retirar tapones de cerumen compactos."
  },
  {
    "cat": "Insumos",
    "p": "Nos piden 'Esparadrapo de Papel o Microporo'. ¿Cuál es el perfil del paciente ideal para este adhesivo de despacho diario?",
    "o": ["Pacientes con pieles sensibles, ancianos, niños o zonas de la cara donde se requiere un retiro suave e hipoalergénico que no deje marcas", "Únicamente para pegar carteles informativos en las paredes de las clínicas", "Para tracciones óseas de alta resistencia"],
    "c": 0,
    "e": "¡Exacto! El microporo es el rey de la delicadeza. Deja pasar el aire y el vapor de la piel, evitando que la zona se humedezca y se rompa al retirar la cinta cada mañana.",
    "curioso": "Aunque es suave, mantiene una excelente fijación en pieles secas y limpias, siendo el insumo más vendido para el cuidado post-operatorio en casa."
  },
  {
    "cat": "Equipos",
    "p": "Un cliente compra un 'Glucómetro Portátil de Sangre'. ¿Qué insumo consumible obligatorio requiere este aparato para poder dar la lectura del azúcar?",
    "o": ["Rollos de papel térmico para impresión", "Tiras reactivas específicas para la marca del glucómetro, las cuales absorben la gota de sangre por capilaridad", "Líquido limpiador de lentes ópticos"],
    "c": 1,
    "e": "¡Cabal! El glucómetro es inservible sin sus tiras reactivas. Cada tira contiene una enzima química que reacciona con la glucosa de la sangre generando una micro-corriente eléctrica que la máquina traduce en un número.",
    "curioso": "Las tiras reactivas le temen a la humedad del ambiente. Si dejas el frasco abierto, el aire arruina la enzima y la máquina empezará a tirar códigos de error."
  },
  {
    "cat": "Catéteres",
    "p": "Nos piden un 'Catéter No. 14 (Naranja)'. ¿Qué tamaño representa en la escala médica internacional de catéteres periféricos?",
    "o": ["Es el diámetro más grueso disponible en el mercado, diseñado para reanimación extrema en traumas con pérdidas masivas de sangre", "Es el catéter más fino usado en prematuros", "Es una guía flexible larga para la nariz"],
    "c": 0,
    "e": "¡Exacto! El No. 14 naranja es un verdadero cañón. Su aguja y teflón son sumamente anchos, permitiendo meter sueros a chorros violentos en pacientes con hemorragias mortales.",
    "curioso": "Meter este catéter requiere venas gigantescas y médicos con mucha experiencia, ya que el pinchazo es grande y puede romper venas normales delgadas."
  },
  {
    "cat": "Suturas",
    "p": "Un cirujano solicita una sutura de 'PDS' (Polidioxanona). ¿Cuál es la propiedad premium de este producto absorbible sintético?",
    "o": ["Que se disuelve en 24 horas exactas", "Que es una sutura absorbible de larga duración, manteniendo la fuerza de amarre por más de 6 semanas, ideal para tejidos que sanan lento como tendones o fascias", "Que está hecha de oro puro"],
    "c": 1,
    "e": "¡Cabal! Mientras que el Vycril se absorbe rápido, el PDS aguanta el tirón durante meses. Es ideal para coser las capas más duras del abdomen que van a sufrir tensión por la tos o movimientos del paciente.",
    "curioso": "Viene en formato monofilamento, lo que significa que a pesar de ser fuerte, pasa a través de los órganos internos con una suavidad espectacular sin rasgar."
  },
  {
    "cat": "Sondas",
    "p": "Viene un cliente y nos pide una 'Sonda de Alimentación Enteral con Guía Metálica' (Tipo Nutritube). ¿Por qué trae ese alambre de metal por dentro?",
    "o": ["Para derretir la comida con calor por corriente", "Para darle rigidez temporal al tubo de poliuretano ultra suave mientras el doctor la introduce por la nariz, retirando el alambre una vez colocada", "Para amarrarla a la oreja del paciente"],
    "c": 1,
    "e": "¡Exacto! Estas sondas de larga duración son tan suaves y flexibles como un fideo cocido para no lastimar al paciente por meses. Sin la guía metálica interna (estilete), sería imposible empujarla por la garganta.",
    "curioso": "Una vez que la sonda llega al intestino o estómago, el médico saca el alambre con cuidado y la sonda queda lista para pasar las fórmulas líquidas nutritivas."
  },
  {
    "cat": "Laboratorio",
    "p": "Si un cliente te pide un 'Frasco de Recolección de Orina Estéril', ¿cuál es el detalle de empaque que garantiza que el producto está apto para un cultivo?",
    "o": ["Que venga sellado individualmente en una bolsa de plástico de fábrica y que traiga etiqueta para datos de control", "Que sea de vidrio transparente pesado", "Que traiga agua destilada adentro para lavar"],
    "c": 0,
    "e": "¡Cabal! Si el frasco viene suelto o destapado, pierde la esterilidad de inmediato por el polvo del aire. El empaque sellado le asegura al laboratorio que cualquier bacteria que crezca viene de la orina del paciente y no del frasco.",
    "curioso": "Muchos modelos premium traen una tapa con un puerto de aguja oculto al vacío para succionar la orina directo al tubo sin destapar el frasco, evitando accidentes."
  },
  {
    "cat": "Insumos",
    "p": "Un cliente nos pide un 'Equipo de Venoclisis con Normogotero'. ¿Cuántas gotas de este equipo estándar hacen 1 mililitro de líquido?",
    "o": ["Exactamente 20 gotas estándar", "60 microgotas finas", "Cinco gotas pesadas"],
    "c": 0,
    "e": "¡Cabal! El normogotero es el equipo de batalla para adultos. Su calibración internacional dicta que 20 gotas de suero limpio equivalen a 1 ml de volumen pasados por la manguera.",
    "curioso": "Conocer este número (20) es la base de la famosa 'Fórmula de goteo' que usan las enfermeras para calcular a cuántas gotas por minuto deben programar el suero manual."
  },
  {
    "cat": "Insumos",
    "p": "Nos solicitan un 'Filtro HME' (o Nariz Artificial) para un paciente con traqueostomía. ¿Qué función vital cumple este insumo plástico?",
    "o": ["Filtra el agua del suero intravenoso", "Retiene el calor y la humedad del aire que el paciente exhala y se la devuelve al inhalar, imitando la función natural de la nariz para proteger los pulmones", "Sirve para bloquear la voz del paciente"],
    "c": 1,
    "e": "¡Exacto! Al respirar directo por un tubo en el cuello, el paciente pierde el filtro natural de la nariz. El filtro HME atrapa la humedad para que los pulmones no se sequen ni se llenen de moco duro.",
    "curioso": "También actúan como una barrera bacteriana de alta eficiencia, impidiendo que los gérmenes flotantes del hospital entren directo a la tráquea abierta."
  },
  {
    "cat": "Equipos",
    "p": "Viene un médico buscando un 'Termómetro de Infrarrojos Clínico'. ¿Cuál es el error común que comete el personal al medir la temperatura con este aparato en la frente?",
    "o": ["Medir a una distancia muy lejana (más de 5cm) o medir encima de sudor o cabello, lo que tira lecturas falsas muy bajas", "Pegar el sensor directo contra la piel humedecida", "Esperar 5 minutos a que la aguja suba"],
    "c": 0,
    "e": "¡Perfecto! Estos termómetros ópticos captan la radiación térmica de la piel. Si hay sudor (que enfría la piel) o mides desde muy lejos, captas la temperatura del aire ambiental dando lecturas erróneas.",
    "curioso": "Fueron los reyes absolutos durante la pandemia y la distancia ideal de disparo de fábrica suele ser de 3 a 5 centímetros sobre el centro de la frente limpia."
  },
  {
    "cat": "Catéteres",
    "p": "Un cliente nos pide un 'Catéter No. 16 (Gris)'. ¿En qué área hospitalaria vas a ver rotar este calibre tan grueso?",
    "o": ["En clínicas estéticas para bótox", "En las salas de operaciones de cirugía mayor, trauma shock y ambulancias de alta gama para pasar fluidos masivos", "Únicamente en consultas externas dentales"],
    "c": 1,
    "e": "¡Cabal! El 16 gris es el segundo más grueso de la familia periférica. Es un insumo crítico de quirófano que permite bombear fluidos estables o sangre densa a velocidades súper rápidas.",
    "curioso": "Al igual que el 14, por su grosor se prefiere canalizar en venas grandes del pliegue del brazo para evitar que la presión rompa la estructura del vaso."
  },
  {
    "cat": "Suturas",
    "p": "Nos piden una sutura de 'Grapas Quirúrgicas Descartables' (Engrapadora de Piel). ¿Cuál es su principal ventaja competitiva frente al hilo tradicional?",
    "o": ["Que permite cerrar heridas largas de la piel en cuestión de segundos con una velocidad y simetría perfectas, ahorrando tiempo valioso en quirófano", "Que las grapas se disuelven solas en el agua", "Que no causan ningún tipo de dolor al colocarse"],
    "c": 0,
    "e": "¡Exacto! Cerrar una herida de cesárea o una cirugía de pierna larga con hilo puede tomar 15 minutos; con la engrapadora quirúrgica toma 30 segundos. Tiempo ahorrado en quirófano es vida para el paciente.",
    "curioso": "Para retirarlas una semana después, se utiliza un insumo médico manual llamado 'Extractor de Grapas' que las dobla al centro sacándolas sin romper la piel sana."
  },
  {
    "cat": "Sondas",
    "p": "Un cliente compra una 'Sonda Foley de Tres Vías'. ¿Para qué sirve esa tercera vía o canal adicional que no trae la sonda común de dos vías?",
    "o": ["Para meter aire continuo al cuerpo", "Para conectar un sistema de irrigación continua que mete suero limpio a la vejiga para lavar la sangre y evitar que se formen coágulos post-cirugía", "Es un canal de reserva por si se tapa la sonda"],
    "c": 1,
    "e": "¡Cabal! La sonda Foley de 3 vías es la reina de la urología. Una vía infla el balón, otra drena la orina y la tercera mete suero continuo para mantener limpia la vejiga tras operaciones de próstata.",
    "curioso": "El enfermero calibra el flujo de suero para que la orina que sale por la bolsa recolectora se mantenga de un color rosa claro transparente, indicando que no hay tapones."
  },
  {
    "cat": "Laboratorio",
    "p": "Nos piden un 'Tubo con Tapa Gris'. ¿Qué aditivos químicos trae adentro y para qué examen exacto es el único solicitado?",
    "o": ["Contiene Oxalato de Potasio y Fluoruro de Sodio, y sirve exclusivamente para medir los niveles de Glucosa con máxima estabilidad", "Contiene alcohol destilado para hematología", "Trae geles de separación grasos gruesos"],
    "c": 0,
    "e": "¡Exacto! El fluoruro de sodio es un inhibidor de la glucólisis. Detiene a las células de la sangre para que no se sigan comiendo el azúcar dentro del tubo mientras la muestra viaja al laboratorio.",
    "curioso": "Garantiza que el resultado de azúcar en sangre sea exacto aunque la muestra pase guardada varias horas antes de ser procesada por el bioquímico."
  },
  {
    "cat": "Equipos",
    "p": "¿Qué es un 'Esfigmomanómetro' en el ámbito médico y cuál es su función principal?",
    "o": ["Un termómetro digital para medir la fiebre en el oído", "El aparato completo para medir la presión arterial (tensiómetro) que incluye el brazalete, la manguera y el manómetro", "Un monitor de ritmo cardíaco para atletas de alto rendimiento"],
    "c": 1,
    "e": "¡Exacto! Aunque el nombre asuste y parezca un trabalenguas, el esfigmomanómetro es el famosísimo tensiómetro de toda la vida. Es el equipo rey para detectar la hipertensión en cualquier consulta médica.",
    "curioso": "La palabra viene del griego 'sphygmos' (pulso) y 'manometer' (medidor de presión). ¡Un dato técnico muy útil para el equipo!"
  },
  {
    "cat": "Equipos",
    "p": "¿Qué función vital cumple un 'Termohigrómetro' en un área de almacenamiento de medicamentos?",
    "o": ["Mide al mismo tiempo la temperatura y la humedad del ambiente para asegurar que los productos no se arruinen", "Sirve para pesar con precisión milimétrica los polvos medicinales", "Es un tipo de cronómetro que mide el tiempo que un suero tarda en bajar"],
    "c": 0,
    "e": "¡Cabal, diste en el clavo! Las normativas de salud exigen que los medicamentos se guarden a cierta temperatura y humedad para que no pierdan su efecto. El termohigrómetro es el encargado de vigilar que el ambiente no se ponga muy caliente ni muy húmedo.",
    "curioso": "La mayoría de estos aparatos guardan en su memoria histórica la temperatura máxima y mínima del día, ideal para cuando se realizan auditorías de sanidad."
  },
  {
    "cat": "Equipos",
    "p": "Un estetoscopio de doble campana es una herramienta estándar en medicina. ¿Cuál es la ventaja de que tenga este diseño físico?",
    "o": ["Permite escuchar el corazón de dos pacientes al mismo tiempo", "La campana grande es para escuchar sonidos de alta frecuencia (como el corazón de adultos) y la pequeña para frecuencias bajas (como pulmones o niños)", "Una campana funciona de forma digital y la otra es 100% analógica"],
    "c": 1,
    "e": "¡Esa es! Al girar la cabeza del estetoscopio, el médico activa el lado que necesita. El lado grande (diafragma) capta los latidos normales y el lado pequeño (campana) es perfecto para escuchar soplos o ruidos finos en niños o pacientes delgados.",
    "curioso": "El estetoscopio fue inventado en Francia porque a un médico le daba mucha vergüenza pegar su oreja directamente al pecho de las mujeres para escucharlas."
  },
  {
    "cat": "Inyectables",
    "p": "¿A qué se refiere exactamente el término 'Hipodérmico' al hablar de agujas de uso médico?",
    "o": ["Que la aguja solo se puede usar en cirugías de corazón abierto", "Que está diseñada para atravesar la piel y aplicar medicamentos o extraer fluidos del tejido interno", "Que la aguja se disuelve sola dentro del cuerpo del paciente después de unos minutos"],
    "c": 1,
    "e": "¡Cabal! 'Hipo' significa debajo y 'dermis' significa piel. Son las agujas tradicionales que se adaptan a las jeringas para inyectar directo al músculo o a la vena de forma rápida y segura.",
    "curioso": "El grosor de estas agujas se mide en Gauges (G). Entre más alto es el número (como una 27G), más delgadita es la aguja y menos le duele al paciente."
  },
  {
    "cat": "Insumos",
    "p": "¿Cuál es el diseño y uso correcto del denominado 'Algodón Dental' en comparación con el algodón hospitalario común?",
    "o": ["Sirve para limpiar las camillas después de una curación", "Está diseñado en rollos cilíndricos compactos para absorber la saliva y aislar la zona dentro de la boca durante un tratamiento dental", "Es un algodón especial que se usa para fabricar pañales desechables"],
    "c": 1,
    "e": "¡Exacto! El algodón dental viene pre-cortado en cilindros rígidos que no sueltan pelusa. Los dentistas los acomodan en los cachetes o debajo de la lengua del paciente para mantener el diente seco mientras trabajan.",
    "curioso": "A diferencia del algodón común en libra que se desarma al mojarse, el algodón dental mantiene su forma de tubito incluso cuando está totalmente saturado de saliva."
  },
  {
    "cat": "Insumos",
    "p": "Al hablar de una libra de algodón hospitalario, ¿por qué es técnicamente importante que esté etiquetado como '100% puro e hidrófilo'?",
    "o": ["Refleja que contiene fibras sintéticas que podrían causar estática y quemar la piel", "Porque pasó por un proceso de desengrasado y purificación que le permite retener líquidos y desinfectar heridas sin causar alergias", "Porque cambia de color cuando entra en contacto con el alcohol medicinal"],
    "c": 1,
    "e": "¡Nítido! El algodón en su estado natural trae aceites y ceras de la planta que repelen el agua. Para uso médico se procesa para dejarlo totalmente puro e hidrófilo (que ama el agua), haciéndolo súper absorbente para curaciones.",
    "curioso": "Aunque viene limpio de fábrica, el algodón común en libra NO es estéril. Por eso no debe tocar directamente heridas abiertas profundas si no se esteriliza antes."
  },
  {
    "cat": "Laboratorio",
    "p": "¿Por qué las Pipetas Automáticas de laboratorio requieren obligatoriamente el uso de 'Puntas de Pipeta' desechables de plástico?",
    "o": ["Para evitar la contaminación cruzada entre muestras, ya que el líquido nunca toca el cuerpo de la pipeta, solo la punta plástica", "Porque la pipeta automática no tiene fuerza y la punta de plástico sirve para romper los frascos de vidrio", "Porque las puntas de plástico contienen reactivos químicos que cambian el color de la sangre"],
    "c": 0,
    "e": "¡Esa es! La pipeta automática es un equipo caro y de alta precisión que aspira por aire. Si usaras la pipeta directo en los líquidos, se arruinaría el pistón por dentro y contaminarías todas las pruebas del laboratorio.",
    "curioso": "Las puntas vienen codificadas por colores estándar: las amarillas suelen ser para volúmenes medianos (hasta 200 microlitros) y las azules para volúmenes grandes (hasta 1000 microlitros)."
  },
  {
    "cat": "Laboratorio",
    "p": "¿Cuál es la principal ventaja operativa de una Pipeta Automática frente a las pipetas de vidrio tradicionales?",
    "o": ["Que puede succionar hasta 10 litros de líquido de un solo golpe", "Que mide y dosifica volúmenes microscópicos (microlitros) de forma exacta y repetitiva con solo presionar un botón", "Que calienta los líquidos automáticamente mientras los traslada"],
    "c": 1,
    "e": "¡Cabal! Con una pipeta tradicional de vidrio tenías que andar midiendo al ojo o usando bulbos de hule. La pipeta automática tiene un sistema calibrado por resortes internos que saca la cantidad exacta de líquido una y otra vez sin margen de error humano.",
    "curioso": "Hay pipetas automáticas llamadas 'multipropósito' o multicanal que tienen hasta 8 o 12 puntas a la vez, ideales para llenar placas de laboratorio a toda velocidad."
  },
  {
    "cat": "Suturas",
    "p": "¿Cuál es la función principal de un 'Clamp Umbilical' en los primeros minutos de vida de un recién nacido?",
    "o": ["Se usa para limpiar la nariz y las orejas del recién nacido", "Es una pinza plástica con dientes de seguridad que prensa el cordón umbilical para cortar la circulación y evitar que el bebé sufra una hemorragia", "Sirve para sujetar la tarjeta de identificación en el pie del bebé"],
    "c": 1,
    "e": "¡Exacto! Al nacer el bebé, el cordón umbilical todavía tiene arterias y venas latiendo con sangre. El clamp es una pinza súper fuerte que se cierra a presión, bloqueando el paso de sangre para que el médico pueda cortar el cordón de forma segura.",
    "curioso": "Este clamp se queda puesto en el ombligo del bebé durante unos días hasta que el pedacito de cordón se seca por completo y se cae solo."
  },
  {
    "cat": "Vendas",
    "p": "¿Para qué se utiliza la denominada 'Venda de Guata' de algodón en el área de traumatología?",
    "o": ["Es la capa acolchada que se coloca directamente sobre la piel antes de poner una venda de yeso o fibra de vidrio para proteger los huesos y la piel de quemaduras o roces", "Es una venda adhesiva que se usa para tapar los ojos en cirugías", "Se usa para amarrar las camillas de transporte y evitar que el paciente se mueva"],
    "c": 0,
    "e": "¡Cabal, diste en el clavo! El yeso médico al secarse se calienta un tazón y se vuelve una piedra rígida que puede romper la piel. La guata funciona como un colchón suave y protector que absorbe el sudor y evita que el yeso lastime al paciente.",
    "curioso": "La guata médica está procesada para que no retenga humedad excesiva, evitando que se formen hongos o malos olores debajo del yeso pesado."
  },
  {
    "cat": "Vendas",
    "p": "¿Cuál es el uso clínico principal de una Venda Elástica de alta compresión en comparación con una venda de gasa simple?",
    "o": ["Sirve únicamente para sostener apósitos llenos de pomada", "Para dar soporte firme a articulaciones lesionadas (esguinces) y comprimir los vasos sanguíneos para reducir la inflamación", "Se usa para tapar heridas abiertas que están sangrando activamente en el quirófano"],
    "c": 1,
    "e": "¡Exactamente! La venda elástica estira y aprieta de forma controlada. Al envolver un tobillo torcido, ayuda a mantener los ligamentos en su lugar y hace presión externa para que el pie no se hinche como pelota.",
    "curioso": "Nunca se debe dejar una venda elástica ultra apretada para dormir, ya que podría cortar la circulación por completo y causar problemas graves en los dedos."
  },
  {
    "cat": "Curación",
    "p": "¿Por qué la gasa de algodón es el material preferido en medicina para realizar cirugías y limpiar heridas abiertas?",
    "o": ["Porque su estructura tejida y abierta permite absorber grandes cantidades de fluidos y retener coágulos de sangre sin desarmarse", "Porque tiene un químico especial que duerme el dolor de la carne viva", "Porque es completamente impermeable y no deja pasar ningún líquido"],
    "c": 0,
    "e": "¡Esa es! La gasa está hecha de hilos de algodón cruzados formando una malla. Esa estructura es perfecta para atrapar la sangre y los líquidos de las heridas mediante capilaridad, manteniendo limpia la zona de la cirugía.",
    "curioso": "Muchas de las gasas que se usan dentro de operaciones quirúrgicas traen un hilo azul especial que se puede ver en las máquinas de Rayos X, por si al cirujano se le olvida una adentro."
  },
  {
    "cat": "Cirugía",
    "p": "¿Cuál es la principal ventaja de usar un 'Bisturí Desechable' con mango de plástico frente a las hojas de bisturí tradicionales?",
    "o": ["Que el plástico corta mejor la piel que el metal común", "Que viene la hoja integrada al mango lista para usarse y se descarta completo, reduciendo el riesgo de que el personal se corte al cambiar la hoja de metal manualmente", "Que el bisturí desechable se puede afilar con una piedra común en medio de la cirugía"],
    "c": 1,
    "e": "¡Exacto! Cambiar una hoja de bisturí de metal en un mango de acero requiere usar pinzas y mucha precisión; si se zafa, hay riesgo de corte por accidente. El bisturí desechable viene armado en una sola pieza estéril de fábrica: se usa y va directo al bote de punzocortantes.",
    "curioso": "El filo de un bisturí médico es tan extremo que corta las células de la piel de forma limpia, lo que ayuda a que la herida sane más rápido y con menos dolor que un corte común."
  },
  {
    "cat": "Equipos",
    "p": "El 'Atril' de dos o cuatro ganchos es un equipo metálico estándar en las clínicas. ¿Cuál es su función técnica?",
    "o": ["Sirve para colgar la ropa y los sacos de los médicos en el consultorio", "Es el soporte vertical diseñado para colgar las bolsas de suero o soluciones intravenosas y que bajen por pura gravedad hacia el paciente", "Es una base para colocar los monitores de computadoras en la recepción"],
    "c": 1,
    "e": "¡Cabal! El atril (o porta suero) mantiene las soluciones elevadas por encima del brazo del paciente. Al estar alto, la presión de la gravedad empuja el líquido hacia abajo a través del tubo del venoclisis de forma continua.",
    "curioso": "La mayoría de atriles hospitalarios traen rodos y bases pesadas de cinco patas para que el paciente pueda caminar e ir al baño arrastrando su suero sin que se le dé vuelta el poste."
  },
  {
    "cat": "Equipos",
    "p": "¿Cuál es la característica clave que diferencia a una 'Camilla de Transporte' hospitalaria de una cama de internamiento convencional?",
    "o": ["Que está hecha de plástico inflable para emergencias en el agua", "Que es más angosta, ligera, con parachoques laterales y rodos grandes con freno rápido para mover pacientes a toda velocidad por los pasillos", "Que no tiene colchón porque los pacientes de traslado deben viajar completamente rígidos"],
    "c": 1,
    "e": "¡Exactamente! Una camilla de transporte es el bólido del hospital. Está diseñada para pasar por puertas estrechas, entrar a los ascensores rozando las paredes (gracias a sus hules de choque) y frenar en seco en emergencias.",
    "curioso": "Estas camillas traen sistemas hidráulicos de pedal que permiten subirlas, bajarlas o inclinarlas (posición Trendelenburg) en segundos con solo un zapatazo del enfermero."
  },
  {
    "cat": "Insumos",
    "p": "Nos piden una 'Bolsa de Colostomía'. ¿Qué función cumple este insumo médico y dónde se adhiere en el cuerpo del paciente?",
    "o": ["Se pega en la cabeza para recolectar fluidos nasales", "Se adhiere al abdomen del paciente alrededor de un estoma (apertura del intestino) para recolectar las heces fecales de forma segura y sin olor", "Se conecta a las venas del brazo con un catéter"],
    "c": 1,
    "e": "¡Exacto! Cuando a un paciente le operan el colon o intestino y no puede evacuar de forma normal, los cirujanos desvían el intestino hacia la piel del abdomen. La bolsa recolecta todo de forma limpia y hermética.",
    "curioso": "Nuestras bolsas de colostomía traen barreras protectoras de hidrocoloide que cuidan la piel del abdomen contra los ácidos de las heces y filtros de carbón activado para neutralizar los gases."
  },
  {
    "cat": "Insumos",
    "p": "Un cliente solicita un 'Conector de Suero Tipo Clave' (o Conector Libre de Aguja). ¿Cuál es el beneficio de este accesorio plástico en la seguridad hospitalaria?",
    "o": ["Permite inyectar medicamentos a la manguera del suero a presión usando una jeringa sin aguja, eliminando el riesgo de que la enfermera se pinche por accidente", "Sirve para enfriar el suero líquido", "Es un tapón de madera rústico"],
    "c": 0,
    "e": "¡Cabal! Antes se pinchaban las mangueras con agujas desnudas para meter medicinas, rompiendo el plástico y causando pinchazos accidentales. El sistema libre de aguja sella por presión de forma estéril.",
    "curioso": "Al retirar la jeringa, el conector se cierra solo mecánicamente bloqueando la salida de sangre o suero de forma automática."
  },
  {
    "cat": "Equipos",
    "p": "Nos compran un 'Incentivador Respiratorio' (o Espirómetro de Incentivo de tres bolitas). ¿Para qué sirve este aparato mecánico de plástico?",
    "o": ["Para medir la presión del corazón", "Para hacer ejercicios de inhalación profunda obligando al paciente post-operado a expandir sus pulmones y evitar neumonías por estar acostado", "Para entrenar la fuerza de los dedos"],
    "c": 1,
    "e": "¡Exacto! Al jalar aire con fuerza por la manguera, el paciente debe levantar las tres bolitas de plástico y mantenerlas flotando. Esto abre los alvéolos pulmonares cerrados tras la anestesia general.",
    "curioso": "Es el insumo estándar obligatorio de terapia respiratoria para todo paciente que sale de una cirugía de tórax o abdomen alto."
  },
  {
    "cat": "Catéteres",
    "p": "Un cliente busca un 'Catéter Intravenoso No. 20 con Sistema de Seguridad'. ¿Qué hace este mecanismo especial tras realizar el pinchazo en la vena?",
    "o": ["Retira la aguja de metal y la encierra de forma automática dentro de un escudo de plástico rígido para que nadie se pinche al desecharlo", "Inyecta anestesia local en la piel sola", "Cambia el color del catéter de rosado a verde"],
    "c": 0,
    "e": "¡Cabal! Los catéteres modernos de seguridad protegen al personal de enfermería. Al sacar la guía metálica de la vena, el escudo salta y bloquea la punta con sangre reduciendo a cero los accidentes laborales.",
    "curioso": "Son insumos premium obligatorios por normas de bioseguridad en hospitales internacionales para frenar contagios de Hepatitis o VIH."
  },
  {
    "cat": "Suturas",
    "p": "Nos piden una sutura de 'Catgut Simple'. ¿Cuál es la diferencia principal en tiempo de absorción frente al Catgut Crómico?",
    "o": ["El Catgut Simple es digerido por el cuerpo de forma mucho más rápida (pierde fuerza en 5 a 7 días), usándose en tejidos de curación ultra veloz", "El simple dura un año entero sin deshacerse", "El simple está hecho de plástico rígido azul"],
    "c": 0,
    "e": "¡Perfecto! Al no tener el baño de sales de cromo, las enzimas del cuerpo se comen el colágeno del hilo simple en pocos días. Se usa mucho para coser mucosas internas de la boca o tejidos muy superficiales.",
    "curioso": "Vienen envasados en sobres que contienen una solución de alcohol y agua para mantener el hilo de colágeno hidratado, elástico y listo para usar."
  },
  {
    "cat": "Sondas",
    "p": "Un cliente nos pide una 'Sonda Rectal'. ¿Cuál es su forma de empaque y su principal aplicación en la rutina clínica?",
    "o": ["Es un tubo corto y flexible de plástico blando diseñado para introducirse en el recto para aliviar gases acumulados o aplicar enemas de limpieza", "Es una manguera gruesa para el cuello", "Se usa para medir la audición"],
    "c": 0,
    "e": "¡Exacto! La sonda rectal facilita la salida de aire atrapado en el colon de pacientes post-operados que sufren de distensión abdominal severa. Es un insumo básico de enfermería.",
    "curioso": "Su punta es redondeada y roma (atraumática) con orificios laterales grandes para permitir el paso libre de fluidos o gases sin lastimar la mucosa rectal."
  },
  {
    "cat": "Laboratorio",
    "p": "Si vendemos un 'Tubo de Vacío con Tapa Amarilla de Citrato Dextrosa (ACD)', ¿cuál es el mercado estrella de este tubo tan especializado?",
    "o": ["Bancos de sangre para pruebas de paternidad, compatibilidad de órganos y conservación de ADN celular", "Hacer exámenes de orina completa", "Medir los niveles de grasa en la orina"],
    "c": 0,
    "e": "¡Cabal! El aditivo ACD conserva los glóbulos rojos vivos y estables por semanas y protege la estructura de los ácidos nucleicos (ADN). Es un tubo premium de genética y alta especialidad.",
    "curioso": "Es el tubo que solicitan los laboratorios grandes cuando las muestras deben viajar en avión a otros países para análisis de códigos genéticos complejos."
  },
  {
    "cat": "Vendas",
    "p": "Un doctor nos pide 'Venda de Fibra de Vidrio' (Cinta de fundición sintética). ¿Qué ventaja radical tiene frente a la venda de yeso tradicional?",
    "o": ["Es muchísimo más ligera, resistente al agua, seca en minutos y es más dura que el yeso común, permitiendo moldes modernos y limpios", "Que es transparente como el vidrio de una ventana", "Que se estira como banda elástica de gimnasio"],
    "c": 0,
    "e": "¡Exacto! La fibra de vidrio revolucionó la traumatología. El molde pesa la mitad que uno de yeso, no se desborona con los días y si el paciente salpica agua por accidente, la férula sintética no se destruye.",
    "curioso": "Viene en rollos sellados al vacío ya que el material se activa y se endurece al entrar en contacto con la humedad del aire ambiental de forma automática."
  },
  {
    "cat": "Insumos",
    "p": "Nos piden un 'Gorro de Ducha Clínico para Lavado de Cabello sin Agua'. ¿Cómo funciona este producto premium de enfermería?",
    "o": ["Es un gorro impregnado con champú y acondicionador especial que se calienta en microondas, se coloca en el paciente encamado y limpia el cabello por masaje sin usar una gota de agua", "Es un casco de metal pesado para masajes", "Un gorro plástico común para no mojarse el pelo"],
    "c": 0,
    "e": "¡Cabal! Es una bendición para pacientes en cuidados intensivos o post-operados de columna que no pueden moverse de la cama. Limpia, desinfecta y refresca la cabeza en dos minutos sin mojar las sábanas.",
    "curioso": "No requiere enjuague; al retirar el gorro, el exceso de humedad se seca con una toalla limpia dejando el cabello impecable y con aroma fresco."
  },
  {
    "cat": "Insumos",
    "p": "Un cliente busca una 'Aguja Hipodérmica No. 21G x 1 1/2 (Verde)'. ¿Cuál es el uso rey de esta aguja en el despacho diario?",
    "o": ["Aplicación de inyecciones intramusculares en adultos para pasar analgésicos o antibióticos densos en el glúteo", "Pinchazos superficiales en la piel de la cara", "Extracción de líquido de los oídos de recién nacidos"],
    "c": 0,
    "e": "¡Exacto! La aguja verde es la estándar universal de batalla para el glúteo en adultos. Su longitud (1 1/2 pulgadas) garantiza que la punta pase la capa de grasa y deposite el medicamento en el fondo del músculo.",
    "curioso": "La letra 'G' viene de Gauge (Calibre). En las agujas, al revés de los sueros, cuanto menor es el número G, más gruesa es la aguja (ej. una 18G es un tubo grueso para cargar ampolletas)."
  },
  {
    "cat": "Insumos",
    "p": "Nos solicitan un 'Sello de Agua para Catéter' (o Tapón de Heparina / Tapón Amarillo). ¿Para qué sirve este pequeño accesorio plástico?",
    "o": ["Para cerrar el catéter venoso en el brazo del paciente manteniendo la vía lista para usar sin necesidad de tener conectada una manguera de suero larga", "Para medir la temperatura de la vena", "Para trancar las mangueras de oxígeno de los tanques"],
    "c": 0,
    "e": "¡Cabal! El tapón amarillo se enrosca en el catéter. Trae una membrana de hule al centro que permite a la enfermera inyectar ampolletas con una jeringa a cualquier hora y se sella sola al retirar la aguja.",
    "curioso": "Permite al paciente internado pararse al baño, caminar o cambiarse de ropa libremente sin estar encadenado al pedestal del suero."
  }
];
