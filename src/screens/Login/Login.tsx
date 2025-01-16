import React from 'react';
import { Image, ImageStyle, View } from 'react-native';
import { ScreenProps } from '@/navigation/types';
import Screens from '@navigation/screens';
import Divider from './components/Divider/Divider';
import Header from './components/Header/Header';
import { GradientBackground } from '@/components';
import LoginForm from './LoginForm';
import { useLogin } from './hooks/useLogin';
import { Theme } from '@/core/@types/theme';
import { images } from '@/theme';
import { t } from 'i18next';
import loginStyle from './login.style';
import { useStyles } from '@/theme/hooks/useStyles';

type LoginProps = ScreenProps<Screens.Login>;

const Login = ({ navigation }: LoginProps) => {
  const styles = useStyles(loginStyle);
  const {
    isHandlingLogin,
    firebaseEmailLoginError,
    handleLoginWithEmailAndPassword,
  } = useLogin(navigation);

  return (
    <View style={styles.container}>
      <Image
        source={images.header_line}
        style={styles.headerImage as ImageStyle}
      />
      <GradientBackground />
      <Header title={t('login.title')} theme={Theme.WINE} />
      <View style={styles.formContainer}>
        <LoginForm
          theme={Theme.WINE}
          isHandlingLogin={isHandlingLogin}
          handleLogin={handleLoginWithEmailAndPassword}
          setFormError={firebaseEmailLoginError}
        />

        <Divider />
      </View>
    </View>
  );
};

export default Login;
