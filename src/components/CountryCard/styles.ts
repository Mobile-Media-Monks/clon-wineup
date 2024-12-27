import { buildStyles } from '@/theme';
import metrics from '@/theme/metrics';

export default buildStyles(theme => ({
  card: {
    padding: 16 * metrics.scaleCoefficient,
    marginVertical: 8 * metrics.scaleCoefficient,
    backgroundColor: theme.colors.primary.white,
    borderRadius: 8 * metrics.scaleCoefficient,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8 * metrics.scaleCoefficient,
    elevation: 5 * metrics.scaleCoefficient,
  },
  header: {
    flexDirection: 'row',
    gap: 10,
  },
  flag: {
    width: 50 * metrics.scaleCoefficient,
    height: 30 * metrics.scaleCoefficient,
  },
  region: {
    color: 'gray',
  },
  capital: {
    marginTop: 4,
  },
  population: {
    marginTop: 4,
  },
  area: {
    marginTop: 4,
  },
}));
