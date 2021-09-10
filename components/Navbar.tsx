import Link from "next/link"
import { useContext } from "react"

import ThemeContext from "../context/ThemeContext"
import styles from "../styles/Layout.module.scss"

const linksData = [
  {
    label: "Mint",
    url: "/mint",
    hoverClass: "green",
  },
  {
    label: "Redeem",
    url: "/redeem",
    hoverClass: "blue",
  },
  {
    label: "Savings",
    url: "/savings",
    hoverClass: "red",
  },
  {
    label: "Staking",
    url: "/staking",
    hoverClass: "orange",
  },
  {
    label: "LP Rewards",
    url: "/lp-rewards",
    hoverClass: "lightblue",
  },
  {
    label: "Token info",
    url: "/token-info",
    hoverClass: "purple",
  },
]

const Navbar = (props) => {

  const links = linksData.map(d => (
    <li key={d.url}>
      <Link href={d.url}>
        <a className={styles[d.hoverClass]}>{d.label}</a>
      </Link>
    </li>
  ))

  return (
    <nav>
      <ul>
        {links}
        <DarkmodeToggle />
      </ul>
    </nav>
  )
}

const DarkmodeToggle = () => {
  const { darkmode, toggleDarkmode } = useContext(ThemeContext)
  const label = darkmode ? "Disable dark mode" : "Enable dark mode"
  const toggle = () => {
    toggleDarkmode()
  }
  return (
    <button
      onClick={toggle}
      className="btn relieve"
    >{label}</button>
  )
}

export default Navbar
