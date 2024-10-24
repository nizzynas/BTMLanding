import type { NextPage } from 'next'
import { Intro, Stats, SafetyFirst, Features, TransactionTracking } from '@/views/IndexPage'

import { Footer, Header, MobileMenu } from '@/components/layout'
import { Wallets } from '@/views/IndexPage/Wallets'
import { Supported } from '@/views/IndexPage/Supported'
import { Ecosystem } from '@/views/IndexPage/Ecosystem'
import styles from '@/styles/Common.module.scss'
// import SnapScrollSections from '@/views/IndexPage/Roadmap/Roadmap'

const Home: NextPage = () => {
  return (
    <>
      <div className="all">
        <div className="limiter">
          <Header />

          <main>
            <Intro />
            <div className="h-[80px] md:h-[100px]" />

            <Stats />
            <div className="h-[120px] md:h-[200px]" />

            <SafetyFirst />
            <div className="h-[120px] md:h-[200px]" />

<br></br>
<Supported />
            <Features />
            <div className="h-[80px] md:h-[100px]" />
            <Ecosystem />
            <div className="h-[120px] md:h-[200px]" />
            <TransactionTracking />
            <div className="h-[120px] md:h-[200px]" />
            <div className={styles.leftDot}>
              <Wallets />
            </div>

          </main>

          <Footer />
        </div>
      </div>

      <MobileMenu />
    </>
  )
}

export default Home
