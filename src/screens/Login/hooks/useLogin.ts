/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useMemo, useCallback } from 'react';
import { DISABLED } from '@/components/FormInput/constants';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Theme } from '@/core/@types/theme';
import { addAlpha } from '@/utils/commons';
import { useThemeContext } from '@/theme/ThemeProvider';
import { LoginData } from '../types';

export const useLogin = (navigation: NavigationProp<ParamListBase>) => {
  const isHandlingLogin = false;
  const [firebaseEmailLoginError, setFirebaseEmailLoginError] = useState(false);
  const { theme: themeContext } = useThemeContext();
  const colors = themeContext?.colors;

  const loginMethodNameColor = useMemo(
    () =>
      isHandlingLogin
        ? addAlpha(colors.theme[Theme.WINE].four, DISABLED)
        : colors.theme[Theme.WINE].four,
    [isHandlingLogin],
  );

  const handleLoginWithEmailAndPassword = useCallback(
    async (data: LoginData) => {
      // TODO
    },
    [],
  );

  return {
    isHandlingLogin,
    firebaseEmailLoginError,
    loginMethodNameColor,
    handleLoginWithEmailAndPassword,
  };
};
