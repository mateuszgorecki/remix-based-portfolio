import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from '../styles/WebsiteModal.css'

export default function WebsiteModal(props) {
  const [styles, setStyles] = useState(false)
  const { src, alt, onClick, state } = props

  if (state) {
    setTimeout(() => {
      setStyles(true)
    }, 1000)
  } else setStyles(false)

  const scrollStyles = styles
    ? 'modal-img-wrapper add-scroll'
    : 'modal-img-wrapper'

  return (
    <div className='modal-wrapper'>
      <div className={scrollStyles}>
        <motion.img
          className='modal-img'
          src={src}
          alt={alt}
          layoutId='image'
        />
      </div>
      <div
        className='modal-backdrop'
        onClick={onClick}
      ></div>
    </div>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
