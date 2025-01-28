import { useMemo, useCallback } from 'react';
import { DISABLED } from '@/components/FormInput/constants';
import { Theme } from '@/theme/ThemeProvider/types';
import { addAlpha } from '@/utils/commons';
import { useThemeContext } from '@/theme/ThemeProvider';
import { LoginData } from '../types';
import { useAuth } from '@/hooks/useAuth';

export const useLogin = () => {
  const { login, loading: isHandlingLogin } = useAuth();
  const { theme: themeContext } = useThemeContext();
  const colors = themeContext?.colors;

  const loginMethodNameColor = useMemo(
    () =>
      isHandlingLogin
        ? addAlpha(colors.theme[Theme.WINE].four, DISABLED)
        : colors.theme[Theme.WINE].four,
    [isHandlingLogin],
  );

  const handleLoginWithEmailAndPassword = useCallback((data: LoginData) => {
    login(data.email, data.password);
  }, []);

  return {
    isHandlingLogin,
    loginMethodNameColor,
    handleLoginWithEmailAndPassword,
  };
};
