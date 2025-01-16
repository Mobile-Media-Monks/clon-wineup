import { buildStyles, metrics, typography } from '@/theme';

export default buildStyles(theme => ({
  container: {
    backgroundColor: theme.colors.theme.wine.one,
    flex: 1,
  },
  headerImage: {
    width: 526 * metrics.scaleCoefficient,
    height: 152 * metrics.scaleCoefficient,
    position: 'absolute',
    top: -10 * metrics.scaleCoefficient,
    left: -68 * metrics.scaleCoefficient,
    zIndex: 1,
  },
  formContainer: {
    backgroundColor: theme.colors.secondary.background,
    borderTopLeftRadius: 40 * metrics.scaleCoefficient,
    borderTopRightRadius: 40 * metrics.scaleCoefficient,
    height: metrics.screenHeight,
    flex: 1,
    zIndex: 2,
  },
  scrollView: {
    padding: 20 * metrics.scaleCoefficient,
    borderTopLeftRadius: 40 * metrics.scaleCoefficient,
    borderTopRightRadius: 40 * metrics.scaleCoefficient,
  },
  loginMethodName: {
    ...typography.bodySMedium,
    color: theme.colors.theme.wine.four,
    marginTop: 8 * metrics.scaleCoefficient,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 20 * metrics.scaleCoefficient,
    paddingHorizontal: 20 * metrics.scaleCoefficient,
    borderTopLeftRadius: 40 * metrics.scaleCoefficient,
    borderTopRightRadius: 40 * metrics.scaleCoefficient,
  },
  inputsContainer: {
    marginTop: 20 * metrics.scaleCoefficient,
    marginBottom: 24 * metrics.scaleCoefficient,
  },
  emailRecovery: {
    position: 'absolute',
    right: -8 * metrics.scaleCoefficient,
    bottom: -8 * metrics.scaleCoefficient,
  },
}));
