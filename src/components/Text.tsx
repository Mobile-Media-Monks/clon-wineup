import { buildStyles } from '@/theme';
import { useStyles } from '@/theme/hooks/useStyles';
import React from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';

type TextColorVariant = 'primary' | 'white' | 'error' | 'gray';
type TextFontVariant = 'title' | 'subtitle' | 'regular';
type TextFontSizeVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';

type TextStyleVariant =
  | TextFontVariant
  | TextColorVariant
  | TextFontSizeVariant;

const _styles = buildStyles<{
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

export type TextVariant =
  `${TextFontVariant}-${TextColorVariant}-${TextFontSizeVariant}`;

type Props = React.PropsWithChildren<
  TextProps & {
    variant?: TextVariant;
  }
>;

const Text: React.FC<Props> = ({
  children,
  variant = 'regular-primary-p',
  style,
  ...props
}) => {
  const styles = useStyles(_styles);
  const styleArray = React.useMemo(() => {
    const textStyles = variant
      .split('-')
      .map(styleKey => styles[styleKey as keyof typeof styles]);
    return [...textStyles, style];
  }, [variant, style]);

  return (
    <RNText style={styleArray} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
