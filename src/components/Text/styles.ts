import { buildStyles } from '@/theme';
import { TextStyle } from 'react-native';
import { TextStyleVariant } from './types';

export const styles = buildStyles<{
  [key in TextStyleVariant]: TextStyle;
}>((theme, helpers) => ({
  h1: {
    fontSize: 50,
  },
  h2: {
    fontSize: 32,
  },
  h3: {
    fontSize: 26,
  },
  h4: {
    fontSize: 20 * helpers.metrics.scaleCoefficient,
    lineHeight: 24 * helpers.metrics.scaleCoefficient,
  },
  h5: {
    fontSize: 16 * helpers.metrics.scaleCoefficient,
    lineHeight: 20 * helpers.metrics.scaleCoefficient,
  },
  p: {
    fontSize: 14 * helpers.metrics.scaleCoefficient,
    lineHeight: 18 * helpers.metrics.scaleCoefficient,
  },
  span: {
    fontSize: 12 * helpers.metrics.scaleCoefficient,
    lineHeight: 14 * helpers.metrics.scaleCoefficient,
  },
  primary: {},
  wineFour: {
    color: theme.colors.theme.wine.four,
  },
  title: {
    fontWeight: '600',
    fontFamily: theme.typography.quicksand.bold,
  },
  regular: {
    fontWeight: '400',
    fontFamily: theme.typography.quicksand.regular,
  },
  subtitle: {
    fontWeight: '500',
    fontFamily: theme.typography.quicksand.light,
  },
  medium: {
    fontFamily: theme.typography.onest.medium,
    textTransform: 'none',
  },
  white: {},
  error: {
    color: theme.colors.secondary.error,
  },
  gray: {},
  transparent: {},
}));
