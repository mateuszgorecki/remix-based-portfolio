import { useLocation } from '@remix-run/react'
import { motion } from 'framer-motion'

import styles from '~/styles/PageWrapper.css'

const PageWrapper = (props) => {
  return (
    <motion.div
    mode='wait'
      key={useLocation().key}
      initial={{
        x: '100%',
        // scale: .5,
      }}
      animate={{
        x: 0,
        // scale: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
      }}
      className={`page-wrapper ${props.className}`}
    >
      {props.children}
    </motion.div>
  )
}

export default PageWrapper

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
