import Navbar from "./Navbar"
import Footer from "./Footer"

import styles from '../styles/Layout.module.scss'

const Layout = ({children}) => {
  return (
    <div className={styles.global_container}>
      <Navbar />
      <main className={styles.content}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout