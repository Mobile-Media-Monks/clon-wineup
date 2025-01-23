import { ButtonState, IconButtonType } from '../enum';
import { CONTAINER_OPACITY } from '../constants';
import { addAlpha } from '@/utils/commons';
import { AppTheme, Theme } from '@/theme/ThemeProvider/types';
import { buildStyles } from '@/theme';

export default buildStyles((_, helpers) => ({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10 * helpers.metrics.scaleCoefficient,
    alignSelf: 'center',
    zIndex: 1,
  },
}));

export const customSizeStyles = buildStyles((_, helpers) => ({
  large: {
    borderRadius: 16 * helpers.metrics.scaleCoefficient,
    height: 56 * helpers.metrics.scaleCoefficient,
    width: 56 * helpers.metrics.scaleCoefficient,
  },
  small: {
    borderRadius: 12 * helpers.metrics.scaleCoefficient,
    height: 40 * helpers.metrics.scaleCoefficient,
    width: 40 * helpers.metrics.scaleCoefficient,
  },
  medium: {
    borderRadius: 12 * helpers.metrics.scaleCoefficient,
    height: 48 * helpers.metrics.scaleCoefficient,
    width: 48 * helpers.metrics.scaleCoefficient,
  },
}));

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
