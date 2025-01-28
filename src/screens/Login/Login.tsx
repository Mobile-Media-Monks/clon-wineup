import React from 'react';
import { Image, ImageStyle, View } from 'react-native';
import Divider from './components/Divider/Divider';
import Header from './components/Header/Header';
import { GradientBackground } from '@/components';
import LoginForm from './LoginForm';
import { useLogin } from './hooks/useLogin';
import { Theme } from '@/theme/ThemeProvider/types';
import { images } from '@/theme';
import { t } from 'i18next';
import loginStyle from './styles';
import { useStyles } from '@/theme/hooks/useStyles';

const Login = () => {
  const styles = useStyles(loginStyle);
  const { isHandlingLogin, handleLoginWithEmailAndPassword } = useLogin();

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
          setFormError={false}
        />
        <Divider />
      </View>
    </View>
  );
};

export default Login;
