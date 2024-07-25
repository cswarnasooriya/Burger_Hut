import React from 'react'
import Img1 from '@/public/images/img1.png'
import Image from 'next/image'

const Feature = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
        {/* heading */}
        <h1 className="heading">
            Burger made with <br />
            Love and 
            <span>Care</span>
        </h1>

        {/* cards */}
        <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
          {/* card1 */}
          <div>
            <div className="p-6 hover:bg-white rounded-lg transition-all duration-200 cursor-pointer">
              <Image src={Img1} alt='burger image' className="rounded-3xl" />
              <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
                Our Burger
              </h1>
              <p className="mt-[0.2rem] text-black text-opacity-60  text-justify">
              The best burgers offer a combination of tastes and textures – sweet, sour, salt – with a bit of crunch. The patty needs to be juicy, the bun soft but sturdy, and you want the meat/bun/accompaniment ratio to be even from first to last bite.
              </p>

            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Feature
