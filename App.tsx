import React from 'react';
import i18n from '@/application/i18next';
import { I18nextProvider } from 'react-i18next';
import { initDIContainer } from '@infrastructure/dependencyInjection/DIContainer';
import AppNavigation from '@/presentation/screens';

initDIContainer();

function App(): React.JSX.Element {
  return (
    <I18nextProvider i18n={i18n}>
      <AppNavigation />
    </I18nextProvider>
  );
}

export default App;
