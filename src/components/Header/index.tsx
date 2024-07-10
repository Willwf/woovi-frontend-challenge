import styles from './styles.module.css'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src="/Logo.svg"
        alt="Logo da Woovi"
        width={124}
        height={37}
      />
    </header>
  )
}
