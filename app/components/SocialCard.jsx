import styles from '~/styles/SocialCard.css'
import { motion } from 'framer-motion'

export default function SocialCard(props) {
  const { src, alt, href, id } = props

  return (
    <motion.a
      id={id}
      href={href}
      className='card-wrapper'
      target='_blank'
      rel='noreferrer'
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 500, damping: 10 }}
    >
      <img
        src={src}
        alt={alt}
      />
    </motion.a>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
