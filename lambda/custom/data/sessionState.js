module.exports = {

  STATES: Object.freeze({
    UNINITIALIZED: -1,
    LAUNCH: 1,
    HELP: 2,
    PLAYING: 3,
  }),

  /**
   * Save the current state in session
   * @param {*} handlerInput
   * @param {*} currentState
   */
  setCurrentState(handlerInput, currentState) {
    const { attributesManager } = handlerInput;
    const sessionAttributes = attributesManager.getSessionAttributes();

    sessionAttributes.currentState = currentState; // save new state

    attributesManager.setSessionAttributes(sessionAttributes);
  },

  /**
   * Returns the state saved in session
   * @param {*} handlerInput
   */
  getCurrentState(handlerInput) {
    const { attributesManager } = handlerInput;

    const sessionAttributes = attributesManager.getSessionAttributes();

    if (sessionAttributes.currentState) {
      return sessionAttributes.currentState;
    }

    return this.STATES.UNINITIALIZED;
  },

  /**
   * Sample method to save "currentQuestion"
   * @param {*} handlerInput
   * @param {string} testAtt
   */
  setCurrentQuestion(handlerInput, q) {
    const { attributesManager } = handlerInput;
    const sessionAttributes = attributesManager.getSessionAttributes();

    sessionAttributes.currentQuestion = q; // save

    attributesManager.setSessionAttributes(sessionAttributes);
  },

  /**
   * Returns value of "currentQuestion" from session.
   * Returns null if not exists.
   * @param {*} handlerInput
   */
  getCurrentQuestion(handlerInput) {
    const { attributesManager } = handlerInput;

    const sessionAttributes = attributesManager.getSessionAttributes();

    if (sessionAttributes.currentQuestion) {
      return sessionAttributes.currentQuestion;
    }

    return null;
  },

};
