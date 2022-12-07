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
    <div className="flex p-3 justify-between items-center">
      <div className="flex-[7_7_0%]">
        <h1 className="text-[1.8rem]">Ranusha Darmarathne</h1>
      </div>


      <div className="w-[30px] h-[30px] cursor-pointer">
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