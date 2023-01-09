import PageWrapper from '~/components/PageWrapper'
import styles from '~/styles/PortfolioPage.css'
import sliderStyles from '~/styles/PortolfioSlider.css'
import { DUMMY_WEBSITES } from '~/components/websites-data'
import WebsiteWrapper, {
  links as WebsiteWrapperStyles,
} from '~/components/WebsiteWrapper'

import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PortfolioPage() {
  const initialState = {
    description: '',
    technologies: '',
  }

  const [websiteInfo, setWebsiteInfo] = useState(initialState)

  const onTap = (event, info) => {
    if (event) {
      newWebsites.push(newWebsites.splice(0, 1)[0])
      setWebsiteInfo({
        description: newWebsites[0].props.description,
        technologies: newWebsites[0].props.technologies,
      })
      setWebsitesList(() => [newWebsites])
    }
  }

  const [websitesList, setWebsitesList] = useState(() => {
    let list,
      counter = 0
    if (DUMMY_WEBSITES.length > 0) {
      list = DUMMY_WEBSITES.map((website) => {
        counter += 1
        return (
          <WebsiteWrapper
            key={website.id}
            id={website.id}
            title={website.title}
            technologies={website.technologies}
            description={website.description}
            position={counter}
            onTap={onTap}
          />
        )
      })
    }
    return list
  })
  const newWebsites = websitesList.map((website) => website)
  useEffect(() => {
    setWebsiteInfo({
      description: websitesList[0].props.description,
      technologies: websitesList[0].props.technologies,
    })
  }, [])

  return (
    <PageWrapper className='wrapper'>
      <div className='left'>
        <ul className='website-carousel-wrapper'>
          <AnimatePresence initial={false}>{websitesList}</AnimatePresence>
        </ul>
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
            <p className='website-info-description'>
              {websiteInfo.description}
            </p>
            <div className='website-info-technologies'>
              <p>Technologies:</p>
              {websiteInfo.technologies}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export function links() {
  return [
    ...WebsiteWrapperStyles(),
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: sliderStyles },
  ]
}
