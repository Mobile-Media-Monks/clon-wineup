import { StyleSheet } from 'react-native';
import metrics from './metrics';

export const Fonts = {
  Onest: {
    regular: 'Onest-Regular',
    black: 'Onest-Black',
    bold: 'Onest-Bold',
    extraBold: 'Onest-ExtraBold',
    extraLight: 'Onest-ExtraLight',
    light: 'Onest-Light',
    medium: 'Onest-Medium',
    semiBold: 'Onest-SemiBold',
    thin: 'Onest-Thin',
    variable: 'Onest',
  },
};

const styles = StyleSheet.create({
  headline1: {
    fontFamily: Fonts.Onest.medium,
    fontSize: 40 * metrics.scaleCoefficient,
    lineHeight: 40 * metrics.scaleCoefficient,
    textTransform: 'none',
  },
  headline2: {
    fontFamily: Fonts.Onest.semiBold,
    fontSize: 32 * metrics.scaleCoefficient,
    lineHeight: 36 * metrics.scaleCoefficient,
    textTransform: 'none',
  },
  headline3: {
    fontFamily: Fonts.Onest.medium,
    fontSize: 24 * metrics.scaleCoefficient,
    lineHeight: 28 * metrics.scaleCoefficient,
    textTransform: 'none',
  },
  headline4: {
    fontFamily: Fonts.Onest.medium,
    fontSize: 20 * metrics.scaleCoefficient,
    lineHeight: 24 * metrics.scaleCoefficient,
    textTransform: 'none',
  },
  details: {
    fontFamily: 'NanumPen',
    fontSize: 24 * metrics.scaleCoefficient,
    lineHeight: 24 * metrics.scaleCoefficient,
    textTransform: 'none',
  },
  bodyLRegular: {
    fontFamily: Fonts.Onest.regular,
    fontSize: 16 * metrics.scaleCoefficient,
    lineHeight: 20 * metrics.scaleCoefficient,
    textTransform: 'none',
  },
  bodyLMedium: {
    fontFamily: Fonts.Onest.medium,
    fontSize: 16 * metrics.scaleCoefficient,
    lineHeight: 20 * metrics.scaleCoefficient,
    textTransform: 'none',
  },
  bodySRegular: {
    fontFamily: Fonts.Onest.regular,
    fontSize: 14 * metrics.scaleCoefficient,
    lineHeight: 18 * metrics.scaleCoefficient,
    textTransform: 'none',
  },
  bodySMedium: {
    fontFamily: Fonts.Onest.medium,
    fontSize: 14 * metrics.scaleCoefficient,
    lineHeight: 18 * metrics.scaleCoefficient,
    textTransform: 'none',
  },
  cta: {
    fontFamily: Fonts.Onest.medium,
    fontSize: 14 * metrics.scaleCoefficient,
    lineHeight: 16 * metrics.scaleCoefficient,
    textTransform: 'none',
  },
  caption: {
    fontFamily: Fonts.Onest.medium,
    fontSize: 12 * metrics.scaleCoefficient,
    lineHeight: 14 * metrics.scaleCoefficient,
    textTransform: 'none',
  },
  tag: {
    fontFamily: Fonts.Onest.semiBold,
    fontSize: 10 * metrics.scaleCoefficient,
    lineHeight: 12 * metrics.scaleCoefficient,
    textTransform: 'none',
  },
});

export default styles;
