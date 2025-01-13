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
