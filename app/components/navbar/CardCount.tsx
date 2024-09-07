"use client";
import useCart from "@/hooks/useCart";
import { MdShoppingBasket } from "react-icons/md";
const CardCount = () => {
  const { cartPrdcts } = useCart();
  return (
    <div className="hidden md:flex relative">
      <MdShoppingBasket size={25} />
      <div className="absolute -top-1 text-xs -right-2 bg-blue-900 w-5 h-5 flex items-center justify-center rounded-full">
        {cartPrdcts?.length}
      </div>
    </div>
  );
};

export default CardCount;
