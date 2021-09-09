import Link from "next/link"
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
      </ul>
    </nav>
  )
}

export default Navbar
