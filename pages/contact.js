import Layout from '../components/Layout'
import Head from 'next/head'
import styles from '../styles/contact.module.css'
import emailjs from 'emailjs-com'
export default function contact() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('SERIVE_id', 'template', e.target, 'userid').then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
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
      <form className={styles.form} onSubmit={sendEmail}>
        <input type='hidden' name='contact_number' />
        <label>Name</label>
        <input type='text' name='user_name' />
        <label>Email</label>
        <input type='email' name='user_email' />
        <label>Message</label>
        <textarea name='message' />
        <input type='submit' value='Send' />
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
