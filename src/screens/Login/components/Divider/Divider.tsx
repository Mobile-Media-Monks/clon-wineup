import { View } from 'react-native';
import React from 'react';
import { DividerLeft, DividerCenter, DividerRight } from '@/theme/svgs';
import { useThemeContext } from '@/theme/ThemeProvider';
import styles from './divider.style';

const Divider: React.FC = () => {
  const { theme: themeContext } = useThemeContext();
  const colors = themeContext?.colors;
  return (
    <View style={styles.container}>
      <DividerLeft stroke={colors.theme.wood.four} />
      <DividerCenter
        fill={colors.theme.wood.four}
        style={styles.dividerCenter}
      />
      <DividerRight stroke={colors.theme.wood.four} />
    </View>
  );
};

export default Divider;
