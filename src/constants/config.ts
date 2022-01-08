const isDevEnv = process.env.NODE_ENV === 'development'

export default {
  // App Details
  appName: 'ReactNativeBoilerplate',

  // Build Configuration - eg. Debug or Release?
  isDevEnv,

  // Date Format
  dateFormat: 'Do MMM YYYY',

  // API
  apiBaseUrl: isDevEnv ? '' : '',

  // Google Analytics - uses a 'dev' account while we're testing
  gaTrackingId: isDevEnv ? 'UA-xxxxxxx-2' : 'UA-xxxxxxxx-1',
}
