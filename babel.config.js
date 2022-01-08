/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            // '@assets': './src/assets',
            // '@components': './src/components',
            // '@hooks': './src/hooks',
            // '@navigation': './src/navigation',
            // '@screens': './src/screens',
            // '@styles': './src/styles',
            // '@utils': './src/utils',
            '^~(.+)': './src/\\1',
          },
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.jsx',
            '.json',
            '.tsx',
            '.ts',
            '.native.js',
          ],
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
