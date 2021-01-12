import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
        <Header/>

      <main>
          <img src="/wam-text-logo.svg" alt="" className="main-logo"/>
      </main>

      <Footer />
    </div>
  )
}
