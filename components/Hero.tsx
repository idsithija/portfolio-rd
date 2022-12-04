import Image from "next/image"
import Person from "../assets/images/SmilingMan.webp";

function Hero() {
  return (
    <div className="h-[650px] flex flex-col">
      <div className="p-3">
        <h2 className="text-[#161616] text-[14px] poppins-font">Consultant & Word Aficionado</h2>
        <p className="mt-4 text-[#383838] font-semibold text-[18px] poppins-font">
          Hello. I'm Daniel Mayer,
          A copywriter who can help you create campaigns, ace pitches, and build great brands.
        </p>
      </div>
      <div className="mt-6 h-full bg-hero-img bg-no-repeat shadow-1xbb">
        <div className="p-3 mt-5 flex justify-center">
          <Image src={Person} width={250} alt="person" priority />
        </div>
      </div>
    </div>
  )
}

export default Hero