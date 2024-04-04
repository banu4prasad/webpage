import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent7 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/light-about");
  }, [navigate]);

  const onFrameSwitchClick = useCallback(() => {
    navigate("/dark-contact");
  }, [navigate]);

  return (
    <header className="self-stretch flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[1.519rem] box-border max-w-full gap-[1.25rem] text-center text-[2rem] text-white font-mukta">
      <div
        className="w-[10.625rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border cursor-pointer"
        onClick={onFrameContainerClick}
      >
        <div className="self-stretch relative leading-[3.125rem] [text-shadow:0.5px_0_0_#fff,_0_0.5px_0_#fff,_-0.5px_0_0_#fff,_0_-0.5px_0_#fff] z-[1]">
          <p className="m-0">WEBSITE</p>
        </div>
      </div>
      <div className="h-[3.906rem] w-[26.469rem] relative max-w-full text-[1.5rem]">
        <div
          className="absolute h-full top-[0rem] left-[0rem] leading-[3.906rem] font-medium inline-block w-[6.25rem] whitespace-nowrap cursor-pointer z-[1]"
          onClick={onAboutTextClick}
        >{`About `}</div>
        <div className="absolute top-[0rem] left-[5.969rem] w-[8.875rem] flex flex-row items-end justify-start gap-[0.125rem]">
          <div className="h-[3.906rem] flex-1 relative">
            <div className="absolute top-[1.094rem] left-[0rem] rounded-11xl bg-dimgray w-[6.875rem] h-[1.719rem] z-[1]" />
            <div className="absolute w-[calc(100%_-_10px)] top-[0rem] left-[0.281rem] leading-[3.906rem] font-medium inline-block h-[3.906rem] whitespace-nowrap z-[2]">{`Contact `}</div>
          </div>
          <div className="h-[2.813rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.063rem] box-border">
            <img
              className="w-[1.875rem] h-[1.75rem] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/sun@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[0.906rem] left-[15.563rem] leading-[2.125rem] text-left inline-block w-[7.188rem] min-w-[7.188rem] whitespace-nowrap z-[1]">
          Light mode
        </div>
        <div
          className="absolute top-[1.188rem] left-[23.688rem] rounded-mini bg-dimgray w-[2.781rem] h-[1.481rem] flex flex-row items-start justify-start pt-[0.094rem] px-[0.125rem] pb-[0.106rem] box-border cursor-pointer z-[1]"
          onClick={onFrameSwitchClick}
        >
          <div className="w-[2.781rem] relative rounded-mini bg-dimgray h-[1.481rem] hidden" />
          <div className="h-[1.281rem] w-[1.281rem] relative rounded-smi-5 bg-black z-[2]">
            <div className="absolute top-[0rem] left-[0rem] rounded-smi-5 bg-black w-full h-full hidden" />
            <img
              className="absolute top-[0.25rem] left-[0.281rem] w-[0.75rem] h-[0.75rem] object-cover z-[3]"
              alt=""
              src="/sun-1@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent7;
