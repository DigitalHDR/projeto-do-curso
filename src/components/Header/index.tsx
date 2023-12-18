import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'

import Link from 'next/link'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href="">
          <Image src={logo} alt="sujeito progamador logo" />
        </a>

        <nav>
          <Link legacyBehavior href="/">
            <a>Home</a>
          </Link>
          <Link legacyBehavior href="/posts">
            <a>Conteúdos</a>
          </Link>
          <Link legacyBehavior href="/sobre">
            <a>Quem somos?</a>
          </Link>
        </nav>

        <a
          className={styles.readyButton}
          type="button"
          href="http://sujeitoprogamador.com"
        >
          Começar
        </a>
      </div>
    </header>
  )
}

// 3:23
