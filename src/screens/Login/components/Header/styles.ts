import { buildStyles } from '@/theme';

export default buildStyles((_, helpers) => ({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24 * helpers.metrics.scaleCoefficient,
    minHeight: 52 * helpers.metrics.scaleCoefficient,
    position: 'relative',
    zIndex: 1,
  },
  leftElement: {
    position: 'absolute',
    left: 20 * helpers.metrics.scaleCoefficient,
  },
  rightElement: {
    position: 'absolute',
    right: 20 * helpers.metrics.scaleCoefficient,
  },
  title: {
    textAlign: 'center',
  },
}));
