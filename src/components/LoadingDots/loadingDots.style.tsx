import { metrics } from '@/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5 * metrics.scaleCoefficient,
  },
  dot: {
    width: 6 * metrics.scaleCoefficient,
    height: 6 * metrics.scaleCoefficient,
    marginHorizontal: 2 * metrics.scaleCoefficient,
    borderRadius: 3 * metrics.scaleCoefficient,
  },
});
