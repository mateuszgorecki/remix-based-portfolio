import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from '@remix-run/react'
import { AnimatePresence, motion } from 'framer-motion'
import MainNavigation from './components/MainNavigation'

import { links as pageWrapperStyles } from './components/PageWrapper'

import styles from '~/styles/global.css'
import navStyles from '~/styles/MainNavigation.css'

import bgPhoto from '../public/big-portrait.png'
import bgShape from '../public/bg-shape-full.svg'
import { useEffect, useState } from 'react'
import { MenuToggle } from './components/MenuToggle'

export const meta = () => ({
  charset: 'utf-8',
  title: 'Portfolio',
  viewport: 'width=device-width,initial-scale=1',
})

const sidebar = {
  open: () => ({
    clipPath: `circle(${
      typeof window !== 'undefined' ? window.innerHeight : 1000
    }px at 350px 50px)`,
    transition: {
      type: 'spring',
      stiffness: 70,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 350px 50px)',
    transition: {
      delay: 0.4,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export default function App() {
  const [isHome, setIsHome] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') setIsHome(true)
    else setIsHome(false)
  }, [location])

  const [isOpen, toggleOpen] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 1280 ? false : true
  )

  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
          >
            <motion.div
              className='background'
              variants={sidebar}
            />
            <MainNavigation
              isOpen={isOpen}
              toggleOpen={toggleOpen}
            />
            <MenuToggle toggle={() => toggleOpen((prev) => !prev)} />
          </motion.nav>
        </header>
        <main
          onClick={() =>
            typeof window !== 'undefined' && window.innerWidth <= 1280 && isOpen
              ? toggleOpen(false)
              : null
          }
        >
          <AnimatePresence
            mode='wait'
            initial={false}
          >
            <Outlet />
          </AnimatePresence>
        </main>
        <footer>
          <p>Me via </p>
          <a
            href='http://pomelovisual.pl/'
            target='_blank'
            rel='noreferrer'
          >
            Pomelo Visual
          </a>
        </footer>
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
              className='bg-shape'
              src={bgShape}
              alt=''
            />
          </motion.div>
        </div>
        <img
          data-ishome={isHome}
          className='bg-photo'
          src={bgPhoto}
          alt=''
        />
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
