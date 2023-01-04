import PageWrapper from '~/components/PageWrapper'
import styles from '~/styles/PortfolioPage.css'
import { DUMMY_WEBSITES } from '~/components/websites-data'
import WebsiteWrapper, {links as WebsiteWrapperStyles} from '~/components/WebsiteWrapper'

export default function PortfolioPage() {
  let counter = -80
  const websites = DUMMY_WEBSITES.map((website) => {
    counter += 80
    return (
      <WebsiteWrapper
      key={website.id}
      id={website.id}
      title={website.title}
      technologies={website.technologies}
      description={website.description}
      style={{transform: `translate(${counter}px, ${counter}px)`}}
    />
    )
  }
  )

  return (
    <PageWrapper className='wrapper'>
      <div className='left'>
        <div className='website-carousel-wrapper'>{websites}</div>
      </div>
      <div className='right'>
        <h1>Portfolio</h1>
        <p>
          Przypomniał sobie, że gdyby butami? Zaszła mówił i może się dźwigni
          małego pilotażu, zbiorników, z wysoka docierały tu a kończąc na
          tytoniu do żucia i fotografiach by odłożył, a za resztę musiałby to
          być się i głową naprzód go też Może kłamie!
        </p>
        <div className='website-info-wrapper'>
          <div className='website-info-photo'></div>
          <div className='website-info-data'>
            <p className="website-info-description">
            Przypomniał sobie, że gdyby butami? Zaszła mówił i może się dźwigni małego pilotażu, zbiorników, z wysoka docierały tu a kończąc na tytoniu do żucia i fotografiach by odłożył, a za resztę musiałby to być się i głową naprzód go też Może kłamie!
            </p>
            <p className="website-info-technologies">
              <p>Technologies:</p>
              <p>HTML, CSS, JavaScript, PHP</p>
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export function links() {
  return [ ...WebsiteWrapperStyles(),
    { rel: 'stylesheet', href: styles }]
}
