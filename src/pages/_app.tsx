import { queryClient } from '@/hooks/queries/common/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { StateContextProvider } from '@/state'

import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StateContextProvider>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <title>BTM Solutions | Revolutionizing Crypto with Seamless Liquidity</title>
          </Head>
          <Component {...pageProps} />
        </StateContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
