import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  marginHorizontal: 16,
  marginVertical: 16,
  paddingHorizontal: 16,
  paddingVertical: 16,
  baseMargin: 10,
  basePadding: 10,
  smallMargin: 5,
  smallPadding: 5,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  isSmallDevice: width < 375,
  statusBarHeight: Platform.OS === 'ios' ? 20 : 24,
  borderRadius: 4,
  borderWidth: 1,
  icons: {
    tiny: 14,
    small: 20,
    medium: 30,
    large: 45,
    xl: 60,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 300,
  },
  font: {
    xxsmall: 8,
    xsmall: 9,
    small: 11,
    normal: 13,
    medium: 16,
    large: 18,
    xLarge: 20,
    xxLarge: 28,
    xxxLarge: 36,
  },
}

export default metrics
