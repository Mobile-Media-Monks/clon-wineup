import { buildStyles, metrics, typography } from '@/theme';
import { StyleSheet } from 'react-native';
import { ButtonTypes, IconPosition } from '../enum';
import { SvgProps } from 'react-native-svg';
import { ButtonState } from '../enum';
import { BORDER_OPACITY, CONTAINER_OPACITY } from '../constants';
import { Theme } from '@/core/@types/theme';
import { addAlpha } from '@/utils/commons';
import { AppTheme } from '@/theme/ThemeProvider/types';

export const customButtonStyle = buildStyles(theme => ({
  animatedContainer: {
    backgroundColor: 'transparent',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10 * metrics.scaleCoefficient,
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
    gap: 10 * metrics.scaleCoefficient,
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
    ...typography.cta,
    letterSpacing: -0.2 * metrics.scaleCoefficient,
    color: theme.colors.secondary.white,
  },
  linkUnderline: {
    height: 1.2 * metrics.scaleCoefficient,
    marginTop: 2 * metrics.scaleCoefficient,
    alignSelf: 'stretch',
  },
  paddingLeft: {
    paddingLeft: 10 * metrics.scaleCoefficient,
  },
  paddingRight: {
    paddingRight: 10 * metrics.scaleCoefficient,
  },
  noFullWidth: {
    width: 170 * metrics.scaleCoefficient,
  },
}));

export const sizeStyles = StyleSheet.create({
  large: {
    width: '100%',
    minWidth: 170 * metrics.scaleCoefficient,
    paddingVertical: 20 * metrics.scaleCoefficient,
    borderRadius: 16 * metrics.scaleCoefficient,
    paddingHorizontal: 16 * metrics.scaleCoefficient,
  },
  medium: {
    minWidth: 120 * metrics.scaleCoefficient,
    paddingVertical: 10 * metrics.scaleCoefficient,
    borderRadius: 12 * metrics.scaleCoefficient,
    paddingHorizontal: 16 * metrics.scaleCoefficient,
  },
  small: {
    paddingVertical: 6 * metrics.scaleCoefficient,
    borderRadius: 10 * metrics.scaleCoefficient,
    paddingHorizontal: 10 * metrics.scaleCoefficient,
  },
});

export const fontSizeStyles = StyleSheet.create({
  large: {
    ...typography.cta,
  },
  medium: {
    ...typography.cta,
  },
  small: {
    ...typography.caption,
  },
});

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
      return { right: 8 * metrics.scaleCoefficient };
    } else if (iconPosition === 'right') {
      return { left: 8 * metrics.scaleCoefficient };
    }
  }
  return null;
};
