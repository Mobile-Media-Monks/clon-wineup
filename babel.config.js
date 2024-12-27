module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@domain': './src/domain',
          '@enums': './src/domain/enum',
          '@themes': './src/themes',
        },
      },
    ],
  ],
};
