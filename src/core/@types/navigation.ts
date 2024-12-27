import { HomeStack } from '@/navigation/types';
import Screens from '@/navigation/screens';

/**
 * Rule: All navigations must be defined and included in this file to maintain consistency
 * and a centralized navigation structure.
 *
 * RootNavigation defines the primary navigation structure of the app.
 *
 * @type {object}
 * @property {undefined} Splash - Represents the splash screen of the app.
 * @property {undefined} InitStack - Represents the main home flow of the app.
 */
export type RootNavigation = {
  [Screens.Splash]: undefined;
  [Screens.InitStack]: undefined;
};

/**
 * AllNavigation combines the RootNavigation structure with additional navigation flows.
 *
 * @type {object}
 * This type includes all the routes from RootNavigation and HomeStack,
 * allowing seamless integration of multiple navigation flows.
 *
 */
export type AllNavigation = RootNavigation & HomeStack;
