import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from "../components/Layout"

import styles from "../styles/Home.module.scss"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sura Stablecoin</title>
      </Head>
      <Layout>
        <h1 className={"relieve ".concat(styles["text-center"])}>Welcome to Sura Stablecoin</h1>
      </Layout>
    </>
  )
}

export default Home
