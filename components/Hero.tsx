import Image from "next/image"
import Person from "../assets/images/SmilingMan.webp";

function Hero() {
  return (
    <div className="h-[650px] lg:h-[100%] flex flex-col">
      <div className="p-3 lg:p-6 lg:h-[450px] 2xl:p-10">
        <h2 className="text-[#161616] text-[14px] lg:text-[1.5rem] lg:mt-10 poppins-font">Consultant & Word Aficionado</h2>
        <p className="mt-4 text-[#2D2D2D] font-semibold text-[18px] poppins-font lg:text-[3rem] lg:w-[600px] 2xl:w-[700px]">
          Hey there!
          I'm a digital and social media marketer based in Alberta, Canada.
        </p>
      </div>
      <div className="mt-4 h-full bg-hero-img bg-no-repeat shadow-1xbb lg:h-[500px] lg:relative 2xl:bg-cover">
        <div className="p-3 2xl:p-10 mt-5 flex justify-center lg:absolute lg:top-[-50%] lg:px-6 lg:py-0 lg:mt-0 lg:right-0">
          <Image className="2xl:w-[300px]" src={Person} width={230} alt="person" priority />
        </div>
      </div>
    </div>
  )
}

export default Hero