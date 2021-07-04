const database = require('./preguntas-trivial');

function checkData(data) {
  console.log('Iniciando análisis...'); // eslint-disable-line no-console

  let numErrores = 0;

  data.PREGUNTAS.forEach((one) => {
    // console.log(`${one.id}.`);
    if (data.CATEGORIAS.filter(cat => cat.id === one.categoria).length !== 1) {
      console.log(`${one.id}. Error categoría (${one.categoria})`); // eslint-disable-line no-console
      numErrores += 1;
    }

    if (one.enunciado.length === 0) {
      console.log(`${one.id}. Error falta enunciado.`); // eslint-disable-line no-console
      numErrores += 1;
    }

    if (one.respuestas.length < 2) {
      console.log(`${one.id}. Error faltan respuestas.`); // eslint-disable-line no-console
      numErrores += 1;
    } else if (one.respuestas.filter(r => r.respuesta.length === 0).length !== 0) {
      console.log(`${one.id}. Error. Falta texto en la respuesta.`); // eslint-disable-line no-console
      numErrores += 1;
    } else if (one.respuestas.filter(r => r.correcta === true).length !== 1) {
      console.log(`${one.id}. Error. Debe haber 1 respuesta correcta.`); // eslint-disable-line no-console
      numErrores += 1;
    }

    if (one.aclaracion.length === 0) {
      console.log(`${one.id}. Error. Falta texto aclaratorio.`); // eslint-disable-line no-console
      numErrores += 1;
    }
  });

  console.log(`${data.PREGUNTAS.length} preguntas analizadas.`); // eslint-disable-line no-console
  console.log(`${numErrores} errores encontrados.`); // eslint-disable-line no-console
}

checkData(database);
