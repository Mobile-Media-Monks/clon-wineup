import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Eye, EyeSlash } from '@/theme/svgs';
import { DISABLED } from '@/components/FormInput/constants';
import { Theme } from '@/core/@types/theme';
import { addAlpha } from '@/utils/commons';
import { useThemeContext } from '@/theme/ThemeProvider';

interface PasswordToggleProps {
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  theme: Theme;
  disabled?: boolean;
}

const PasswordToggle: React.FC<PasswordToggleProps> = ({
  showPassword,
  setShowPassword,
  theme,
  disabled = false,
}) => {
  const { theme: themeContext } = useThemeContext();
  const colors = themeContext?.colors;
  const iconColor = disabled
    ? addAlpha(colors.theme[theme].four, DISABLED)
    : colors.theme[theme].four;

  return (
    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
      {showPassword ? (
        <Eye fill={iconColor} />
      ) : (
        <EyeSlash fill={colors.theme[theme].four} />
      )}
    </TouchableOpacity>
  );
};

export default PasswordToggle;
