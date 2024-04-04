const FrameComponent8 = () => {
  return (
    <header className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-center text-[2rem] text-white font-mukta">
      <div className="w-[10.625rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border">
        <div className="self-stretch relative leading-[3.125rem] [text-shadow:0.5px_0_0_#fff,_0_0.5px_0_#fff,_-0.5px_0_0_#fff,_0_-0.5px_0_#fff] z-[1]">
          <p className="m-0">WEBSITE</p>
        </div>
      </div>
      <div className="w-[26.281rem] flex flex-row items-start justify-start max-w-full text-[1.5rem] mq675:w-[6.25rem]">
        <div className="h-[3.906rem] w-[6.25rem] relative">
          <div className="absolute top-[1.094rem] left-[0.344rem] rounded-11xl bg-dimgray w-[5.625rem] h-[1.719rem] z-[1]" />
          <div className="absolute top-[0rem] left-[0rem] leading-[3.906rem] font-medium inline-block w-full h-full whitespace-nowrap z-[2]">{`About `}</div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[1.019rem] max-w-full mq675:hidden">
          <div className="w-[6.25rem] relative leading-[3.906rem] font-medium inline-block shrink-0 whitespace-nowrap z-[1]">{`Contact `}</div>
          <div className="h-[2.5rem] flex flex-col items-start justify-start pt-[1.219rem] px-[0rem] pb-[0rem] box-border">
            <img
              className="w-[1.188rem] h-[1.281rem] relative z-[1]"
              loading="lazy"
              alt=""
              src="/subtract-stroke1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.844rem] px-[0rem] pb-[0rem] text-left">
            <div className="relative leading-[2.125rem] inline-block min-w-[6.938rem] whitespace-nowrap z-[1]">
              Dark mode
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem]">
            <div className="w-[2.594rem] h-[1.481rem] rounded-mini bg-dimgray flex flex-row items-start justify-end pt-[0.094rem] px-[0.088rem] pb-[0.088rem] box-border z-[1]">
              <div className="w-[2.594rem] relative rounded-mini bg-dimgray h-[1.481rem] hidden" />
              <div className="h-[1.3rem] w-[1.3rem] relative rounded-smi-5 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1),_0px_0.5px_1px_rgba(0,_0,_0,_0.1),_0px_0.5px_1.5px_rgba(0,_0,_0,_0.1)] z-[2]">
                <div className="absolute top-[0rem] left-[0rem] rounded-smi-5 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1),_0px_0.5px_1px_rgba(0,_0,_0,_0.1),_0px_0.5px_1.5px_rgba(0,_0,_0,_0.1)] w-full h-full hidden" />
                <img
                  className="absolute top-[0.325rem] left-[0.369rem] w-[0.6rem] h-[0.65rem] z-[3]"
                  alt=""
                  src="/subtract-stroke-11.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent8;
