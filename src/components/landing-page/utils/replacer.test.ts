import { describe, expect, test } from 'vitest';
import Replacer from './replacer';

const ANSWERS = {
  one: {
    label: 'A One',
    value: 'A 1',
  },
  two: {
    label: 'A Two',
    value: 'A 2',
  },
  oneLow: {
    label: 'a One',
    value: 'a 1',
  },
};

const stringReplacer = new Replacer(ANSWERS);

describe('Replacer', () => {
  test('Replace placeholder with answer value key.', () => {
    expect(stringReplacer.replace('T ###one###.')).toEqual('T A 1.');
    expect(stringReplacer.replace('T ###one### and ###two###.')).toEqual('T A 1 and A 2.');
  });
  test('Apply "label" action', () => {
    expect(stringReplacer.replace('T ###one>>>label###.')).toEqual('T A One.');
  });
  test('Apply "lowerCaseFirstLetter" action', () => {
    expect(stringReplacer.replace('T ###one>>>lowerCaseFirstLetter###.')).toEqual('T a 1.');
  });
  test('Apply "capitalizeFirstLetter" action', () => {
    expect(stringReplacer.replace('T ###oneLow>>>capitalizeFirstLetter###.')).toEqual('T A 1.');
  });
  test('Apply both "label" and "lowerCaseFirstLetter" action', () => {
    expect(stringReplacer.replace('T ###one>>>label|lowerCaseFirstLetter###.')).toEqual('T a One.');
  });
  test('Apply both "label" and "capitalizeFirstLetter" action', () => {
    expect(stringReplacer.replace('T ###oneLow>>>label|capitalizeFirstLetter###.')).toEqual('T A One.');
  });
  test('Apply unknown action, replaces placeholder with value key, no other action', () => {
    expect(stringReplacer.replace('T ###one>>>xxx###.')).toEqual('T A 1.');
  });
  test('Placeholder references to not existing answer key, empty string instead of placeholder', () => {
    expect(stringReplacer.replace('T ###answerNo###.')).toEqual('T .');
  });
});
