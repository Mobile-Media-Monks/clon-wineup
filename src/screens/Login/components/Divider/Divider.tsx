import { View } from 'react-native';
import React from 'react';
import { DividerLeft, DividerCenter, DividerRight } from '@/theme/svgs';
import { useThemeContext } from '@/theme/ThemeProvider';
import dividerStyles from './styles';
import { useStyles } from '@/theme/hooks/useStyles';

const Divider: React.FC = () => {
  const { theme: themeContext } = useThemeContext();
  const styles = useStyles(dividerStyles);
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
