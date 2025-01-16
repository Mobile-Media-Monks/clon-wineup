import { metrics } from '@/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 24 * metrics.scaleCoefficient,
    marginVertical: 24 * metrics.scaleCoefficient,
  },
  dividerCenter: {
    paddingHorizontal: 10 * metrics.scaleCoefficient,
  },
});
