import type { Answers } from '../../landing-page.types';

type Keys = 'VERSION_1' | 'VERSION_2';

const BUSSGELDCHECK: Record<Keys, Answers> = {
  VERSION_1: {
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
  VERSION_2: {
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
};

export default BUSSGELDCHECK;
