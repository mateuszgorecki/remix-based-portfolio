import styles from '~/styles/WebsiteWrapper.css'

export default function WebsiteWrapper(props) {
  const {id, title, description, technologies, style} = props
  return (
    <div className='website-wrapper' style={style}>
        <p>{title}</p>
        <p>{technologies}</p>
    </div>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
