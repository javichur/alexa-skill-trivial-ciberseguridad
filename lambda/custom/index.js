/* eslint-disable  no-console */
/* eslint-disable global-require */
const Alexa = require('ask-sdk-core');
const AplTemplates = require('./apl/aplTemplates');
const SessionState = require('./data/sessionState');
const GlobalHandlers = require('./handlers/globalHandlers'); // ErrorHandler, SessionEnded...
const dynamicEntitiesHandlers = require('./handlers/dynamicEntitiesIntentHandlers');

const preguntas = require('./data/preguntas-trivial');


/**
  * @desc convierte una pregunta (enunciado y sus N opciones) en una única cadena de texto
  * @param pregunta $pregunta
  * @return string - texto listo para ser pronunciado por Alexa, incluye pregunta final.
*/
function preguntaToString(pregunta) {
  let ret = `${pregunta.enunciado} `;
  for (let i = 0; i < pregunta.respuestas.length; i += 1) {
    ret += `${String.fromCharCode('A'.charCodeAt() + i)}: ${pregunta.respuestas[i].respuesta} `;
  }

  /* Importante terminar con una pregunta, para que el usuario sepa
    que tiene que contestar y para que Amazon certifique la Skill. */
  ret += ' ¿Qué letra eliges?';

  return ret;
}


/**
  * @desc devuelve un item aleatorio del array
  * @param array $arrayOfItems
  * @return object - item aleatorio.
*/
function getRandomItem(arrayOfItems) {
  let i = 0;
  i = Math.floor(Math.random() * arrayOfItems.length);
  return (arrayOfItems[i]);
}


function getRandomQuestionSpeechAndSave(handlerInput) {
  const oneQuestion = getRandomItem(preguntas.PREGUNTAS);
  SessionState.setCurrentQuestion(handlerInput, oneQuestion);

  const catName = preguntas.CATEGORIAS.filter(one => one.id === oneQuestion.categoria)[0].nombre;

  let speechText = `Pregunta de ${catName}. `;
  speechText += preguntaToString(oneQuestion);

  return speechText;
}


function getCorrectLetter(q) {
  let i = 0;
  for (const one of q.respuestas) { // eslint-disable-line no-restricted-syntax
    if (one.correcta === true) {
      return String.fromCharCode('A'.charCodeAt() + i);
    }
    i += 1;
  }
  return null; // caso imposible. Todas las preguntas tienen una opción correcta.
}


function simpleApl(handlerInput, speechText) {
  return AplTemplates.getAplTextAndHintOrVoice(handlerInput, handlerInput.t.SKILL_NAME,
    speechText, handlerInput.t.HINT_HOME, speechText);
}


const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  async handle(handlerInput) {
    SessionState.setCurrentState(handlerInput, SessionState.STATES.LAUNCH);

    return simpleApl(handlerInput, `${handlerInput.t.WELCOME_TO}. ${handlerInput.t.HELP}`);
  },
};


const JugarIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'JugarIntent';
  },
  async handle(handlerInput) {
    SessionState.setCurrentState(handlerInput, SessionState.STATES.PLAYING);
    let speechText = '¡Jugamos! ';

    speechText += getRandomQuestionSpeechAndSave(handlerInput);

    return simpleApl(handlerInput, speechText);
  },
};


const NextIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NextIntent';
  },
  handle(handlerInput) {
    SessionState.setCurrentState(handlerInput, SessionState.STATES.PLAYING);

    let speechText = 'Ok, pasamos a la siguiente pregunta. ';

    speechText += getRandomQuestionSpeechAndSave(handlerInput);

    return simpleApl(handlerInput, speechText);
  },
};


const RespuestaIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'RespuestaIntent';
  },
  handle(handlerInput) {
    let speech = '';
    const lastQuestion = SessionState.getCurrentQuestion(handlerInput);
    if (!lastQuestion) {
      speech = 'Uy qué raro, he olvidado la pregunta.';
      return simpleApl(handlerInput, speech);
    }

    SessionState.setCurrentState(handlerInput, SessionState.STATES.PLAYING);

    const itemSlot = handlerInput.requestEnvelope.request.intent.slots.respuesta;
    let itemNameMatched = null; // lo que matchea con la respuesta dada por el usuario (A, B, C...).

    if (itemSlot && itemSlot.resolutions
      && itemSlot.resolutions.resolutionsPerAuthority
      && itemSlot.resolutions.resolutionsPerAuthority[0].values
      && itemSlot.resolutions.resolutionsPerAuthority[0].values[0].value.name
    ) {
      /* Guardamos la opción elegida por el usuario (A, B, C...); no lo que ha pronunciado.
      Es decir, sí ha pronunciado "be" lo que nos guardamos es "B".
      Esto lo podemos hacer porque a la hora de crear el modelo, hemos definido "be"
      como sinónimo de "B".
        */
      itemNameMatched = itemSlot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
    } else {
      // caso posible si no hay match.
      return simpleApl(handlerInput, 'No te he entendido, repite por favor.');
    }

    if (itemNameMatched === getCorrectLetter(lastQuestion)) {
      speech = '¡Correcto!';
    } else {
      speech = 'Error!';
    }
    speech += ` ${lastQuestion.aclaracion} <break time="2s"/>`;
    speech += ' Siguiente pregunta. ';

    speech += getRandomQuestionSpeechAndSave(handlerInput);

    return simpleApl(handlerInput, speech);
  },
};


const RepeatIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.RepeatIntent';
  },
  handle(handlerInput) {
    let speech = '';
    const q = SessionState.getCurrentQuestion(handlerInput);
    if (!q) {
      speech = 'Uy qué raro, he olvidado la pregunta.'; // caso imposible
    } else {
      speech = `Repito la pregunta: ${preguntaToString(q)}`;
    }

    return simpleApl(handlerInput, speech);
  },
};


const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    SessionState.setCurrentState(handlerInput, SessionState.STATES.HELP);

    return simpleApl(handlerInput, handlerInput.t.HELP);
  },
};


// Initialize 'handlerInput.t' with user language or default language.
const myLocalizationInterceptor = {
  process(handlerInput) {
    // const langUser = handlerInput.requestEnvelope.request.locale;
    handlerInput.t = require('./strings/es'); // eslint-disable-line import/no-dynamic-require, no-param-reassign
  },
};


const skillBuilder = Alexa.SkillBuilders.custom();
exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    JugarIntentHandler,
    HelpIntentHandler,
    NextIntentHandler,
    RepeatIntentHandler,
    RespuestaIntentHandler,

    // AplUserEventHandler.EventHandler, // taps en pantalla APL (ver APL list en HelpIntentHandler)

    dynamicEntitiesHandlers.UpdateJokeCategoriesIntentHandler, // dynamic entity sample
    dynamicEntitiesHandlers.ClearDynamicEntitiesIntentHandler,
    dynamicEntitiesHandlers.TellJokeIntentHandler,

    GlobalHandlers.CancelAndStopIntentHandler,
    GlobalHandlers.FallbackIntentHandler, // to Respond Gracefully to Unexpected Customer Requests
    GlobalHandlers.SessionEndedRequestHandler,
    GlobalHandlers.IntentReflectorHandler, // last
  )
  .addRequestInterceptors(myLocalizationInterceptor) // lang
  .addErrorHandlers(GlobalHandlers.ErrorHandler)
  // .withApiClient(new Alexa.DefaultApiClient()) // API to get user permissions & ISP
  .lambda();
