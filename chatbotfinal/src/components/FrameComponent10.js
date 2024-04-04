import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent10 = () => {
  const navigate = useNavigate();

  const onContactTextClick = useCallback(() => {
    navigate("/dark-contact");
  }, [navigate]);

  const onFrameSwitchClick = useCallback(() => {
    navigate("/light-about");
  }, [navigate]);

  return (
    <header className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-center text-[2.863rem] text-white font-mukta">
      <div className="w-[15.194rem] relative leading-[4.469rem] inline-block shrink-0 [text-shadow:0.7px_0_0_#fff,_0_0.7px_0_#fff,_-0.7px_0_0_#fff,_0_-0.7px_0_#fff] z-[1]">
        <p className="m-0">WEBSITE</p>
      </div>
      <div className="w-[29.381rem] flex flex-row items-end justify-start gap-[1.656rem] max-w-full text-[1.706rem] mq800:w-[14.788rem]">
        <div className="flex-1 flex flex-row items-start justify-start mq800:hidden">
          <div className="h-[4.469rem] w-[7.1rem] relative">
            <div className="absolute top-[1.25rem] left-[0.438rem] rounded-[34.32px] bg-dimgray w-[6.25rem] h-[2rem] z-[1]" />
            <div className="absolute top-[0rem] left-[0rem] leading-[4.469rem] font-medium inline-block w-full h-full whitespace-nowrap z-[2]">{`About `}</div>
          </div>
          <div className="h-[4.469rem] flex-1 relative ml-[-0.319rem]">
            <img
              className="absolute top-[1.25rem] left-[0rem] rounded-[34.08px] w-[7.813rem] h-[1.969rem] z-[1]"
              loading="lazy"
              alt=""
            />
            <div
              className="absolute w-[calc(100%_-_11.4px)] top-[0rem] left-[0.319rem] leading-[4.469rem] font-medium inline-block h-[4.469rem] whitespace-nowrap cursor-pointer z-[2]"
              onClick={onContactTextClick}
            >{`Contact `}</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.038rem] text-left">
          <div className="flex flex-row items-start justify-start gap-[0.481rem]">
            <div className="h-[1.894rem] flex flex-col items-start justify-start pt-[0.431rem] px-[0rem] pb-[0rem] box-border">
              <img
                className="w-[1.35rem] h-[1.463rem] relative z-[1]"
                loading="lazy"
                alt=""
                src="/subtract-stroke1.svg"
              />
            </div>
            <div className="relative leading-[2.394rem] inline-block min-w-[7.875rem] whitespace-nowrap z-[1]">
              Dark mode
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.319rem] px-[0rem] pb-[0rem]">
              <div
                className="w-[2.944rem] h-[1.694rem] rounded-[17.04px] bg-dimgray flex flex-row items-start justify-end py-[0.106rem] px-[0.156rem] box-border cursor-pointer z-[1]"
                onClick={onFrameSwitchClick}
              >
                <div className="w-[2.944rem] relative rounded-[17.04px] bg-dimgray h-[1.694rem] hidden" />
                <div className="h-[1.481rem] w-[1.475rem] relative rounded-mini-2 bg-black shadow-[0px_1.1px_2.27px_rgba(0,_0,_0,_0.1),_0px_0.6px_1.14px_rgba(0,_0,_0,_0.1),_0px_0.6px_1.7px_rgba(0,_0,_0,_0.1)] z-[2]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-mini-2 bg-black shadow-[0px_1.1px_2.27px_rgba(0,_0,_0,_0.1),_0px_0.6px_1.14px_rgba(0,_0,_0,_0.1),_0px_0.6px_1.7px_rgba(0,_0,_0,_0.1)] w-full h-full hidden" />
                  <img
                    className="absolute top-[0.375rem] left-[0.438rem] w-[0.681rem] h-[0.744rem] z-[3]"
                    alt=""
                    src="/subtract-stroke-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent10;
