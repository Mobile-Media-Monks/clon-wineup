import React, { useCallback, useMemo } from 'react';
import {
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { LoadingDots, Text } from '@/components';
import {
  customButtonStyle,
  fontSizeStyles,
  getContainerStyle,
  getTextStyle,
  customSizeStyles,
} from './styles';
import metrics from '@/theme/metrics';
import { AnimatedStyle, SharedValue } from 'react-native-reanimated';
import { ButtonSize, ButtonTypes, IconPosition } from '../enum';
import { getGradientsColors } from '../utils';
import { useThemeContext } from '@/theme/ThemeProvider';
import { useStyles } from '@/theme/hooks/useStyles';
import { useButtonState } from '../hooks/useButtonState';
import { addAlpha } from '@/utils/commons';
import { Theme } from '@/theme/ThemeProvider/types';
import { TextVariant } from '@/components/Text/types';

export interface CustomButtonProps {
  label?: string;
  icon?: React.FC<SvgProps>;
  iconPosition?: IconPosition;
  iconSize?: number;
  iconColor?: string;
  iconStroke?: string;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loadingGradientColors?: string[];
  titleStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  onPress?: () => void;
  variant?: ButtonTypes;
  size?: ButtonSize;
  animated?: boolean;
  containerStyleAnimated?: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
  titleStyleAnimated?: StyleProp<AnimatedStyle<StyleProp<TextStyle>>>;
  tintStyleAnimated?: SharedValue<string>;
  theme: Theme;
  fullWidth?: boolean;
  tintColor?: string;
  iconContainer?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}
const OPACITY_TITLE_DEFAULT = 0.4;

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  icon: Icon,
  iconPosition = IconPosition.LEFT,
  iconSize = 24,
  containerStyle = {},
  disabled = false,
  loadingGradientColors,
  tintColor,
  titleStyle = {},
  loading = false,
  onPress,
  variant = ButtonTypes.PRIMARY,
  size = ButtonSize.LARGE,
  titleStyleAnimated,
  theme,
  fullWidth = true,
  iconColor,
  iconStroke,
  iconContainer,
  contentContainerStyle,
}) => {
  const centerLabel =
    variant !== ButtonTypes.LINK && size === ButtonSize.LARGE && fullWidth;

  const { theme: themeContext } = useThemeContext();
  const colors = themeContext?.colors;
  const styles = useStyles(customButtonStyle);
  const sizeStyles = useStyles(customSizeStyles);
  const buttonState = useButtonState(disabled, loading);

  const mainTitleColor = useMemo(() => {
    if (tintColor) {
      return tintColor;
    }
    if (variant !== ButtonTypes.PRIMARY && !disabled) {
      return themeContext.colors.theme[theme].four;
    }
    if (disabled) {
      return addAlpha(colors.theme[theme].four, OPACITY_TITLE_DEFAULT);
    }
    return colors.theme[theme].one;
  }, [tintColor, variant, disabled, theme]);

  const buttonStyles = useMemo(() => {
    return [
      styles.button,
      getContainerStyle(colors, theme, variant, buttonState),
      variant !== ButtonTypes.LINK && sizeStyles[size],
      !fullWidth && styles.noFullWidth,
      containerStyle,
    ];
  }, [buttonState, containerStyle, fullWidth, size, theme, variant]);

  const textStyles = useMemo(() => {
    return [
      styles.title,
      { color: mainTitleColor },
      getTextStyle(centerLabel, iconPosition, Icon),
      titleStyle,
    ];
  }, [Icon, centerLabel, iconPosition, mainTitleColor, size, titleStyle]);

  const renderIcon = useCallback(() => {
    const leftIcon = iconPosition === IconPosition.LEFT;
    if (Icon) {
      return (
        <View
          style={[
            leftIcon ? styles.paddingRight : styles.paddingLeft,
            iconContainer,
          ]}>
          {
            <Icon
              width={iconSize * metrics.scaleCoefficient}
              height={iconSize * metrics.scaleCoefficient}
              fill={iconColor ?? mainTitleColor}
              stroke={iconStroke}
            />
          }
        </View>
      );
    }
    return null;
  }, [
    iconPosition,
    Icon,
    iconSize,
    iconColor,
    mainTitleColor,
    iconStroke,
    iconContainer,
  ]);

  const renderContent = useCallback(() => {
    if (loading && variant !== ButtonTypes.LINK) {
      return (
        <LoadingDots
          loading={loading}
          loadingGradientColors={
            loadingGradientColors || getGradientsColors(colors, theme, variant)
          }
        />
      );
    }
    return (
      <View
        style={[
          styles.contentContainer,
          Icon && !centerLabel && styles.contentContainerAlign,
          contentContainerStyle,
        ]}>
        {iconPosition === IconPosition.LEFT && renderIcon()}
        {label && (
          <View
            style={[
              centerLabel && styles.centerLabel,
              iconPosition === IconPosition.CENTER && styles.centerIcon,
            ]}>
            {iconPosition === IconPosition.CENTER && renderIcon()}
            {
              <Text
                variant={fontSizeStyles[size] as TextVariant}
                style={textStyles}>
                {label}
              </Text>
            }
            {iconPosition === IconPosition.CENTER_RIGHT && renderIcon()}
            {variant === ButtonTypes.LINK && !Icon ? (
              <View
                style={[
                  styles.linkUnderline,
                  { backgroundColor: mainTitleColor },
                ]}
              />
            ) : null}
          </View>
        )}
        {iconPosition === IconPosition.RIGHT && renderIcon()}
      </View>
    );
  }, [
    loading,
    variant,
    Icon,
    centerLabel,
    iconPosition,
    renderIcon,
    label,
    textStyles,
    titleStyleAnimated,
    mainTitleColor,
    loadingGradientColors,
    theme,
    contentContainerStyle,
  ]);

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

export default CustomButton;
