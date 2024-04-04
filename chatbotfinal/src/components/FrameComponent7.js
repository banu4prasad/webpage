import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent6 from "./FrameComponent6";

const FrameComponent7 = () => {
  const navigate = useNavigate();

  const onWEBSITETextClick = useCallback(() => {
    navigate("/dark-home");
  }, [navigate]);

  const onFrameSwitchClick = useCallback(() => {
    navigate("/light-chat");
  }, [navigate]);

  return (
    <nav className="m-0 self-stretch flex-1 flex flex-col items-end justify-start gap-[2.375rem] text-center text-[2.863rem] text-white font-mukta">
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.313rem] pl-[0.625rem]">
        <div
          className="flex-1 relative leading-[4.469rem] [text-shadow:0.7px_0_0_#fff,_0_0.7px_0_#fff,_-0.7px_0_0_#fff,_0_-0.7px_0_#fff] cursor-pointer z-[1] mq450:text-[1.688rem] mq450:leading-[2.688rem] mq925:text-[2.313rem] mq925:leading-[3.563rem]"
          onClick={onWEBSITETextClick}
        >
          <p className="m-0">WEBSITE</p>
        </div>
      </div>
      <FrameComponent6 propPadding="unset" />
      <div className="flex flex-row items-start justify-end py-[0rem] pr-[0.688rem] pl-[0.438rem] text-left text-[1.25rem] font-open-sans">
        <div className="flex flex-row items-end justify-start gap-[0.531rem]">
          <div className="h-[1.388rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.106rem] box-border">
            <img
              className="w-[1.188rem] h-[1.281rem] relative z-[1]"
              loading="lazy"
              alt=""
              src="/subtract-stroke.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.094rem]">
            <div className="relative leading-[140%] inline-block min-w-[6.875rem] z-[1] mq450:text-[1rem] mq450:leading-[1.375rem]">
              Dark mode
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem]">
              <div
                className="w-[2.594rem] h-[1.481rem] rounded-mini bg-dimgray flex flex-row items-start justify-end pt-[0.094rem] px-[0.088rem] pb-[0.088rem] box-border cursor-pointer z-[1]"
                onClick={onFrameSwitchClick}
              >
                <div className="w-[2.594rem] relative rounded-mini bg-dimgray h-[1.481rem] hidden" />
                <div className="h-[1.3rem] w-[1.3rem] relative rounded-smi-5 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1),_0px_0.5px_1px_rgba(0,_0,_0,_0.1),_0px_0.5px_1.5px_rgba(0,_0,_0,_0.1)] z-[2]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-smi-5 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1),_0px_0.5px_1px_rgba(0,_0,_0,_0.1),_0px_0.5px_1.5px_rgba(0,_0,_0,_0.1)] w-full h-full hidden" />
                  <img
                    className="absolute top-[0.094rem] left-[0.094rem] w-[1.113rem] h-[1.113rem] z-[3]"
                    alt=""
                    src="/icons.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FrameComponent7;
