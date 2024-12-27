import React from 'react';
import { Theme, ThemeContext, ThemeVariant } from '../themes/types';

const mainTheme: Theme = {
  colors: { accent: '' },
};

export function getThemeByVariant(variant: ThemeVariant) {
  switch (variant) {
    case ThemeVariant.default:
      return mainTheme;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Context = React.createContext<ThemeContext>({} as any);
