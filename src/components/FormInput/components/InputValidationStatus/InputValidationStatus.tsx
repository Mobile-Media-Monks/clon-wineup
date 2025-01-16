import React from 'react';
import { View, Text, Animated } from 'react-native';
import { Reload, InputErrorRounded } from '@/theme/svgs';
import { metrics } from '@/theme';
// import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import componentStyle from './inputValidationStatus.style';
import { Theme } from '@/core/@types/theme';
import { addAlpha } from '@/utils/commons';
import { useStyles } from '@/theme/hooks/useStyles';
import { t } from 'i18next';
import { useThemeContext } from '@/theme/ThemeProvider';
import { ErrorMessageType } from '../../types';

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
          <Text style={styles.errorMessage}>
            {errorMessage ? getErrorMessage(errorMessage) : null}
          </Text>
        </View>
      )}
    </>
  );
};

export default InputValidationStatus;
