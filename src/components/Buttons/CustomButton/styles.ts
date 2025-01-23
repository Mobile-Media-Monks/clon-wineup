import { buildStyles } from '@/theme';
import { StyleSheet } from 'react-native';
import { ButtonTypes, IconPosition } from '../enum';
import { SvgProps } from 'react-native-svg';
import { ButtonState } from '../enum';
import { BORDER_OPACITY, CONTAINER_OPACITY } from '../constants';
import { addAlpha } from '@/utils/commons';
import { AppTheme, Theme } from '@/theme/ThemeProvider/types';

export const customButtonStyle = buildStyles((theme, helpers) => ({
  animatedContainer: {
    backgroundColor: 'transparent',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10 * helpers.metrics.scaleCoefficient,
    alignSelf: 'center',
  },
  centerLabel: {
    alignItems: 'center',
    flex: 1,
  },
  centerIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 10 * helpers.metrics.scaleCoefficient,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  contentContainerAlign: {
    justifyContent: 'space-between',
  },
  contentContainerCenterAlign: {
    justifyContent: 'center',
  },
  title: {
    letterSpacing: -0.2 * helpers.metrics.scaleCoefficient,
    color: theme.colors.secondary.white,
  },
  linkUnderline: {
    height: 1.2 * helpers.metrics.scaleCoefficient,
    marginTop: 2 * helpers.metrics.scaleCoefficient,
    alignSelf: 'stretch',
  },
  paddingLeft: {
    paddingLeft: 10 * helpers.metrics.scaleCoefficient,
  },
  paddingRight: {
    paddingRight: 10 * helpers.metrics.scaleCoefficient,
  },
  noFullWidth: {
    width: 170 * helpers.metrics.scaleCoefficient,
  },
}));

export const customSizeStyles = buildStyles((_, helpers) => ({
  large: {
    width: '100%',
    minWidth: 170 * helpers.metrics.scaleCoefficient,
    paddingVertical: 20 * helpers.metrics.scaleCoefficient,
    borderRadius: 16 * helpers.metrics.scaleCoefficient,
    paddingHorizontal: 16 * helpers.metrics.scaleCoefficient,
  },
  medium: {
    minWidth: 120 * helpers.metrics.scaleCoefficient,
    paddingVertical: 10 * helpers.metrics.scaleCoefficient,
    borderRadius: 12 * helpers.metrics.scaleCoefficient,
    paddingHorizontal: 16 * helpers.metrics.scaleCoefficient,
  },
  small: {
    paddingVertical: 6 * helpers.metrics.scaleCoefficient,
    borderRadius: 10 * helpers.metrics.scaleCoefficient,
    paddingHorizontal: 10 * helpers.metrics.scaleCoefficient,
  },
}));

export const fontSizeStyles = {
  large: 'medium-transparent-p',
  medium: 'medium-transparent-p',
  small: 'medium-transparent-span',
};

export const getContainerStyle = (
  colors: AppTheme['colors'],
  theme: Theme,
  variant: ButtonTypes,
  state: ButtonState,
) => {
  const secondaryCommon = {
    borderWidth: 1,
    borderColor: colors.theme[theme].four,
  };
  const buttonTheme = {
    primary: {
      default: {
        backgroundColor: colors.theme[theme].four,
      },
      pressed: {
        backgroundColor: colors.theme[theme].three,
      },
      loading: {
        backgroundColor: colors.theme[theme].four,
      },
      disabled: {
        backgroundColor: addAlpha(colors.theme[theme].four, CONTAINER_OPACITY),
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
        borderColor: addAlpha(colors.theme[theme].four, BORDER_OPACITY),
      },
    },
    link: {
      default: {},
      pressed: {},
      loading: {},
      disabled: {},
    },
  };
  return StyleSheet.create(buttonTheme[variant][state]);
};

export const getTextStyle = (
  center: boolean,
  iconPosition: IconPosition,
  icon?: React.FC<SvgProps>,
) => {
  if (icon && center) {
    if (iconPosition === 'left') {
      return { right: 8 };
    } else if (iconPosition === 'right') {
      return { left: 8 };
    }
  }
  return null;
};
