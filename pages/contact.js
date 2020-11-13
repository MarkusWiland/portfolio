import Layout from '../components/Layout'
import { useForm } from "react-hook-form";
import Head from 'next/head'
import styles from '../styles/contact.module.css'
export default function contact() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <Layout>
              <Head>
        <title>Wiland Media - Kontakta Mig</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <h1 className="headline">Kontakta mig</h1>
            <hr className="hr" />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <label>
                    <span>Förnamn</span>
                    <input type="name" name="Förnamn" placeholder="Förnamn..." ref={register} />
                </label>
                <label>
                <span> Efternamn</span>
                    <input type="name" name="Efternamn" placeholder="Efternamn..." ref={register} />
                </label>
                <label>
                <span> Email</span>
                    <input type="email" name="email" placeholder="Email..." ref={register} />
                </label>
                    <textarea type="value" name="value" rows="10" placeholder="Skriv text här..." ref={register} />
                    
                  
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
