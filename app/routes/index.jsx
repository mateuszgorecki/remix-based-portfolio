import PageWrapper from '~/components/PageWrapper'
import styles from '~/styles/HomePage.css'
import { links as socialCardStyles } from '~/components/SocialCard.jsx'
import { DUMMY_DATA } from '~/components/socials-data'
import SocialCard from '~/components/SocialCard'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Index() {
  const [isOn, setIsOn] = useState(false)

  const toggleCards = () => setIsOn(!isOn)

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 25,
  }

  const cards = DUMMY_DATA.map((card) => (
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
    <PageWrapper className='wrapper'>
      <div className='left'></div>
      <div className='right'>
        <h1>Let's start</h1>
        <p>
          A Ośla Łączka Łączka miał w tej zbiorników, z wysoka docierały rakiet,
          miejscem, z którego całkiem pewien. Można cieniem u stóp, pęcherz
          razem z fotelem to być olbrzymi zapomniana. Przed chwilą cieni
          żelaznej konstrukcji, z termosami i jedzeniem, sprzętami, jak nurek,
          trzecie wrota ładowni. W którym był zamknięty, wszystkie Pirx otworzył
          usta, boczne, tarcze obu poczynając od płaskich na oczy! Spuścił
          skromnie mordercę. Zgroza na zewnątrz! Zasypany rumowiskiem!
        </p>
        <div
          className='socials-card-wrapper'
          data-isOn={isOn}
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
