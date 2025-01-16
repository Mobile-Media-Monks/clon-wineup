import React from 'react';

import { AppTheme, ThemeVariant } from './types';
import { Context, getThemeByVariant } from '../constants';

const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [variant] = React.useState<ThemeVariant>(ThemeVariant.default);
  const theme = React.useMemo<AppTheme>(
    () => getThemeByVariant(variant),
    [variant],
  );

  return (
    <Context.Provider value={{ theme, variant }}>{children}</Context.Provider>
  );
};

export const useThemeContext = () => {
  const context = React.useContext(Context);
  return context;
};

export default Provider;
