import PageWrapper from '~/components/PageWrapper'
import styles from '~/styles/ContactPage.css'
import photo from '../../public/small-portrait.webp'
import { Form } from '@remix-run/react'
import { motion } from 'framer-motion'
import { redirect } from '@remix-run/server-runtime'

export async function loader() {
  return null
}
export async function action({ request }) {
  const formData = await request.formData()
  const name = formData.get('name')
  const baseUrl = request.url
  await fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `name=${name}$form-name=contact`,
  })
  return redirect('/contact')
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
          Contact me via:{' '}
          <a href='mailto:mateusz.gorecki.dev@gmail.com'>
            mateusz.gorecki.dev@gmail.com
          </a>
          , or by contact form below.
        </p>
        <div className='contact-info-wrapper'>
          <Form
            // action='/contact'
            method='post'
            data-netlify='true'
            value='contact'
            // netlify-honeypot='bot-field'
          >
            <div>
              <input
                hidden
                name='bot-field'
                placeholder='don"t fill if you are human'
              />
              <input
                type='text'
                placeholder='your name'
                name='name'
              />
              <input
                type='email'
                placeholder='your mail'
              />
              <textarea
                name='message'
                id=''
                placeholder='message'
              />
            </div>
            <motion.button
              // disabled
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
