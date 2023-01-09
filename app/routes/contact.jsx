import PageWrapper from "~/components/PageWrapper"
import styles from '~/styles/ContactPage.css'
import photo from '../../public/small-portrait.png'
import { Form } from "@remix-run/react"

export default function ContactPage() {
  return (
    <PageWrapper className='wrapper'>
    <div className='left'>
      <img
        src={photo}
        alt='jung man with sunglasses and purple-blue light'
      />
    </div>
    <div className='right'>
      <h1>JUST MATI</h1>
      <p>
        Przypomniał sobie, że gdyby butami? Zaszła mówił i może się dźwigni
        małego pilotażu, zbiorników, z wysoka docierały tu a kończąc na
        tytoniu do żucia i fotografiach by odłożył, a za resztę musiałby to
        być się i głową naprzód go też Może kłamie!
      </p>
      <div className='contact-info-wrapper'>

      <Form>
        <input type="email" placeholder="your mail"/>
        <textarea name="message" id="" placeholder="message"/>
        <button type="submit">SEND</button>
      </Form>
      </div>
    </div>
  </PageWrapper>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
