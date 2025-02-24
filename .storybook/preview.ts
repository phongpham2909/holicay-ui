import type { Preview } from "@storybook/react";
import { themes, create } from '@storybook/theming';

import '../app/globals.css';

const createCustomTheme = (base: 'light' | 'dark' = 'light') => {
  return {
    base,
    brandTitle: 'Holicay Design System',
    brandUrl: 'https://www.holicay.com/',
    brandImage: base === 'light' ? 'public/site/logo.svg' : 'public/site/logo_dark.svg',
    brandTarget: '_self',
  }
}

const preview: Preview = {
  parameters: {
    viewport: {
      disable: true,
    },
    chromatic: {
      disableSnapshot: true,
      prefersReducedMotion: 'reduce',
    },
    darkMode: {
      // Override the default dark theme
      dark: createCustomTheme('dark'),
      // Override the default light theme
      light: createCustomTheme(),
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
