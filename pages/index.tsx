import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from "../components/Layout"
import TokenSelector from "../components/inputs/TokenSelector"
import SlippageInput from "../components/mint/SlippageInput"

import styles from "../styles/Home.module.scss"

const Home: NextPage = () => {
  const [tokens, setTokens] = useState([])
  const [maxSlippage, setMaxSlippage] = useState(0.5)
  return (
    <>
      <Head>
        <title>Sura Stablecoin</title>
      </Head>
      <Layout>
        <TokenSelector setValue={setTokens} />
        <SlippageInput setValue={setMaxSlippage} />
      </Layout>
    </>
  )
}

export default Home
