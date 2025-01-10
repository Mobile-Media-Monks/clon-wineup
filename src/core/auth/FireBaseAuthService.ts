import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { FirebaseAuthInterface } from '../@types/models/AuthInterface';

export class FireBaseAuthService implements FirebaseAuthInterface {
  async signIn(
    email: string,
    password: string,
  ): Promise<FirebaseAuthTypes.UserCredential> {
    return await auth().signInWithEmailAndPassword(email, password);
  }

  async signOut(): Promise<void> {
    return await auth().signOut();
  }

  async getCurrentUser(): Promise<FirebaseAuthTypes.User | null> {
    return auth().currentUser;
  }

  async getToken(): Promise<string | null> {
    const user = auth().currentUser;
    if (user) {
      return await user.getIdToken();
    }
    return null;
  }
}
