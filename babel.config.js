module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
          '@assets': './src/assets',
          '@presentation': './src/presentation',
          '@screens': './src/presentation/screens',
          '@stacks': './src/presentation/navigation/stacks',
          '@navigation': './src/presentation/navigation',
          '@infrastructure': './src/infrastructure',
          '@domain': './src/domain',
          '@enums': './src/domain/enum',
        },
      },
    ],
  ],
};
