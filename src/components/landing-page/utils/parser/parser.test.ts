import type { Answers, FormAnswers, Prio } from '../types';
import { describe, test } from 'vitest';
import Parser from './parser';
import prio3 from './prio/prio-3.json';

const ANSWERS: Answers = {
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
};

const DATA: FormAnswers = {
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
};

describe('Parser', () => {
  describe('content-prio-3.', () => {
    const parser = new Parser(prio3 as unknown as Prio, DATA, ANSWERS, 1024);
    test('should return correct answers', () => {
      console.log('prio', parser.blueprint);
    });
  });
});
