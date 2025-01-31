import { Alert } from 'react-native';
import repositories from '@/core/repositories';
import { useCallback, useState } from 'react';

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const user = repositories.tokens.getCurrentUserSelector();

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      await repositories.user.loginWithEmail(email, password);
      Alert.alert('Logged successfully');
    } catch (error) {
      console.error('Login failed:', error);
      Alert.alert('Login failed');
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await repositories.user.logout();
      Alert.alert('Logged out');
    } catch (error) {
      console.error('Login failed:', error);
      Alert.alert('Logged failed');
    }
  }, []);

  return { loading, login, logout, user };
};
