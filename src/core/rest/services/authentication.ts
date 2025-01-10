import { FireBaseAuthService } from '@/core/auth/FireBaseAuthService';
import endpoints from '@/core/rest/api';
import { CMSTokens } from '@/core/@types/models/AuthInterface';
import { Client } from '../request-handler';

const api = new Client();
const fbAuthService = new FireBaseAuthService();

export const loginUser = async (
  email: string,
  password: string,
): Promise<CMSTokens> => {
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
  return await api.post<CMSTokens>(endpoints.CMS.LOGIN_FIREBASE, body);
};

export const refreshToken = async (): Promise<CMSTokens> => {
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

  return await api.post<CMSTokens>(endpoints.CMS.LOGIN_FIREBASE, body);
};

export const logoutUser = async (logoutToken: string): Promise<void> => {
  // Send the logout request to the CMS
  await api.post(endpoints.CMS.LOGOUT(logoutToken), {});

  // Sign out from Firebase
  await fbAuthService.signOut();
};
