import { buildStyles } from '@/theme';

export default buildStyles((_, helpers) => ({
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5 * helpers.metrics.scaleCoefficient,
  },
  dot: {
    width: 6 * helpers.metrics.scaleCoefficient,
    height: 6 * helpers.metrics.scaleCoefficient,
    marginHorizontal: 2 * helpers.metrics.scaleCoefficient,
    borderRadius: 3 * helpers.metrics.scaleCoefficient,
  },
}));
