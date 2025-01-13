import { useEffect, useState } from 'react';
import { TokenStorage } from '@/core/rest/services/storage';
import { TokenDataStoreState } from '@/core/store/types';

export const useTokenStorage = () => {
  const [tokens, setTokens] = useState<TokenDataStoreState | null>(
    TokenStorage.getTokens(),
  );

  useEffect(() => {
    const updateTokens = () => {
      setTokens(TokenStorage.getTokens());
    };

    const unsubscribe = TokenStorage.subscribe(updateTokens);

    return () => {
      unsubscribe();
    };
  }, []);

  const setStoredTokens = (newTokens: TokenDataStoreState) => {
    TokenStorage.setTokens(newTokens);
  };

  const clearStoredTokens = () => {
    TokenStorage.clearTokens();
  };

  return {
    tokens,
    setStoredTokens,
    clearStoredTokens,
  };
};
