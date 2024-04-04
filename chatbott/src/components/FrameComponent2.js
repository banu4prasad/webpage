import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent2 = ({
  sunIconHeight,
  sunIconPadding,
  propPadding,
  propPadding1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: sunIconHeight,
      padding: sunIconPadding,
    };
  }, [sunIconHeight, sunIconPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const navigate = useNavigate();

  const onContactTextClick = useCallback(() => {
    navigate("/light-contact");
  }, [navigate]);

  const onFrameSwitchClick = useCallback(() => {
    navigate("/dark-home");
  }, [navigate]);

  return (
    <div className="flex-1 flex flex-row items-start justify-start gap-[0.469rem] max-w-full text-center text-[1.5rem] text-white font-mukta mq750:hidden">
      <div
        className="w-[6.25rem] relative leading-[3.906rem] font-medium inline-block shrink-0 whitespace-nowrap cursor-pointer z-[1]"
        onClick={onContactTextClick}
      >{`Contact `}</div>
      <div
        className="h-[2.844rem] flex flex-col items-start justify-start pt-[1.094rem] pb-[0rem] pr-[0.25rem] pl-[0rem] box-border"
        style={frameDivStyle}
      >
        <img
          className="w-[1.875rem] h-[1.75rem] relative object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/sun@2x.png"
        />
      </div>
      <div
        className="flex flex-col items-start justify-start pt-[0.906rem] pb-[0rem] pr-[0.469rem] pl-[0rem] text-left"
        style={frameDiv1Style}
      >
        <div className="relative leading-[2.125rem] inline-block min-w-[7.188rem] whitespace-nowrap z-[1]">
          Light mode
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-start pt-[1.188rem] px-[0rem] pb-[0rem]"
        style={frameDiv2Style}
      >
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
  );
};

export default FrameComponent2;
