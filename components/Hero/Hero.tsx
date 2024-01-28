"use client";

import Image from "next/image";
import { CustomButton } from "@/components/CustomButton/CustomButtom";
export const Hero = () => {
  const handleClick = () => {};

  return (
    <div className={"hero"}>
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Найти, забронировать или арендовать автомобиль
        </h1>

        <p className="hero__subtitle">
          Упростите процесс аренды автомобиля с помощью нашего простого процесса
          бронирования
        </p>

        <CustomButton
          title="Исследовать автомобиль"
          containerStyles={"bg-primary-blue text-white rounded-full mt-10"}
          handleClick={handleClick}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};
