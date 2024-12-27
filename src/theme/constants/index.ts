import React from 'react';
import { Theme, ThemeContext, ThemeVariant } from '../ThemeProvider/types';

const mainTheme: Theme = {
  colors: {
    primary: {
      white: '#FFFFFF',
      error: '#C13415',
      black: '#000000',
      transparent: 'rgba(0, 0, 0, 0)',
    },
  },
  typography: {
    quicksand: {
      regular: 'Quicksand-Regular',
      bold: 'Quicksand-Bold',
      light: 'Quicksand-Light',
      medium: 'Quicksand-Medium',
      semiBold: 'Quicksand-SemiBold',
    },
  },
};

export function getThemeByVariant(variant: ThemeVariant) {
  switch (variant) {
    case ThemeVariant.default:
      return mainTheme;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Context = React.createContext<ThemeContext>({} as any);
