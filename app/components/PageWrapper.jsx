import { useLocation } from '@remix-run/react'
import { motion } from 'framer-motion'

import styles from '~/styles/PageWrapper.css'

const PageWrapper = (props) => {
  return (
    <motion.div
      mode='wait'
      key={useLocation().key}
      initial={{
        scale: 0.5,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 20,
      }}
      className={`page-wrapper ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </motion.div>
  )
}

export default PageWrapper

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
