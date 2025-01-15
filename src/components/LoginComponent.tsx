import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { View, Button } from 'react-native';
import { Text } from '@/components';

const LoginComponent = () => {
  const { login, logout, loading, user } = useAuth();
  const email = 'walter.lambardi+12@mediamonks.com';
  const password = 'waltmonk';

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <View>
      {user?.current_user?.name ? (
        <View>
          <Text variant="title-primary-h5">{`User ${user?.current_user?.name} Logged in`}</Text>
          <Button title="Logout" onPress={logout} />
        </View>
      ) : (
        <Button
          title={loading ? 'Logging in...' : 'Login'}
          onPress={handleLogin}
          disabled={loading}
        />
      )}
    </View>
  );
};

export default LoginComponent;
