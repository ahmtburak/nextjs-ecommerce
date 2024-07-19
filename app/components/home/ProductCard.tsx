'use client';

import { Rating } from "@mui/material";
import Image from "next/image";

const ProductCard = ({ product }: { product: any }) => {
  let productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length

  return (
    <div className="w-[240px] cursor-pointer flex flex-col flex-1 shadow-lg p-2 rounded-md">
      <div className="relative h-[150px]">
        <Image src={product.image} fill alt={product.description} className="object-contain" />
      </div>
      <div className="text-center mt-3">
        <Rating name="read-only" value={productRating} readOnly />
        <div className="text-orange-500 text-lg md:text-xl mt-2 font-bold">
          {product.price} ₺
        </div>
      </div>
    </div>
  )
}

export default ProductCard
