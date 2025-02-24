import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import customTheme from "./custom-theme";
 
addons.setConfig({
  theme: {
    ...themes.normal,
    ...customTheme
  },
});