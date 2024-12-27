import { typography } from '@/presentation/themes';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    ...typography.h1,
  },
  subtitle: {
    ...typography.bodyLMedium,
  },
});
