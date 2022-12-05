import Head from 'next/head'
import GetInTouch from '../components/GetInTouch'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Social from '../components/Social'
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
      <Info />
      <GetInTouch />
      <Social />
    </div>
  )
}

export default Home
