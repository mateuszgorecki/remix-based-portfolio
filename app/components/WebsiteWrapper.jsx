import styles from '~/styles/WebsiteWrapper.css'
import { motion } from 'framer-motion'

export default function WebsiteWrapper(props) {
  const { id, title, description, technologies, style, position, onTap, image, alt } = props

  return (
    <motion.li
      className='website-wrapper'
      style={style}
      data-position={position}
      onTap={onTap}
    >
    <img src={image} alt={alt} />
      {/* <p>{technologies}</p> */}
      <div className='website-blur'></div>
      <p>{title}</p>
    </motion.li>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
