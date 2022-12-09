export default function WorkGrid() {
  return (
    <div>
      <div className="pt-4 px-3 pb-6 2xl:px-10 2xl:pt-7 2xl:pb-10">
        <h3 className="text-[1.5rem] 2xl:text-[2rem] poppins-font">
          Featured Work
        </h3>
      </div>
      <div className="flex flex-col space-y-1 lg:flex-row lg:space-y-1 flex-wrap lg:px-10">
        <div className="flex flex-col space-y-1 lg:flex-row lg:flex-[0_0_100%] flex-wrap lg:space-y-0 lg:-mx-0.5">
          <div className="lg:w-2/5 lg:px-0.5 2xl:h-[850px]">
            <div className="h-[400px] w-full bg-img-1 bg-no-repeat bg-cover shadow-1xbb lg:h-full">
              <div className="p-3 flex flex-col justify-end h-full pb-10">
                <h4 className="text-white text-[1.9rem]">Fashion Forward</h4>
                <p className="text-white text-[1.5rem]">180fit</p>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 lg:px-0.5 2xl:h-[850px]">
            <div className="h-[400px] w-full bg-img-2 bg-no-repeat bg-cover shadow-1xbb lg:h-full">
              <div className="p-3 flex flex-col justify-end h-full pb-10">
                <h4 className="text-white text-[1.9rem]">Fashion Forward</h4>
                <p className="text-white text-[1.5rem]">180fit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-1 lg:flex-row lg:flex-[0_0_100%] flex-wrap lg:space-y-0 lg:-mx-0.5">
          <div className="lg:w-3/5 lg:px-0.5 2xl:h-[850px]">
            <div className="h-[400px] w-full bg-img-3 bg-no-repeat bg-cover shadow-1xbb lg:h-full">
              <div className="p-3 flex flex-col justify-end h-full pb-10">
                <h4 className="text-white text-[1.9rem]">Fashion Forward</h4>
                <p className="text-white text-[1.5rem]">180fit</p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 lg:px-0.5 2xl:h-[850px]">
            <div className="h-[400px] w-full bg-img-4 bg-no-repeat bg-cover shadow-1xbb lg:h-full">
              <div className="p-3 flex flex-col justify-end h-full pb-10">
                <h4 className="text-white text-[1.9rem]">Fashion Forward</h4>
                <p className="text-white text-[1.5rem]">180fit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-1 lg:flex-row lg:flex-[0_0_100%] flex-wrap lg:space-y-0 lg:-mx-0.5">
          <div className="lg:w-2/5 lg:px-0.5 2xl:h-[850px]">
            <div className="h-[400px] w-full bg-img-5 bg-no-repeat bg-cover shadow-1xbb lg:h-full">
              <div className="p-3 flex flex-col justify-end h-full pb-10">
                <h4 className="text-white text-[1.9rem]">Fashion Forward</h4>
                <p className="text-white text-[1.5rem]">180fit</p>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 lg:px-0.5 2xl:h-[850px]">
            <div className="h-[400px] w-full bg-img-6 bg-no-repeat bg-cover shadow-1xbb lg:h-full">
              <div className="p-3 flex flex-col justify-end h-full pb-10">
                <h4 className="text-white text-[1.9rem]">Fashion Forward</h4>
                <p className="text-white text-[1.5rem]">180fit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
