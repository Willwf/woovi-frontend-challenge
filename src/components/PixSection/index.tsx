'use client'

import Image from 'next/image'
import styles from './styles.module.css'

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel, { stepLabelClasses } from '@mui/material/StepLabel'
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector'
import Divider from '@mui/material/Divider'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { styled } from '@mui/material'

const CustomStepConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.root}`]: {
    marginLeft: 6,
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    borderLeftWidth: 3,
    borderRadius: 1,
  },
}))

const CustomStepLabel = styled(StepLabel)(() => ({
  [`&.${stepLabelClasses.root}`]: {
    padding: 0,
  },
}))

const CustomAccordion = styled(Accordion)(() => ({
  margin: 0,
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
}))

const CustomAccordionSummary = styled(AccordionSummary)(() => ({
  padding: '0',
  fontWeight: 800,
}))

const steps = [
  {
    label: '1ª entrada no Pix',
    description: `R$ 15.300,00`,
  },
  {
    label: '2ª no cartão',
    description: 'R$ 15.300,00',
  },
]

export const PixSection = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        João, pague a entrada de R$ 15.300,00 pelo Pix
      </h1>

      <section>
        <div className={styles.qrCodeContainer}>
          <Image
            src="/QRCode.png"
            alt="Código QR para pagamento."
            width={332}
            height={332}
          />
        </div>

        <button type="button" className={styles.copyButton}>
          Clique para copiar QR CODE{' '}
          <Image
            className={styles.qrCode}
            src="/CopyIcon.svg"
            alt="Ícone de duas páginas para demonstrar uma cópia"
            width={19}
            height={22}
          />
        </button>

        <p className={styles.warningText}>
          Prazo de pagamento: <span>15/12/2021 - 08:17</span>
        </p>

        <Stepper orientation="vertical" connector={<CustomStepConnector />}>
          {steps.map((step, index) => (
            <Step key={step.label} className={styles.step}>
              <CustomStepLabel
                icon={
                  <Image
                    className={styles.icon}
                    src={index !== 1 ? '/ActualStep.svg' : '/Step.svg'}
                    alt="Ícone de um escudo para transmitir segurança."
                    width={16}
                    height={16}
                  />
                }
              >
                <p className={styles.stepLabel}>
                  <span>{step.label}</span> <span>{step.description}</span>
                </p>
              </CustomStepLabel>
            </Step>
          ))}
        </Stepper>

        <Divider />

        <div className={styles.totalContainer}>
          <p>CET: 0,5%</p>
          <p>Total: R$ 30.600,00</p>
        </div>

        <Divider />

        <CustomAccordion className={styles.accordion}>
          <CustomAccordionSummary
            expandIcon={
              <Image
                className={styles.icon}
                src="/ExpandIcon.svg"
                alt="Ícone de uma seta virada para cima para demonstrar que há conteúdo do acordeon"
                width={12}
                height={7}
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
            className={styles.accordionSummary}
          >
            Como funciona?
          </CustomAccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </CustomAccordion>

        <Divider />

        <p className={styles.warningText}>
          Identificador <span>2c1b951f356c4680b13ba1c9fc889c47</span>
        </p>
      </section>
    </main>
  )
}
