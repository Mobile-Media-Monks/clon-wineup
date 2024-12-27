import { StyleSheet } from 'react-native';

export const Fonts = {
  Quicksand: {
    regular: 'Quicksand-Regular',
    bold: 'Quicksand-Bold',
    light: 'Quicksand-Light',
    medium: 'Quicksand-Medium',
    semiBold: 'Quicksand-SemiBold',
  },
};

const typography = StyleSheet.create({
  h1: {
    fontFamily: Fonts.Quicksand.bold,
    fontSize: 38,
    lineHeight: 40,
  },
  h2: {
    fontFamily: Fonts.Quicksand.semiBold,
    fontSize: 32,
    lineHeight: 36,
  },
  h3: {
    fontFamily: Fonts.Quicksand.medium,
    fontSize: 24,
    lineHeight: 28,
  },
  h4: {
    fontFamily: Fonts.Quicksand.medium,
    fontSize: 20,
    lineHeight: 24,
  },
  bodyLRegular: {
    fontFamily: Fonts.Quicksand.regular,
    fontSize: 16,
    lineHeight: 20,
  },
  bodyLMedium: {
    fontFamily: Fonts.Quicksand.medium,
    fontSize: 16,
    lineHeight: 20,
  },
  bodySRegular: {
    fontFamily: Fonts.Quicksand.regular,
    fontSize: 14,
    lineHeight: 18,
  },
  bodySMedium: {
    fontFamily: Fonts.Quicksand.medium,
    fontSize: 14,
    lineHeight: 18,
  },
  cta: {
    fontFamily: Fonts.Quicksand.medium,
    fontSize: 14,
    lineHeight: 16,
  },
  caption: {
    fontFamily: Fonts.Quicksand.medium,
    fontSize: 12,
    lineHeight: 14,
  },
  tag: {
    fontFamily: Fonts.Quicksand.semiBold,
    fontSize: 10,
    lineHeight: 12,
  },
});

export default typography;
