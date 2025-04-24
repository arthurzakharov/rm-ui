import type { Condition, Screen } from '../types.ts';
import { describe, expect, test } from 'vitest';
import Resolver from './resolver.ts';

const FORM_ANSWERS = {
  one: 'a',
  two: 'b',
  three: 'c',
  four: '5',
  five: '-5',
  six: '0.5',
  seven: '-0.5',
};

const zero = new Resolver(FORM_ANSWERS, 0);
const tablet = new Resolver(FORM_ANSWERS, 768);
const laptop = new Resolver(FORM_ANSWERS, 1200);

describe('Resolver.', () => {
  describe('Root mode. Combinations of screen and form.', () => {
    test('Screen and form resolve, mode is not defined, default is "some".', () => {
      const condition: Condition = { screen: { moreThan: 414 }, form: { one: [{ value: 'a' }] } };
      expect(laptop.check(condition)).toBeTruthy();
    });
    test('Screen and form resolve, mode is "some".', () => {
      const condition: Condition = { mode: 'some', screen: { moreThan: 414 }, form: { one: [{ value: 'a' }] } };
      expect(laptop.check(condition)).toBeTruthy();
    });
    test('Screen and form resolve, mode is "every".', () => {
      const condition: Condition = { mode: 'every', screen: { moreThan: 414 }, form: { one: [{ value: 'a' }] } };
      expect(laptop.check(condition)).toBeTruthy();
    });
    test('Screen does not resolve, form resolves, mode is "some".', () => {
      const condition: Condition = { mode: 'some', screen: { moreThan: 1400 }, form: { one: [{ value: 'a' }] } };
      expect(laptop.check(condition)).toBeTruthy();
    });
    test('Screen does not resolve, form resolves, mode is "every".', () => {
      const condition: Condition = { mode: 'every', screen: { moreThan: 1400 }, form: { one: [{ value: 'a' }] } };
      expect(laptop.check(condition)).toBeFalsy();
    });
    test('Screen resolves, forms does not resolve, mode is "some".', () => {
      const condition: Condition = { mode: 'some', screen: { moreThan: 414 }, form: { one: [{ value: 'x' }] } };
      expect(laptop.check(condition)).toBeTruthy();
    });
    test('Screen resolves, forms does not resolve, mode is "every".', () => {
      const condition: Condition = { mode: 'every', screen: { moreThan: 414 }, form: { one: [{ value: 'x' }] } };
      expect(laptop.check(condition)).toBeFalsy();
    });
    test('Screen and form are not passed, mode is "some".', () => {
      const condition: Condition = { mode: 'some' };
      expect(laptop.check(condition)).toBeFalsy();
    });
    test('Screen and form are not passed, mode is "every".', () => {
      const condition: Condition = { mode: 'every' };
      expect(laptop.check(condition)).toBeFalsy();
    });
    test('Screen not passed, form resolves, mode is "some".', () => {
      const condition: Condition = { mode: 'some', form: { one: [{ value: 'a' }] } };
      expect(laptop.check(condition)).toBeTruthy();
    });
    test('Screen not passed, form resolves, mode is "every".', () => {
      const condition: Condition = { mode: 'every', form: { one: [{ value: 'a' }] } };
      expect(laptop.check(condition)).toBeTruthy();
    });
    test('Screen resolves, form not passed, mode is "some".', () => {
      const condition: Condition = { mode: 'some', screen: { moreThan: 414 } };
      expect(laptop.check(condition)).toBeTruthy();
    });
    test('Screen resolves, form not passed, mode is "every".', () => {
      const condition: Condition = { mode: 'every', screen: { moreThan: 414 } };
      expect(laptop.check(condition)).toBeTruthy();
    });
  });
  describe('Different variations of screen values.', () => {
    test('screen.moreThen 414.', () => {
      const condition: Condition = { screen: { moreThan: 414 } };
      expect(zero.check(condition)).toBeFalsy();
      expect(tablet.check(condition)).toBeTruthy();
      expect(laptop.check(condition)).toBeTruthy();
    });
    test('screen.lessThen 1024.', () => {
      const condition: Condition = { screen: { lessThan: 1024 } };
      expect(zero.check(condition)).toBeTruthy();
      expect(tablet.check(condition)).toBeTruthy();
      expect(laptop.check(condition)).toBeFalsy();
    });
    test('screen.moreThan 414 and screen.lessThan 1024.', () => {
      const condition: Condition = { mode: 'some', screen: { moreThan: 414, lessThan: 1024 } };
      expect(zero.check(condition)).toBeFalsy();
      expect(tablet.check(condition)).toBeTruthy();
      expect(laptop.check(condition)).toBeFalsy();
    });
    test('Screen keys are undefined. Form key matches. Screen does not play any role.', () => {
      const condition: Condition = {
        screen: {},
        form: {
          one: [
            {
              value: 'a',
            },
          ],
        },
      };
      expect(zero.check(condition)).toBeTruthy();
      expect(tablet.check(condition)).toBeTruthy();
      expect(laptop.check(condition)).toBeTruthy();
    });
    test('Screen not passed. Form key matches. Screen does not play any role.', () => {
      const condition: Condition = {
        form: {
          one: [
            {
              value: 'a',
            },
          ],
        },
      };
      expect(zero.check(condition)).toBeTruthy();
      expect(tablet.check(condition)).toBeTruthy();
      expect(laptop.check(condition)).toBeTruthy();
    });
    test('Screen not valid object. Form key matches. Screen does not play any role.', () => {
      const condition: Condition = {
        screen: {
          a: 1,
        } as Screen,
        form: {
          one: [
            {
              value: 'a',
            },
          ],
        },
      };
      expect(zero.check(condition)).toBeTruthy();
      expect(tablet.check(condition)).toBeTruthy();
      expect(laptop.check(condition)).toBeTruthy();
    });
  });
  describe('Different variations of form values.', () => {
    describe('Cases without extra conditions.', () => {
      test('Form has 1 key with 1 value that resolves.', () => {
        const condition: Condition = { form: { one: [{ value: 'a' }] } };
        expect(laptop.check(condition)).toBeTruthy();
      });
      test('Form has 1 key with 1 value that does not resolve.', () => {
        const condition: Condition = { form: { one: [{ value: 'x' }] } };
        expect(laptop.check(condition)).toBeFalsy();
      });
      test('Form has 1 key with 2 values, 1 of values resolves.', () => {
        const condition: Condition = { form: { one: [{ value: 'a' }, { value: 'x' }] } };
        expect(laptop.check(condition)).toBeTruthy();
      });
      test('Form has 1 key with 2 values, none of them resolves.', () => {
        const condition: Condition = { mode: 'some', form: { one: [{ value: 'y' }, { value: 'x' }] } };
        expect(laptop.check(condition)).toBeFalsy();
      });
      test('Form has 2 keys, every keys resolves, mode is "some".', () => {
        const condition: Condition = { mode: 'some', form: { one: [{ value: 'a' }], two: [{ value: 'b' }] } };
        expect(laptop.check(condition)).toBeTruthy();
      });
      test('Form has 2 keys, every keys resolves, mode is "some".', () => {
        const condition: Condition = { mode: 'every', form: { one: [{ value: 'a' }], two: [{ value: 'b' }] } };
        expect(laptop.check(condition)).toBeTruthy();
      });
      test('Form has 2 keys, only one key resolves, mode is "some".', () => {
        const condition: Condition = { mode: 'some', form: { one: [{ value: 'x' }], two: [{ value: 'b' }] } };
        expect(laptop.check(condition)).toBeTruthy();
      });
      test('Form has 2 keys, only one key resolves, mode is "every".', () => {
        const condition: Condition = { mode: 'every', form: { one: [{ value: 'x' }], two: [{ value: 'b' }] } };
        expect(laptop.check(condition)).toBeFalsy();
      });
      test('Form has 2 keys, none of them resolves, mode is "some".', () => {
        const condition: Condition = { mode: 'some', form: { one: [{ value: 'x' }], two: [{ value: 'x' }] } };
        expect(laptop.check(condition)).toBeFalsy();
      });
      test('Form has 2 keys, none of them resolves, mode is "every".', () => {
        const condition: Condition = { mode: 'every', form: { one: [{ value: 'x' }], two: [{ value: 'x' }] } };
        expect(laptop.check(condition)).toBeFalsy();
      });
    });
    describe('Cases with extra conditions.', () => {
      test('Form value that resolves and 1 extra condition that resolves.', () => {
        const condition: Condition = {
          form: { one: [{ value: 'a', extra: { mode: 'some', condition: [{ two: 'b' }] } }] },
        };
        expect(laptop.check(condition)).toBeTruthy();
      });
      test('Form value that no resolves and 1 extra condition that resolves.', () => {
        const condition: Condition = {
          form: { one: [{ value: 'x', extra: { mode: 'some', condition: [{ two: 'b' }] } }] },
        };
        expect(laptop.check(condition)).toBeFalsy();
      });
      test('Form value that resolves and 1 extra condition with 2 values that resolves each.', () => {
        const condition: Condition = {
          form: { one: [{ value: 'a', extra: { mode: 'some', condition: [{ two: 'b', three: 'c' }] } }] },
        };
        expect(laptop.check(condition)).toBeTruthy();
      });
      test('Form value that resolves and 1 extra condition with 2 values, 1 values resolves only.', () => {
        const condition: Condition = {
          form: { one: [{ value: 'a', extra: { mode: 'some', condition: [{ two: 'b', three: 'x' }] } }] },
        };
        expect(laptop.check(condition)).toBeTruthy();
      });
      test('Form value that resolves and 1 extra condition with 2 values, each value does not resolve.', () => {
        const condition: Condition = {
          form: { one: [{ value: 'a', extra: { mode: 'some', condition: [{ two: 'x', three: 'x' }] } }] },
        };
        expect(laptop.check(condition)).toBeFalsy();
      });
      test('Form has 2 extra conditions every condition resolves, extra mode is "some".', () => {
        const condition: Condition = {
          form: { one: [{ value: 'a', extra: { mode: 'some', condition: [{ two: 'b' }, { three: 'c' }] } }] },
        };
        expect(laptop.check(condition)).toBeTruthy();
      });
      test('Form has 2 extra conditions every condition resolves, extra mode is "every".', () => {
        const condition: Condition = {
          form: { one: [{ value: 'a', extra: { mode: 'every', condition: [{ two: 'b' }, { three: 'c' }] } }] },
        };
        expect(laptop.check(condition)).toBeTruthy();
      });
      test('Form has 2 extra conditions none condition resolves, extra mode is "some".', () => {
        const condition: Condition = {
          form: { one: [{ value: 'a', extra: { mode: 'some', condition: [{ two: 'x' }, { three: 'x' }] } }] },
        };
        expect(laptop.check(condition)).toBeFalsy();
      });
      test('Form has 2 extra conditions none condition resolves, extra mode is "every".', () => {
        const condition: Condition = {
          form: { one: [{ value: 'a', extra: { mode: 'every', condition: [{ two: 'x' }, { three: 'x' }] } }] },
        };
        expect(laptop.check(condition)).toBeFalsy();
      });
      test('Form has 2 extra conditions only 1 condition resolves, extra mode is "some".', () => {
        const condition: Condition = {
          form: { one: [{ value: 'a', extra: { mode: 'some', condition: [{ two: 'b' }, { three: 'x' }] } }] },
        };
        expect(laptop.check(condition)).toBeTruthy();
      });
      test('Form has 2 extra conditions only 1 condition resolves, extra mode is "every".', () => {
        const condition: Condition = {
          form: { one: [{ value: 'a', extra: { mode: 'every', condition: [{ two: 'b' }, { three: 'x' }] } }] },
        };
        expect(laptop.check(condition)).toBeFalsy();
      });
    });
    describe('Cases with special conditions, >>>NOT>>>, >>>OR>>>, >>>FROM>>>*>>>TO>>>.', () => {
      test('Case with >>>NOT>>>. All variations.', () => {
        expect(laptop.check({ form: { one: [{ value: '>>>NOT>>>a' }] } })).toBeFalsy();
        expect(laptop.check({ form: { one: [{ value: '>>>NOT>>>x' }] } })).toBeTruthy();
        expect(laptop.check({ form: { one: [{ value: '>>>NOT>>>y>>>NOT>>>x' }] } })).toBeTruthy();
        expect(laptop.check({ form: { one: [{ value: '>>>NOT>>>y>>>NOT>>>a' }] } })).toBeFalsy();
        expect(laptop.check({ form: { one: [{ value: '>>>NOT>>>a>>>NOT>>>' }] } })).toBeFalsy();
        expect(laptop.check({ form: { one: [{ value: '>>>NOT>>>x>>>NOT>>>' }] } })).toBeTruthy();
      });
      test('Case with >>>OR>>>. All variations.', () => {
        expect(laptop.check({ form: { one: [{ value: '>>>OR>>>a' }] } })).toBeTruthy();
        expect(laptop.check({ form: { one: [{ value: '>>>OR>>>x' }] } })).toBeFalsy();
        expect(laptop.check({ form: { one: [{ value: '>>>OR>>>y>>>OR>>>x' }] } })).toBeFalsy();
        expect(laptop.check({ form: { one: [{ value: '>>>OR>>>a>>>OR>>>x' }] } })).toBeTruthy();
        expect(laptop.check({ form: { one: [{ value: '>>>OR>>>a>>>OR>>>' }] } })).toBeTruthy();
        expect(laptop.check({ form: { one: [{ value: '>>>OR>>>x>>>OR>>>' }] } })).toBeFalsy();
      });
      test('Case with >>>FROM>>>*>>>TO>>>. All variations.', () => {
        expect(laptop.check({ form: { four: [{ value: '>>>FROM>>>0>>>TO>>>10' }] } })).toBeTruthy();
        expect(laptop.check({ form: { four: [{ value: '>>>FROM>>>0>>>TO>>>5' }] } })).toBeTruthy();
        expect(laptop.check({ form: { four: [{ value: '>>>FROM>>>5>>>TO>>>10' }] } })).toBeTruthy();
        expect(laptop.check({ form: { five: [{ value: '>>>FROM>>>-10>>>TO>>>0' }] } })).toBeTruthy();
        expect(laptop.check({ form: { five: [{ value: '>>>FROM>>>-5>>>TO>>>0' }] } })).toBeTruthy();
        expect(laptop.check({ form: { five: [{ value: '>>>FROM>>>-10>>>TO>>>-5' }] } })).toBeTruthy();
        expect(laptop.check({ form: { six: [{ value: '>>>FROM>>>0>>>TO>>>1' }] } })).toBeTruthy();
        expect(laptop.check({ form: { six: [{ value: '>>>FROM>>>0>>>TO>>>0.5' }] } })).toBeTruthy();
        expect(laptop.check({ form: { six: [{ value: '>>>FROM>>>0.5>>>TO>>>1' }] } })).toBeTruthy();
        expect(laptop.check({ form: { seven: [{ value: '>>>FROM>>>-1>>>TO>>>0' }] } })).toBeTruthy();
        expect(laptop.check({ form: { seven: [{ value: '>>>FROM>>>-1>>>TO>>>-0.5' }] } })).toBeTruthy();
        expect(laptop.check({ form: { seven: [{ value: '>>>FROM>>>-0.5>>>TO>>>0' }] } })).toBeTruthy();
        expect(laptop.check({ form: { four: [{ value: '>>>FROM>>>0' }] } })).toBeFalsy();
        expect(laptop.check({ form: { four: [{ value: '>>>TO>>>10' }] } })).toBeFalsy();
        expect(laptop.check({ form: { four: [{ value: '>>>TO>>>10>>>FROM>>>0' }] } })).toBeTruthy();
      });
      test('Case with symbols in extra conditions', () => {
        expect(
          laptop.check({
            form: { one: [{ value: 'a', extra: { mode: 'some', condition: [{ two: '>>>NOT>>>a' }] } }] },
          }),
        ).toBeTruthy();
        expect(
          laptop.check({
            form: { one: [{ value: 'a', extra: { mode: 'some', condition: [{ two: '>>>NOT>>>b' }] } }] },
          }),
        ).toBeFalsy();
      });
      test('Mixing symbols, always resolves', () => {
        expect(laptop.check({ form: { one: [{ value: '>>>NOT>>>a>>>OR>>>a' }] } })).toBeTruthy();
        expect(laptop.check({ form: { four: [{ value: '>>>NOT>>>10>>>FROM>>>0>>>TO>>>10' }] } })).toBeTruthy();
        expect(laptop.check({ form: { four: [{ value: '>>>NOT>>>5>>>FROM>>>10>>>TO>>>20' }] } })).toBeTruthy();
      });
    });
  });
});
