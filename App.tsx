import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import AppContextProvider from './src/context/AppContext'
import { store } from './src/store/store'
import useCachedResources from './src/hooks/useCachedResources'
import useColorScheme from './src/hooks/useColorScheme'
import Navigation from './src/navigation'

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
