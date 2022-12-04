import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Ranusha - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
    </div>
  )
}

export default Home
