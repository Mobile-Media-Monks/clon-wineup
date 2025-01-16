import React, { useCallback, useMemo } from 'react';
import {
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  Pressable,
} from 'react-native';
import { SvgProps, SvgUri } from 'react-native-svg';
import { LoadingDots } from '@/components';
import styles, {
  getContainerStyle,
  getIconColor,
  sizeStyles,
} from './IconButton.style';
import { metrics } from '@/theme';
import Animated, { AnimatedStyle } from 'react-native-reanimated';
import { IconButtonSize, IconButtonType } from '../enum';
import { getGradientsColors } from '../utils';
import { Theme } from '@/core/@types/theme';
import { useThemeContext } from '@/theme/ThemeProvider';
import { useButtonState } from '../hooks/useButtonState';

interface IconButtonProps {
  icon: React.FC<SvgProps> | string;
  iconSize?: number;
  iconColor?: string;
  iconStroke?: string;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  size?: IconButtonSize;
  theme: Theme;
  animated?: boolean;
  variant?: IconButtonType;
  loadingGradientColors?: string[];
  containerStyleAnimated?: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  iconSize = 10,
  iconColor,
  iconStroke,
  containerStyle = {},
  disabled = false,
  loading = false,
  onPress,
  size = IconButtonSize.LARGE,
  theme,
  variant = IconButtonType.PRIMARY,
  loadingGradientColors,
  containerStyleAnimated,
  animated = false,
}) => {
  const { theme: themeContext } = useThemeContext();
  const colors = themeContext?.colors;
  const buttonState = useButtonState(disabled, loading);

  const buttonStyles = useMemo(() => {
    return [
      styles.button,
      getContainerStyle(colors, theme, variant, buttonState),
      sizeStyles[size],
      containerStyle,
    ];
  }, [buttonState, containerStyle, size, theme, variant]);

  const renderIcon = useCallback(() => {
    if (Icon) {
      if (typeof Icon === 'string') {
        return (
          <SvgUri
            width={iconSize * metrics.scaleCoefficient}
            height={iconSize * metrics.scaleCoefficient}
            uri={Icon}
          />
        );
      } else {
        return (
          <Icon
            width={iconSize * metrics.scaleCoefficient}
            height={iconSize * metrics.scaleCoefficient}
            fill={
              iconColor ?? getIconColor(colors, theme, variant, buttonState)
            }
            stroke={iconStroke}
          />
        );
      }
    }
    return null;
  }, [Icon, buttonState, iconColor, iconSize, iconStroke, theme, variant]);

  const renderContent = useCallback(() => {
    return (
      <View>
        {loading ? (
          <LoadingDots
            loading={loading}
            loadingGradientColors={
              loadingGradientColors ??
              getGradientsColors(colors, theme, variant)
            }
          />
        ) : (
          renderIcon()
        )}
      </View>
    );
  }, [loading, renderIcon, loadingGradientColors, theme, variant]);

  if (animated) {
    return (
      <Pressable onPress={onPress} disabled={disabled || loading}>
        <Animated.View style={[buttonStyles, containerStyleAnimated]}>
          {renderContent()}
        </Animated.View>
      </Pressable>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}>
      {renderContent()}
    </TouchableOpacity>
  );
};

export default IconButton;
