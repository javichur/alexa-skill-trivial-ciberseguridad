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
  ],
};