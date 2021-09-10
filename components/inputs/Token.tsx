import { FC, useState, Dispatch, SetStateAction } from "react"
import styles from "../../styles/Token.module.scss"

type TokenProps = {
  label: string;
  removable: boolean;
  updateState: any;
  removeState?: any;
  icon?: any;
}

const isValidInput = (str: string):boolean => {
  return (!str.length || /^([1-9]\d*)$/.test(str))
}

const Token = (props: TokenProps) => {
  const { label, updateState, removable, removeState } = props
  const [value, setValue] = useState("");
  const handleInput = (e) => {
    const v = e.target.value
    if (isValidInput(v)) {
      setValue(v)
      updateState(Number(v))
    }
  }
  const handleRemove = () => removeState()

  return (
    <div className={styles.token_input.concat(" relieve")}>
      <label>
        {label}
        <input
          type="text"
          placeholder="Amount"
          value={value}
          onChange={handleInput}
        />
      </label>
      <div className={styles.right}>
        <strong className={styles.user_balance}>
          <span className={styles.amount}>0</span>
          <span>Balance</span>
        </strong>
        {removable && <button onClick={handleRemove}>x</button>}
      </div>
    </div>
  )
}

export default Token