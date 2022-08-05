// App Details
export const appName = 'ReactNativeBoilerplate'

// Build Configuration - eg. Debug or Release?
export const isDevEnv = process.env.NODE_ENV === 'development'

// Date Format
export const dateFormat = 'Do MMM YYYY'

// API
export const apiBaseUrl = isDevEnv ? '' : ''

// Sentry
export const SENTRY_DSN =
  'https://964bb3c3d5c643ce8d21479f799870ea@o1083374.ingest.sentry.io/6150492'

// Google Analytics - uses a 'dev' account while we're testing
export const gaTrackingId = isDevEnv ? 'UA-xxxxxxx-2' : 'UA-xxxxxxxx-1'
