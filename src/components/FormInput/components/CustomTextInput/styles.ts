import { buildStyles } from '@/theme';

export default buildStyles((theme, helpers) => ({
  container: {
    marginBottom: 24 * helpers.metrics.scaleCoefficient,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1 * helpers.metrics.scaleCoefficient,
    borderRadius: 14 * helpers.metrics.scaleCoefficient,
    paddingHorizontal: 14 * helpers.metrics.scaleCoefficient,
    backgroundColor: theme.colors.secondary.white,
    height: 52 * helpers.metrics.scaleCoefficient,
    overflow: 'hidden',
  },
  textAreaContainer: {
    height: 162 * helpers.metrics.scaleCoefficient,
    alignItems: 'flex-start',
    paddingVertical: 8 * helpers.metrics.scaleCoefficient,
  },
  disabledInputContainer: {
    backgroundColor: 'transparent',
  },
  searchIcon: {
    paddingRight: 8 * helpers.metrics.scaleCoefficient,
  },
  validationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 8 * helpers.metrics.scaleCoefficient,
  },
  textInput: {
    flex: 1,
    fontFamily: theme.typography.onest.medium,
    fontSize: 16 * helpers.metrics.scaleCoefficient,
    letterSpacing: -0.2 * helpers.metrics.scaleCoefficient,
    textTransform: 'none',
  },
  textArea: {
    textAlignVertical: 'top',
  },
}));
