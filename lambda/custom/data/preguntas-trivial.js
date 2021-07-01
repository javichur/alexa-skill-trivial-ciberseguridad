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
      id: 22,
      categoria: 'rrss',
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
    {
      id: 23,
      categoria: 'rrss',
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
    {
      id: 24,
      categoria: 'rrss',
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
    {
      id: 25,
      categoria: 'rrss',
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
    {
      id: 26,
      categoria: 'rrss',
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
    {
      id: 27,
      categoria: 'rrss',
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
    {
      id: 28,
      categoria: 'rrss',
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
    {
      id: 29,
      categoria: 'rrss',
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
    {
      id: 30,
      categoria: 'rrss',
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
    {
      id: 33,
      categoria: 'dispositivos',
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
    {
      id: 34,
      categoria: 'dispositivos',
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
    {
      id: 35,
      categoria: 'dispositivos',
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
    {
      id: 36,
      categoria: 'dispositivos',
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
    {
      id: 37,
      categoria: 'dispositivos',
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
    {
      id: 38,
      categoria: 'dispositivos',
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
    {
      id: 39,
      categoria: 'dispositivos',
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
    {
      id: 40,
      categoria: 'dispositivos',
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
    {
      id: 43,
      categoria: 'navegacion',
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
    {
      id: 44,
      categoria: 'navegacion',
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
    {
      id: 45,
      categoria: 'navegacion',
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
    {
      id: 46,
      categoria: 'navegacion',
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
    {
      id: 47,
      categoria: 'navegacion',
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
    {
      id: 48,
      categoria: 'navegacion',
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
    {
      id: 49,
      categoria: 'navegacion',
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
    {
      id: 50,
      categoria: 'navegacion',
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
      aclaracion: 'los ciberdelincuentes pueden utilizar estos formularios para hacerse con nuestra información más personal. Para evitario, recuerda contrastar e investigar la informacion del mensaje con otras fuentes y pasar el cursor por el link para asegurarte que te redirige a un sitio legítimo.',
    },
    {
      id: 53,
      categoria: 'fraudes',
      enunciado: 'has recibido un correo, donde un desconocido afirma tener material íntimo sobre ti. Te pide realizar un pago a cambio de no difundirlo. ¿Qué deberias hacer?',
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
          respuesta: 'desconfias. Le pides una prueba primero',
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
          respuesta: 'quiere seguir la comunicación por WhatsApp.',
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
          respuesta: 'pide contactar con un numero de tarificacion especial',
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
          respuesta: 'revisar las descripciones e imagenes en busca de fallos o dobles',
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
    }
  ],
};








