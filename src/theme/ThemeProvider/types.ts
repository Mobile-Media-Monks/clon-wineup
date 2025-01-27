import { StyleSheet } from 'react-native';
import metrics from '../metrics';

export enum ThemeVariant {
  default,
}

export type ThemeContext = {
  theme: AppTheme;
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
  metrics: typeof metrics;
};

export type StyleBuilder<R> = (
  theme: AppTheme,
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

export type AppTheme = {
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
      whiteWine1: string;
      whiteWine2: string;
      whiteWine3: string;
    };
    theme: {
      wine: Palette;
      leaf: Palette;
      wood: Palette;
      white: Palette;
    };
    fortifiedWine: string;
    sparklingWine: string;
    secondary: {
      white: string;
      background: string;
      error: string;
      black: string;
      transparent: string;
      imagesBackground: string;
    };
    gradient: {
      wine0: string[];
      wine1: string[];
      wine2: string[];
      wine3: string[];
      leaf1: string[];
      leaf2: string[];
      leaf3: string[];
      wood1: string[];
      theme: {
        wood: GradientQuestionOption;
        wine: GradientQuestionOption;
        leaf: GradientQuestionOption;
      };
    };
    introGradient: {
      left: string[];
      right: string[];
    };
    backButton: string;
    transparent: string;
    stackCards: Record<string, string[]>;
    wineJourney: {
      locked: {
        wine: string;
        leaf: string;
        wood: string;
        white: string;
      };
      play: {
        leaf: WineJourneyPlayColors;
        wine: WineJourneyPlayColors & { cardsStart: string; cardsEnd: string };
        wood: WineJourneyPlayColors & { cardsStart: string; cardsEnd: string };
        white: WineJourneyPlayColors & { cardsStart: string; cardsEnd: string };
      };
      container: {
        leaf: string;
        wine: {
          start: string;
          end: string;
        };
        wood: {
          start: string;
          end: string;
        };
      };
      bonusTriviaButton: string;
    };
    imageOverlay: string[];
    overlay: string;
    searchWineIcon: string;
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
    onest: {
      regular: string;
      black: string;
      bold: string;
      extraBold: string;
      extraLight: string;
      light: string;
      medium: string;
      semiBold: string;
      thin: string;
      variable: string;
    };
  };
};

type Palette = {
  one: string;
  two: string;
  three: string;
  four: string;
};

type GradientQuestionOption = {
  questionOption: {
    left: string;
    right: string;
  };
  questionOptionSelected: {
    left: string;
    right: string;
  };
};

type WineJourneyPlayColors = {
  start: string;
  end: string;
  starCenter: string;
  starStart: string;
  starEnd: string;
  centerStart: string;
  centerEnd: string;
};

export enum Theme {
  LEAF = 'leaf',
  WINE = 'wine',
  WOOD = 'wood',
  WHITE = 'white',
}

export enum TypeTheme {
  LIGHT = 'light',
  DARK = 'dark',
}
