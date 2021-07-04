/* eslint-disable  no-console */
/* eslint-disable global-require */
const Alexa = require('ask-sdk-core');
const AplTemplates = require('./apl/aplTemplates');
const SessionState = require('./data/sessionState');
const GlobalHandlers = require('./handlers/globalHandlers'); // ErrorHandler, SessionEnded...
const dynamicEntitiesHandlers = require('./handlers/dynamicEntitiesIntentHandlers');

function initializeSkill(handlerInput) {
  SessionState.setCurrentState(handlerInput, SessionState.STATES.LAUNCH);
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
    initializeSkill(handlerInput);

    const speechText = `${handlerInput.t.WELCOME_TO} ${handlerInput.t.SKILL_NAME}. 
      ${handlerInput.t.HELP}`;

    return simpleApl(handlerInput, speechText);
  },
};

const HelloWorldIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
  },
  handle(handlerInput) {
    SessionState.setCurrentState(handlerInput, SessionState.STATES.HELLO_WORLD);

    return simpleApl(handlerInput, handlerInput.t.HELLO_WORLD);
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


// Initialize 'handlerInput.t' and 'LOC' with user language or default language.
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
    HelloWorldIntentHandler,
    HelpIntentHandler,
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
  .withApiClient(new Alexa.DefaultApiClient()) // API to get user permissions & in-skill purchases
  .lambda();
