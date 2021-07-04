const data = {
  CATEGORIAS: [
    {
      id: 'rrss',
      nombre: 'redes sociales y mensajería instantánea',
    },
    {
      id: 'pass',
      nombre: 'gestión de contraseñas',
    },
    {
      id: 'compras',
      nombre: 'compras online',
    },
    {
      id: 'fraudes',
      nombre: 'fraudes online',
    },
    {
      id: 'navegacion',
      nombre: 'navegación segura',
    },
    {
      id: 'dispositivos',
      nombre: 'protección de dispositivos',
    },
  ],
  PREGUNTAS: [
    {
      id: 1,
      categoria: 'pass',
      enunciado: '¿Qué se considera una contraseña robusta?',
      respuestas: [
        {
          respuesta: 'aquella con más de 5 caracteres',
          correcta: false,
        },
        {
          respuesta: 'aquella que tiene números, mayúsculas, minúsculas y caracteres especiales',
          correcta: true,
        },
        {
          respuesta: 'cualquiera, lo importante es poder recordarla',
          correcta: false,
        },
      ],
      aclaracion: 'una contraseña robusta será aquella que contenga una combinación de letras, números, mayúsculas, minúsculas y caracteres especiales.',
    },
    {
      id: 2,
      categoria: 'pass',
      enunciado: '¿Qué debes hacer si recibes un correo que dice que tu cuenta ha podido ser vulnerada y te pide renovar la contraseña a través de un enlace?',
      respuestas: [
        {
          respuesta: 'hago clic en el enlace y la cambio',
          correcta: false,
        },
        {
          respuesta: 'respondo al correo con mis credenciales preguntando si mi cuenta ha sido afectada',
          correcta: false,
        },
        {
          respuesta: 'no hago clic en el enlace y voy a mi navegador favorito',
          correcta: true,
        },
      ],
      aclaracion: 'para evitar ser víctimas de un fraude de tipo phising (suplantación de identidad de un servicio), lo más seguro es no hacer clic y teclear directamente la URL legítima del servicio desde el navegador.',
    },
    {
      id: 3,
      categoria: 'pass',
      enunciado: '¿Cada cuánto tiempo es recomendable cambiar tus contraseñas?',
      respuestas: [
        {
          respuesta: 'entre 3 y 6 meses',
          correcta: true,
        },
        {
          respuesta: 'entre 3 y 6 meses solo las del banco y correo',
          correcta: false,
        },
        {
          respuesta: 'no es necesario, a no ser que hayan sido vulneradas',
          correcta: false,
        },
      ],
      aclaracion: 'aunque depende de la criticidad de la cuenta, lo recomendable es hacer un cambio de contraseñas cada 3-6 meses.',
    },
    {
      id: 4,
      categoria: 'pass',
      enunciado: '¿Tiene riesgos utilizar siempre la misma contraseña?',
      respuestas: [
        {
          respuesta: 'no, los ciberdelincuentes no centras sus ataques en las contraseñas',
          correcta: false,
        },
        {
          respuesta: 'sí, si se compromete una, el resto de cuentas pueden ser hackeadas',
          correcta: true,
        },
        {
          respuesta: 'no, así no se me olvida',
          correcta: false,
        },
      ],
      aclaracion: 'utilizar una misma contraseña para varias cuentas es muy peligroso. Una vez que una cuenta sea vulnerada, el resto podrían estar en peligro por efecto dominó',
    },
    {
      id: 5,
      categoria: 'pass',
      enunciado: '¿Qué puede suceder si tienes una contraseña sencilla?',
      respuestas: [
        {
          respuesta: 'nada, así es más fácil recordarla',
          correcta: false,
        },
        {
          respuesta: 'nada crítico porque tengo antivirus instalado y, además, si alguien la adivina, no tengo nada que esconder',
          correcta: false,
        },
        {
          respuesta: 'De todo. Es como dejar una puesta abierta para que roben todos tus datos',
          correcta: true,
        },
      ],
      aclaracion: 'una contraseña simple y fácil no supone un reto para los ciberdelincuentes. Usando determinados software, podrían descifrarla en cuestión de segundos.',
    },
    {
      id: 6,
      categoria: 'pass',
      enunciado: '¿Cuál de las siguientes contraseñas consideras que es más segura?',
      respuestas: [
        {
          respuesta: '<say-as interpret-as="spell-out">10002943</say-as>',
          correcta: false,
        },
        {
          respuesta: '<say-as interpret-as="spell-out">R3p0ster1A!</say-as>',
          correcta: true,
        },
        {
          respuesta: '<say-as interpret-as="spell-out">123QWEasd</say-as>',
          correcta: false,
        },
      ],
      aclaracion: 'la contraseña es robusta, al incluir mayúsculas, minúsculas, números y caracteres especiales',
    },
    {
      id: 7,
      categoria: 'pass',
      enunciado: 'Lo mejor para gestionar correctamente tus contraseñas es',
      respuestas: [
        {
          respuesta: 'apuntarlas todas en una libreta y guardarla a buen recaudo',
          correcta: false,
        },
        {
          respuesta: 'utilizar una o dos contraseñas para todos nuestros servicios',
          correcta: false,
        },
        {
          respuesta: 'utilizar un gestor de contraseñas',
          correcta: true,
        },
      ],
      aclaracion: 'un gestor de contraseñas nos facilitará mucho el trabajo a la hora de crear contraseñas robustas, actualizarlas cada cierto tiempo y gestionar una gran cantidad de cuentas.',
    },
    {
      id: 8,
      categoria: 'pass',
      enunciado: 'El ciberataque que realiza combinaciones de letras para averiguar nuestras contraseñas se conoce como:',
      respuestas: [
        {
          respuesta: 'ataque por fuerza bruta',
          correcta: true,
        },
        {
          respuesta: 'spidering',
          correcta: false,
        },
        {
          respuesta: 'passwording',
          correcta: false,
        },
      ],
      aclaracion: 'los ataques por fuerza bruta permiten a los ciberdelincuentes obtener nuestras contraseñas a base de realizar cientos de combinaciones de letras y números con alguna máquina diseñada para tal fin.',
    },
    {
      id: 9,
      categoria: 'pass',
      enunciado: 'Si para acceder a tus cuentas, además de la contraseña necesitas introducir otro dato, como un código recibido a través de un SMS, hablamos de:',
      respuestas: [
        {
          respuesta: 'tokening',
          correcta: false,
        },
        {
          respuesta: 'verificación en dos pasos',
          correcta: true,
        },
        {
          respuesta: 'multipassword',
          correcta: false,
        },
      ],
      aclaracion: 'una capa extra para la seguridad de nuestras credenciales es la verificación en dos pasos. En este proceso, se requiere la utilización de otro elemento además de nuestra contraseña para validar el acceso a un servicio.',
    },
    {
      id: 10,
      categoria: 'pass',
      enunciado: 'de las siguientes opciones, ¿cuál es la mejor para comenzar a crear una contraseña segura?',
      respuestas: [
        {
          respuesta: 'una combinación larga de números',
          correcta: false,
        },
        {
          respuesta: 'una combinación larga de palabras y números',
          correcta: true,
        },
        {
          respuesta: 'una combinación de nuestra fecha de cumpleaños',
          correcta: false,
        },
      ],
      aclaracion: 'la mejor opción es recurrir a una frase o combinación larga de palabras y números, a la que ir aplicando otras como es alternar mayúsculas, minúsculas, números y caracteres especiales.',
    },
    {
      id: 11,
      categoria: 'compras',
      enunciado: 'estás cerrando la compra de un artículo a través de una plataforma de compraventa. El vendedor te pide realizar una transferencia a un banco extranjero. ¿Es una transacción segura?',
      respuestas: [
        {
          respuesta: 'sí, las transferencias son el método de pago más seguro',
          correcta: false,
        },
        {
          respuesta: 'sí, siempre y cuando que el vendedor me envíe pruebas de estar en posesión del artículo por WhatsApp',
          correcta: false,
        },
        {
          respuesta: 'no, si hubiese algún problema sería difícil recuperar mi dinero',
          correcta: true,
        },
      ],
      aclaracion: 'el principal problema de realizar una transferencia a un banco extranjero es que, en caso de resultar ser víctima de un fraude y querer recuperar nuestro dinero, sería complicado.',
    },
    {
      id: 12,
      categoria: 'compras',
      enunciado: '¿qué aspectos comprobarías de un sitio web para saber si es fiable?',
      respuestas: [
        {
          respuesta: 'condiciones de devolución y reembolso',
          correcta: true,
        },
        {
          respuesta: 'cantidad de ofertas y promociones',
          correcta: false,
        },
        {
          respuesta: 'número de visitas',
          correcta: false,
        },
      ],
      aclaracion: 'si la tienda online carece de un apartado para las condiciones de devolucion y reembolso, es sin duda una tienda online fraudulenta.',
    },
    {
      id: 13,
      categoria: 'compras',
      enunciado: '¿cómo podemos asegurarnos de que la tienda online vela por nuestra privacidad y la seguridad de nuestras comunicaciones?',
      respuestas: [
        {
          respuesta: 'dispone de un certificado digital y HTTPS',
          correcta: true,
        },
        {
          respuesta: 'dispone de un certificado digital y HTTP',
          correcta: false,
        },
        {
          respuesta: 'tiene muchos comentarios positivos',
          correcta: false,
        },
      ],
      aclaracion: 'el certificado digital y el protocolo HTTPS nos aseguran que todas las comunicaciones que hagamos dentro de la web estarán cifradas.',
    },
    {
      id: 14,
      categoria: 'compras',
      enunciado: 'encuentras una oferta en una tienda online pero esta no tiene apartado de términos y condiciones. Confiarías en ella?',
      respuestas: [
        {
          respuesta: 'sí, aunque solo en territorio nacional',
          correcta: false,
        },
        {
          respuesta: 'sí, si dispone de redes sociales',
          correcta: false,
        },
        {
          respuesta: 'no, nunca',
          correcta: true,
        },
      ],
      aclaracion: 'si una tienda online carece de un apartado de términos y condiciones, hay que desconfiar.',
    },
    {
      id: 15,
      categoria: 'compras',
      enunciado: 'has encontrado una oferta para un producto que andabas buscando. Parece que desde la web ofrecen varias formas de pago, pero en el último paso solo acepta tarjeta de crédito. Qué harías?',
      respuestas: [
        {
          respuesta: 'utilizar una tarjeta secundaria',
          correcta: false,
        },
        {
          respuesta: 'contactar con el vendedor',
          correcta: false,
        },
        {
          respuesta: 'descartar la compra',
          correcta: true,
        },
      ],
      aclaracion: 'en estos casos, lo mejor es descartar la compra. Puede que, utilizando una tarjeta solo para compras online, corramos menos riesgos pero quizás nunca lleguemos a recibir el producto. Ante la más mínima señal de fraude, lo más seguro es descartar la compra.',
    },
    {
      id: 16,
      categoria: 'compras',
      enunciado: '¿cuál de las siguientes recomendaciones nos asegura una compra online segura?',
      respuestas: [
        {
          respuesta: 'no comprar en época de rebajas',
          correcta: false,
        },
        {
          respuesta: 'utilizar una tarjeta solo para compras online',
          correcta: true,
        },
        {
          respuesta: 'utilizar solo las promociones que nos lleguen por email',
          correcta: false,
        },
      ],
      aclaracion: 'si utilizamos una tarjeta exclusivamente para nuestras compras online, en caso de sufrir un fraude, no perderemos más que los datos y/o el dinero almacenado en dicha tarjeta.',
    },
    {
      id: 17,
      categoria: 'compras',
      enunciado: 'Algunas webs de compra online permiten almacenar los datos de tu tarjeta de crédito. ¿Cuándo puedes hacer uso de esta opcion?',
      respuestas: [
        {
          respuesta: 'solo si tiene HTTPS',
          correcta: false,
        },
        {
          respuesta: 'solo si tiene certificado digital',
          correcta: false,
        },
        {
          respuesta: 'nunca',
          correcta: true,
        },
      ],
      aclaracion: 'aunque la web nos ofrezca la confianza de que nuestras comunicaciones no van a ser espiadas, no es recomendable almacenar este tipo de datos personales. No sabemos si la seguridad del servicio web puede llegar a ser vulnerada, y nuestros datos filtrados.',
    },
    {
      id: 18,
      categoria: 'compras',
      enunciado: 'no siempre puedes evaluar la calidad del producto de una tienda online. Como podrías identificar la fiabilidad de una tienda online?',
      respuestas: [
        {
          respuesta: 'calidad de la descripción e imágenes de los productos',
          correcta: true,
        },
        {
          respuesta: 'variedad de productos ofertados',
          correcta: false,
        },
        {
          respuesta: 'presencia de marcas conocidas',
          correcta: false,
        },
      ],
      aclaracion: 'las tiendas online fraudulentas suelen incluir descripciones pobres sobre sus productos, o imágenes de mala calidad o incluso robadas de otras webs.',
    },
    {
      id: 19,
      categoria: 'compras',
      enunciado: '¿qué aspectos referentes al precio de un producto deben hacerte sospechar en una tienda online?',
      respuestas: [
        {
          respuesta: 'variedad de productos con un precio igual o similar',
          correcta: false,
        },
        {
          respuesta: 'precios anormalmente bajos',
          correcta: false,
        },
        {
          respuesta: 'ambas opciones',
          correcta: true,
        },
      ],
      aclaracion: 'Una tienda online con precios demasiado bajos y productos similares con el mismo precio es candidata a ser un fraude.',
    },
    {
      id: 20,
      categoria: 'compras',
      enunciado: 'de las siguientes opciones, ¿cuál sería una opción de pago seguro?',
      respuestas: [
        {
          respuesta: 'plataforma de pago seguro',
          correcta: true,
        },
        {
          respuesta: 'transferencia bancaria',
          correcta: false,
        },
        {
          respuesta: 'ambas respuestas son correctas',
          correcta: false,
        },
      ],
      aclaracion: 'las plataformas de pago actúan como intermediarias para evitar que nuestros datos se filtren, y nos ayudarán a la hora de recuperar nuestro dinero en caso de fraude.',
    },
    {
      id: 21,
      categoria: 'rrss',
      enunciado: '¿cómo podemos detectar si un perfil es falso en una red social?',
      respuestas: [
        {
          respuesta: 'comprobar las imágenes del perfil en Google imágenes',
          correcta: false,
        },
        {
          respuesta: 'ver el número de seguidores y seguidos',
          correcta: false,
        },
        {
          respuesta: 'ambas opciones son correctas',
          correcta: true,
        },
      ],
      aclaracion: 'para detectar un perfil falso, podemos analizar el número de seguidores que tiene en relación con los perfiles que sigue, o comprobar si su imagen de perfil o el resto de imágenes publicadas no sean suyas, mediante Google imágenes.',
    },
    {
      id: 22,
      categoria: 'rrss',
      enunciado: 'tras mucho esfuerzo, has conseguido sacarte el carnet de conducir, así que decides subir una foto de él a tus redes sociales. ¿Es una buena idea?',
      respuestas: [
        {
          respuesta: 'Sí, ¿qué peligro va a tener?',
          correcta: false,
        },
        {
          respuesta: 'sí, si tengo configurada correctamente las opciones de privacidad de mi cuenta',
          correcta: false,
        },
        {
          respuesta: 'no. La publicacion de datos sensibles en Internet nunca lo es',
          correcta: true,
        },
      ],
      aclaracion: 'todo lo que publicamos en Internet permanecerá publicado. Si compartimos datos personales en las redes sociales, corremos el riesgo de que terceros se hagan con ellos para usos delictivos, como la suplantación de identidad.',
    },
    {
      id: 23,
      categoria: 'rrss',
      enunciado: 'has visto un meme en Internet que puede ser ofensivo para algunos colectivos, pero decides publicarlo igualmente. ¿Crees que tus publicaciones pueden afectarte negativamente en el futuro?',
      respuestas: [
        {
          respuesta: 'Sí, si se trata de contenido ofensivo o que afecta a mi identidad digital',
          correcta: true,
        },
        {
          respuesta: 'sí, pero solamente si publico información personal',
          correcta: false,
        },
        {
          respuesta: 'no, es mi muro y puedo publicar lo que quiera',
          correcta: false,
        },
      ],
      aclaracion: 'publicar contenidos que puedan ser ofensivos en cualquier red social puede tener consecuencias negativas para tu identidad digital.',
    },
    {
      id: 24,
      categoria: 'rrss',
      enunciado: 'la técnica utilizada por los ciberdelincuentes basadas en el engaño y la manipulación para hacerse con nuestros datos, se conoce como:',
      respuestas: [
        {
          respuesta: 'phishing',
          correcta: false,
        },
        {
          respuesta: 'ingeniería social',
          correcta: true,
        },
        {
          respuesta: 'e-fraudes',
          correcta: false,
        },
      ],
      aclaracion: 'la ingeniería social se basa en el engaño y la manipulción para conseguir que los usuarios hagamos lo que nos piden los ciberdelincuentes, como por ejemplo, que demos nuestros datos personales.',
    },
    {
      id: 25,
      categoria: 'rrss',
      enunciado: 'tus aportaciones, publicaciones, comentarios y gustos en Internet conforman la imagen que los demás tienen de ti en la red. ¿Cómo se conoce a este concepto?',
      respuestas: [
        {
          respuesta: 'egosurfing',
          correcta: false,
        },
        {
          respuesta: 'identidad digital',
          correcta: true,
        },
        {
          respuesta: 'e-reputación',
          correcta: false,
        },
      ],
      aclaracion: 'la identidad digital es la imagen que proyectas sobre ti en la Red, es decir, cómo te ven y perciben el resto de usuarios.',
    },
    {
      id: 26,
      categoria: 'rrss',
      enunciado: 'un amigo comparte una noticia explosiva sobre un supuesto caso de corrupción en una gran multinacional en la que varios famosos están implicados. ¿Qué haces?',
      respuestas: [
        {
          respuesta: 'contrasto la noticia buscando información sobre el tema en otros medios',
          correcta: true,
        },
        {
          respuesta: 'como confío totalmente en la persona que me lo envía, comparto la noticia',
          correcta: false,
        },
        {
          respuesta: 'la comparto rápidamente entre mis contactos. ¡Que todo el mundo se entere!',
          correcta: false,
        },
      ],
      aclaracion: 'una buena práctica para combatir los bulos y las fake news es contrastar la información, buscando en fuentes de información confiables y con buena reputación.',
    },
    {
      id: 27,
      categoria: 'rrss',
      enunciado: 'un rumor en la red que no tiene ninguna base ni está apoyado en ninguna fuente fiable recibe el nombre de:',
      respuestas: [
        {
          respuesta: 'cadena',
          correcta: false,
        },
        {
          respuesta: 'hoax',
          correcta: true,
        },
        {
          respuesta: 'phishing',
          correcta: false,
        },
      ],
      aclaracion: 'el término Hoax o bulo, hace referencia a cualquier rumor que circula por la Red infundado.',
    },
    {
      id: 28,
      categoria: 'rrss',
      enunciado: 'cuando creas una cuenta en una red social, ¿qué es lo primero que deberías hacer?',
      respuestas: [
        {
          respuesta: 'no publicar ni utilizar ninguna foto personal',
          correcta: false,
        },
        {
          respuesta: 'agregar a mis familiares y amigos mas íntimos',
          correcta: false,
        },
        {
          respuesta: 'configurar la seguridad y privacidad de mi perfil',
          correcta: true,
        },
      ],
      aclaracion: 'al crearnos una cuenta en cualquier red social, el primer paso siempre debe ser configurar debidamente las opciones de seguridad y privacidad.',
    },
    {
      id: 29,
      categoria: 'rrss',
      enunciado: '¿Cuál de las siguientes opciones puede ayudarte a identificar una noticia falsa (fake new)?',
      respuestas: [
        {
          respuesta: 'analizar el número de likes de la noticia',
          correcta: false,
        },
        {
          respuesta: 'comprobar la noticia en otras fuentes de información',
          correcta: true,
        },
        {
          respuesta: 'ambas opciones son correctas',
          correcta: false,
        },
      ],
      aclaracion: 'si una noticia te da mala espina y no te terminas de fiar, lo mejor será contrastarla con otras fuentes de información para ver si es cierta o no.',
    },
    {
      id: 30,
      categoria: 'rrss',
      enunciado: 'buscar información sobre nosotros en Internet sirve para detectar perfiles falsos con nuestros datos. ¿Cómo se llama esta búsqueda?',
      respuestas: [
        {
          respuesta: 'egosurfing',
          correcta: true,
        },
        {
          respuesta: 'autophishing',
          correcta: false,
        },
        {
          respuesta: 'grooming',
          correcta: false,
        },
      ],
      aclaracion: 'el egosurfing es una práctica muy útil para ver qué se dice sobre nosotros en la Red y para detectar perfiles falsos con nuestra información.',
    },
    {
      id: 31,
      categoria: 'dispositivos',
      enunciado: 'de las siguientes opciones, ¿cuáles son medidas antimalware con las que proteger nuestro dispositivo?',
      respuestas: [
        {
          respuesta: 'contraseñas seguras',
          correcta: false,
        },
        {
          respuesta: 'antivirus y cortafuegos',
          correcta: true,
        },
        {
          respuesta: 'phishing',
          correcta: false,
        },
      ],
      aclaracion: 'dentro de las medidas de protección, el antivirus y el cortafuegos (firewall) se encuentran entre las mas básicas. Su función es la de protegernos ante distintos tipos de ataque a la seguridad de nuestro equipo.',
    },
    {
      id: 32,
      categoria: 'dispositivos',
      enunciado: 'quiero deshacerme de mi dispositivo móvil, pero me preocupa la información almacenada en él. ¿Qué sería lo adecuado?',
      respuestas: [
        {
          respuesta: 'crear una copia de seguridad de la información, eliminar los datos y cuentas manualmente y restablecer el dispositivo al estado de fábrica',
          correcta: true,
        },
        {
          respuesta: 'volver el dispositivo al estado de fábrica, así queda como nuevo',
          correcta: false,
        },
        {
          respuesta: 'sacar la tarjeta de almacenamiento es suficiente, es donde se encuentra toda la información relevante del teléfono',
          correcta: false,
        },
      ],
      aclaracion: 'la mejor manera de eliminar toda la información de nuestro dispositivo de forma segura es eliminando los datos y cuentas manualmente y restableciéndolo luego al estado de fábrica. Si creamos antes una copia de seguridad, podremos volcar los datos a un nuevo dispositivo.',
    },
    {
      id: 33,
      categoria: 'dispositivos',
      enunciado: 'tu dispositivo ha comenzado a lanzar alertas sobre distintas actualizaciones pendientes de instalar. ¿Qué debes hacer?',
      respuestas: [
        {
          respuesta: 'no hago caso al mensaje, no quiero nuevas funcionalidades ya que consumen más recursos',
          correcta: false,
        },
        {
          respuesta: 'dejo la actualización para otro día que tenga más tiempo',
          correcta: false,
        },
        {
          respuesta: 'aplico la actualización lo antes posible',
          correcta: true,
        },
      ],
      aclaracion: 'una actualización nos protege de posibles brechas de seguridad, por lo que es fundamental que las instalemos lo antes posible.',
    },
    {
      id: 34,
      categoria: 'dispositivos',
      enunciado: 'cuando se habla de rootear o hacer jailbreacking a un dispositivo, se refiere a:',
      respuestas: [
        {
          respuesta: 'hackear un dispositivo para tener acceso a todos sus datos',
          correcta: false,
        },
        {
          respuesta: 'liberar el dispositivo para adquirir permisos de administrador',
          correcta: true,
        },
        {
          respuesta: 'devolver el dispositivo a su estado de fábrica.',
          correcta: false,
        },
      ],
      aclaracion: 'estos procedimientos permiten liberar el dispositivo de las restricciones del fabricante y adquirir permisos de administración. Sin embargo, no están exentos de riesgos, como la pérdida de garantía o mayor probabilidad de infección por malware.',
    },
    {
      id: 35,
      categoria: 'dispositivos',
      enunciado: '¿qué haces si empiezas a visualizar anuncios en tu dispositivo, el ratón se mueve solo o va mucho más lento?',
      respuestas: [
        {
          respuesta: 'reinicio el ordenador y conecto un USB para pasar mis archivos a otro equipo',
          correcta: false,
        },
        {
          respuesta: 'reinicio el ordenador a ver si se soluciona solo',
          correcta: false,
        },
        {
          respuesta: 'me aseguro de que el antivirus está actualizado y realizeo un análisis con él',
          correcta: true,
        },
      ],
      aclaracion: 'ante los síntomas descritos, es probable que nuestro dispositivo esté infectado. Lo mejor es utilizar un antivirus actualizado para eliminar el malware que se haya podido instalar.',
    },
    {
      id: 36,
      categoria: 'dispositivos',
      enunciado: 'un malware capaz de cifrar todos tus ficheros para luego pedirte dinero a cambio se conoce como:',
      respuestas: [
        {
          respuesta: 'ransomware',
          correcta: true,
        },
        {
          respuesta: 'keylogger',
          correcta: false,
        },
        {
          respuesta: 'troyano',
          correcta: false,
        },
      ],
      aclaracion: 'el ransomware es un tipo de malware que tiene como objetivo cifrar todo el contenido de nuestros dispositivos para pedir un rescate (dinero) a cambio de la clave de descifrado.',
    },
    {
      id: 37,
      categoria: 'dispositivos',
      enunciado: 'te has instalado una app con funcionalidad de linterna desde la tienda oficial y te pide los siguientes permisos: cámara, archivos multimedia, contactos, SMS. ¿Cuáles debes aceptar?',
      respuestas: [
        {
          respuesta: 'todos, ya que se ha descargado de una tienda oficial',
          correcta: false,
        },
        {
          respuesta: 'cámara, archivos multimedia y contactos',
          correcta: false,
        },
        {
          respuesta: 'cámara',
          correcta: true,
        },
      ],
      aclaracion: 'debemos aceptar únicamente los permisos imprescindibles para la función de la app. En el ejemplo, solo es necesario el permiso de cámara para su funcionamiento.',
    },
    {
      id: 38,
      categoria: 'dispositivos',
      enunciado: 'una forma segura de proteger tu dispositivo y la información almacenada en él es:',
      respuestas: [
        {
          respuesta: 'cambiar el PIN frecuentemente',
          correcta: false,
        },
        {
          respuesta: 'cifrarlo y protegerlo con una clave o PIN',
          correcta: true,
        },
        {
          respuesta: 'no utilizar la conexión Bluetooth',
          correcta: false,
        },
      ],
      aclaracion: 'al cifrar nuestro dispositivo, toda la información contenida en él también se cifrará, protegiéndola de terceros, especialmente en caso de pérdida o robo.',
    },
    {
      id: 39,
      categoria: 'dispositivos',
      enunciado: '¿cuál de las siguientes recomendaciones deberías llevar a cabo si te encontrases en un lugar que proporciona una red wifi pública?',
      respuestas: [
        {
          respuesta: 'conectarse, así se ahorran datos móviles',
          correcta: false,
        },
        {
          respuesta: 'revisar las redes wifi disponibles y conectarte solo a la que tenga mejor señal',
          correcta: false,
        },
        {
          respuesta: 'Desactivar la opción que permite al dispositivo conectarse automáticamente',
          correcta: true,
        },
      ],
      aclaracion: 'es conveniente desactivar la opción que permite conectarnos automáticamente a redes inalámbricas para minimizar los riesgos de conectarse a redes wifi.',
    },
    {
      id: 40,
      categoria: 'dispositivos',
      enunciado: 'cuando se trata de realizar copias de seguridad, lo ideal es seguir la regla 3-2-1, pero ¿qué significa?',
      respuestas: [
        {
          respuesta: '3 copias en 2 soportes diferentes y 1 en un lugar físico distinto',
          correcta: true,
        },
        {
          respuesta: '3 copias de seguridad en 2 carpetas distintas y 1 cifrada',
          correcta: false,
        },
        {
          respuesta: '3 copias de seguridad en 2 soportes diferentes y 1 en la nube',
          correcta: false,
        },
      ],
      aclaracion: 'la regla 3-2-1 se refiere a mantener 3 copias de seguridad, en 2 soportes distintos, como puede ser la nube y un disco duro externo, y 1 de las copias en un lugar fisico distinto.',
    },
    {
      id: 41,
      categoria: 'navegacion',
      enunciado: '¿los plugins, addons o complementos utilizados por los navegadores son siempre seguros?',
      respuestas: [
        {
          respuesta: 'solamente cuando los descargo de sitios no oficiales',
          correcta: false,
        },
        {
          respuesta: 'sí. Precisamente me ayudan a mejorar la seguridad',
          correcta: false,
        },
        {
          respuesta: 'no. Incluso uno fiable puede presentar vulnerabilidades',
          correcta: true,
        },
      ],
      aclaracion: 'al igual que las aplicaciones, estos complementos pueden ser maliciosos o presentar vulnerabilidades. Lo mejor es descargarlos de sitios oficiales y revisar los comentarios y valoraciones de otros usuarios.',
    },
    {
      id: 42,
      categoria: 'navegacion',
      enunciado: '¿Cómo puedes mejorar tu seguridad y privacidad cuando navegas por Internet?',
      respuestas: [
        {
          respuesta: 'manteniendo mi dispositivo actualizado y utilizando una conexión segura',
          correcta: false,
        },
        {
          respuesta: 'instalando una herramienta antivirus',
          correcta: false,
        },
        {
          respuesta: 'ambas respuestas son correctas',
          correcta: true,
        },
      ],
      aclaracion: 'manteniendo el dispositivo actualizado y contando con herramientas de protección, como el antivirus, nos aseguramos de que nuestro dispositivo esta más protegido de posibles amenazas.',
    },
    {
      id: 43,
      categoria: 'navegacion',
      enunciado: '¿De qué te protege una web que utiliza protocolo HTTPS?',
      respuestas: [
        {
          respuesta: 'del robo de datos y de la suplantación de identidad',
          correcta: true,
        },
        {
          respuesta: 'de un intento de phishing',
          correcta: false,
        },
        {
          respuesta: 'de riesgos de explotación de vulnerabilidades',
          correcta: false,
        },
      ],
      aclaracion: 'el protocolo HTTPS permite una conexión segura mediante un cifrado SSL que posibilita que los datos viajen de forma segura entre tu equipo y el servidor de la página web.',
    },
    {
      id: 44,
      categoria: 'navegacion',
      enunciado: 'al entrar en la configuración del router, has visto varios dispositivos desconocidos conectados a tu red wifi. ¿Qué debes hacer?',
      respuestas: [
        {
          respuesta: 'debo bloquearlos y hacer un filtro de direcciones MAC',
          correcta: false,
        },
        {
          respuesta: 'debo cambiar la contraseña de acceso al router así como de conexión a la red wifi',
          correcta: false,
        },
        {
          respuesta: 'ambas respuestas son correctas',
          correcta: true,
        },
      ],
      aclaracion: 'una configuración segura de nuestro router pasa por cambiar la contraseña de acceso, la de la red wifi y, si en el caso de detectar dispositivos desconocidos, debemos bloquearlos y realizar un filtrado de direcciones MAC.',
    },
    {
      id: 45,
      categoria: 'navegacion',
      enunciado: '¿puede infectarte un documento, una imagen o un vídeo recibido a través de un correo electrónico o descargado de una web?',
      respuestas: [
        {
          respuesta: 'una imagen no contiene malware',
          correcta: false,
        },
        {
          respuesta: 'los vídeos e imágenes no pueden contener malware',
          correcta: false,
        },
        {
          respuesta: 'cualquier archivo puede contener software malicioso',
          correcta: true,
        },
      ],
      aclaracion: 'Cualquier archivo descargado de Internet puede contener malware. Incluso las páginas web pueden infectarnos con tan solo visitarlas. Por eso es fundamental contar con un buen antivirus y mantener actualizado el dispositivo.',
    },
    {
      id: 46,
      categoria: 'navegacion',
      enunciado: 'Necesitas hacer una búsqueda por Internet a través del equipo de otra persona. ¿Cuál de las siguientes opciones sería la forma más segura de no dejar rastro?',
      respuestas: [
        {
          respuesta: 'utilizando el modo incógnito',
          correcta: true,
        },
        {
          respuesta: 'borrando las cookies',
          correcta: false,
        },
        {
          respuesta: 'utilizando el navegador de Mozilla Firefox',
          correcta: false,
        },
      ],
      aclaracion: 'Si no hay más remedio y debemos utilizar otro equipo, una buena opción será utilizar el modo incógnito del navegador, evitando introducir información personal en páginas web.',
    },
    {
      id: 47,
      categoria: 'navegacion',
      enunciado: 'recibes un email de tu banco pidiéndote que accedas a un enlace para confirmar tus datos personales. ¿Qué haces?',
      respuestas: [
        {
          respuesta: 'respondo al correo para que me faciliten más información',
          correcta: false,
        },
        {
          respuesta: 'lo abro y sigo las indicaciones del mensaje, parece un tema importante',
          correcta: false,
        },
        {
          respuesta: 'los bancos nunca piden estos datos por correo, lo elimino',
          correcta: true,
        },
      ],
      aclaracion: 'Se debe tener precaución con los mensajes que solicitan información personal bajo alguna circunstancia. Una entidad financiera o servicio web con cierta reputación jamás nos pedirá nuestros datos personales por correo.',
    },
    {
      id: 48,
      categoria: 'navegacion',
      enunciado: 'a la hora de navegar por páginas web, la opción más segura es:',
      respuestas: [
        {
          respuesta: 'webs con HTTP',
          correcta: false,
        },
        {
          respuesta: 'webs con HTTP y certificado digital',
          correcta: false,
        },
        {
          respuesta: 'webs con HTTPS y certificado digital',
          correcta: true,
        },
      ],
      aclaracion: 'el certificado digital y el protocolo HTTPS actúan como sellos de confianza que nos aseguran que las comunicaciones que hagamos dentro de la web estarán cifradas y serán seguras.',
    },
    {
      id: 49,
      categoria: 'navegacion',
      enunciado: 'un buen hábito cuando navegamos online es:',
      respuestas: [
        {
          respuesta: 'guardar las credenciales en nuestro navegador para no tener que introducirlas manualmente con frecuencia',
          correcta: false,
        },
        {
          respuesta: 'eliminar las cookies, la cache y el historial del navegador cada cierto tiempo',
          correcta: true,
        },
        {
          respuesta: 'conectarse a redes wifi públicas',
          correcta: false,
        },
      ],
      aclaracion: 'de este modo, eliminaremos el rastro que vamos dejando cuando navegamos por Internet, protegiendo mejor nuestra privacidad y seguridad online.',
    },
    {
      id: 50,
      categoria: 'navegacion',
      enunciado: 'Para una navegación segura, el protocolo de seguridad que debes tener configurado en tu router es:',
      respuestas: [
        {
          respuesta: 'protocolo WPA2',
          correcta: true,
        },
        {
          respuesta: 'protocolo WEP',
          correcta: false,
        },
        {
          respuesta: 'protocolo HTTPS',
          correcta: false,
        },
      ],
      aclaracion: 'hoy en dia, el protocolo WPA2 se considera el protocolo más seguro. El resto presentan vulnerabilidades que pueden ser aprovechadas por los ciberdelincuentes.',
    },
    {
      id: 51,
      categoria: 'fraudes',
      enunciado: 'uno de tus contactos te ha compartido una noticia sobre una cura para una enfermedad muy contagiosa. ¿Cómo comprobarías si se trata de una noticia real?',
      respuestas: [
        {
          respuesta: 'analizar los likes de la noticia',
          correcta: false,
        },
        {
          respuesta: 'revisar si la url tiene HTTPS',
          correcta: false,
        },
        {
          respuesta: 'buscar la fuente y contrastar',
          correcta: true,
        },
      ],
      aclaracion: 'internet esta lleno de bulos y noticias falsas. Para combatir la desinformación, es recomendable contrastar la información con otras fuentes.',
    },
    {
      id: 52,
      categoria: 'fraudes',
      enunciado: 'te ha llegado un SMS sobre una ayuda económica de 350 euros. Solo hay que acceder a un link y rellenar un formulario. ¿Qué haces?',
      respuestas: [
        {
          respuesta: 'investigo sobre la ayuda en Internet',
          correcta: true,
        },
        {
          respuesta: 'accedo, ya que por SMS no hay riesgo',
          correcta: false,
        },
        {
          respuesta: 'copio el enlace y accedo desde modo incognito',
          correcta: false,
        },
      ],
      aclaracion: 'los ciberdelincuentes pueden utilizar estos formularios para hacerse con nuestra información más personal. Para evitario, recuerda contrastar e investigar la información del mensaje con otras fuentes y pasar el cursor por el link para asegurarte que te redirige a un sitio legítimo.',
    },
    {
      id: 53,
      categoria: 'fraudes',
      enunciado: 'has recibido un correo, donde un desconocido afirma tener material íntimo sobre ti. Te pide realizar un pago a cambio de no difundirlo. ¿Qué deberías hacer?',
      respuestas: [
        {
          respuesta: 'ignorar el mensaje',
          correcta: true,
        },
        {
          respuesta: '¿Y si es verdad? Pagas para evitar problemas',
          correcta: false,
        },
        {
          respuesta: 'desconfías. Le pides una prueba primero',
          correcta: false,
        },
      ],
      aclaracion: 'este tipo de ataque se conoce como sextorsión. Tratan de asustarnos diciendo que tienen material comprometido sobre nosotros para que realicemos un pago a cambio de supuestamente no difundirlo.',
    },
    {
      id: 54,
      categoria: 'fraudes',
      enunciado: 'ante un fraude donde acaban suplantando tu identidad, debes ejercer tus derechos ARCO. Qué significan sus siglas? Qué deberías hacer?',
      respuestas: [
        {
          respuesta: 'Acceso, Rectificación, Comprobación y Oposición',
          correcta: false,
        },
        {
          respuesta: 'Acceso, Rectificación, Cancelación y Oposición.',
          correcta: true,
        },
        {
          respuesta: 'Afirmación, Rectificación, Comprobación y Oposición',
          correcta: false,
        },
      ],
      aclaracion: 'los derechos ARCO hacen referencia al derecho de Acceso, Rectificación, Cancelación y Oposición que tenemos en relación al uso que se hace de nuestros datos.',
    },
    {
      id: 55,
      categoria: 'fraudes',
      enunciado: 'recibes un SMS de tu compañía de teléfono informándote de un error en tu última factura. Te piden que hagas clic en un enlace, pero al entrar y descargar el archivo, se trataba de un malware. ¿Cómo se conoce a este fraude?',
      respuestas: [
        {
          respuesta: 'grooming',
          correcta: false,
        },
        {
          respuesta: 'baitering',
          correcta: false,
        },
        {
          respuesta: 'smishing',
          correcta: true,
        },
      ],
      aclaracion: 'este tipo de ciberataque se conoce como smishing, utilizan los SMS para engañarnos y hacer que nos descarguemos malware o que hagamos clic en webs maliciosas.',
    },

    {
      id: 56,
      categoria: 'fraudes',
      enunciado: '¿qué factores te deberían hacer desconfiar al tratar con un vendedor de una web de compraventa online?',
      respuestas: [
        {
          respuesta: 'quiere utilizar la plataforma de pago de la web',
          correcta: false,
        },
        {
          respuesta: 'quiere seguir la comunicación por WhatsApp',
          correcta: true,
        },
        {
          respuesta: 'tiene varios meses de antigüedad en la web con muchas valoraciones',
          correcta: false,
        },
      ],
      aclaracion: 'si un vendedor trata de utilizar otro canal de comunicación o forma de pago distinto al de la web, podría tratarse de un fraude, es una práctica muy habitual utilizada entre los ciberdelincuentes.',
    },
    {
      id: 57,
      categoria: 'fraudes',
      enunciado: 'acaba de llegarte una oferta de trabajo muy interesante. Sin embargo, algo te huele mal. ¿Cuál de las siguientes opciones sería un indicio de fraude?',
      respuestas: [
        {
          respuesta: 'pide contactar con un numero de tarificación especial',
          correcta: false,
        },
        {
          respuesta: 'pide dinero como gastos de administración por adelantado',
          correcta: false,
        },
        {
          respuesta: 'ambas opciones',
          correcta: true,
        },
      ],
      aclaracion: 'aquellas ofertas de empleo que piden llamar a un teléfono de tarificación especial o solicitan un dinero por adelantado son candidatas a tratarse de un fraude.',
    },
    {
      id: 58,
      categoria: 'fraudes',
      enunciado: 'has recibido una llamada de un supuesto soporte técnico. Tras seguir los pasos indicados, te das cuenta de que ha podido tratarse de un fraude. ¿Qué deberías hacer?',
      respuestas: [
        {
          respuesta: 'cambiar las contraseñas de todas tus cuentas',
          correcta: false,
        },
        {
          respuesta: 'desinstalar las apps que hayan instalado en tu equipo',
          correcta: false,
        },
        {
          respuesta: 'todas las opciones son correctas',
          correcta: true,
        },
      ],
      aclaracion: 'Si creemos ser víctima de un posible fraude de este tipo, lo más importante es deshabilitar cualquier cambio en nuestra configuración, desinstalar cualquier app y cambiar las contraseñas de nuestros equipos. Un análisis con nuestro antivirus también sería recomendable.',
    },
    {
      id: 59,
      categoria: 'fraudes',
      enunciado: 'es hora de cambiarse de casa y estás mirando alquileres por tu zona. ¿Cuál de las siguientes opciones no te ayudará a evitar fraudes?',
      respuestas: [
        {
          respuesta: 'comprobar las direcciones en Google Maps',
          correcta: false,
        },
        {
          respuesta: 'revisar las descripciones e imágenes en busca de fallos o dobles',
          correcta: false,
        },
        {
          respuesta: 'desconfiar de las agencias',
          correcta: true,
        },
      ],
      aclaracion: 'la clave para detectar posibles fraudes en los alquileres es revisar detenidamente las descripciones e imágenes. Además, conviene utilizar Google Maps y Google Imágenes para comprobar que la dirección y las fotos utilizadas son reales.',
    },
    {
      id: 60,
      categoria: 'fraudes',
      enunciado: 'Acabas de recibir un correo de tu marketplace favorita, donde te avisan de una promoción por la cual te regalan 50 euros. Solo tienes que acceder al enlace para obtener el código. ¿Qué debes hacer?',
      respuestas: [
        {
          respuesta: 'acceder al enlace y reclamar el código',
          correcta: false,
        },
        {
          respuesta: 'pasar el cursor sobre el enlace para ver si dirige a la web original',
          correcta: true,
        },
        {
          respuesta: 'copiar el enlace y acceder desde modo incognito',
          correcta: false,
        },
      ],
      aclaracion: 'para evitar acabar siendo víctima de un fraude, recuerda pasar el cursor por encima para ver la web real a la que te redirige.',
    },
  ],
};

module.exports = data;
