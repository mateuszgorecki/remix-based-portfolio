import { NavLink } from '@remix-run/react'
import PageWrapper from '~/components/PageWrapper'
import styles from '~/styles/AboutPage.css'
import photo from '../../public/portrait.webp'
export default function AboutPage() {
  return (

    <PageWrapper className='wrapper'>
      <div className='left'>
        <img
          src={photo}
          alt='jung man with sunglasses and purple-blue light'
        />
      </div>
      <div className='right'>
        <h1>About me</h1>
        <p>
          I&apos;m frontend developer located in Poland&#x0002E; I love to play with animations and constantly mastering my skills&#x0002E; I&apos;m really into personal development e&#x0002E;g&#x0002E; sleep optimization&#x0002C; overall productivity and planning&#x0002E; Fan of DIY&#x0002C; crypto/ NFT&#x0002C; calistenics and book lover&#x0002E;
        </p>
        <div className='stats-wrapper'>
          <ul>
            <li>
              <p>Class&#58; </p>
              <p>Frontend Developer</p>
            </li>
            <li>
              <p>Lvl&#58; </p>
              <p>Junior</p>
            </li>
            <li>
              <p>Exp&#58; </p>
              <div>
                <p>&frac12; year in Angon Interactive agency&#x0002C;</p>
                <p>&frac12; year freelancing</p>
              </div>
            </li>
            <li>
              <p>Skills&#58; </p>
              <p>
                JavaScript&#x0002C; Reactjs&#x0002C; SCSS&#x0002C; HTML&#x0002C; Remix&#x0002C; Node&#x0002E;js&#x0002C; Framer&#x02014;Motion
              </p>
            </li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
