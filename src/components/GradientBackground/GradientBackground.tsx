import { StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useThemeContext } from '@/theme/ThemeProvider';

interface GradientBackgroundProps {
  colors?: (string | number)[];
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ colors }) => {
  const { theme: themeContext } = useThemeContext();
  const appColors = themeContext?.colors;
  const gradientColors = colors ?? appColors.gradient.wine2;
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <LinearGradient
        colors={gradientColors}
        style={styles.backgroundGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default GradientBackground;
