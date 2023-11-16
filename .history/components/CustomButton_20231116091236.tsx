"use client";

import { CustomButtonProps } from '@/types';
import image from 'next/image';

const CustomButton = ({title, containerStyles, handleClick, btnType, textStyles, rightIcon}:CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={ btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
           {title}
        </span>

    </button>
  )
}

export default CustomButton