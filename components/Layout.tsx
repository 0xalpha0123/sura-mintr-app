import { ReactNode, useContext } from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"
import TokensModal from "./inputs/TokensModal"
import ThemeContext from "../context/ThemeContext"

import styles from '../styles/Layout.module.scss'

const Layout = ({children}: {children:ReactNode}) => {
  const { darkmode } = useContext(ThemeContext)
  const darkmodeClass = darkmode ? ` darkmode ${styles.darkmode}` : ""
  return (
    <div className={styles.global_container.concat(darkmodeClass)}>
      <Navbar />
      <main className={styles.content}>
        {children}
      </main>
      <Footer />
      <TokensModal />
    </div>
  )
}

export default Layout