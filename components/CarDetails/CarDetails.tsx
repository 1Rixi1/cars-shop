import { CarCardProps } from "@/types";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  car: CarCardProps;
};

export const CarDetails = ({ isOpen, closeModal, car }: Props) => {
  return <div></div>;
};
