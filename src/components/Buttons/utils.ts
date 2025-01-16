import { ButtonTypes, IconButtonType } from './enum';
import { Theme } from '@/core/@types/theme';
import { AppTheme } from '@/theme/ThemeProvider/types';
import { addAlpha } from '@/utils/commons';

export const getGradientsColors = (
  colors: AppTheme['colors'],
  theme: Theme,
  variant: ButtonTypes | IconButtonType,
) => {
  const gradientColors = {
    primary: [
      colors.theme[theme].one,
      addAlpha(colors.theme[theme].one, 0.3),
      addAlpha(colors.theme[theme].one, 0.6),
    ],
    secondary: [
      colors.theme[theme].three,
      addAlpha(colors.theme[theme].three, 0.3),
      addAlpha(colors.theme[theme].three, 0.6),
    ],
    link: [],
  };
  return gradientColors[variant];
};
