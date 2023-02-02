import PageWrapper from '~/components/PageWrapper'
import styles from '~/styles/HomePage.css'
import { links as socialCardStyles } from '~/components/SocialCard.jsx'
import { SOCIALS_DATA } from '~/components/socials-data'
import SocialCard from '~/components/SocialCard'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from '@remix-run/react'

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

        <p>My name is Matthew and I'm fronted developer.</p>
        <p>
          I'm coding websites from scratch based on Wordpress, but also I'm gaining skills in React because I'm a big fan of component like approach. Because of my experience in regular job and freelancing (check  <NavLink className='link' to='/about'>about</NavLink> page or linkedin below) I was worked with real life projects (check <NavLink className='link' to='/portfolio'>portfolio</NavLink>).
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
