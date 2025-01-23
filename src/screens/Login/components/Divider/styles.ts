import { buildStyles } from '@/theme';

export default buildStyles((_, helpers) => ({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 24 * helpers.metrics.scaleCoefficient,
    marginVertical: 24 * helpers.metrics.scaleCoefficient,
  },
  dividerCenter: {
    paddingHorizontal: 10 * helpers.metrics.scaleCoefficient,
  },
}));
