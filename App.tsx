/* eslint-disable @typescript-eslint/no-require-imports */

import React from 'react';
import { I18nextProvider } from 'react-i18next';
import ThemeProvider from '@/theme/ThemeProvider';
import i18n from '@/core/i18next';
import AppNavigation from '@/navigation';
import { NavigationContainer } from '@react-navigation/native';

if (__DEV__) {
  require('./ReactotronConfig');
}

function App(): React.JSX.Element {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
