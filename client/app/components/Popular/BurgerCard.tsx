import Image from 'next/image'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'

interface Props {
    title:string,
    image:string,
    price:string,
    reviews:string,
}

const BurgerCard = ({title,image,reviews,price} : Props) => {
  return (
    <div className="bg-white p-6 rounded-lg m-3">

        {/* image div */}
        <div className="w-[200px] mx-auto h-[200px]">
            <Image src={image} alt={title} width={200} height={200} className="w-[100%] h-[100%] object-cover" />

        </div>

        {/* title */}
        <h1 className="mt-[1.3rem] text-[22px]  text-black font-semibold">
            {title}
        </h1>

        <div className="flex items-center mt-[0.5rem] space-x-3">
            <div className="flex items-center">
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
                <FaStar className="w-[1rem] h-[1rem] text-yellow-600" />
            </div>
            <div className="text-black opacity-80">({reviews})</div>
        </div>

        <p className="mt-[0.5rem] text-black text-opacity-70 text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium inventore in mollitia amet nam magni quaerat dolor reiciendis hic aliquid maxime rem ut magnam, optio voluptates expedita, fugiat explicabo? Facere.

        </p>

        <div className="flex mt-[1.4rem] items-center justify-between">
            <h1 className=" text-red-500 font-bold text-[20px]">
                {price}
            </h1>
            <button className="px-6 py-2 transition-all duration-200 flex items-center text-white rounded-md bg-red-500 hover:bg-green-500">
                <FaShoppingBag className="w-[1.3rem] h-[1.3rem]" />
            </button>
        </div>
      
    </div>
  )
}

export default BurgerCard
