import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { CheckCircle, Search } from '@/theme/svgs';
import { useCustomTextInput } from '@/components/FormInput/components/CustomTextInput/hooks/useCustomTextInput';
import PasswordToggle from '@/components/FormInput/components/CustomTextInput/components/PasswordToggle';
import CharCounter from '@/components/FormInput/components/CustomTextInput/components/CharCounter';
import ResetInput from '@/components/FormInput/components/CustomTextInput/components/ResetInput';
import InputValidationStatus from '@/components/FormInput/components/InputValidationStatus';
import InputLabel from '@/components/FormInput/components/InputLabel';
import InputDescription from '@/components/FormInput/components/InputDescription';
import { FormInputTypes } from '@/components/FormInput/enum';
import {
  BORDER_OPACITY,
  DISABLED,
  TEXT_OPACITY,
} from '@/components/FormInput/constants';
import componentStyle from './customTextInput.style';
import { Theme } from '@/core/@types/theme';
import { addAlpha } from '@/utils/commons';
import { useStyles } from '@/theme/hooks/useStyles';
import { useThemeContext } from '@/theme/ThemeProvider';
import { ErrorMessageType } from '../../types';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  description?: string;
  errorMessage?: ErrorMessageType;
  isCustomValidating?: boolean;
  isCustomValid?: boolean | null;
  maxLength?: number;
  disabled?: boolean;
  resetField?: () => void;
  theme?: Theme;
  variant?: FormInputTypes;
  containerStyle?: StyleProp<ViewStyle>;
}

// eslint-disable-next-line react/display-name
const CustomTextInput = forwardRef<TextInput, CustomTextInputProps>(
  (
    {
      label,
      description,
      errorMessage,
      isCustomValidating = false,
      isCustomValid = null,
      maxLength,
      value,
      multiline,
      disabled = false,
      theme = Theme.WOOD,
      variant = FormInputTypes.TEXT,
      containerStyle = {},
      onChangeText,
      onBlur,
      resetField,
      ...props
    },
    ref,
  ) => {
    const { theme: themeContext } = useThemeContext();
    const colors = themeContext?.colors;
    const { isFocused, setIsFocused, showPassword, setShowPassword, rotate } =
      useCustomTextInput({
        isPassword: variant === FormInputTypes.PASSWORD,
        isCustomValidating,
      });

    const styles = useStyles(componentStyle);

    const inputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => ({
      ...inputRef.current,
      focus: () => {
        inputRef.current?.focus();
      },
      blur: () => {
        inputRef.current?.blur();
      },
    }));

    const resetAndFocusField = () => {
      resetField?.();
      inputRef?.current?.focus();
    };

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          if (!disabled) {
            inputRef.current?.focus();
          }
        }}>
        <View style={[styles.container, containerStyle]}>
          <InputLabel label={label} theme={theme} disabled={disabled} />
          <View
            style={[
              styles.inputContainer,
              {
                borderColor: isFocused
                  ? colors.theme[theme].four
                  : addAlpha(colors.theme[theme].four, BORDER_OPACITY),
              },
              variant === FormInputTypes.TEXTAREA
                ? styles.textAreaContainer
                : {},
              disabled ? styles.disabledInputContainer : {},
            ]}>
            {variant === FormInputTypes.SEARCH && (
              <View style={styles.searchIcon}>
                <Search
                  fill={
                    isFocused
                      ? addAlpha(colors.theme[theme].four, 0.6)
                      : addAlpha(colors.theme[theme].four, 0.4)
                  }
                />
              </View>
            )}

            {(variant === FormInputTypes.TEXT ||
              variant === FormInputTypes.TEXTAREA ||
              variant === FormInputTypes.PASSWORD ||
              variant === FormInputTypes.SEARCH) && (
              <TextInput
                style={[
                  styles.textInput,
                  variant === FormInputTypes.TEXTAREA ? styles.textArea : {},
                  {
                    color: disabled
                      ? addAlpha(colors.theme[theme].four, TEXT_OPACITY)
                      : colors.theme[theme].four,
                  },
                ]}
                placeholderTextColor={
                  disabled
                    ? addAlpha(colors.theme[theme].four, DISABLED)
                    : addAlpha(colors.theme[theme].four, 0.6)
                }
                secureTextEntry={!showPassword}
                onFocus={() => setIsFocused?.(true)}
                onBlur={e => {
                  setIsFocused?.(false);
                  onBlur?.(e);
                }}
                onChangeText={onChangeText}
                multiline={multiline || variant === FormInputTypes.TEXTAREA}
                ref={inputRef}
                editable={!disabled}
                value={value}
                maxLength={maxLength}
                {...props}
              />
            )}

            {isCustomValid && !errorMessage && (
              <CheckCircle fill={colors.theme[theme].four} />
            )}

            {variant === FormInputTypes.PASSWORD && (
              <PasswordToggle
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                theme={theme}
              />
            )}

            <ResetInput
              variant={variant}
              theme={theme}
              value={value}
              resetAndFocusField={resetAndFocusField}
              hasError={!!errorMessage}
            />

            {variant === FormInputTypes.TEXTAREA && maxLength && (
              <CharCounter
                value={value}
                maxLength={maxLength}
                theme={theme}
                disabled={disabled}
              />
            )}
          </View>

          <View style={styles.validationContainer}>
            <InputValidationStatus
              isCustomValidating={isCustomValidating}
              errorMessage={errorMessage}
              rotate={rotate}
              theme={theme}
            />

            <InputDescription
              description={description}
              theme={theme}
              disabled={disabled}
              hasError={!!errorMessage}
              isCustomValidating={isCustomValidating}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  },
);

export default CustomTextInput;
