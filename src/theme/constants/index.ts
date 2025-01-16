import React from 'react';
import { AppTheme, ThemeContext, ThemeVariant } from '../ThemeProvider/types';

const mainTheme: AppTheme = {
  colors: {
    primary: {
      white: '#FFFFFF',
      error: '#C13415',
      black: '#000000',
      transparent: 'rgba(0, 0, 0, 0)',
      whiteWine1: '#FFFCEC',
      whiteWine2: '#FBF784',
      whiteWine3: '#E9C85E',
    },
    theme: {
      wine: {
        one: '#FFECED',
        two: '#FFA0BD',
        three: '#810066',
        four: '#57043B',
      },
      leaf: {
        one: '#F1FFEC',
        two: '#CDF546',
        three: '#425F0E',
        four: '#2C3210',
      },
      wood: {
        one: '#FFF1EB',
        two: '#FFB48A',
        three: '#7D4020',
        four: '#4B2400',
      },
      white: {
        one: '#FFFCEC',
        two: '#FBF784',
        three: '#E9CB5E',
        four: '#5C4C11',
      },
    },
    fortifiedWine: '#cbb3a6',
    sparklingWine: '#fefde6',
    secondary: {
      white: '#FFFFFF',
      background: '#F8F7F2',
      error: '#C13415',
      black: '#000000',
      transparent: 'rgba(0, 0, 0, 0)',
      imagesBackground: '#0000001A',
    },
    gradient: {
      wine0: ['#81006614', '#FFA0BD14'],
      wine1: ['#81006633', '#FFA0BD33'],
      wine2: ['#8100664D', '#FFA0BD4D'],
      wine3: ['#F3B8CC4D', '#81006633'],
      leaf1: ['#CDF54666', '#E6FAA466'],
      leaf2: ['#DCE9B0FF', '#CDF54666'],
      leaf3: ['#E1FF7A99', '#ACD81780'],
      wood1: ['#4B24004D', '#FFB48A4D'],
      theme: {
        wood: {
          questionOption: {
            left: '#FFFFFF',
            right: '#FFFFFF',
          },
          questionOptionSelected: {
            left: 'rgba(75, 36, 0, 0.3)',
            right: 'rgba(255, 180, 138, 0.3)',
          },
        },
        wine: {
          questionOption: {
            left: '#FFFFFF',
            right: '#FFFFFF',
          },
          questionOptionSelected: {
            left: 'rgba(129, 0, 102, 0.3)',
            right: 'rgba(255, 160, 189, 0.3)',
          },
        },
        leaf: {
          questionOption: {
            left: '#FFFFFF',
            right: '#FFFFFF',
          },
          questionOptionSelected: {
            left: 'rgba(225, 255, 122, 0.3)',
            right: 'rgba(230, 250, 164, 0.3)',
          },
        },
      },
    },
    introGradient: {
      left: [
        'rgba(129, 0, 102, 0.2)',
        'rgba(75, 36, 0, 0.3)',
        'rgba(205, 245, 70, 0.4)',
      ],
      right: [
        'rgba(255, 160, 189, 0.2)',
        'rgba(255, 180, 138, 0.3)',
        'rgba(230, 250, 164, 0.4)',
      ],
    },
    backButton: '#00000014',
    transparent: '#00000000',
    stackCards: {
      '0': ['#FFA0BD', '#FFA0BD'],
      '1': ['#810066', '#810066'],
      '2': ['#FBF784', '#FBF784'],
      '3': ['rgba(129, 0, 102, 0.12)', 'rgba(255, 160, 189, 0.12)'],
    },
    wineJourney: {
      locked: {
        wine: 'rgba(255, 160, 189, 0.3)',
        leaf: 'rgba(205, 245, 70, 0.3)',
        wood: 'rgba(255, 181, 139, 0.3)',
        white: 'rgba(251, 247, 132, 0.3)',
      },
      play: {
        leaf: {
          start: '#CDF546',
          end: '#DCF38C',
          starCenter: '#425F0E',
          starStart: '#CDF446',
          starEnd: '#F1FFEC',
          centerStart: '#2C3210',
          centerEnd: '#2C3210CC',
        },
        wine: {
          start: '#FFA0BD',
          end: '#FFC3D6',
          starCenter: '#57043B',
          starStart: '#FFA0BD',
          starEnd: '#FFDCDF',
          centerStart: '#57043B',
          centerEnd: '#57043BB2',
          cardsStart: '#FFB3CA',
          cardsEnd: '#FEEEEE',
        },
        wood: {
          start: '#FFB48A',
          end: '#FFDBC6',
          starCenter: '#4B2400',
          starStart: '#FFB48A',
          starEnd: '#FFF1EB',
          centerStart: '#4B2400',
          centerEnd: '#4B2400B2',
          cardsStart: '#FFB58C',
          cardsEnd: '#FFDAC5',
        },
        white: {
          start: '#FBF784',
          end: '#FFF9AD',
          starCenter: '#5C4C11',
          starStart: '#FBF784',
          starEnd: '#FFFCEC',
          centerStart: '#5C4C11',
          centerEnd: '#5C4C11B2',
          cardsStart: '#FCEB8C',
          cardsEnd: '#FEF6C5',
        },
      },
      container: {
        leaf: '#F6FFD7',
        wine: {
          start: '#F6FFD7',
          end: '#FEEEEE',
        },
        wood: {
          start: '#FEEEEE',
          end: '#FEF0EA',
        },
      },
      bonusTriviaButton: 'rgba(249,230,231,255)',
    },
    imageOverlay: ['#00000000', '#00000066'],
    overlay: '#00000080',
    searchWineIcon: '#E6E1DA',
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
