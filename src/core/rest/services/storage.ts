//TODO: Remove this implementation when global state manager is available

import { CMSTokens, CurrentUser } from '@/core/@types/models/AuthInterface';
import { MMKV } from 'react-native-mmkv';
import { tokenChangeEmitter } from './eventEmitter';

export const storage = new MMKV();

const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  CSRF_TOKEN: 'csrf_token',
  LOGOUT_TOKEN: 'logout_token',
  CURRENT_USER: 'current_user',
} as const;

export const TokenStorage = {
  setTokens: (tokens: CMSTokens) => {
    storage.set(STORAGE_KEYS.ACCESS_TOKEN, tokens.access_token);
    storage.set(STORAGE_KEYS.CSRF_TOKEN, tokens.csrf_token);
    storage.set(STORAGE_KEYS.LOGOUT_TOKEN, tokens.logout_token);
    storage.set(STORAGE_KEYS.CURRENT_USER, JSON.stringify(tokens.current_user));
    tokenChangeEmitter.emit('tokensChanged');
  },

  clearTokens: () => {
    storage.delete(STORAGE_KEYS.ACCESS_TOKEN);
    storage.delete(STORAGE_KEYS.CSRF_TOKEN);
    storage.delete(STORAGE_KEYS.LOGOUT_TOKEN);
    storage.delete(STORAGE_KEYS.CURRENT_USER);
    tokenChangeEmitter.emit('tokensChanged');
  },

  subscribe: (listener: () => void) => {
    tokenChangeEmitter.on('tokensChanged', listener);
    return () => {
      tokenChangeEmitter.off('tokensChanged', listener);
    };
  },

  getTokens: (): CMSTokens | null => {
    const access_token = storage.getString(STORAGE_KEYS.ACCESS_TOKEN);
    const csrf_token = storage.getString(STORAGE_KEYS.CSRF_TOKEN);
    const logout_token = storage.getString(STORAGE_KEYS.LOGOUT_TOKEN);
    const current_user = storage.getString(STORAGE_KEYS.CURRENT_USER);

    if (!access_token || !csrf_token || !logout_token || !current_user) {
      return null;
    }

    return {
      access_token,
      csrf_token,
      logout_token,
      current_user: JSON.parse(current_user) as CurrentUser,
    };
  },
  getAccessToken: () => storage.getString(STORAGE_KEYS.ACCESS_TOKEN) || '',
  getCsrfToken: () => storage.getString(STORAGE_KEYS.CSRF_TOKEN) || '',
  getLogoutToken: () => storage.getString(STORAGE_KEYS.LOGOUT_TOKEN) || '',
  getCurrentUser: (): CurrentUser | null => {
    const user = storage.getString(STORAGE_KEYS.CURRENT_USER);
    return user ? JSON.parse(user) : null;
  },
};
