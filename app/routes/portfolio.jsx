import PageWrapper from '~/components/PageWrapper'
import styles from '~/styles/PortfolioPage.css'
import { DUMMY_WEBSITES } from '~/components/websites-data'
import WebsiteWrapper, {
  links as WebsiteWrapperStyles,
} from '~/components/WebsiteWrapper'
import WebsiteModal, { links as ModalStyles } from '~/components/WebsiteModal'

import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function PortfolioPage() {
  const initialState = {
    description: '',
    technologies: '',
    image: '',
    alt: '',
  }

  const [websiteInfo, setWebsiteInfo] = useState(initialState)
  const [openWebsite, setOpenWebsite] = useState(false)

  const onTap = (event, info) => {
    if (event) {
      newWebsites.push(newWebsites.splice(0, 1)[0])
      setWebsiteInfo({
        description: newWebsites[0].props.description,
        technologies: newWebsites[0].props.technologies,
        image: newWebsites[0].props.image,
        alt: newWebsites[0].props.alt,
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
            image={website.image}
            alt={website.alt}
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
      image: websitesList[0].props.image,
      alt: websitesList[0].props.alt,
    })
  }, [])

  const openWebsiteHandler = () => {
    setOpenWebsite((state) => !state)
  }

  return (
    <PageWrapper className='wrapper'>
      <div className='left'>
        <ul className='website-carousel-wrapper'>
          <AnimatePresence
            mode='wait'
            initial={false}
          >
            {websitesList}
          </AnimatePresence>
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
          <div className='website-info-photo'>
          <AnimatePresence>

            <motion.img
              layoutId='image'
              className='info-photo'
              src={websiteInfo.image}
              alt={websiteInfo.alt}
              style={{ animation: 'autoScroll 25s infinite 1s ease-in-out' }}
              onClick={openWebsiteHandler}
            />
          </AnimatePresence>
          </div>
          <div className='website-info-data'>
            <AnimatePresence mode='wait'>
              <motion.p
                className='website-info-description'
                key={Math.random()}
                start={{
                  opacity: 0.5,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0.5,
                }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.3,
                }}
              >
                {websiteInfo.description}
              </motion.p>
            </AnimatePresence>
            <div className='website-info-technologies'>
              <p>Technologies:</p>
              <AnimatePresence mode='wait'>
                <motion.p
                  key={Math.random()}
                  start={{
                    opacity: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0.5,
                  }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 0.3,
                  }}
                >
                  {websiteInfo.technologies}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {openWebsite && (
          <WebsiteModal
            onClick={openWebsiteHandler}
            src={websiteInfo.image}
            alt={websiteInfo.alt}
            state={openWebsite}
          />
        )}
      </AnimatePresence>
    </PageWrapper>
  )
}

export function links() {
  return [
    ...WebsiteWrapperStyles(),
    ...ModalStyles(),
    { rel: 'stylesheet', href: styles },
  ]
}
