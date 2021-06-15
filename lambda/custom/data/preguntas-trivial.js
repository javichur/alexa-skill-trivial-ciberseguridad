module.exports = {
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
    }
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
        }
      ],
      aclaracion: 'una contraseña robusta será aquella que contenga una combinación de letras, números, mayúsculas, minúsculas y caracteres especiales.',
    },
    {
      id: 2,
      categoria: 'pass',
      enunciado: '¿Qué debes hacer si recibes un correo que dice que tu cuenta ha podido ser vulnerada y te pide renovar la contrasseña a través de un enlace?',
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
        }
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
          correcta: true,
        }
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
          respuesta: 'nada crítico porque tengo antivirus instalado y, además, si alguien la adivina, no tengo nada que esconder.',
          correcta: false,
        },
        {
          respuesta: 'De todo. Es como dejar una puesta abierta para que roben todos tus datos.',
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
          respuesta: '10002943',
          correcta: false,
        },
        {
          respuesta: 'R3p0ster1A!',
          correcta: true,
        },
        {
          respuesta: '123QWEasd',
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
    ,
    {
      id: 11,
      categoria: 'compras',
      enunciado: 'estás cerrando la compra de un artículo a través de una plataforma de compraventa. El vendedor te pide realizar una transferencia a un banco extranjero. ¿Es una transacción segura?',
      respuestas: [
        {
          respuesta: 'sí, las transferencias son el método de pago mas seguro',
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
      aclaracion: 'el principal problema de realizar una transferencia a un banco extranjera es que, en caso de resultar ser víctima de un fraude y querer recuperar nuestro dinero, sería complicado.',
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
          respuesta: 'comprobar las imagenes del perfil en Google imagenes',
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
      aclaracion: 'internet esta lleno de bulos y noticias falsas. Para combatir la desinformacion, es recomendable contrastar la informacion con otras fuentes.',
    },
    {
      id: xxxx,
      categoria: '',
      enunciado: '',
      respuestas: [
        {
          respuesta: '',
          correcta: false,
        },
        {
          respuesta: '',
          correcta: false,
        },
        {
          respuesta: '',
          correcta: false, 
        },
      ],
      aclaracion: '',
    },

  ],
};








