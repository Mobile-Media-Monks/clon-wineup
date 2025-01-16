import { buildStyles, metrics, typography } from '@/theme';

export default buildStyles(theme => ({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24 * metrics.scaleCoefficient,
    minHeight: 52 * metrics.scaleCoefficient,
    position: 'relative',
    zIndex: 1,
  },
  leftElement: {
    position: 'absolute',
    left: 20 * metrics.scaleCoefficient,
  },
  rightElement: {
    position: 'absolute',
    right: 20 * metrics.scaleCoefficient,
  },
  title: {
    ...typography.headline4,
    color: theme.colors.theme.wine.four,
    textAlign: 'center',
  },
}));
