import { createContext, useState, useEffect } from "react"

import token from "../components/inputs/TokenSelector"

type contextType = {
  showing: boolean,
  display?: any,
  hide?: any,
  select?: any,
  exclude?: typeof token[]
}

const defaultContext: contextType = {
  showing: false,
  display: null,
  hide: null,
  select: null,
  exclude: [],
}

const AddTokensContext = createContext(defaultContext)

export default AddTokensContext

export const AddTokensProvider = ({children}) => {
  const defaultState = {
    showing: false,
    select: null,
    exclude: [],
  }
  const [state, setState] = useState(defaultState)
  const display = ({selector, exclude}) => {
    setState({
      showing: true,
      select: selector,
      exclude
    })
  }
  const hide = () => {
    setState({
      showing: false,
      select: null,
      exclude: []
    })
  }

  return (
    <AddTokensContext.Provider value={{
      display,
      hide,
      showing: state.showing,
      select: state.select,
      exclude: state.exclude,
    }}>
      {children}
    </AddTokensContext.Provider>
  )
}
