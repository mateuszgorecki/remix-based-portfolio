import PageWrapper from '~/components/PageWrapper'
import styles from '~/styles/AboutPage.css'
import photo from '../../public/small-portrait.png'
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
          Przypomniał sobie, że gdyby butami? Zaszła mówił i może się dźwigni
          małego pilotażu, zbiorników, z wysoka docierały tu a kończąc na
          tytoniu do żucia i fotografiach by odłożył, a za resztę musiałby to
          być się i głową naprzód go też Może kłamie!
        </p>
        <div className='stats-wrapper'>
          <ul>
            <li>
              <p>Class: </p>
              <p>Frontend Developer</p>
            </li>
            <li>
              <p>Lvl: </p>
              <p>Junior</p>
            </li>
            <li>
              <p>Exp: </p>
              <div>
                <p>&frac12; year in Angon Interactive agency,</p>
                <p>&frac12; year freelancing</p>
              </div>
            </li>
            <li>
              <p>Skills: </p>
              <p>JavaScript, Reactjs, SCSS, HTML, Remixjs, Node.js, Framer-Motion</p>
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
