import { HomeFlowNavigation } from '@/presentation/screens/flows/types';

export type RootNavigation = {
  Splash: undefined;
  FlowHome: undefined;
};

export type AllNavigation = RootNavigation & HomeFlowNavigation;
