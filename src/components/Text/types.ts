import { TextProps } from 'react-native';

export type TextColorVariant = 'primary' | 'white' | 'error' | 'gray';
export type TextFontVariant = 'title' | 'subtitle' | 'regular';
export type TextFontSizeVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'p'
  | 'span';

export type TextStyleVariant =
  | TextFontVariant
  | TextColorVariant
  | TextFontSizeVariant;

export type TextVariant =
  `${TextFontVariant}-${TextColorVariant}-${TextFontSizeVariant}`;

export interface Props extends TextProps {
  variant?: TextVariant;
}
