import Hambuger from "../assets/icons/Hambuger"

function Header() {
  return (
    <div className="flex p-3 justify-between">
      <div className="flex-[7_7_0%]">
        <h1 className="text-[1.8rem]">Ranusha Darmarathne</h1>
      </div>
      <Hambuger />
    </div>
  )
}

export default Header