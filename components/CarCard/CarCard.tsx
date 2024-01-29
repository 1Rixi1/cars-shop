"use client";

import { CarCardProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import { CustomButton } from "@/components";
import { useState } from "react";
import { CarDetails } from "@/components/CarDetails/CarDetails";

type Props = {
  car: CarCardProps;
};
export const CarCard = ({ car }: Props) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);

  const handleClickIsOpenHandler = () => {};
  const handleCloseModal = () => {};

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} - {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-semibold">/days</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={"/hero.png"}
          alt={"car model"}
          fill
          priority
          className={"object-contain"}
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              alt={"steering wheel"}
              width={20}
              height={20}
            />
            <p className={"text-[14px]"}>
              {transmission == "a" ? "Автоматическая" : "Ручная"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/tire.svg"} alt={"tire"} width={20} height={20} />
            <p className={"text-[14px]"}>{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/gas.svg"} alt={"gas"} width={20} height={20} />
            <p className={"text-[14px]"}>{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title={"Подробнее"}
            containerStyles={"w-full py-[16px] rounded-full bg-primary-blue"}
            textStyles={"text-white text-[14px] leading-[17px] font-bold"}
            rightIcon="/right-arrow.svg"
            handleClick={handleClickIsOpenHandler}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={handleCloseModal} car={car}/>
    </div>
  );
};
