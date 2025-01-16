import React from 'react';
import { ScrollView, KeyboardAvoidingView, View } from 'react-native';
import { FormProvider } from 'react-hook-form';
import { FormInputTypes } from '@/components/FormInput/enum';
import { IconPosition } from '@/components/Buttons/enum';
import loginStyle from './login.style';
import { isiOS } from '@/utils/platform';
import { CustomButton, FormInput } from '@/components';
import { ChevronRight, EyeSlash } from '@/theme/svgs';
import { t } from 'i18next';
import { useStyles } from '@/theme/hooks/useStyles';
import { useLoginForm } from './hooks/useLoginForm';
import { LoginFormProps } from './types';

const LoginForm: React.FC<LoginFormProps> = ({
  theme,
  isHandlingLogin = false,
  handleLogin,
  setFormError,
}) => {
  const styles = useStyles(loginStyle);
  const {
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
  } = useLoginForm(setFormError, handleLogin);
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <FormProvider {...methods}>
      <KeyboardAvoidingView behavior={isiOS ? 'padding' : 'height'}>
        <ScrollView
          bounces={false}
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}>
          <View style={styles.inputsContainer}>
            <EyeSlash fill={colors.theme.wine.four} />
            <FormInput
              control={control}
              theme={theme}
              name="email"
              label={t('login.loginForm.email.label')}
              placeholder={t('login.loginForm.email.placeholder')}
              description={t('login.loginForm.email.description')}
              returnKeyType="next"
              keyboardType="email-address"
              autoCapitalize={'none'}
              textContentType={'emailAddress'}
              onSubmitEditing={() => focusNextField('password')}
              ref={el => (inputRefs.current.email = el)}
              variant={FormInputTypes.TEXT}
              disabled={isSubmitting || isHandlingLogin}
            />
            <FormInput
              control={control}
              theme={theme}
              name="password"
              label={t('login.loginForm.password.label')}
              placeholder={t('login.loginForm.password.placeholder')}
              returnKeyType="done"
              ref={el => (inputRefs.current.password = el)}
              variant={FormInputTypes.PASSWORD}
              onSubmitEditing={
                isDirty && isValid ? handleSubmit(onSubmit) : undefined
              }
              disabled={isSubmitting || isHandlingLogin}
            />
          </View>

          <CustomButton
            label={t('login.loginForm.submitBtn')}
            onPress={handleSubmit(onSubmit)}
            disabled={!isDirty || !isValid || hasErrors}
            loading={isSubmitting || isHandlingLogin}
            theme={theme}
            icon={ChevronRight}
            iconPosition={IconPosition.RIGHT}
            iconSize={9}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </FormProvider>
  );
};

export default LoginForm;
