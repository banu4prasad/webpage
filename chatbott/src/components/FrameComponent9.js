import { useMemo } from "react";

const FrameComponent9 = ({
  rectangle375,
  union,
  propBackgroundColor,
  propDebugCommit,
  propColor,
}) => {
  const frameSection1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      debugCommit: propDebugCommit,
    };
  }, [propBackgroundColor, propDebugCommit]);

  const cHATBOTStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <section
      className="self-stretch h-[5.831rem] bg-gainsboro shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-start justify-start pt-[1.938rem] px-[1.863rem] pb-[2.106rem] shrink-0 [debug_commit:f6aba90] z-[1] text-left text-[1.5rem] text-gray-100 font-mukta border-[1px] border-solid border-gray-1000"
      style={frameSection1Style}
    >
      <img
        className="h-[5.831rem] w-[62.5rem] relative hidden max-w-full"
        alt=""
        src={rectangle375}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-[0.175rem] px-[0rem] gap-[0.25rem] z-[1]">
        <img
          className="h-[1.406rem] w-[1.406rem] relative"
          loading="lazy"
          alt=""
          src={union}
        />
        <div
          className="relative leading-[1.438rem] font-medium inline-block min-w-[6.25rem] mq450:text-[1.188rem] mq450:leading-[1.5rem]"
          style={cHATBOTStyle}
        >
          CHATBOT
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
