import { Platform } from 'react-native'
import metrics from './metrics'
import colors from './colors'

const styles = {
  screen: {
    application: {
      flex: 1,
      backgroundColor: colors.appBackground,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.appBackground,
      padding: metrics.paddingHorizontal,
    },
    containerNoNavbar: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.appBackground,
      padding: metrics.paddingHorizontal,
      marginTop: Platform.OS === 'ios' ? 60 : 20,
      marginBottom: Platform.OS === 'ios' ? 40 : 20,
    },
    centering: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
    },
    hide: {
      display: 'none',
    },
    loadingContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
      marginBottom: 25,
    },
    shawdow: {
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowOffset: { width: 1, height: 1 },
    },
    cardView: {
      display: 'flex',
      backgroundColor: colors.white,
      marginVertical: 7,
      borderRadius: 3,
      padding: 10,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowOffset: { width: 1, height: 1 },
    },
  },

  text: {
    button: {
      color: colors.text,
      fontSize: metrics.font.large,
      lineHeight: metrics.font.large,
    },
    xxSmallRegular: {
      color: colors.text,
      fontSize: metrics.font.xxsmall,
      lineHeight: metrics.font.xxsmall * 1.5,
    },
    xSmallRegular: {
      color: colors.text,
      fontSize: metrics.font.xsmall,
      lineHeight: metrics.font.xsmall * 1.5,
    },
    smallRegular: {
      color: colors.text,
      fontSize: metrics.font.small,
      lineHeight: metrics.font.small * 1.5,
    },
    normalRegular: {
      color: colors.text,
      fontSize: metrics.font.normal,
      lineHeight: metrics.font.normal * 1.5,
      marginTop: metrics.font.normal / 2,
      marginBottom: metrics.font.normal / 2,
    },
    mediumRegular: {
      color: colors.text,
      fontSize: metrics.font.medium,
      lineHeight: metrics.font.medium * 1.5,
      marginTop: metrics.font.medium / 2,
      marginBottom: metrics.font.medium / 2,
    },
    h3: {
      color: colors.text,
      fontSize: metrics.font.large,
      lineHeight: metrics.font.large * 1.2,
      marginTop: metrics.font.large,
      marginBottom: metrics.font.large / 2,
    },
    h2: {
      color: colors.text,
      fontSize: metrics.font.xLarge,
      fontWeight: '700',
      lineHeight: metrics.font.xLarge * 1.2,
      marginTop: metrics.font.xLarge,
      marginBottom: metrics.font.xLarge / 2,
    },
    heading: {
      color: colors.text,
      fontSize: metrics.font.xxLarge,
      lineHeight: metrics.font.xxLarge * 1.2,
      marginTop: metrics.font.xxLarge * 0.25,
      marginBottom: metrics.font.xxLarge * 0.75,
    },
  },

  list: {
    listContainer: {},
    cardContainer: {},
    listText: {
      flex: 1,
      paddingLeft: 8,
    },
  },

  listMedium: {
    listContainer: {},
    itemContainer: {},
    listText: {},
  },

  listLarge: {
    cardContainer: {},
  },

  form: {
    formContainer: {},

    formGroup: {},
    formInput: {},
  },
}

export default styles
