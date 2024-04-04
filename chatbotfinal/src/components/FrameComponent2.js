import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent2 = () => {
  const navigate = useNavigate();

  const onWEBSITETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className="self-stretch flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[0.369rem] box-border max-w-full gap-[1.25rem] text-center text-[2.9rem] text-white font-mukta">
      <div
        className="w-[15.406rem] relative leading-[4.531rem] inline-block shrink-0 [text-shadow:0.7px_0_0_#fff,_0_0.7px_0_#fff,_-0.7px_0_0_#fff,_0_-0.7px_0_#fff] cursor-pointer z-[1]"
        onClick={onWEBSITETextClick}
      >
        <p className="m-0">WEBSITE</p>
      </div>
      <div className="h-[4.469rem] w-[29.656rem] relative max-w-full text-[1.719rem]">
        <div className="absolute h-full top-[0rem] left-[0rem] leading-[4.469rem] font-medium inline-block w-[7.15rem] whitespace-nowrap z-[1]">{`About `}</div>
        <div className="absolute top-[0rem] left-[6.831rem] w-[19.2rem] flex flex-row items-start justify-start gap-[0.138rem]">
          <div className="h-[4.469rem] flex-[0.9189] relative">
            <div className="absolute top-[1.25rem] left-[0rem] rounded-[34.32px] bg-dimgray w-[7.863rem] h-[1.969rem] z-[1]" />
            <div className="absolute h-full top-[0rem] left-[0.319rem] leading-[4.469rem] font-medium inline-block w-[7.15rem] whitespace-nowrap z-[2]">{`Contact `}</div>
          </div>
          <div className="h-[3.25rem] flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border">
            <img
              className="w-[2.144rem] h-[2rem] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/sun@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[1.038rem] px-[0rem] pb-[0rem] text-left">
            <div className="relative leading-[140%] whitespace-nowrap z-[1]">
              Light mode
            </div>
          </div>
        </div>
        <div className="absolute top-[1.356rem] left-[26.475rem] rounded-[17.16px] bg-dimgray w-[3.181rem] h-[1.694rem] flex flex-row items-start justify-start py-[0.113rem] px-[0.144rem] box-border z-[1]">
          <div className="w-[3.181rem] relative rounded-[17.16px] bg-dimgray h-[1.694rem] hidden" />
          <div className="h-[1.469rem] w-[1.469rem] relative rounded-mini-3 bg-black z-[2]">
            <div className="absolute top-[0rem] left-[0rem] rounded-mini-3 bg-black w-full h-full hidden" />
            <img
              className="absolute top-[0.281rem] left-[0.319rem] w-[0.856rem] h-[0.856rem] object-cover z-[3]"
              alt=""
              src="/sun-11@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent2;
