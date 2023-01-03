import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { AnimatePresence, motion } from 'framer-motion'
import MainNavigation from './components/MainNavigation'

import {links as pageWrapperStyles} from './components/PageWrapper'

import styles from '~/styles/global.css'
import navStyles from '~/styles/MainNavigation.module.css'

import bgPhoto from '../public/big-portrait.png'
import bgShape from '../public/bg-shape-full.svg'

export const meta = () => ({
  charset: 'utf-8',
  title: 'Portfolio',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main>
          <AnimatePresence
            exitBeforeEnter
            initial={false}
          >
            <Outlet />
          </AnimatePresence>
        </main>
        <div className='bg-shape-wrapper'>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 120,
              ease: 'linear',
            }}
          >
            <img
              class='bg-shape'
              src={bgShape}
              alt=''
            />
          </motion.div>
        </div>
        <img className='bg-photo' src={bgPhoto} alt="" />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export function links() {
  return [
    ...pageWrapperStyles(),
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: navStyles },
  ]
}
