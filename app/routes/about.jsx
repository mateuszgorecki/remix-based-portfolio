import PageWrapper from '~/components/PageWrapper'
import styles from '~/styles/AboutPage.css'
import photo from '../../public/small-portrait.webp'
export default function AboutPage() {
  return (

    <PageWrapper className='wrapper'>
      <div className='left'>
        <img
          src={photo}
          alt='jung man with sunglasses and purple-blue light'
        />
      </div>
      <div className='right'>
        <h1>About me</h1>
        <p>My name is Matthew and I enjoy creating websites. Currently I mastering my skills at React, but before that I try many different approaches making websites. From plain HTML & CSS, through page builders like Elementor/ Oxygen/ Divi, ending with custom themes on Wordpress (Sage Roots) using HTML, SCSS, JavaScript and PHP.</p>
        <div className='stats-wrapper'>
          <ul>
            <li>
              <p>Class: </p>
              <p>Frontend Developer</p>
            </li>
            <li>
              <p>Lvl: </p>
              <p>Junior</p>
            </li>
            <li>
              <p>Exp: </p>
              <div>
                <p>&frac12; year in Angon Interactive agency,</p>
                <p>&frac12; year freelancing</p>
              </div>
            </li>
            <li>
              <p>Skills: </p>
              <p>
                JavaScript, Reactjs, SCSS, HTML, Remixjs, Node.js, Framer-Motion
              </p>
            </li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
