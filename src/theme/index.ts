import { StyleBuilder } from './ThemeProvider/types';

/**
 * This is public convenience about style creation, is not needed, but it's
 * kind of protocol, used to generate the styles with typescript support
 *
 * @param operation The function where styles comes from, receives the theme as parameter
 * for all styles dependant on the style guide and theme provider
 *
 * @returns the same param
 *
 * This is the way to use it:
 *
 * instead of:
 *
 * const styles = StyleSheet.create({
 *    content: {
 *      justifyContent: 'center',
 *      alignContent: 'flex-start',
 *      backgroundColor: theme.colors.primary
 *    }
 * })
 *
 * Do this:
 *
 * const styles = buildStyles((theme) => ({
 *    content: {
 *      justifyContent: 'center',
 *      alignContent: 'flex-start',
 *      backgroundColor: theme.colors.primary
 *    }
 * }))
 */
export function buildStyles<R>(operation: StyleBuilder<R>) {
  return operation;
}
