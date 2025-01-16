import { buildStyles, metrics, typography } from '@/theme';

export default buildStyles(theme => ({
  container: {
    marginBottom: 24 * metrics.scaleCoefficient,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1 * metrics.scaleCoefficient,
    borderRadius: 14 * metrics.scaleCoefficient,
    paddingHorizontal: 14 * metrics.scaleCoefficient,
    backgroundColor: theme.colors.secondary.white,
    height: 52 * metrics.scaleCoefficient,
    overflow: 'hidden',
  },
  textAreaContainer: {
    height: 162 * metrics.scaleCoefficient,
    alignItems: 'flex-start',
    paddingVertical: 8 * metrics.scaleCoefficient,
  },
  disabledInputContainer: {
    backgroundColor: 'transparent',
  },
  searchIcon: {
    paddingRight: 8 * metrics.scaleCoefficient,
  },
  validationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 8 * metrics.scaleCoefficient,
  },
  textInput: {
    flex: 1,
    ...typography.bodyLMedium,
    letterSpacing: -0.2 * metrics.scaleCoefficient,
  },
  textArea: {
    textAlignVertical: 'top',
  },
}));
