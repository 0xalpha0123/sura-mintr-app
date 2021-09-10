import { useState, useEffect, useContext } from "react"

import styles from "../../styles/TokenSelector.module.scss"
import Token from "./Token"
import tokens from "../../data/availableTokens.json"
import AddTokensContext from "../../context/AddTokensContext"

export type token = {
  symbol: string;
  value?: number;
}

const availableTokens:token[] = tokens

const TokenSelector = (props: any) => {
  const { setValue }= props
  const { display } = useContext(AddTokensContext)

  const [tokens, setTokens] = useState([availableTokens[0]])

  useEffect(() => setValue(tokens), [tokens])

  const makeUpdate = (symbol: string) => {
    return function(value: number) {
      const tokensCopy = [...tokens]
      for (let i = tokensCopy.length - 1; i >= 0; i--) {
        if (tokensCopy[i].symbol === symbol) {
          tokensCopy[i].value = value
          setTokens(tokensCopy)
          break
        }
      }
    }
  }

  const removeToken = (symbol: string) => {
    return function() {
      setTokens(tokens.filter(t => t.symbol !== symbol))
    }
  }

  const displayTokens = tokens.map(t => {
    return <Token
      key={t.symbol}
      label={t.symbol}
      removable={true}
      updateState={makeUpdate(t.symbol)}
      removeState={removeToken(t.symbol)}
    />
  })

  const showModal = () => {
    const addToken = (symbol: string) => {
      const newToken = availableTokens.find(t => t.symbol === symbol)
      if (newToken) {
        setTokens(tokens.concat(newToken as token))
      } else {
        console.log("token", symbol,"not found")
      }
    }
    display({selector: addToken, exclude: tokens})
  }

  return (
    <div className={styles.container}>
      {displayTokens}
      <button
        className={styles.add_tokens.concat(" relieve")}
        onClick={showModal}
      >Add more tokens</button>
    </div>
  )
}

export default TokenSelector