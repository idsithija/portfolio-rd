import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WorkGrid from '../components/WorkGrid'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Ranusha - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <WorkGrid />
    </div>
  )
}

export default Home
