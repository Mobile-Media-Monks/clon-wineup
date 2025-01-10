import { useState } from 'react';
import { loginUser, logoutUser } from '@/core/rest/services/authentication';
import { Alert } from 'react-native';
import { TokenStorage } from '@/core/rest/services/storage';
import { useTokenStorage } from '@/hooks/useTokenStorage';

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { tokens, setStoredTokens, clearStoredTokens } = useTokenStorage();

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const tokens = await loginUser(email, password);
      setStoredTokens(tokens);
    } catch (error) {
      console.error('Login failed:', error);
      Alert.alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    const logoutToken = TokenStorage.getLogoutToken();
    if (logoutToken) {
      try {
        await logoutUser(logoutToken);
        clearStoredTokens();
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }
  };

  return { tokens, loading, login, logout };
};
