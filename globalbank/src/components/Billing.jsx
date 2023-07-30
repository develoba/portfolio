import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'


const Billing = () => (
    <section id='product' className={`${layout.sectionReverse} items-center`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt='bill' className='w-[100%] h-[100%] relative z-[5]' />

        <div className='absolute z-[3] -left-1/" top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/" bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>

      <div className={`layout.sectionInfo`}>
        <h2 className={styles.heading2}>Controla fácilmente <br className='sm:block hidden' /> tu facturación.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Controla fácilmente tus facturas y gastos con GlobalBank. Gestiona tus finanzas de manera intuitiva y eficiente.
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt='apple_store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt='google_play' className='w-[128px] h-[42px] object-contain  cursor-pointer' />
        </div>
      </div>
    </section>
)


export default Billing