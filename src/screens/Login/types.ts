import { Theme } from '@/theme/ThemeProvider/types';

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginFormProps {
  theme: Theme;
  isHandlingLogin: boolean;
  handleLogin: (data: LoginData) => void;
  setFormError: boolean;
}

export interface LoginHeaderProps {
  title: string;
  LeftElement?: React.ReactElement;
  RightElement?: React.ReactElement;
  theme: Theme;
}
