import type { Preview, ReactRenderer } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withThemeByClassName } from '@storybook/addon-themes';
import '@storybook/addon-console';
import withDynamicThemeCss from './decorators/withDynamicThemeCss';
import { getThemes } from './utils';

const preview: Preview = {
  decorators: [
    (storyFn, context) => withConsole()(storyFn)(context),
    withDynamicThemeCss,
    withThemeByClassName<ReactRenderer>({
      themes: getThemes(),
      defaultTheme: 'bussgeldcheck',
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
