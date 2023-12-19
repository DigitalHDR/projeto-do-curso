import Head from 'next/head'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - sujeito programador</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você ao próximo nível?</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptas aliquid, labore delectus illum placeat quaerat
              quis est? Harum expedita aperiam quasi fugiat atque! Nemo
              consequatur sint perferendis facere iure?
            </span>
            <a>
              <button>Começar agora!</button>
            </a>
          </section>
          <img
            src="/images/banner-conteudos.png"
            alt="Conteúdos sujeito programador"
          />
        </div>
      </main>
    </>
  )
}
