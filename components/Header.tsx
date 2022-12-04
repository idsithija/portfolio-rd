import Hambuger from "../assets/icons/Hambuger"

function Header() {
  return (
    <div className="flex p-3">
      <div className="flex-[7_7_0%]">
        <h1 className="text-[1.5rem] font-semibold">Ranusha Darmarathne</h1>
      </div>
      <div className="flex-[3_3_0%]">
        <Hambuger />
      </div>
    </div>
  )
}

export default Header