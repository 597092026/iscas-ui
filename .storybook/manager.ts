import { addons } from '@storybook/manager-api';
  import myTheme from './myTheme.js'
  
  addons.setConfig({
    theme: myTheme,
  });