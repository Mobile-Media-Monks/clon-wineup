declare module 'react-native-config' {
  export interface NativeConfig {
    ENV: string;
    APP_NAME: string;
    BASE_URL: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
