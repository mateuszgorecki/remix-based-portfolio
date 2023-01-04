import styles from '~/styles/SocialCard.css'

export default function SocialCard(props) {
  const { src, alt, href, id } = props
  return (
    <a
      id={id}
      href={href}
      className='card-wrapper'
      target='_blank'
      rel='noreferrer'
    >
      <img
        src={src}
        alt={alt}
      />
    </a>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
