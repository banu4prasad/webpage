import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomeContactAbout = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/dark-about");
  }, [navigate]);

  const onIconContainerClick = useCallback(() => {
    navigate("/light-chat");
  }, [navigate]);

  return (
    <nav className="m-0 self-stretch flex-1 flex flex-col items-start justify-start gap-[2.969rem] text-center text-[2rem] text-white font-mukta">
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.375rem] pl-[1.406rem]">
        <div className="flex-1 relative leading-[3.125rem] [text-shadow:0.5px_0_0_#fff,_0_0.5px_0_#fff,_-0.5px_0_0_#fff,_0_-0.5px_0_#fff] mq450:text-[1.188rem] mq450:leading-[1.875rem] mq975:text-[1.625rem] mq975:leading-[2.5rem]">
          <p className="m-0">WEBSITE</p>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[0.156rem] text-[1.5rem]">
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
        <div
          className="self-stretch relative leading-[3.906rem] font-medium cursor-pointer mq450:text-[1.188rem] mq450:leading-[3.125rem]"
          onClick={onAboutTextClick}
        >{`About `}</div>
      </div>
      <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.688rem] pl-[0.469rem] text-left text-[1.25rem] font-open-sans">
        <div className="flex flex-row items-end justify-start gap-[0.531rem]">
          <div className="h-[1.388rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.106rem] box-border">
            <img
              className="w-[1.188rem] h-[1.281rem] relative"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.094rem]">
            <div className="relative leading-[140%] inline-block min-w-[6.875rem] mq450:text-[1rem] mq450:leading-[1.375rem]">
              Dark mode
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem]">
              <div
                className="w-[2.594rem] h-[1.481rem] rounded-mini bg-dimgray flex flex-row items-start justify-end pt-[0.094rem] pb-[0.088rem] pr-[0.088rem] pl-[1.206rem] box-border cursor-pointer"
                onClick={onIconContainerClick}
              >
                <div className="w-[2.594rem] relative rounded-mini bg-dimgray h-[1.481rem] hidden" />
                <div className="h-[1.3rem] w-[1.3rem] relative rounded-smi-5 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1),_0px_0.5px_1px_rgba(0,_0,_0,_0.1),_0px_0.5px_1.5px_rgba(0,_0,_0,_0.1)]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-smi-5 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1),_0px_0.5px_1px_rgba(0,_0,_0,_0.1),_0px_0.5px_1.5px_rgba(0,_0,_0,_0.1)] w-full h-full hidden" />
                  <img
                    className="absolute top-[0.094rem] left-[0.094rem] w-[1.113rem] h-[1.113rem]"
                    alt=""
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

export default HomeContactAbout;
