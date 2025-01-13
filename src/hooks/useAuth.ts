import { useCallback, useState } from 'react';
import { loginUser, logoutUser } from '@/core/rest/services/authentication';
import { Alert } from 'react-native';
import { useTokenStorage } from '@/hooks/useTokenStorage';
import repositories from '@/core/repositories';

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { tokens, setStoredTokens, clearStoredTokens } = useTokenStorage();
  // const tokensRepo = repositories.tokens.getToken();

  // useEffect(() => {
  //   console.log('tokensRepo', JSON.stringify(tokensRepo));
  // }, [tokensRepo])

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const tokens = await loginUser(email, password);
      setStoredTokens(tokens);
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
        await logoutUser(tokens?.logout_token);
        clearStoredTokens();
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }
  }, [tokens]);

  // const logout = async () => {
  //   const logoutToken = TokenStorage.getLogoutToken();
  //   console.log('LOGOUT STATE TOKENS:', JSON.stringify(tokensX));
  //   if (logoutToken) {
  //     try {
  //       await logoutUser(logoutToken);
  //       clearStoredTokens();
  //     } catch (error) {
  //       console.error('Logout failed:', error);
  //     }
  //   }
  // };

  return { tokens, loading, login, logout };
};
