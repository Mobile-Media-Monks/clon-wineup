import { buildStyles } from '@/theme';
import { TextStyle } from 'react-native';
import { TextStyleVariant } from './types';

export const styles = buildStyles<{
  [key in TextStyleVariant]: TextStyle;
}>(theme => ({
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
    fontSize: 20,
  },
  h5: {
    fontSize: 16,
  },
  p: {
    fontSize: 14,
  },
  span: {
    fontSize: 12,
  },
  primary: {},
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
  white: {},
  error: {},
  gray: {},
}));
