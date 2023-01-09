import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation,
} from '@remix-run/react'
import { AnimatePresence, motion } from 'framer-motion'
import MainNavigation from './components/MainNavigation'

import { links as pageWrapperStyles } from './components/PageWrapper'

import styles from '~/styles/global.css'
import navStyles from '~/styles/MainNavigation.module.css'

import bgPhoto from '../public/big-portrait.png'
import bgShape from '../public/bg-shape-full.svg'
import { useEffect, useState } from 'react'

export const meta = () => ({
  charset: 'utf-8',
  title: 'Portfolio',
  viewport: 'width=device-width,initial-scale=1',
})

// export function CatchBoundary() {
//   const caught = useCatch();
//   return (
//     <html>
//       <head>
//         <title>Oops!</title>
//         <Meta />
//         <Links />
//       </head>
//       <body>
//         <h1>
//           {caught.status} {caught.statusText}
//         </h1>
//         <Scripts />
//       </body>
//     </html>
//   );
// }

export default function App() {
  const [isHome, setIsHome] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') setIsHome(true)
    else setIsHome(false)
  }, [location])


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
            mode='wait'
            initial={false}
          >
            <Outlet/>
          </AnimatePresence>
        </main>
        <footer>
          <p>Me via </p>
          <a href="http://pomelovisual.pl/" target='_blank'>Pomelo Visual</a>
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
