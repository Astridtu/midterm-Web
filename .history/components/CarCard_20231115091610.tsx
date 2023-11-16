"use client";

import {useState} from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import { CustomButton } from '.';
import { calculateCarRent } from '@/utils';

interface CarCardProps {
    car : CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
const { city_mpg, year, make, model, transmission, drive} = car;
const carRent = calculateCarRent(city_mpg,year);
  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {make} {model}
            </h2>
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
                {carRent}
             </span>
             <span className='self-start text-[14px] font-semibold'>
                {carRent}
             </span>
        </p>
    </div>
  )
}

export default CarCard