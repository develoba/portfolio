import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Empieza</span>
        </p>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-1'>
            <span className='text-gradient'>Ahora</span>
          </p>
          <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt='arrow' />
        </div>
      </div>
    </div>
)

export default GetStarted