import React, { ComponentProps, FC } from 'react'
import { SettingContextProvider } from './SettingContext'
import { ActivityContextProvider } from './ActivityContext'

// export const combineComponents = (...components: FC[]): FC => {
//   return components.reduce(
//     (AccumulatedComponents, CurrentComponent) => {
//       return ({ children }: ComponentProps<FC>): JSX.Element => {
//         return (
//           <AccumulatedComponents>
//             <CurrentComponent>{children}</CurrentComponent>
//           </AccumulatedComponents>
//         )
//       }
//     },
//     ({ children }) => <>{children}</>,
//   )
// }

const providers = [SettingContextProvider, ActivityContextProvider]
// export const AppContextProvider = combineComponents(...providers)

const AppContextProvider = providers.reduce(
  (AccumulatedComponents, CurrentComponent) => {
    return ({ children }: ComponentProps<FC>): JSX.Element => (
      <AccumulatedComponents>
        <CurrentComponent>{children}</CurrentComponent>
      </AccumulatedComponents>
    )
  },
  ({ children }) => <>{children}</>,
)

export default AppContextProvider
