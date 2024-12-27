/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MainNavigation from '@navigation/MainNavigation';
import i18n from '@domain/i18next';
import { I18nextProvider } from 'react-i18next';

function App(): React.JSX.Element {
  return (
    <I18nextProvider i18n={i18n}>
      <MainNavigation />
    </I18nextProvider>
  );
}

export default App;
