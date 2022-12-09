import Marker from "../assets/icons/Marker"

function Info() {
  return (
    <div>
      <div className="pt-4 px-3 pb-6 lg:pt-24 lg:pb-16">
        <h3 className="text-[1.5rem] poppins-font text-center 2xl:text-[2rem] text-[#2D2D2D]">
          What I Do
        </h3>
      </div>
      <div className="flex flex-col space-y-3 px-3 lg:flex-row lg:flex-wrap lg:justify-center lg:space-y-0 lg:text-[#2D2D2D]">
        <div className="flex items-center lg:w-full lg:justify-center">
          <div className="mr-2 w-[22px]">
            <Marker />
          </div>
          <div className="text-[1.8rem] font-semibold lg:text-[3rem]">
            BLOG POSTS
          </div>
        </div>
        <div className="lg:flex lg:w-full lg:justify-center space-y-3 lg:space-y-0">
          <div className="flex items-center lg:justify-end">
            <div className="mr-2 w-[22px]">
              <Marker />
            </div>
            <div className="text-[1.8rem] font-semibold lg:text-[3rem]">
              EDITORIAL CONTENT
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-2 w-[22px]">
              <Marker />
            </div>
            <div className="text-[1.8rem] font-semibold lg:text-[3rem]">
              BODY COPY
            </div>
          </div>
        </div>
        <div className="lg:flex lg:w-full lg:justify-center space-y-3 lg:space-y-0">
          <div className="flex items-center">
            <div className="mr-2 w-[22px]">
              <Marker />
            </div>
            <div className="text-[1.8rem] font-semibold lg:text-[3rem]">
              SOCIAL STRATEGY
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-2 w-[22px]">
              <Marker />
            </div>
            <div className="text-[1.8rem] font-semibold lg:text-[3rem]">
              BRAND STORIES
            </div>
          </div>
        </div>
        <div className="lg:flex lg:w-full lg:justify-center space-y-3 lg:space-y-0">
          <div className="flex items-center">
            <div className="mr-2 w-[22px]">
              <Marker />
            </div>
            <div className="text-[1.8rem] font-semibold lg:text-[3rem]">
              WEBSITE COPY
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-2 w-[22px]">
              <Marker />
            </div>
            <div className="text-[1.8rem] font-semibold lg:text-[3rem]">
              CAMPAIGN IDEAS
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-2 w-[22px]">
            <Marker />
          </div>
          <div className="text-[1.8rem] font-semibold lg:text-[3rem]">
            PRODUCT DESCRIPTIONS
          </div>
        </div>
      </div>
      <hr className="h-[2px] bg-black mt-12 mb-10 lg:w-[calc(100%-5rem)] lg:mx-auto"></hr>
    </div>
  )
}

export default Info