import { Platform } from 'react-native'

const fonts = {
  ...Platform.select({
    ios: { fontFamily: 'Arial' },
    android: { fontFamily: 'Roboto' },
  }),
}

export default fonts
