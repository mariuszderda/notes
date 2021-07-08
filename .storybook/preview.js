// import { withThemesProvider } from 'themeprovider-storybook';
// import { theme } from 'theme/mainTheme';
//
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
//
// export const decorators = [withThemesProvider(theme)];

import { addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

addDecorator((story) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </>
  );
});
