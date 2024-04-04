import { useMemo } from "react";

const FrameComponent6 = ({ propWidth }) => {
  const frameSectionStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <section
      className="w-[72.813rem] flex flex-row items-start justify-center pt-[0rem] px-[0rem] pb-[1.356rem] box-border max-w-full text-left text-[2.5rem] text-white font-inter"
      style={frameSectionStyle}
    >
      <div className="w-[39.125rem] flex flex-col items-start justify-start gap-[0.438rem] max-w-full shrink-0">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
          <h2 className="m-0 relative text-inherit tracking-[-0.03em] font-extrabold font-inherit opacity-[0.9] z-[1] mq450:text-[1.5rem] mq1050:text-[2rem]">
            <span>{`Get in `}</span>
            <span className="text-gray-300">touch</span>
          </h2>
        </div>
        <div className="relative text-[1.375rem] tracking-[-0.02em] font-medium text-gray-400 z-[1] mq450:text-[1.125rem]">
          Reach out, and let's create a universe of possibilities together!
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
