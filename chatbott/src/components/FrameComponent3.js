import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/light-about");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/dark-contact");
  }, [navigate]);

  const onUnionShapeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.188rem] pl-[0rem] box-border max-w-full text-center text-[2rem] text-white font-mukta">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem]">
        <div className="w-[10.625rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border">
          <div className="self-stretch relative leading-[3.125rem] [text-shadow:0.5px_0_0_#fff,_0_0.5px_0_#fff,_-0.5px_0_0_#fff,_0_-0.5px_0_#fff] z-[1]">
            <p className="m-0">WEBSITE</p>
          </div>
        </div>
        <div className="w-[26.281rem] flex flex-row items-start justify-start max-w-full text-[1.5rem] mq750:hidden">
          <div
            className="w-[6.25rem] relative leading-[3.906rem] font-medium inline-block shrink-0 whitespace-nowrap cursor-pointer z-[1]"
            onClick={onAboutTextClick}
          >{`About `}</div>
          <div className="w-[7.281rem] flex flex-col items-start justify-start py-[0rem] pr-[1.031rem] pl-[0rem] box-border">
            <div
              className="self-stretch relative leading-[3.906rem] font-medium whitespace-nowrap cursor-pointer z-[1]"
              onClick={onContactTextClick}
            >{`Contact `}</div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.906rem] px-[0rem] pb-[0rem] text-left">
            <div className="self-stretch flex flex-row items-start justify-start gap-[1.019rem]">
              <div className="h-[1.656rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border">
                <img
                  className="w-[1.188rem] h-[1.281rem] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/subtract-stroke.svg"
                />
              </div>
              <div className="relative leading-[2.125rem] inline-block min-w-[6.938rem] whitespace-nowrap z-[1]">
                Dark mode
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.281rem] px-[0rem] pb-[0rem]">
                <div
                  className="w-[2.594rem] h-[1.481rem] rounded-mini bg-dimgray flex flex-row items-start justify-end pt-[0.094rem] px-[0.088rem] pb-[0.088rem] box-border cursor-pointer z-[1]"
                  onClick={onUnionShapeClick}
                >
                  <div className="w-[2.594rem] relative rounded-mini bg-dimgray h-[1.481rem] hidden" />
                  <div className="h-[1.3rem] w-[1.3rem] relative rounded-smi-5 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1),_0px_0.5px_1px_rgba(0,_0,_0,_0.1),_0px_0.5px_1.5px_rgba(0,_0,_0,_0.1)] z-[2]">
                    <div className="absolute top-[0rem] left-[0rem] rounded-smi-5 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1),_0px_0.5px_1px_rgba(0,_0,_0,_0.1),_0px_0.5px_1.5px_rgba(0,_0,_0,_0.1)] w-full h-full hidden" />
                    <img
                      className="absolute top-[0.325rem] left-[0.369rem] w-[0.6rem] h-[0.65rem] z-[3]"
                      alt=""
                      src="/subtract-stroke-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent3;
