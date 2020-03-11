import Head from 'next/head'
import '../styles/main.css'

const Logo = () => (
  <>
    <img src="/logo.png" width={150} className="p-2 hidden md:inline-block" />
    <img src="/codar.png" width={50} className="p-2 md:hidden" />
  </>
)

const Menu = () => (
  <div className="p-2 flex items-center">
    <a href="http://github.com/codarme" target="_blank">
      github
    </a>

    <a href="http://instagram.com/codar.me" target="_blank">
      instagram
    </a>

    <a href="http://youtube.com/codarme" target="_blank">
      youtube
    </a>
  </div>
)

const Banner = () => (
  <div className="container max-w-5xl m-auto p-6 flex-1 flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
    <span className="text-gray">Criamos a codar.me para te ajudar a</span>
    <div className="uppdercase text-4xl font-extrabold leading-snug">
      Desenvoler <span className="text-green">software</span> de verdade
    </div>
    <span className="text-gray">
      e se tornar um desenvolvedor acima da média
    </span>
  </div>
)

const Header = () => (
  <div className="p-2 container max-w-5xl m-auto flex justify-between items-center">
    <Logo />
    <Menu />
  </div>
)

const Home = () => (
  <div
    className="flex flex-col flex-1"
    style={{ background: 'url(/bg.png) no-repeat center/cover' }}
  >
    <Head>
      <title>Codar.me - Tailwind + NextJS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Banner />
  </div>
)

export default Home
