import { StyleSheet } from 'react-native';

export enum ThemeVariant {
  default,
}

export type ThemeContext = {
  theme: Theme;
  variant: ThemeVariant;
};

export type StyleHelper = {
  screen: { width: number; height: number };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  global: StyleSheet.NamedStyles<{ horizontalSpaces: any }>;
  // scale: {
  //   v: (value: number) => number;
  //   h: (value: number) => number;
  //   mv: (value: number) => number;
  //   mh: (value: number) => number;
  // };
};

export type StyleBuilder<R> = (
  theme: Theme,
  helpers: StyleHelper,
) => R & StyleSheet.NamedStyles<R>;

/**
 * Represents a theme used to style the application.
 *
 * T-shirt sizes rule:
 * - Padding, radius, and margins should follow the t-shirt size principle for consistency.
 * - Example scale:
 *   - `small`: 4px
 *   - `normal`: 8px
 *   - `large`: 16px
 * - This approach ensures uniform spacing and rounded corners across the application.
 */

export type Theme = {
  // paddings: {
  //   small: number;
  //   normal: number;
  // };
  colors: {
    primary: {
      white: string;
      error: string;
      black: string;
      transparent: string;
    };
  };
  // radius: {
  //   normal: number;
  // };
  typography: {
    quicksand: {
      regular: string;
      bold: string;
      light: string;
      medium: string;
      semiBold: string;
    };
  };
};
