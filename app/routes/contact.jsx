import PageWrapper from '~/components/PageWrapper'
import styles from '~/styles/ContactPage.css'
import photo from '../../public/portrait.webp'
import { Form } from '@remix-run/react'
import { motion } from 'framer-motion'

// export async function loader() {
//   console.log('something')
//   return null
// }
export async function action({ request }) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')
  const baseUrl = request.url

  await fetch(`${baseUrl}/form`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `name=${name}&email=${email}&message=${message}&form-name=contact`,
  })
  return null
}

export default function ContactPage() {
  // const validateValue = (inputType) => {
  //   if (inputType === 'text') {
  //     valueIsValid = inputType.trim() !== ''
  //   } else if (inputType === 'email') {
  //     valueIsValid = /\S+@\S+\.\S+/.test(inputType)
  //   }
  // }

  return (
    <PageWrapper className='wrapper'>
      <div className='left'>
        <img
          src={photo}
          alt='jung man with sunglasses and purple-blue light'
        />
      </div>
      <div className='right'>
        <h1>Contact</h1>
        <p>
          Contact me via&#58;{' '}
          <a href='mailto:mateusz.gorecki.dev@gmail.com'>
            mateusz&#x0002E;gorecki&#x0002E;dev@gmail&#x0002E;com
          </a>
          &#x0002C; or by contact form below&#x0002E;
        </p>
        <div className='contact-info-wrapper'>
          <Form
            method='post'
            value='contact'
          >
            <div>
              <input
                hidden
                name='form-name'
                value='contact'
              />
              <input
                type='text'
                placeholder='your name'
                name='name'
              />
              <input
                type='email'
                placeholder='your mail'
                name='email'
              />
              <textarea
                name='message'
                placeholder='message'
              />
            </div>
            <motion.button
              type='submit'
              whileHover={{
                scale: 1.1,
                transition: { type: 'spring', stiffness: 600, damping: 5 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { type: 'spring', stiffness: 400, damping: 10 },
              }}
            >
              SEND
            </motion.button>
          </Form>
        </div>
      </div>
    </PageWrapper>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
