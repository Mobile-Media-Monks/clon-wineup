import { buildStyles } from '@/theme';

export default buildStyles((theme, helpers) => ({
  container: {
    backgroundColor: theme.colors.theme.wine.one,
    flex: 1,
  },
  headerImage: {
    width: 526 * helpers.metrics.scaleCoefficient,
    height: 152 * helpers.metrics.scaleCoefficient,
    position: 'absolute',
    top: -10 * helpers.metrics.scaleCoefficient,
    left: -68 * helpers.metrics.scaleCoefficient,
    zIndex: 1,
  },
  formContainer: {
    backgroundColor: theme.colors.secondary.background,
    borderTopLeftRadius: 40 * helpers.metrics.scaleCoefficient,
    borderTopRightRadius: 40 * helpers.metrics.scaleCoefficient,
    height: helpers.metrics.screenHeight,
    flex: 1,
    zIndex: 2,
  },
  scrollView: {
    padding: 20 * helpers.metrics.scaleCoefficient,
    borderTopLeftRadius: 40 * helpers.metrics.scaleCoefficient,
    borderTopRightRadius: 40 * helpers.metrics.scaleCoefficient,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 20 * helpers.metrics.scaleCoefficient,
    paddingHorizontal: 20 * helpers.metrics.scaleCoefficient,
    borderTopLeftRadius: 40 * helpers.metrics.scaleCoefficient,
    borderTopRightRadius: 40 * helpers.metrics.scaleCoefficient,
  },
  inputsContainer: {
    marginTop: 20 * helpers.metrics.scaleCoefficient,
    marginBottom: 24 * helpers.metrics.scaleCoefficient,
  },
  emailRecovery: {
    position: 'absolute',
    right: -8 * helpers.metrics.scaleCoefficient,
    bottom: -8 * helpers.metrics.scaleCoefficient,
  },
}));
