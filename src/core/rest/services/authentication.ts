import { FireBaseAuthService } from '@/core/auth/FireBaseAuthService';
import endpoints from '@/core/rest/api';
import { Client } from '../request-handler';
import { TokenDataStoreState } from '@/core/store/types';
import repositories from '@/core/repositories';

const api = new Client();
const fbAuthService = new FireBaseAuthService();

export const loginUser = async (
  email: string,
  password: string,
): Promise<TokenDataStoreState> => {
  // Sign in with Firebase
  await fbAuthService.signIn(email, password);

  // Get the user Firebase token
  const firebaseToken = await fbAuthService.getToken();

  if (!firebaseToken) {
    throw new Error('Firebase token is not available');
  }

  // Request body for CMS Login
  const body = {
    'login-type': 'email',
    'login-data': {
      email,
      'firebase-token': firebaseToken,
      password,
    },
  };

  // login request to the CMS
  return await api.post<TokenDataStoreState>(
    endpoints.CMS.LOGIN_FIREBASE,
    body,
  );
};

export const refreshToken = async (): Promise<TokenDataStoreState> => {
  console.log('🚀 Refresh tokens ...');
  // Get firebase token
  const firebaseToken = await fbAuthService.getToken();
  // Get user firebase data
  const user = await fbAuthService.getCurrentUser();

  if (!firebaseToken || !user) {
    throw new Error('Firebase token or user data is not available');
  }

  const body = {
    'login-type': 'social-network',
    'login-data': {
      email: user.email,
      'firebase-token': firebaseToken,
    },
  };

  return await api.post<TokenDataStoreState>(
    endpoints.CMS.LOGIN_FIREBASE,
    body,
  );
};

export const logoutUser = async (logoutToken: string): Promise<void> => {
  // Send the logout request to the CMS
  await api.post(endpoints.CMS.LOGOUT(logoutToken), {});

  // Sign out from Firebase
  await fbAuthService.signOut();

  repositories.tokens.saveToken({
    current_user: undefined,
    access_token: undefined,
    csrf_token: undefined,
    logout_token: undefined,
  });
};
