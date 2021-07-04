const p = {
  SKILL_NAME: 'El Template',
  WELCOME_TO: 'Bienvenido a',
  SAMPLES: '"hola", "ayuda", ',
  HELLO_WORLD: 'Hola Mundo',
  GOODBYE: '¡Hasta luego!',
  SESSION_NOT_SAVED_YET: 'Aún no has guardado un valor en la sesión de la skill. Di "guardar sesión".',
  SESSION_LOADED: 'Acabo de leer el valor {0} de la sesión de la skill.',
  SESSION_SAVED: 'Acabo de guardar el valor {0} en la sesión de la skill. Di "leer sesión".',
  COLOR_SAID: 'Has dicho el color {0}',
  FALLBACK: 'No entiendo lo que quieres decir en este contexto. ',


  // Dynamic entities (slots)
  DYNAMIC_ENTITIES_CLEANED: 'Entidades dinámicas borradas. ',
  DYNAMIC_ENTITIES_UPDATED: 'Entidades dinámicas actualizadas. ',
  HINT_DYNAMIC_ENTITY: 'Di "cuéntame un chiste de animales".',
  SLOT_VALUE_SAID: 'El valor del slot es "{0}"',
  DYNAMIC_ENTITIES_VALUES: [
    {
      id: 'animales',
      name: {
        value: 'animales',
        synonyms: ['animal', 'bichos'],
      },
    },
    {
      id: 'medicos',
      name: {
        value: 'médico',
        synonyms: ['médicos', 'médica', 'médicas'],
      },
    },
    {
      id: 'comida',
      name: {
        value: 'comida',
        synonyms: ['comidas', 'alimento', 'alimentos', 'comer'],
      },
    },
  ],
};
p.HELP = `Puedes decirme por ejemplo ${p.SAMPLES}. ¿Qué dices?`;
p.HINT_HOME = `Di ${p.SAMPLES}`;

module.exports = p;
