import Marker from "../assets/icons/Marker"

function Info() {
  return (
    <div>
      <div className="pt-4 px-3 pb-6">
        <h3 className="text-[1.5rem] poppins-font text-center">
          What I Do
        </h3>
      </div>
      <div className="flex flex-col space-y-3 px-3">
        <div className="flex items-center">
          <div className="mr-2 w-[22px]">
            <Marker />
          </div>
          <div className="text-[1.8rem] font-semibold">
            BLOG POSTS
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-2 w-[22px]">
            <Marker />
          </div>
          <div className="text-[1.8rem] font-semibold">
            EDITORIAL CONTENT
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-2 w-[22px]">
            <Marker />
          </div>
          <div className="text-[1.8rem] font-semibold">
            BODY COPY
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-2 w-[22px]">
            <Marker />
          </div>
          <div className="text-[1.8rem] font-semibold">
            SOCIAL STRATEGY
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-2 w-[22px]">
            <Marker />
          </div>
          <div className="text-[1.8rem] font-semibold">
            BRAND STORIES
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-2 w-[22px]">
            <Marker />
          </div>
          <div className="text-[1.8rem] font-semibold">
            WEBSITE COPY
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-2 w-[22px]">
            <Marker />
          </div>
          <div className="text-[1.8rem] font-semibold">
            CAMPAIGN IDEAS
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-2 w-[22px]">
            <Marker />
          </div>
          <div className="text-[1.8rem] font-semibold">
            PRODUCT DESCRIPTIONS
          </div>
        </div>
      </div>
      <hr className="h-[2px] bg-black mt-12 mb-10"></hr>
    </div>
  )
}

export default Info