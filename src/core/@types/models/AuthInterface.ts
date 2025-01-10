import type { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface FirebaseAuthInterface {
  signIn(
    email: string,
    password: string,
  ): Promise<FirebaseAuthTypes.UserCredential>;
  signOut(): Promise<void>;
  getCurrentUser(): Promise<FirebaseAuthTypes.User | null>;
  getToken(): Promise<string | null>;
}

export interface CurrentUser {
  uid: string;
  roles: string[];
  name: string;
}

export interface CMSTokens {
  current_user: CurrentUser;
  access_token: string;
  csrf_token: string;
  logout_token: string;
}
