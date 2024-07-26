"use client"


import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerCard from './BurgerCard';

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
};

const Popular = () => {

  return (
    <div className="pt-[3rem] pb-[3rem]">
        <h1 className="heading">
            Our Popular <span className="text-red-600">Burgers</span>
        </h1>

        <div className="w-[80%] mt-[4rem] mx-auto cursor-pointer ">
            <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass='item'
            showDots={false}>

                <BurgerCard 
                title="Beefy Bite"
                image="/images/b1.png"
                reviews="15"
                price="1200LKR"
                />

                <BurgerCard 
                title="Beefy Bite"
                image="/images/b1.png"
                reviews="32"
                price="950LKR"
                />

                <BurgerCard 
                title="Beefy Bite"
                image="/images/b1.png"
                reviews="21"
                price="1400LKR"
                />

                <BurgerCard 
                title="Beefy Bite"
                image="/images/b1.png"
                reviews="77"
                price="1850LKR"
                />

                <BurgerCard 
                title="Beefy Bite"
                image="/images/b1.png"
                reviews="56"
                price="700LKR"
                />

                <BurgerCard 
                title="Beefy Bite"
                image="/images/b1.png"
                reviews="25"
                price="2200LKR"
                />

                <BurgerCard 
                title="Beefy Bite"
                image="/images/b1.png"
                reviews="74"
                price="1800LKR"
                />

                <BurgerCard 
                title="Beefy Bite"
                image="/images/b1.png"
                reviews="22"
                price="1850LKR"
                />

                <BurgerCard 
                title="Beefy Bite"
                image="/images/b1.png"
                reviews="15"
                price="1200LKR"
                />


                <BurgerCard 
                title="Beefy Bite"
                image="/images/b1.png"
                reviews="69"
                price="3250LKR"
                />


            </Carousel>

        </div>
      
    </div>
  )
}

export default Popular
