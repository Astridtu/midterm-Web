"use client";

import { CustomButtonProps } from '@/types';
import image from 'next/image';

const CustomButton = ({title, containerStyles, handleClick}:CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type='button'
      className={'custom-btn $Pc'}
      onClick={() => {}}
    >
        <span className='flex-1'>
           title
        </span>

    </button>
  )
}

export default CustomButton