import Layout from '../components/Layout'
import { useForm } from 'react-hook-form'
import Head from 'next/head'
import styles from '../styles/contact.module.css'
import axios from 'axios'
export default function contact() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => {
    axios
      .post('/api/contactform', {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        text: data.text
      })
      .then((res) => {
        res.data
      })
      .catch((err) => {
        console.log('error in request', err)
      })
  }

  return (
    <Layout>
      <Head>
        <title>Kontakta Mig | Markus Wiland</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h3 className='text-center'>Programmer, designer, creator</h3>
      <h1 className='headline'>Kontakta mig</h1>
      <hr className='hr' />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label>
          <span>Förnamn</span>
          <input
            type='name'
            name='firstname'
            placeholder='Förnamn...'
            ref={register({
              required: true
            })}
          />
          {errors.firstname && 'Skriv in förnamn'}
        </label>
        <label>
          <span> Efternamn</span>
          <input
            type='name'
            name='lastname'
            placeholder='Efternamn...'
            ref={register({
              required: true
            })}
          />
          {errors.lastname && 'Skriv in ditt efternamn'}
        </label>
        <label>
          <span> Email</span>
          <input
            type='email'
            name='email'
            placeholder='Email...'
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email adress'
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <textarea type='value' name='text' rows='10' placeholder='Skriv text här...' ref={register} />

        <button>Skicka</button>
      </form>
      <style jsx scoped>
        {`
          .headline {
            text-align: center;
          }
        `}
      </style>
    </Layout>
  )
}
