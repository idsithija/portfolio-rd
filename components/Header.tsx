import Hambuger from "../assets/icons/Hambuger"

function Header() {
  return (
    <div className="flex p-3 justify-between items-center">
      <div className="flex-[7_7_0%]">
        <h1 className="text-[1.8rem]">Ranusha Darmarathne</h1>
      </div>


      <div className="w-[30px] h-[30px] space-y-1.5 cursor-pointer">
        <span className="w-[40%] h-[3px] block bg-black"></span>
        <span className="w-[100%] h-[3px] block bg-black"></span>
        <span className="w-[50%] h-[3px] block bg-black float-right"></span>
      </div>



    </div>
  )
}

export default Header