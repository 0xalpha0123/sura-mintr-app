import type { AppProps } from 'next/app'
import { ToastProvider } from "react-toast-notifications"

import '../styles/globals.scss'
import { AddTokensProvider } from "../context/AddTokensContext"
import { ThemeProvider } from "../context/ThemeContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <AddTokensProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </AddTokensProvider>
    </ToastProvider>
  )
}
export default MyApp
