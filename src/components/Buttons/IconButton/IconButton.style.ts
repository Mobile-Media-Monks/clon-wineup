import { metrics } from '@/theme';
import { StyleSheet } from 'react-native';
import { ButtonState, IconButtonType } from '../enum';
import { CONTAINER_OPACITY } from '../constants';
import { Theme } from '@/core/@types/theme';
import { addAlpha } from '@/utils/commons';
import { AppTheme } from '@/theme/ThemeProvider/types';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10 * metrics.scaleCoefficient,
    alignSelf: 'center',
    zIndex: 1,
  },
});

export const sizeStyles = StyleSheet.create({
  large: {
    borderRadius: 16 * metrics.scaleCoefficient,
    height: 56 * metrics.scaleCoefficient,
    width: 56 * metrics.scaleCoefficient,
  },
  small: {
    borderRadius: 12 * metrics.scaleCoefficient,
    height: 40 * metrics.scaleCoefficient,
    width: 40 * metrics.scaleCoefficient,
  },
  medium: {
    borderRadius: 12 * metrics.scaleCoefficient,
    height: 48 * metrics.scaleCoefficient,
    width: 48 * metrics.scaleCoefficient,
  },
});

export const getContainerStyle = (
  colors: AppTheme['colors'],
  theme: Theme,
  variant: IconButtonType,
  state: ButtonState,
) => {
  const secondaryCommon = {
    backgroundColor: addAlpha(colors.theme[theme].four, CONTAINER_OPACITY),
  };
  const buttonTheme = {
    primary: {
      default: {
        backgroundColor: colors.theme[theme].three,
      },
      pressed: {
        backgroundColor: colors.theme[theme].four,
      },
      loading: {
        backgroundColor: colors.theme[theme].three,
      },
      disabled: {
        backgroundColor: colors.theme[theme].three + CONTAINER_OPACITY,
      },
    },
    secondary: {
      default: {
        ...secondaryCommon,
      },
      pressed: {
        ...secondaryCommon,
      },
      loading: {
        ...secondaryCommon,
      },
      disabled: {
        ...secondaryCommon,
      },
    },
  };
  return buttonTheme[variant][state];
};

export const getIconColor = (
  colors: AppTheme['colors'],
  theme: Theme,
  variant: IconButtonType,
  state: ButtonState,
) => {
  const iconColors = {
    primary: {
      default: colors.theme[theme].one,
      pressed: colors.theme[theme].one,
      loading: colors.theme[theme].one,
      disabled: addAlpha(colors.theme[theme].four, 0.4),
    },
    secondary: {
      default: colors.theme[theme].four,
      pressed: colors.theme[theme].four,
      loading: colors.theme[theme].four,
      disabled: addAlpha(colors.theme[theme].four, 0.4),
    },
  };
  return iconColors[variant][state];
};
