import React, { forwardRef, useState } from 'react';
import {
  Control,
  Controller,
  FieldValues,
  useFormContext,
} from 'react-hook-form';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import CustomTextInput from '@/components/FormInput/components/CustomTextInput';
import { FormInputTypes } from '@/components/FormInput/enum';
import { Theme } from '@/core/@types/theme';

interface FormInputProps<T extends FieldValues> {
  control: Control<T>;
  name: string;
  label?: string;
  options?: Array<{ label: string; value: string }>;
  variant: FormInputTypes;
  theme: Theme;
  description?: string;
  containerStyle?: StyleProp<ViewStyle>;
  customValidation?: (value: string) => Promise<boolean>;
  customValidationMessage?: string;
  placeholder?: string;
  returnKeyType?: TextInputProps['returnKeyType'];
  keyboardType?: TextInputProps['keyboardType'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  textContentType?: TextInputProps['textContentType'];
  maxLength?: number;
  onSubmitEditing?: () => void;
  disabled?: boolean;
  autoFocus?: boolean;
  url?: string;
  showKeyboard?: boolean;
  onFocus?: () => void;
  onClear?: () => void;
  modalTimeTitle?: string;
}

// eslint-disable-next-line react/display-name
const FormInput = forwardRef<TextInput, FormInputProps<FieldValues>>(
  (
    {
      control,
      name,
      placeholder,
      customValidation,
      customValidationMessage,
      // options,
      variant,
      label,
      theme,
      containerStyle,
      returnKeyType,
      keyboardType,
      maxLength,
      onSubmitEditing,
      autoFocus = false,
      showKeyboard = true,
      onFocus = () => {},
      onClear = () => {},
      ...props
    },
    ref,
  ) => {
    const [isCustomValidating, setIsCustomValidating] = useState(false);
    const [isCustomValid, setIsCustomValid] = useState<boolean | null>(null);
    const [prevValue, setPrevValue] = useState<string | null>(null);

    const formContext = useFormContext();

    if (!formContext) {
      console.warn('WRAP FORM WITH PROVIDER');
      return null;
    }

    const {
      resetField,
      setError,
      trigger,
      formState: { errors },
    } = formContext;

    const handleBlur = async (onBlur: () => void, value: string) => {
      onBlur();
      if (customValidation) {
        if (value !== prevValue) {
          const isValid = await trigger?.(name as string);
          if (isValid && customValidation) {
            setIsCustomValidating(true);
            const customValid = await customValidation(value);
            setIsCustomValidating(false);
            setIsCustomValid(customValid);
            setPrevValue(value);
            if (!customValid) {
              setErrorMessage();
            }
          }
        } else {
          if (!isCustomValid) {
            setErrorMessage();
          }
        }
      }
    };

    const clearField = () => {
      onClear();
      resetField(name);
    };

    const handleOnChange = (onChange: (txt: string) => void, text: string) => {
      if (text === '') {
        onClear();
      }
      onChange(text);
      if (isCustomValid) {
        setIsCustomValid(false);
        setErrorMessage();
      }
    };

    const setErrorMessage = () => {
      setError(name, {
        type: 'manual',
        message: customValidationMessage || 'Extra validation failed',
      });
    };

    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onBlur, value, onChange } }) => {
          switch (variant) {
            case FormInputTypes.TEXT:
            case FormInputTypes.PASSWORD:
            case FormInputTypes.TEXTAREA:
            case FormInputTypes.SEARCH:
              return (
                <CustomTextInput
                  showSoftInputOnFocus={showKeyboard}
                  label={label}
                  placeholder={placeholder}
                  returnKeyType={returnKeyType}
                  keyboardType={keyboardType}
                  maxLength={maxLength}
                  onChangeText={(text: string) =>
                    handleOnChange(onChange, text)
                  }
                  onBlur={() => handleBlur(onBlur, value)}
                  value={value}
                  isCustomValidating={isCustomValidating}
                  isCustomValid={isCustomValid}
                  resetField={clearField}
                  errorMessage={errors[name]?.message as string}
                  ref={ref}
                  variant={variant}
                  containerStyle={containerStyle}
                  theme={theme}
                  onSubmitEditing={onSubmitEditing}
                  autoFocus={autoFocus}
                  onFocus={onFocus}
                  {...props}
                />
              );
            case FormInputTypes.DROPDOWN:
              return <></>;
            case FormInputTypes.CHECKBOX:
              return <></>;
            case FormInputTypes.SWITCH:
              return <></>;
            case FormInputTypes.DATE_PICKER:
              return <></>;
            case FormInputTypes.TIME_PICKER:
              return <></>;
            default:
              return <View />;
          }
        }}
      />
    );
  },
);

export default FormInput;
