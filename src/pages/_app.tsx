import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>LeetCode clone</title>
      <meta name='viewport' content='width-device-width, initial-scale=1' />
      <Link rel='icon' href='/favicon.png' />
      <meta name='description' content='Web application containd problems and solutions' />
    </Head>
     <Component {...pageProps} />
    </>
  )
}
