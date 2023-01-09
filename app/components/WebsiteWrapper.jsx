import styles from '~/styles/WebsiteWrapper.css'
import { motion } from 'framer-motion'

export default function WebsiteWrapper(props) {
  const {id, title, description, technologies, style, position, onTap} = props

  return (
    <motion.div className='website-wrapper' style={style} data-position={position} onTap={onTap} >
        <p>{title}</p>
        <p>{technologies}</p>
    </motion.div>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
