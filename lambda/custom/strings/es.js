const p = {
  SKILL_NAME: 'Trivial Ciberseguridad',
  WELCOME_TO: 'Bienvenido a Trivial Ciberseguridad. Demuestra que eres el que más sabe sobre contraseñas, compras online, redes sociales y mensajería instantánea, seguridad en dispositivos, navegación segura y fraudes online. Las preguntas han sido creadas por la Oficina de la Seguridad del Internauta (OSI) de INCIBE',
  SAMPLES: '"elijo la respuesta A", "la B", "ayuda", "repíteme la pregunta" o "siguiente pregunta"',
  GOODBYE: '¡Hasta luego!',
  FALLBACK: 'No entiendo lo que quieres decir en este contexto. ',
  DI_JUGAR: 'Si estás listo para jugar, di "jugar". ¿Qué dices?',

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
p.HELP = `Te haré preguntas sobre ciberseguridad y puedes responderme por ejemplo ${p.SAMPLES}. Si estás listo para jugar, di "Jugar". ¿Qué dices?`;
p.HINT_HOME = `Di ${p.SAMPLES}`;

module.exports = p;
