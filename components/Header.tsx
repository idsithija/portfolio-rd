import { useRef, useState } from "react"
import Hambuger from "../assets/icons/Hambuger"

function Header() {

  // const middleLine = useRef<HTMLSpanElement>(null)
  // const topLine = useRef<HTMLSpanElement>(null)

  // const hambugerClick = () => {
  //   console.log(middleLine)
  //   middleLine.current?.classList.add('-rotate-45')
  //   topLine.current?.classList.add('-rotate-135')
  // }

  return (
    <div className="flex p-3 lg:p-6 2xl:p-10 justify-between items-center">
      <div>
        <h1 className="text-[1.8rem] 2xl:text-[2.5rem]">Ranusha Darmarathne</h1>
      </div>

      <div className="hidden lg:block">
        <ul className="flex space-x-4 text-[1.8rem] text-[#2D2D2D]">
          <li className="px-9 border border-[#2D2D2D] rounded-2xl hover:bg-[#fa793b]">Work</li>
          <li className="px-9 border border-[#2D2D2D] rounded-2xl hover:bg-[#fa793b]">About</li>
          <li className="px-9 border border-[#2D2D2D] rounded-2xl hover:bg-[#fa793b]">Contact</li>
        </ul>
      </div>

      <div className="w-[30px] h-[30px] cursor-pointer lg:hidden">
        <div className="relative w-[30px] h-[30px] ss">
          <span className="hambgurspan line1"></span>
          <span className="hambgurspan line3"></span>
          <span className="hambgurspan line2"></span>
        </div>
      </div>

    </div >
  )
}

export default Header