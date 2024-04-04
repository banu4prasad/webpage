import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "./FrameComponent2";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/light-about");
  }, [navigate]);

  return (
    <header className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-center text-[2rem] text-white font-mukta">
      <div className="w-[10.625rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border">
        <div className="self-stretch relative leading-[3.125rem] [text-shadow:0.5px_0_0_#fff,_0_0.5px_0_#fff,_-0.5px_0_0_#fff,_0_-0.5px_0_#fff] z-[1]">
          <p className="m-0">WEBSITE</p>
        </div>
      </div>
      <div className="w-[26.469rem] flex flex-row items-start justify-start max-w-full text-[1.5rem] mq750:w-[6.25rem]">
        <div
          className="w-[6.25rem] relative leading-[3.906rem] font-medium inline-block shrink-0 whitespace-nowrap cursor-pointer z-[1]"
          onClick={onAboutTextClick}
        >{`About `}</div>
        <FrameComponent2 />
      </div>
    </header>
  );
};

export default FrameComponent1;
