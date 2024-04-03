import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent2 = () => {
  const navigate = useNavigate();

  const onFrameSwitchClick = useCallback(() => {
    navigate("/dark-home");
  }, [navigate]);

  return (
    <header className="w-[1342.5px] flex flex-row items-start justify-between gap-[20px] max-w-full text-center text-13xl text-gray-shades-dark-gray font-mukta">
      <div className="w-[170px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
        <div className="self-stretch relative leading-[50px] [text-shadow:0.5px_0_0_#fff,_0_0.5px_0_#fff,_-0.5px_0_0_#fff,_0_-0.5px_0_#fff] z-[1]">
          <p className="m-0">WEBSITE</p>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start max-w-full text-5xl">
        <div className="w-[100px] relative leading-[62.5px] font-medium inline-block shrink-0 whitespace-nowrap z-[1]">{`About `}</div>
        <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[10.5px] max-w-full mq750:hidden">
          <div className="w-[100px] relative leading-[62.5px] font-medium inline-block shrink-0 whitespace-nowrap z-[1]">{`Contact `}</div>
          <div className="h-[45.5px] flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0 box-border">
            <img
              className="w-[30px] h-7 relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/sun@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[14.5px] pb-0 pr-[4.5px] pl-0 text-left">
            <div className="relative leading-[34px] inline-block min-w-[115px] whitespace-nowrap z-[1]">
              Light mode
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
            <div
              className="w-[44.5px] h-[23.7px] rounded-mini bg-dimgray flex flex-row items-start justify-start pt-[1.5px] px-0.5 pb-[1.7px] box-border cursor-pointer z-[1]"
              onClick={onFrameSwitchClick}
            >
              <div className="w-[44.5px] relative rounded-mini bg-dimgray h-[23.7px] hidden" />
              <div className="h-[20.5px] w-[20.5px] relative rounded-smi-5 bg-black z-[2]">
                <div className="absolute top-[0px] left-[0px] rounded-smi-5 bg-black w-full h-full hidden" />
                <img
                  className="absolute top-[4px] left-[4.5px] w-3 h-3 object-cover z-[3]"
                  alt=""
                  src="/sun-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent2;
