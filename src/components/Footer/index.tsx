import styles from './styles.module.css'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image
          className={styles.icon}
          src="/ShieldIcon.svg"
          alt="Ícone de um escudo para transmitir segurança."
          width={16}
          height={19}
        />
        <p>Pagamento 100% seguro via:</p>
        <Image
          className={styles.icon}
          src="/LogoFooter.svg"
          alt="Logo da Woovi"
          width={58}
          height={18}
        />
      </div>
    </footer>
  )
}
