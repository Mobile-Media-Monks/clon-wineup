import { Platform } from 'react-native';
import { height, width } from '@/theme/metrics';

export const isiOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

/**
 * Used to check if the dimension are the same as iphone X.
 */
const iPhoneXMeasurements = {
  iPhoneX: {
    height: 812,
    width: 375,
  },
  iPhoneXSMax: {
    height: 896,
    width: 414,
  },
};

const iPhoneXMeasurementCheck = () => {
  const matchingMeasurement = Object.values(iPhoneXMeasurements).find(
    measurement => {
      return measurement.width === width && measurement.height === height;
    },
  );
  return matchingMeasurement !== undefined;
};

export const isiPhoneX = isiOS && iPhoneXMeasurementCheck();

export enum Orientations {
  PORTRAIT = 'PORTRAIT',
  LANDSCAPE = 'LANDSCAPE',
}
