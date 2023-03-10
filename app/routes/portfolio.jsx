import PageWrapper from '~/components/PageWrapper'
import styles from '~/styles/PortfolioPage.css'
import { WEBSITES_DATA } from '~/components/websites-data'
import WebsiteWrapper, {
  links as WebsiteWrapperStyles,
} from '~/components/WebsiteWrapper'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, Suspense } from 'react'

export default function PortfolioPage() {
  const initialState = {
    description: '',
    technologies: '',
    image: '',
    alt: '',
    url: '',
  }

  const [websiteInfo, setWebsiteInfo] = useState(initialState)

  const onTap = (event, info) => {
    if (event) {
      newWebsites.push(newWebsites.splice(0, 1)[0])
      setWebsiteInfo({
        title: newWebsites[0].props.title,
        description: newWebsites[0].props.description,
        technologies: newWebsites[0].props.technologies,
        image: newWebsites[0].props.image,
        alt: newWebsites[0].props.alt,
        url: newWebsites[0].props.url,
      })
      setWebsitesList(() => [newWebsites])
    }
  }

  const [websitesList, setWebsitesList] = useState(() => {
    let list,
      counter = 0
    if (WEBSITES_DATA.length > 0) {
      list = WEBSITES_DATA.map((website) => {
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
            url={website.url}
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
      title: newWebsites[0].props.title,
      description: websitesList[0].props.description,
      technologies: websitesList[0].props.technologies,
      image: websitesList[0].props.image,
      alt: websitesList[0].props.alt,
      url: newWebsites[0].props.url,
    })
  }, [])

  return (
    <PageWrapper className='wrapper'>
      <div className='left'>
        <Suspense fallback={<p>Loading slider...</p>}>
          <ul className='website-carousel-wrapper'>
            <AnimatePresence
              mode='wait'
              initial={false}
            >
              {websitesList}
            </AnimatePresence>
          </ul>
        </Suspense>
      </div>
      <div className='right'>
        <h1>Portfolio</h1>
        <Suspense fallback={<p>Loading data...</p>}>
          <div className='website-info-wrapper'>
            <div className='website-info-photo'>
              <img
                className='info-photo'
                src={websiteInfo.image}
                alt={websiteInfo.alt}
              />
            </div>
            <div className='website-info-data'>
              <div className='website-info-description'>
                <p>Description:</p>
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
              </div>
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
              <div className='website-info-url'>
                <p>Url:</p>
                <AnimatePresence mode='wait'>
                  <motion.a
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
                    href={websiteInfo.url}
                    target='_blank'
                  >
                    {websiteInfo.title}
                  </motion.a>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </PageWrapper>
  )
}

export function links() {
  return [...WebsiteWrapperStyles(), { rel: 'stylesheet', href: styles }]
}
