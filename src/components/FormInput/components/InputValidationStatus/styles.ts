import { buildStyles } from '@/theme';

export default buildStyles((_, helpers) => ({
  rowContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    paddingLeft: 5 * helpers.metrics.scaleCoefficient,
    letterSpacing: -0.1,
  },
  validating: {
    letterSpacing: -0.1,
  },
  marginIcon: {
    marginRight: 5 * helpers.metrics.scaleCoefficient,
  },
  width: {
    width: 12 * helpers.metrics.scaleCoefficient,
  },
  height: {
    height: 12 * helpers.metrics.scaleCoefficient,
  },
}));
