import { useCallback, useEffect, useState } from 'react';
import { loginUser, logoutUser } from '@/core/rest/services/authentication';
import { Alert } from 'react-native';
import repositories from '@/core/repositories';

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const tokens = repositories.tokens.getToken();

  useEffect(() => {
    console.log('useAuth tokens', tokens);
  }, [tokens]);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const tokens = await loginUser(email, password);
      repositories.tokens.saveToken(tokens);
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
