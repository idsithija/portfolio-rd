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
      <div className='lg:flex lg:justify-between'>
        <div>
          <GetInTouch />
        </div>
        <div>
          <Social />
        </div>
      </div>
      <hr className="h-[2px] bg-black mt-12 mb-10 hidden lg:block lg:w-[calc(100%-5rem)] lg:mx-auto"></hr>
    </div>
  )
}

export default Home
