import Layout from '../components/Layout'
import Head from 'next/head'
export default function about() {
  return (
    <Layout>
      <Head>
        <title>Om Mig | Wiland Media</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h3 className='text-center'>Programmer, designer, creator</h3>
      <section className='section'>
        <h1>Om Mig</h1>
        <hr className='hr' />
      </section>
    </Layout>
  )
}
