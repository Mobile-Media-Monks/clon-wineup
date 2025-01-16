import { buildStyles, metrics, typography } from '@/theme';

export default buildStyles(theme => ({
  rowContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    ...typography.caption,
    color: theme.colors.secondary.error,
    paddingLeft: 5 * metrics.scaleCoefficient,
    letterSpacing: -0.1,
  },
  validating: {
    ...typography.caption,
    letterSpacing: -0.1,
  },
  marginIcon: {
    marginRight: 5 * metrics.scaleCoefficient,
  },
}));
