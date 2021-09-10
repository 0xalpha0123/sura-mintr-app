import type { AppProps } from 'next/app'
import { ToastProvider } from "react-toast-notifications"

import '../styles/globals.scss'
import { AddTokensProvider } from "../context/AddTokensContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <AddTokensProvider>
        <Component {...pageProps} />
      </AddTokensProvider>
    </ToastProvider>
  )
}
export default MyApp
