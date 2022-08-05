/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ReactElement, useEffect } from 'react'
import * as Sentry from 'sentry-expo'
import { SENTRY_DSN } from '~constants/config'

export function logError(
  // Some helpful description of what we were trying to do.
  description: string,
  // Anything to help give context about what state we were in when the error occurred.
  context: ObjectOf<unknown> | null,
  // An actual error object, if available.
  error?: Error,
) {
  if (__DEV__) {
    const message = error?.message
    console.error(message)
    console.error(description)
    console.error(context)
    console.warn('An error occurred.', {
      description,
      ...context,
      error: message,
    })
  } else {
    Sentry.Native.withScope((scope) => {
      if (context) {
        scope.setExtra('context', context)
      }
      if (error) {
        scope.setExtra('description', description)
        Sentry.Native.captureException(error)
      } else {
        Sentry.Native.captureMessage(description, Sentry.Native.Severity.Warning)
      }
    })
  }
}

export function LoggingProvider(props: { children: ReactElement }) {
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  useEffect(() => {
    Sentry.init({
      dsn: SENTRY_DSN,
      enabled: !__DEV__,
      enableInExpoDevelopment: false,
      debug: true,
    })
    // To Test Sentry report
    // Sentry.Native.captureException(new Error('Oops!'))
    // Sentry.Native.captureMessage('message')
    throw new Error('My first Sentry error!')
  }, [])
  return props.children
}
