import { Alert } from 'react-native';
import repositories from '@/core/repositories';
import { useCallback, useEffect, useState } from 'react';
import { AuthUserResponse } from '@/core/@types/models/User';

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<AuthUserResponse | undefined>(undefined);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    repositories.user
      .loginWithEmail(email, password)
      .then(res => {
        setUser(res);
        Alert.alert('Logged successfully');
      })
      .catch(err => {
        console.error('Login failed:', err);
        Alert.alert('Login failed');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const logout = useCallback(async () => {
    repositories.user
      .logout()
      .then(() => {
        Alert.alert('Logged out');
        setUser({} as AuthUserResponse);
      })
      .catch(err => {
        console.log('err', err);
        Alert.alert('Logged failed');
      });
  }, []);

  useEffect(() => {
    if (repositories.tokens.getToken()) {
      setUser(repositories.tokens.getToken() as AuthUserResponse);
    }
  }, []);

  return { user, loading, login, logout };
};
