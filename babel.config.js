/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // [
      //   // require.resolve('babel-plugin-module-resolver'),
      //   'module-resolver',
      //   {
      //     // cwd: 'babelrc',
      //     // extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
      //     root: ['./src'],
      //     extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      //     alias: {
      //       '@assets': './src/assets',
      //       '@components': './src/components',
      //       '@hooks': './src/hooks',
      //       '@navigation': './src/navigation',
      //       '@screens': './src/screens',
      //       '@styles': './src/styles',
      //       '@utils': './src/utils',
      //     },
      //   },
      // ],
      'react-native-reanimated/plugin',
    ],
  }
}
