import Image from 'next/image'
import styles from './styles.module.css'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

import checkedIcon from '../../../public/CheckedIcon.svg'

import { RadioLabel } from '../RadioLabel'

const paymentValues = [
  {
    installments: 1,
    installmentValue: '30.500,00',
    total: '30.500,00',
  },
  {
    installments: 2,
    installmentValue: '15.300,00',
    total: '30.600,00',
  },
  {
    installments: 3,
    installmentValue: '10.196,66',
    total: '30.620,00',
  },
  {
    installments: 4,
    installmentValue: '7.725,00',
    total: '30.900,00',
  },
  {
    installments: 5,
    installmentValue: '6.300,00',
    total: '31.500,00',
  },
  {
    installments: 6,
    installmentValue: '5.283,33',
    total: '31.699,98',
  },
  {
    installments: 7,
    installmentValue: '4.542,85',
    total: '31.800,00',
  },
]

export const PaymentSection = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>João, como você quer pagar?</h1>

      <section>
        <FormControl variant="outlined" fullWidth>
          <RadioGroup
            aria-label="Formas de pagamento"
            defaultValue={paymentValues[1].installmentValue}
            name="radio-buttons-group"
          >
            <div className={styles.formControlLabelContainer}>
              <p className={styles.formControlLabelTitle}>Pix</p>
              <div className={styles.formControlLabelDiv}>
                <FormControlLabel
                  value={paymentValues[0].installmentValue}
                  control={
                    <Radio
                      checkedIcon={
                        <Image src={checkedIcon} alt="Ícone de selecionado" />
                      }
                    />
                  }
                  label={<RadioLabel paymentValues={paymentValues[0]} />}
                  labelPlacement="start"
                  className={styles.formControlLabel}
                />
                <div className={styles.infoAlertContainer}>
                  <p className={styles.infoAlert}>
                    🤑 <span>R$ 300,00</span> de volta no seu Pix na hora
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.formControlLabelContainer}>
              <p className={styles.formControlLabelTitle}>Pix Parcelado</p>
              {paymentValues.map((installment) => {
                if (installment.installments !== 1) {
                  return (
                    <div
                      key={installment.installments}
                      className={styles.formControlLabelDiv}
                    >
                      <FormControlLabel
                        value={installment.installmentValue}
                        control={
                          <Radio
                            color="primary"
                            checkedIcon={
                              <Image
                                src={checkedIcon}
                                alt="Ícone de selecionado"
                              />
                            }
                            className={styles.radioInput}
                          />
                        }
                        label={<RadioLabel paymentValues={installment} />}
                        labelPlacement="start"
                        className={styles.formControlLabel}
                      />
                      {installment.installments === 4 && (
                        <div className={styles.infoAlertContainer}>
                          <p className={styles.infoAlert}>
                            <span>-3% de juros:</span> Melhor opção de
                            parcelamento
                          </p>
                        </div>
                      )}
                    </div>
                  )
                }
              })}
            </div>
          </RadioGroup>
        </FormControl>
      </section>
    </main>
  )
}
