import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const Business = () => {
  return (
    <section id='features' className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Haces los negocios, <br className='sm:block hidden' /> nos encargamos del dinero</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Con la tarjeta de crédito adecuada, puede mejorar su vida financiera acumulando crédito, obteniendo recompensas y ahorrando dinero. Pero con cientos de tarjetas de crédito en el mercado.</p>

        <Button styles='mt-10' />
      </div>
    </section>
  )
}

export default Business