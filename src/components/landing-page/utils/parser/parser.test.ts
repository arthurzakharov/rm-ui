import type { Answers, FormAnswers, Prio } from '../types';
import { describe, test } from 'vitest';
import Parser from './parser';

// TODO: Missed case when screen is not set on top level but is a part of extra condition

const PRIO: Prio = {
  variation: [
    {
      color: '#ffaa02',
      head: 1,
      title: 1,
      html: 1,
      list: 1,
      condition: {
        form: {
          one: [
            {
              value: 'A 1',
            },
          ],
        },
      },
    },
    {
      color: '#00b649',
      head: 2,
      title: 2,
      html: null,
      list: 2,
      condition: {
        form: {
          one: [
            {
              value: 'A 2',
            },
          ],
        },
      },
    },
  ],
  successBox: {
    head: [
      {
        variationId: 1,
        content: {
          primary: 'Primary head 1',
          secondary: 'Secondary head 1',
        },
        condition: null,
      },
      {
        variationId: 2,
        content: {
          primary: 'Primary head 2',
          secondary: 'Secondary head 2',
        },
        condition: null,
      },
    ],
    body: {
      title: [
        {
          variationId: 1,
          content: 'Body title 1',
          condition: null,
        },
        {
          variationId: 2,
          content: 'Body title 2',
          condition: null,
        },
      ],
      html: [
        {
          variationId: 1,
          content: 'Body html 1',
          condition: null,
        },
        {
          variationId: 2,
          content: 'Body html 2',
          condition: null,
        },
      ],
      list: [
        {
          variationId: 1,
          content: {
            priority: ['question', 'check', 'exclamation', 'cross'],
            content: [
              {
                type: 'check',
                content: 'List 1 ###one###',
                subContent: [],
                condition: null,
              },
              {
                type: 'question',
                content: 'List 1',
                subContent: [],
                condition: null,
              },
              {
                type: 'exclamation',
                content: 'List 1',
                subContent: [],
                condition: null,
              },
            ],
          },
          condition: null,
        },
        {
          variationId: 2,
          content: {
            priority: ['check', 'question', 'exclamation', 'cross'],
            content: [],
          },
          condition: null,
        },
      ],
    },
  },
  question: [
    {
      content: {
        head: 'Sidebar simple text',
        body: 'Body title 1',
      },
      props: null,
      condition: null,
    },
  ],
  sidebar: [
    {
      content: 'Sidebar simple text',
      props: null,
      condition: null,
    },
    {
      content: '@@@ContactUs@@@',
      props: null,
      condition: {
        screen: {
          moreThan: 1000,
        },
      },
    },
  ],
  footer: [
    {
      content: 'Footer simple text',
      props: null,
      condition: null,
    },
    {
      content: 'Footer simple text 0',
      props: null,
      condition: {
        screen: {
          moreThan: 2000,
        },
      },
    },
    {
      content: 'Footer simple text 1',
      props: null,
      condition: {
        screen: {
          moreThan: 1000,
        },
      },
    },
    {
      content: 'Footer simple text Wrong',
      props: null,
      condition: null,
    },
    {
      content: '@@@OrderedList@@@',
      props: {
        orderedList: {
          head: 'Ordered list head ###two>>>label|lowerCaseFirstLetter###',
          list: ['List 1 ###one### some value', 'List 2'],
        },
      },
      condition: null,
    },
  ],
};

const ANSWERS: Answers = {
  one: {
    label: 'A One',
    value: 'A 1',
  },
  two: {
    label: 'A Two',
    value: 'A 2',
  },
};

const DATA: FormAnswers = {
  one: 'A 11',
  two: 'A 2',
};

const parser = new Parser(PRIO, DATA, ANSWERS, 1024);

describe('Parser', () => {
  test('X', () => {
    console.log(parser.blueprint);
  });
});
