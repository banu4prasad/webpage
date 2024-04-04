import { useMemo } from "react";

const FrameComponent4 = ({
  rectangle375,
  union,
  propBackgroundColor,
  propColor,
}) => {
  const frameSectionStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const cHATBOTStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <section
      className="self-stretch bg-gainsboro flex flex-row items-start justify-start pt-[2.056rem] px-[3.206rem] pb-[2.031rem] box-border gap-[0.375rem] max-w-full z-[2] text-left text-[2.219rem] text-gray-200 font-mukta mq450:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border"
      style={frameSectionStyle}
    >
      <img
        className="h-[6.219rem] w-[82.5rem] relative hidden max-w-full"
        alt=""
        src={rectangle375}
      />
      <img
        className="h-[2.081rem] w-[2.081rem] relative z-[1]"
        loading="lazy"
        alt=""
        src={union}
      />
      <div
        className="relative leading-[2.131rem] font-medium z-[1] mq450:text-[1.313rem] mq450:leading-[1.688rem] mq850:text-[1.75rem] mq850:leading-[2.25rem]"
        style={cHATBOTStyle}
      >
        CHATBOT
      </div>
    </section>
  );
};

export default FrameComponent4;
