import PageWrapper from '~/components/PageWrapper'
import styles from '~/styles/HomePage.css'
import { links as socialCardStyles } from '~/components/SocialCard.jsx'
import { SOCIALS_DATA } from '~/components/socials-data'
import SocialCard from '~/components/SocialCard'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Index() {
  const [isOn, setIsOn] = useState(false)

  const toggleCards = (e) => {
    setIsOn(!isOn)
  }

  const closeCards = (e) => {
    if (!e.target.classList.contains('socials-card-wrapper') && isOn) {
      setIsOn(false)
    }
  }

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 25,
  }

  const cards = SOCIALS_DATA.map((card) => (
    <motion.div
      key={card.id}
      layout
      transition={spring}
      className='motion-card-wrapper'
    >
      <SocialCard
        id={card.id}
        src={card.src}
        href={card.href}
        alt={card.alt}
      />
    </motion.div>
  ))

  return (
    <PageWrapper
      className='wrapper'
      onClick={closeCards}
    >
      <div className='left'></div>
      <div className='right'>
        <h1>Hello!</h1>

        <p>Welcome to my website.</p>
        <p>
          This page is based
          on React.js framework - Remix. I chose it instead of plain React
          because it offers server-side rendering by default and hence -
          better SEO. Also I used there SCSS for styling and Framer Motion
          library for animations. Website is hosted on Netlify and you can check
          the source code on my GitHub. Link to GitHub and other socials below. Currently website is under construction.
        </p>
        <div
          className='socials-card-wrapper'
          data-ison={isOn}
          onClick={toggleCards}
        >
          {cards}
          <div
            className='social-cards-overlay'
            onClick={toggleCards}
          ></div>
        </div>
      </div>
    </PageWrapper>
  )
}

export function links() {
  return [...socialCardStyles(), { rel: 'stylesheet', href: styles }]
}
