import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent10 = () => {
  const navigate = useNavigate();

  const onFrameSwitchClick = useCallback(() => {
    navigate("/dark-chat");
  }, [navigate]);

  return (
    <nav className="m-0 self-stretch flex-1 flex flex-col items-end justify-start gap-[2.969rem] text-center text-[1.5rem] text-white font-mukta">
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.406rem] pl-[1.938rem] text-[2rem]">
        <div className="flex-1 relative leading-[3.125rem] [text-shadow:0.5px_0_0_#fff,_0_0.5px_0_#fff,_-0.5px_0_0_#fff,_0_-0.5px_0_#fff] z-[1] mq450:text-[1.188rem] mq450:leading-[1.875rem] mq1050:text-[1.625rem] mq1050:leading-[2.5rem]">
          <p className="m-0">WEBSITE</p>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[0.563rem] gap-[0.156rem]">
        <div className="self-stretch relative leading-[3.906rem] font-medium mq450:text-[1.188rem] mq450:leading-[3.125rem]">
          Home
        </div>
        <div className="self-stretch h-[3.906rem] flex flex-row items-start justify-start relative">
          <img
            className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xl-5 max-w-full overflow-hidden max-h-full [mix-blend-mode:linear-dodge]"
            alt=""
          />
          <div className="w-full absolute !m-[0] top-[0rem] left-[0rem] leading-[3.906rem] font-medium inline-block h-full z-[1] mq450:text-[1.188rem] mq450:leading-[3.125rem]">
            AI Chatbot
          </div>
        </div>
        <div className="self-stretch relative leading-[3.906rem] font-medium mq450:text-[1.188rem] mq450:leading-[3.125rem]">{`Contact `}</div>
        <div className="self-stretch relative leading-[3.906rem] font-medium mq450:text-[1.188rem] mq450:leading-[3.125rem]">{`About `}</div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.5rem] pl-[0rem] text-left">
        <div className="flex-1 flex flex-row items-start justify-start gap-[0.831rem]">
          <div className="h-[1.938rem] flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem] box-border">
            <img
              className="w-[1.875rem] h-[1.75rem] relative object-cover z-[1]"
              loading="lazy"
              alt=""
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
                  src="/sun-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FrameComponent10;
