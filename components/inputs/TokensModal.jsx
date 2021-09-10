import { useState, useContext } from "react"

import availableTokens from "../../data/availableTokens.json"
import AddTokensContext from "../../context/AddTokensContext"

import styles from "../../styles/TokensModal.module.scss"

const TokensModal = () => {
  const { showing, select, exclude, hide } = useContext(AddTokensContext)
  const tokensToList = availableTokens.filter(t1 => !exclude.find(t2 => t1.symbol === t2.symbol))
  const handleHide = () => {
    hide()
  }
  const handleSelect = (e, symbol) => {
    e.stopPropagation()
    select(symbol)
    hide()
  }
  return (
    <>{
      showing ?
      <div className={styles.container} onClick={handleHide}>
        <div className={styles.list}>
          {
            tokensToList.map(t => {
              return (
                <button
                  key={t.symbol}
                  onClick={e => handleSelect(e, t.symbol)}
                >{t.symbol}</button>
              )
            })
          }
        </div>
      </div>
      :
      null
    }
  </>
  )
}

export default TokensModal