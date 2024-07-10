import styles from './styles.module.css'

type paymentValuesProps = {
  installments: number
  installmentValue: string
  total: string
}

export const RadioLabel = ({
  paymentValues,
}: {
  paymentValues: paymentValuesProps
}) => {
  return (
    <>
      <h3 className={styles.labelTitle}>
        <span>{paymentValues.installments}x</span> R${' '}
        {paymentValues.installmentValue}
      </h3>
      {paymentValues.installments === 1 ? (
        <p className={styles.cashbackLabel}>
          Ganhe <span>3%</span> de Cashback
        </p>
      ) : (
        <p className={styles.totalText}>Total: R$ {paymentValues.total}</p>
      )}
    </>
  )
}
