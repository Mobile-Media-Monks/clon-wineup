import { useCallback } from 'react';
import { LoginData } from '../types';
import { useAuth } from '@/hooks/useAuth';

export const useLogin = () => {
  const { login, loading: isHandlingLogin } = useAuth();

  const handleLoginWithEmailAndPassword = useCallback((data: LoginData) => {
    login(data.email, data.password);
  }, []);

  return {
    isHandlingLogin,
    handleLoginWithEmailAndPassword,
  };
};
