import { Dimensions } from 'react-native';
import { useContext, useMemo } from 'react';
// import {
//   scale,
//   verticalScale,
//   moderateScale,
//   moderateVerticalScale,
// } from 'react-native-size-matters';

import { Context } from '../constants';
import { StyleBuilder, StyleHelper } from '../ThemeProvider/types';

const { width, height } = Dimensions.get('screen');

const STYLE_HELPERS: StyleHelper = {
  screen: { height, width },
  // scale: {
  //   // h: scale,
  //   // v: verticalScale,
  //   // mh: moderateScale,
  //   // mv: moderateVerticalScale,
  // },
  global: {
    horizontalSpaces: {
      paddingHorizontal: 16,
    },
  },
};

export function useStyles<T extends StyleBuilder<ReturnType<T>>>(
  builder: T,
): ReturnType<T> {
  const context = useContext(Context);

  return useMemo(
    () => builder(context.theme, STYLE_HELPERS),
    [builder, context.theme],
  );
}
