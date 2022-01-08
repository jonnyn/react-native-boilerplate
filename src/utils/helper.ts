import { Linking, Alert } from 'react-native'

export const openLink = async (url: string) => {
  const supported = await Linking.canOpenURL(url)
  if (supported) {
    void Linking.openURL(url)
  } else {
    Alert.alert(`Don't know how to open URI: ${url}`)
  }
}
