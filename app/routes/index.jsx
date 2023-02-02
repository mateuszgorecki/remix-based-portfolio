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

        <p>My name is Matthew and I&apos;m fronted developer&#x0002E;</p>
        <p>
          I&apos;m coding websites from scratch based on Wordpress&#x0002C; but also I&apos;m
          gaining skills in React because I&apos;m a big fan of component like
          approach&#x0002E; I was worked with real life projects &#x00028;&rarr;{' '}
          <NavLink
            className='link'
            to='/portfolio'
          >
            portfolio
          </NavLink>
          &#x00029; because I have experience in regular job and freelancing
          &#x00028;check{' '}
          <NavLink
            className='link'
            to='/about'
          >
            about
          </NavLink>{' '}
          page or linkedin below&#x00029;&#x0002E;
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
