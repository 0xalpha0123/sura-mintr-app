import { createContext, useState, useEffect, ReactNode } from "react"

type contextType = {
  darkmode: boolean;
  toggleDarkmode: () => void;
}

const defaultContext: contextType = {
  darkmode: true,
  toggleDarkmode: () => {},
}

const ThemeContext = createContext(defaultContext)

export default ThemeContext

export const ThemeProvider = ({children}: {children:ReactNode}) => {
  const defaultState = true
  const [darkmode, setDarkmode] = useState(defaultState)
  const toggleDarkmode = () => {
    setDarkmode(!darkmode)
  }

  return (
    <ThemeContext.Provider value={{darkmode, toggleDarkmode}}>
      {children}
    </ThemeContext.Provider>
  )
}
