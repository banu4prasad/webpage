import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent6 from "./FrameComponent6";

const FrameComponent5 = () => {
  const navigate = useNavigate();

  const onWebsiteWrapperContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameSwitchClick = useCallback(() => {
    navigate("/dark-chat");
  }, [navigate]);

  return (
    <nav className="m-0 self-stretch flex-1 flex flex-col items-end justify-start gap-[2.375rem] text-center text-[1.5rem] text-white font-mukta">
      <div
        className="w-[13.125rem] flex flex-row items-start justify-end py-[0rem] px-[0.313rem] box-border cursor-pointer text-[2.863rem]"
        onClick={onWebsiteWrapperContainerClick}
      >
        <div className="flex-1 relative leading-[4.469rem] [text-shadow:0.7px_0_0_#fff,_0_0.7px_0_#fff,_-0.7px_0_0_#fff,_0_-0.7px_0_#fff] z-[1] mq450:text-[1.688rem] mq450:leading-[2.688rem] mq850:text-[2.313rem] mq850:leading-[3.563rem]">
          <p className="m-0">WEBSITE</p>
        </div>
      </div>
      <FrameComponent6 />
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.5rem] pl-[0rem] text-left">
        <div className="flex-1 flex flex-row items-start justify-start gap-[0.831rem]">
          <div className="h-[1.938rem] flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem] box-border">
            <img
              className="w-[1.875rem] h-[1.75rem] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/sun1@2x.png"
            />
          </div>
          <div className="relative leading-[2.125rem] inline-block min-w-[7.188rem] z-[1] mq450:text-[1.188rem] mq450:leading-[1.688rem]">
            Light mode
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.281rem] px-[0rem] pb-[0rem]">
            <div
              className="w-[2.781rem] h-[1.481rem] rounded-mini bg-dimgray flex flex-row items-start justify-start pt-[0.094rem] px-[0.125rem] pb-[0.106rem] box-border cursor-pointer z-[1]"
              onClick={onFrameSwitchClick}
            >
              <div className="w-[2.781rem] relative rounded-mini bg-dimgray h-[1.481rem] hidden" />
              <div className="h-[1.281rem] w-[1.281rem] relative rounded-smi-5 bg-black z-[2]">
                <div className="absolute top-[0rem] left-[0rem] rounded-smi-5 bg-black w-full h-full hidden" />
                <img
                  className="absolute top-[0.25rem] left-[0.281rem] w-[0.75rem] h-[0.75rem] object-cover z-[3]"
                  alt=""
                  src="/sun-12@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FrameComponent5;
