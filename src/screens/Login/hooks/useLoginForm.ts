import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import validator from 'validator';
import { t } from 'i18next';
import { LoginData } from '../types';
import { useThemeContext } from '@/theme/ThemeProvider';
import { TextInput } from 'react-native';

const LoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email(t('login.loginForm.email.invalid'))
    .required(t('login.loginForm.email.required'))
    .test({
      name: 'is-email',
      message: t('login.loginForm.email.invalid'),
      test: value => validator.isEmail(value),
    }),
  password: yup.string().required(t('login.loginForm.password.required')),
});

export const useLoginForm = (
  setFormError: boolean,
  handleLogin: (data: LoginData) => void,
) => {
  const { theme: themeContext } = useThemeContext();
  const colors = themeContext?.colors;
  const inputRefs = useRef<Record<keyof LoginData, TextInput | null>>({
    email: null,
    password: null,
  });

  const methods = useForm<LoginData>({
    resolver: yupResolver(LoginFormSchema),
    mode: 'all',
  });

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = methods;

  const onSubmit = async (data: LoginData) => handleLogin(data);

  const focusNextField = (nextField: keyof LoginData) =>
    inputRefs.current[nextField]?.focus();

  useEffect(() => {
    if (setFormError) {
      const fields: Array<keyof LoginData> = ['email', 'password'];
      fields.forEach(field => {
        setError(field, {
          type: 'manual',
          message:
            field === 'password'
              ? t('login.loginForm.wrongEmailPassword')
              : ' ',
        });
      });
    }
  }, [setError, setFormError]);

  useEffect(() => {
    inputRefs.current = {
      email: null,
      password: null,
    };
  }, []);

  return {
    colors,
    control,
    errors,
    inputRefs,
    isDirty,
    isSubmitting,
    isValid,
    methods,
    focusNextField,
    handleSubmit,
    onSubmit,
  };
};
