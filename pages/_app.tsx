import type { AppProps } from 'next/app'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

const Provider = ({ children } : { children: React.ReactNode}) => {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}