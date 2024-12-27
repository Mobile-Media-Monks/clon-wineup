import { typography, colors, metrics } from '@/presentation/themes';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    padding: 16 * metrics.scaleCoefficient,
    marginVertical: 8 * metrics.scaleCoefficient,
    backgroundColor: colors.primary.white,
    borderRadius: 8 * metrics.scaleCoefficient,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8 * metrics.scaleCoefficient,
    elevation: 5 * metrics.scaleCoefficient,
  },
  header: {
    flexDirection: 'row',
  },
  flag: {
    width: 50 * metrics.scaleCoefficient,
    height: 30 * metrics.scaleCoefficient,
    borderRadius: 4,
    marginRight: 16 * metrics.scaleCoefficient,
  },
  name: {
    ...typography.h3,
  },
  region: {
    ...typography.bodyLRegular,
    color: 'gray',
  },
  capital: {
    ...typography.bodySRegular,
    marginTop: 4,
  },
  population: {
    ...typography.bodySRegular,
    marginTop: 4,
  },
  area: {
    ...typography.bodySRegular,
    marginTop: 4,
  },
});
