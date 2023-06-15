import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <div className='min-h-full min-w-full absolute opacity-70 backdrop-blur-3xl bg-blend-darken bg-black -z-10'></div>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
