import { useEffect, useState } from 'react';
import { TokenStorage } from '@/core/rest/services/storage';
import { CMSTokens } from '@/core/@types/models/AuthInterface';

export const useTokenStorage = () => {
  const [tokens, setTokens] = useState<CMSTokens | null>(
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

  const setStoredTokens = (newTokens: CMSTokens) => {
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
