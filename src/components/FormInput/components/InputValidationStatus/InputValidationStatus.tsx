import React from 'react';
import { View, Animated } from 'react-native';
import { Reload, InputErrorRounded } from '@/theme/svgs';
import { metrics } from '@/theme';
import componentStyle from './styles.ts';
import { Theme } from '@/theme/ThemeProvider/types';
import { addAlpha } from '@/utils/commons';
import { useStyles } from '@/theme/hooks/useStyles';
import { t } from 'i18next';
import { useThemeContext } from '@/theme/ThemeProvider';
import { ErrorMessageType } from '../../types';
import { Text } from '@/components';

interface InputValidationStatusProps {
  theme: Theme;
  isCustomValidating?: boolean;
  errorMessage?: ErrorMessageType;
  rotate?:
    | string
    | Animated.Value
    | Animated.AnimatedInterpolation<string | number>
    | Animated.WithAnimatedObject<Animated.AnimatedNode>;
}

const InputValidationStatus: React.FC<InputValidationStatusProps> = ({
  theme,
  isCustomValidating = false,
  errorMessage,
  rotate,
}) => {
  const { theme: themeContext } = useThemeContext();
  const colors = themeContext?.colors;
  const styles = useStyles(componentStyle);
  const getErrorMessage = (message: ErrorMessageType): string => {
    if (typeof message === 'string') {
      return message;
    }
    if (message && typeof message.message === 'string') {
      return message.message;
    }
    return 'An unknown error occurred';
  };

  return (
    <>
      {(isCustomValidating || !errorMessage) && (
        <View style={styles.rowContainer}>
          {isCustomValidating && rotate && (
            <>
              <Animated.View
                style={[
                  styles.marginIcon,
                  {
                    transform: [{ rotate }],
                  },
                ]}>
                <Reload
                  width={12 * metrics.scaleCoefficient}
                  height={12 * metrics.scaleCoefficient}
                />
              </Animated.View>
              <Text
                variant="medium-error-span"
                style={[
                  styles.validating,
                  {
                    color: addAlpha(colors.theme[theme].four, 0.8),
                  },
                ]}>
                {t('completeRegister.validating')}
              </Text>
            </>
          )}
        </View>
      )}
      {errorMessage && (
        <View style={styles.rowContainer}>
          <InputErrorRounded />
          <Text variant="medium-error-span" style={styles.errorMessage}>
            {errorMessage ? getErrorMessage(errorMessage) : null}
          </Text>
        </View>
      )}
    </>
  );
};

export default InputValidationStatus;
