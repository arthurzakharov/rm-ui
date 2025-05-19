import type { Decorator, StoryContext } from '@storybook/react';
import { loadStylesheet } from '../utils';

const withDynamicThemeCss: Decorator = (StoryFn, context: StoryContext) => {
  loadStylesheet(context.globals.theme || 'bussgeldcheck');
  return StoryFn();
};

export default withDynamicThemeCss;
