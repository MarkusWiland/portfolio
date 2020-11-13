import Layout from "../components/Layout"
import Head from 'next/head'
export default function about() {
    return (
        <Layout>
              <Head>
        <title>Wiland Media - Om Mig</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <section className="section">
            <h1>Om Mig</h1>
            <hr className="hr" />
        </section>
        </Layout>
    )
}
