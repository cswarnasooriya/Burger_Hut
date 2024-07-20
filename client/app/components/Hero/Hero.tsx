"use client"

import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Img1 from '@/public/images/a1.png'
import Img2 from '@/public/images/p2.png'
import { BiCycling } from 'react-icons/bi';

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
};

const Hero = () => {
  return (
    <Carousel
    additionalTransfrom={0}
    arrows={false}
    autoPlay={true}
    autoPlaySpeed={4000}
    centerMode={false}
    infinite
    responsive={responsive}
    itemClass='item'
    showDots={true}
    >
        {/* first hero slide */}
        <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 clip_path">
            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-auto gap-[2rem]">
                <Image src={Img1} alt="Image 1" />
                <div>
                    <h1 className="text-[40px] font-semibold text-yellow-400">
                        Feel The Real Taste
                    </h1>
                    <h1 className="text-[90px] leading-[5rem] text-white font-bold">
                        Best <br />Burgers
                    </h1>
                    <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
                        We are the best and fast Burger deliver company in North Western , Sri Lanka. So feel the real taste with us and enjoy you every occations!
                    </p>
                    
                        <button className="py-3 px-8 mt-[2rem]  text-[16px] transition-all bg-green-500 hover:bg-green-700 duration-200  flex items-center rounded-md space-x-2 text-white">
                            <span>
                            <BiCycling className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem] " />
                            </span>
                            <span className="font-bold">
                            Order Now
                            </span>
                        </button>

                </div>
            </div>

            
        </div>

        {/* second hero slide */}
        <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 clip_path">
            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-auto gap-[2rem]">
                <Image src={Img2} alt="Image 1" />
                <div>
                    <h1 className="text-[40px] font-semibold text-yellow-400">
                        Get Hot Deal Promo
                    </h1>
                    <h1 className="text-[90px] leading-[5rem] text-white font-bold">
                        Best <br />Prices
                    </h1>
                    <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
                        We are the best and fast Burger deliver company in North Western , Sri Lanka. So feel the real taste with us and enjoy you every occations!
                    </p>
                    
                        <button className="py-3 px-8 mt-[2rem]  text-[16px] transition-all bg-green-500 hover:bg-green-700 duration-200  flex items-center rounded-md space-x-2 text-white">
                            <span>
                            <BiCycling className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem] " />
                            </span>
                            <span className="font-bold">
                            Order Now
                            </span>
                        </button>

                </div>
            </div>

            
        </div>



      
    </Carousel>
  );
};

export default Hero
