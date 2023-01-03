import { useLocation } from '@remix-run/react'
import { motion } from 'framer-motion'

import styles from '~/styles/PageWrapper.css'

const PageWrapper = (props) => {
  return (
    <motion.div
      key={useLocation().key}
      initial={{
        opacity: 0,
        scale: 0.2,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.2,
        // transition: {
        //   duration: 0.5
        // }
      }}
      transition={{
        duration: 0.5,
        ease: 'linear',
        // delay: 0.5
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
