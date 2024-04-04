import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent1 = ({
  contactDebugCommit,
  childSunDebugCommit,
  frameDivPadding,
}) => {
  const aboutStyle = useMemo(() => {
    return {
      debugCommit: contactDebugCommit,
    };
  }, [contactDebugCommit]);

  const frameDivStyle = useMemo(() => {
    return {
      debugCommit: childSunDebugCommit,
    };
  }, [childSunDebugCommit]);

  const chatbotContainerStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const navigate = useNavigate();

  const onContactTextClick = useCallback(() => {
    navigate("/light-contact");
  }, [navigate]);

  const onFrameSwitchClick = useCallback(() => {
    navigate("/dark-home");
  }, [navigate]);

  return (
    <header className="w-[93.156rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-center text-[2.881rem] text-white font-mukta">
      <div className="w-[10.531rem] relative leading-[4.5rem] inline-block shrink-0 [text-shadow:0.7px_0_0_#fff,_0_0.7px_0_#fff,_-0.7px_0_0_#fff,_0_-0.7px_0_#fff] z-[1]">
        <p className="m-0">WEBSITE</p>
      </div>
      <div className="w-[30.281rem] flex flex-row items-start justify-start max-w-full text-[1.719rem] mq800:w-[7.15rem]">
        <div
          className="w-[7.15rem] relative leading-[4.469rem] font-medium inline-block shrink-0 [debug_commit:f6aba90] z-[1]"
          style={aboutStyle}
        >{`About `}</div>
        <div
          className="flex-1 flex flex-row items-start justify-start gap-[0.538rem] shrink-0 [debug_commit:f6aba90] mq800:hidden"
          style={frameDivStyle}
        >
          <div
            className="w-[7.15rem] relative leading-[4.469rem] font-medium inline-block shrink-0 whitespace-nowrap cursor-pointer z-[1]"
            onClick={onContactTextClick}
          >{`Contact `}</div>
          <div className="h-[3.25rem] flex flex-col items-start justify-start pt-[1.25rem] pb-[0rem] pr-[0.288rem] pl-[0rem] box-border">
            <img
              className="w-[2.144rem] h-[2rem] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/sun@2x.png"
            />
          </div>
          <div
            className="flex-1 flex flex-col items-start justify-start pt-[1.038rem] pb-[0rem] pr-[0.531rem] pl-[0rem] text-left"
            style={chatbotContainerStyle}
          >
            <div className="relative leading-[140%] whitespace-nowrap z-[1]">
              Light mode
            </div>
          </div>
          <div className="w-[3.181rem] flex flex-col items-start justify-start pt-[1.356rem] px-[0rem] pb-[0rem] box-border">
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

export default FrameComponent1;
