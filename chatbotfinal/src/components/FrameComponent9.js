import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent9 = () => {
  const navigate = useNavigate();

  const onFrameSwitchClick = useCallback(() => {
    navigate("/dark-contact");
  }, [navigate]);

  return (
    <header className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-center text-[2.9rem] text-white font-mukta">
      <div className="w-[15.406rem] relative leading-[4.531rem] inline-block shrink-0 [text-shadow:0.7px_0_0_#fff,_0_0.7px_0_#fff,_-0.7px_0_0_#fff,_0_-0.7px_0_#fff] z-[1]">
        <p className="m-0">WEBSITE</p>
      </div>
      <div className="w-[29.656rem] flex flex-row items-start justify-start max-w-full text-[1.719rem]">
        <div className="h-[4.469rem] w-[7.15rem] relative">
          <div className="absolute top-[1.25rem] left-[0.438rem] rounded-[34.32px] bg-dimgray w-[6.25rem] h-[2rem] z-[1]" />
          <div className="absolute top-[0rem] left-[0rem] leading-[4.469rem] font-medium inline-block w-full h-full whitespace-nowrap z-[2]">{`About `}</div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[1.225rem] max-w-full">
          <div className="w-[7.15rem] relative leading-[4.469rem] font-medium inline-block shrink-0 [debug_commit:f6aba90] z-[3]">{`Contact `}</div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[1.038rem] px-[0rem] pb-[0rem] text-left">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.138rem] shrink-0 [debug_commit:f6aba90]">
              <div className="h-[2.213rem] flex flex-col items-start justify-start pt-[0.213rem] px-[0rem] pb-[0rem] box-border">
                <img
                  className="w-[2.144rem] h-[2rem] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/sun@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.306rem] pl-[0rem]">
                <div className="relative leading-[140%] whitespace-nowrap z-[1]">
                  Light mode
                </div>
              </div>
              <div className="w-[3.181rem] flex flex-col items-start justify-start pt-[0.319rem] px-[0rem] pb-[0rem] box-border">
                <div
                  className="self-stretch h-[1.694rem] rounded-[17.16px] bg-dimgray flex flex-row items-start justify-start py-[0.113rem] px-[0.144rem] box-border cursor-pointer z-[1]"
                  onClick={onFrameSwitchClick}
                >
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent9;
