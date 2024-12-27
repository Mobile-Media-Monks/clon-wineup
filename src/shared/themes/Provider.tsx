import React from 'react';

import { Theme, ThemeVariant } from './types';
import { Context, getThemeByVariant } from '../constants/constants';

const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [variant] = React.useState<ThemeVariant>(ThemeVariant.default);
  const theme = React.useMemo<Theme>(
    () => getThemeByVariant(variant),
    [variant],
  );

  return (
    <Context.Provider value={{ theme, variant }}>{children}</Context.Provider>
  );
};

export default Provider;
