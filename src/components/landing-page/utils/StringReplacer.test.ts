import type { PrioElement } from './StringReplacer';
import { describe, expect, test } from 'vitest';
import StringReplacer from './StringReplacer';

const ANSWERS = {
  answerOne: {
    label: 'Answer One',
    value: 'Answer 1',
  },
  answerTwo: {
    label: 'Answer Two',
    value: 'Answer 2',
  },
  answerLowOne: {
    label: 'answer One',
    value: 'answer 1',
  },
};

const PRIO: PrioElement = {
  type: 'a',
  id: 0,
  condition: {
    a: [
      {
        value: 'b',
        extra: {
          mode: 'some',
          condition: [
            {
              c: 'd',
            },
          ],
        },
      },
    ],
  },
};

const stringReplacer = new StringReplacer(ANSWERS);

describe('StringReplacer', () => {
  test('Prio object is not changed except content and subContent', () => {
    const prio = { ...PRIO, content: 'Test ###answerOne###.', subContent: 'Test ###answerTwo###.' };
    expect(stringReplacer.replace(prio)).toEqual({
      ...prio,
      content: 'Test Answer 1.',
      subContent: 'Test Answer 2.',
    });
  });
  test('Placeholder is replaced with value', () => {
    const prio = { ...PRIO, content: 'Test ###answerOne###.', subContent: 'Test ###answerOne###.' };
    expect(stringReplacer.replace(prio).content).toEqual('Test Answer 1.');
    expect(stringReplacer.replace(prio).subContent).toEqual('Test Answer 1.');
  });
  test('Placeholders are all replaced with values', () => {
    const prio = {
      ...PRIO,
      content: 'Test ###answerOne### and ###answerTwo###.',
      subContent: 'Test ###answerOne### and ###answerTwo###.',
    };
    expect(stringReplacer.replace(prio).content).toEqual('Test Answer 1 and Answer 2.');
    expect(stringReplacer.replace(prio).subContent).toEqual('Test Answer 1 and Answer 2.');
  });
  test('Apply "label" action', () => {
    const prio = { ...PRIO, content: 'Test ###answerOne>>>label###.', subContent: 'Test ###answerOne>>>label###.' };
    expect(stringReplacer.replace(prio).content).toEqual('Test Answer One.');
    expect(stringReplacer.replace(prio).subContent).toEqual('Test Answer One.');
  });
  test('Apply "lowerCaseFirstLetter" action', () => {
    const prio = {
      ...PRIO,
      content: 'Test ###answerOne>>>lowerCaseFirstLetter###.',
      subContent: 'Test ###answerOne>>>lowerCaseFirstLetter###.',
    };
    expect(stringReplacer.replace(prio).content).toEqual('Test answer 1.');
    expect(stringReplacer.replace(prio).subContent).toEqual('Test answer 1.');
  });
  test('Apply "capitalizeFirstLetter" action', () => {
    const prio = {
      ...PRIO,
      content: 'Test ###answerLowOne>>>capitalizeFirstLetter###.',
      subContent: 'Test ###answerLowOne>>>capitalizeFirstLetter###.',
    };
    expect(stringReplacer.replace(prio).content).toEqual('Test Answer 1.');
    expect(stringReplacer.replace(prio).subContent).toEqual('Test Answer 1.');
  });
  test('Apply both "label" and "lowerCaseFirstLetter" action', () => {
    const prio = {
      ...PRIO,
      content: 'Test ###answerOne>>>label|lowerCaseFirstLetter###.',
      subContent: 'Test ###answerOne>>>label|lowerCaseFirstLetter###.',
    };
    expect(stringReplacer.replace(prio).content).toEqual('Test answer One.');
    expect(stringReplacer.replace(prio).subContent).toEqual('Test answer One.');
  });
  test('Apply unknown action', () => {
    const prio = { ...PRIO, content: 'Test ###answerOne>>>xxx###.', subContent: 'Test ###answerOne>>>xxx###.' };
    expect(stringReplacer.replace(prio).content).toEqual('Test Answer 1.');
    expect(stringReplacer.replace(prio).subContent).toEqual('Test Answer 1.');
  });
  test('Prio has no "content" and "subContent"', () => {
    const prio = { ...PRIO };
    expect(stringReplacer.replace(prio)).toEqual(prio);
  });
  test('Prio has no "subContent"', () => {
    const prio = { ...PRIO, content: 'Test ###answerOne###.' };
    expect(stringReplacer.replace(prio)).toEqual({
      ...prio,
      content: 'Test Answer 1.',
    });
  });
  test('Prio has no "content"', () => {
    const prio = { ...PRIO, subContent: 'Test ###answerOne###.' };
    expect(stringReplacer.replace(prio)).toEqual({
      ...prio,
      subContent: 'Test Answer 1.',
    });
  });
  test('Prio has both "content" and "subContent" but keysToReplace is ["content"]', () => {
    const prio = { ...PRIO, content: 'Test ###answerOne###.', subContent: 'Test ###answerOne###.' };
    expect(stringReplacer.replace(prio, ['content'])).toEqual({
      ...prio,
      content: 'Test Answer 1.',
      subContent: 'Test ###answerOne###.',
    });
  });
  test('Prio has both "content" and "subContent" but keysToReplace is ["subContent"]', () => {
    const prio = { ...PRIO, content: 'Test ###answerOne###.', subContent: 'Test ###answerOne###.' };
    expect(stringReplacer.replace(prio, ['subContent'])).toEqual({
      ...prio,
      content: 'Test ###answerOne###.',
      subContent: 'Test Answer 1.',
    });
  });
  test('Prio has both "content" and "subContent" but keysToReplace is []', () => {
    const prio = { ...PRIO, content: 'Test ###answerOne###.', subContent: 'Test ###answerOne###.' };
    expect(stringReplacer.replace(prio, [])).toEqual({
      ...prio,
      content: 'Test ###answerOne###.',
      subContent: 'Test ###answerOne###.',
    });
  });
  test('Placeholder references to not existing answer key', () => {
    const prio = { ...PRIO, content: 'Test ###answerNo###.', subContent: 'Test ###answerNo###.' };
    expect(stringReplacer.replace(prio).content).toEqual('Test .');
    expect(stringReplacer.replace(prio).subContent).toEqual('Test .');
  });
  test('Pass prio that does not match PrioElement type', () => {
    const prio = { id: 1 } as PrioElement;
    expect(stringReplacer.replace(prio)).toEqual(prio);
  });
});
