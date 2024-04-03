import FrameComponent11 from "./FrameComponent1";

const FrameComponent = () => {
  return (
    <section className="w-[1311.5px] flex flex-row items-start justify-center max-w-full text-left text-77xl text-gray-shades-dark-gray font-mukta">
      <div className="w-[1140.5px] flex flex-row flex-wrap items-start justify-start gap-[76.5px] max-w-full mq750:gap-[19px] mq1150:gap-[38px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[54px] min-w-[517px] max-w-full mq750:min-w-full mq450:gap-[27px_54px]">
          <div className="flex flex-row items-start justify-start py-0 pr-1 pl-[3.8px] box-border max-w-full">
            <div className="flex flex-row items-start justify-start gap-[15.7px] max-w-full mq750:flex-wrap">
              <img
                className="h-[86.3px] w-[86.3px] relative min-h-[86px] shrink-0 [debug_commit:f6aba90] z-[1]"
                loading="lazy"
                alt=""
                src="/union.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 box-border max-w-full">
                <h1 className="m-0 h-[74.3px] relative text-inherit leading-[97.5px] font-normal font-inherit inline-block shrink-0 [debug_commit:f6aba90] z-[1] mq450:text-10xl mq450:leading-[39px] mq1050:text-29xl mq1050:leading-[58px]">
                  CHATBOT
                </h1>
              </div>
            </div>
          </div>
          <FrameComponent11 />
        </div>
        <div className="h-[397.5px] w-[267.5px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
