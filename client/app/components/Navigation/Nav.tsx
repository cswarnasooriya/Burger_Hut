import React from 'react'
import { FaBurger } from 'react-icons/fa6'

const Nav = () => {
  return (
    <div className="h-[12vh] bg-white">

      <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">

        {/* logo div */}
        <div className="items-center flex space-x-3">
          <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500 " />
          <h1 className="text-[20px] sm:text-[30px] font-semibold">Burger Hut</h1>

        </div>
      </div>
      
    </div>
  )
}

export default Nav
