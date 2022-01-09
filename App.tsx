import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import AppContextProvider from '~context/AppContext'
import { store } from '~redux'
import { useCachedResources, useColorScheme } from '~hooks'
import Navigation from '~navigation'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <AppContextProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </AppContextProvider>
        </Provider>
      </SafeAreaProvider>
    )
  }
}
