import { useCallback, useState } from 'react';
import { loginUser, logoutUser } from '@/core/rest/services/authentication';
import { Alert } from 'react-native';
import dataStore from '@/core/store';

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const tokens = dataStore.tokenDataStore.useStore();

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const tokens = await loginUser(email, password);
      dataStore.tokenDataStore.saveToken(tokens);
    } catch (error) {
      console.error('Login failed:', error);
      Alert.alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = useCallback(async () => {
    if (tokens?.logout_token) {
      try {
        await logoutUser(tokens.logout_token);
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }
  }, [tokens]);

  return { tokens, loading, login, logout };
};
