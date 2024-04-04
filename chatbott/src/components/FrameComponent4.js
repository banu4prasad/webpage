import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "./FrameComponent2";

const FrameComponent4 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-center text-[2rem] text-white font-mukta">
      <div
        className="w-[10.625rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border cursor-pointer"
        onClick={onFrameContainerClick}
      >
        <div className="self-stretch relative leading-[3.125rem] [text-shadow:0.5px_0_0_#fff,_0_0.5px_0_#fff,_-0.5px_0_0_#fff,_0_-0.5px_0_#fff] z-[1]">
          <p className="m-0">WEBSITE</p>
        </div>
      </div>
      <div className="w-[26.469rem] flex flex-row items-start justify-start max-w-full text-[1.5rem] mq675:w-[6.25rem]">
        <div className="h-[3.906rem] w-[6.25rem] relative">
          <div className="absolute top-[1.094rem] left-[0.344rem] rounded-11xl bg-dimgray w-[5.625rem] h-[1.719rem] z-[1]" />
          <div className="absolute top-[0rem] left-[0rem] leading-[3.906rem] font-medium inline-block w-full h-full whitespace-nowrap z-[2]">{`About `}</div>
        </div>
        <FrameComponent2
          sunIconHeight="2.781rem"
          sunIconPadding="1.031rem 0.25rem 0rem 0rem"
          propPadding="0.844rem 0.469rem 0rem 0rem"
          propPadding1="1.125rem 0rem 0rem"
        />
      </div>
    </header>
  );
};

export default FrameComponent4;
