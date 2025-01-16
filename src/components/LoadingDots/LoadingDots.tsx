import React, { useEffect, useState, useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import styles from './loadingDots.style';
import { getGradientsColors } from '../Buttons/utils';
import { ButtonTypes } from '../Buttons/enum';
import { Theme } from '@/core/@types/theme';
import { useThemeContext } from '@/theme/ThemeProvider';

interface LoadingDotsProps {
  containerStyle?: StyleProp<ViewStyle>;
  dotStyle?: StyleProp<ViewStyle>;
  loadingGradientColors?: string[];
  loading: boolean;
}

const LoadingDots: React.FC<LoadingDotsProps> = ({
  containerStyle = {},
  dotStyle = {},
  loadingGradientColors,
  loading,
}) => {
  const { theme: themeContext } = useThemeContext();
  const colors = themeContext?.colors;
  const loadingColors =
    loadingGradientColors ??
    getGradientsColors(colors, Theme.WINE, ButtonTypes.PRIMARY);
  const [activeColorIndex, setActiveColorIndex] = useState<number>(0);

  useEffect(() => {
    if (loading && loadingGradientColors) {
      const interval = setInterval(() => {
        setActiveColorIndex(
          prevIndex => (prevIndex + 1) % loadingGradientColors.length,
        );
      }, 200);
      return () => clearInterval(interval);
    }
  }, [loading, loadingGradientColors]);

  const dots = useMemo(() => {
    return loadingColors.map((_, index) => (
      <View
        key={index}
        style={[
          styles.dot,
          dotStyle,
          {
            backgroundColor:
              loadingColors[(activeColorIndex + index) % loadingColors.length],
          },
        ]}
      />
    ));
  }, [activeColorIndex, dotStyle, loadingGradientColors]);

  return <View style={[styles.loadingContainer, containerStyle]}>{dots}</View>;
};

export default LoadingDots;
