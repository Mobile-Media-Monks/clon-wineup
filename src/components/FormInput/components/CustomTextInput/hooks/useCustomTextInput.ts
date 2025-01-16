import { Animated } from 'react-native';
import { useEffect, useRef, useState } from 'react';

interface UseCustomTextInputProps {
  isPassword: boolean;
  isCustomValidating: boolean;
}

export const useCustomTextInput = ({
  isPassword,
  isCustomValidating,
}: UseCustomTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(!isPassword);

  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isCustomValidating) {
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ).start();
    } else {
      rotateAnim.stopAnimation();
      rotateAnim.setValue(0);
    }
  }, [rotateAnim, isCustomValidating]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return { isFocused, setIsFocused, showPassword, setShowPassword, rotate };
};
