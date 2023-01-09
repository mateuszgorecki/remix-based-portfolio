import PageWrapper from '~/components/PageWrapper'
import styles from '~/styles/PortfolioPage.css'
import sliderStyles from '~/styles/PortolfioSlider.css'
import { DUMMY_WEBSITES } from '~/components/websites-data'
import WebsiteWrapper, {
  links as WebsiteWrapperStyles,
} from '~/components/WebsiteWrapper'

import { AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

export default function PortfolioPage() {
  const onTap = useCallback((event, info) => {
    if (event) {
      // console.log(event.target.getAttribute('data-position'))
      // console.log(event.path[1])
      // let firstEl, secondEl
      setWebsitesList((state) => {
        const firstEl = state.shift()
        const secondEl = state.push(firstEl)
        return [...state]
      })

      // let secondEl
      // setWebsitesList((state) => {
      //   return [state]
      // })
      console.log('tap')
    }

    // let array = websitesList
    // console.log('before:', array)
    // console.log('before: ', websites)

    // setWebsitesList(websites)
    // const firstEl = array.shift()
    // const newArray = array.push(firstEl)

    // console.log('after: ', array)
    // console.log('after: ', websites)
  }, [])
  const [websitesList, setWebsitesList] = useState(() => {
    let list
    if (DUMMY_WEBSITES.length > 0) {
      let counter = 0
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

  // let websites
  // if (DUMMY_WEBSITES.length > 0) {
  //   let counter = 0
  //   let list = websites
  //     list = DUMMY_WEBSITES.map((website) => {
  //     counter += 1
  //     return (
  //       <WebsiteWrapper
  //         key={website.id}
  //         id={website.id}
  //         title={website.title}
  //         technologies={website.technologies}
  //         description={website.description}
  //         position={counter}
  //         onTap={onTap}
  //       />
  //     )
  //   })
  // }
  // useEffect(() => {

  // },[])

  useEffect(() => {
    // setWebsitesList((state) => {
    //   if (DUMMY_WEBSITES.length > 0) {
    //     let counter = 0
    //     state = DUMMY_WEBSITES.map((website) => {
    //       counter += 1
    //       return (
    //         <WebsiteWrapper
    //           key={website.id}
    //           id={website.id}
    //           title={website.title}
    //           technologies={website.technologies}
    //           description={website.description}
    //           position={counter}
    //           onTap={onTap}
    //         />
    //       )
    //     })
    //   }
    //   return state
    // })
    onTap()
  }, [onTap])

  return (
    <PageWrapper className='wrapper'>
      <div className='left'>
        <div className='website-carousel-wrapper'>
          <AnimatePresence initial={false}>{websitesList}</AnimatePresence>
        </div>
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
              Przypomniał sobie, że gdyby butami? Zaszła mówił i może się
              dźwigni małego pilotażu, zbiorników, z wysoka docierały tu a
              kończąc na tytoniu do żucia i fotografiach by odłożył, a za resztę
              musiałby to być się i głową naprzód go też Może kłamie!
            </p>
            <div className='website-info-technologies'>
              <p>Technologies:</p>
              <p>HTML, CSS, JavaScript, PHP</p>
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
