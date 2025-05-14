import type { Answers } from '../../landing-page.types';
import type { FormAnswers } from '../../landing-page.types';

type Keys = 'VERSION_1';

type Version = {
  FORM_ANSWERS: FormAnswers;
  FORM_MAPS: Answers;
};

const BUSSGELDCHECK: Record<Keys, Version> = {
  VERSION_1: {
    FORM_ANSWERS: {
      accusation: 'Geschwindigkeitsverstoß',
      'extra[geraetetyp]': 'Unsicher',
      'extra[wo-unterwegs]': 'Unsicher',
      'extra[wieviel-kmh]': 'Unsicher',
      'extra[fahrzeug-beziehung]': 'Unsicher',
      'extra[besitz-fuehrerschein]': 'Unsicher',
      'extra[punkte-flensburg]': 'Unsicher',
      'extra[blitzer]': 'Unsicher',
      'extra[fuehrerschein-angewiesen]': 'Unsicher',
      'extra[behoerde-bescheid]': 'Unsicher',
      legal_insurance: 'Unsicher',
      'extra[anstellungsverhaeltnis]': 'Sonstiges',
      zip: '',
    },
    FORM_MAPS: {
      accusation: {
        label: 'Geschwindig&shy;keitsverstoß',
        value: 'Geschwindigkeitsverstoß',
      },
      'extra[geraetetyp]': {
        label: 'Keine Angabe / Sonstiges',
        value: 'Unsicher',
      },
      'extra[wo-unterwegs]': {
        label: 'Keine Angabe / Unsicher',
        value: 'Unsicher',
      },
      'extra[wieviel-kmh]': {
        label: 'Keine Angabe / Unsicher',
        value: 'Unsicher',
      },
      'extra[fahrzeug-beziehung]': {
        label: 'Keine Angabe / Unsicher',
        value: 'Unsicher',
      },
      'extra[besitz-fuehrerschein]': {
        label: 'Keine Angabe / Unsicher',
        value: 'Unsicher',
      },
      'extra[punkte-flensburg]': {
        label: 'Keine Angabe / Unsicher',
        value: 'Unsicher',
      },
      'extra[blitzer]': {
        label: 'Keine Angabe / Unsicher',
        value: 'Unsicher',
      },
      'extra[fuehrerschein-angewiesen]': {
        label: 'Keine Angabe / Unsicher',
        value: 'Unsicher',
      },
      'extra[behoerde-bescheid]': {
        label: 'Keine Angabe / Unsicher',
        value: 'Unsicher',
      },
      legal_insurance: {
        label: 'Keine Angabe / Unsicher',
        value: 'Unsicher',
      },
      'extra[anstellungsverhaeltnis]': {
        label: 'Keine Angabe / Sonstiges',
        value: 'Sonstiges',
      },
      zip: {
        label: '',
        value: '',
      },
    },
  },
};

export default BUSSGELDCHECK;
