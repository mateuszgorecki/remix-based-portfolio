import PageWrapper from '~/components/PageWrapper'
import styles from '~/styles/Page404.css'

export default function Page404() {
  return (
    <PageWrapper className='wrapper'>
      <p>Page not found 😕</p>
    </PageWrapper>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
