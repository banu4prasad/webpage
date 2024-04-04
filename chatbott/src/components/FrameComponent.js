const FrameComponent = () => {
  return (
    <section className="w-[68.563rem] flex flex-row items-end justify-start gap-[5.125rem] max-w-full text-left text-[4rem] text-white font-mukta mq750:gap-[5.125rem_1.25rem] mq1025:flex-wrap mq1100:gap-[5.125rem_2.563rem]">
      <div className="flex-1 flex flex-col items-start justify-start min-w-[20.938rem] min-h-[27.5rem] max-w-full mq1025:min-h-[auto]">
        <div className="self-stretch h-[23.944rem] flex flex-row flex-wrap items-center justify-start relative gap-[1.875rem_0.625rem] z-[1]">
          <img
            className="h-[3.594rem] w-[3.594rem] absolute !m-[0] top-[2.394rem] left-[0rem]"
            loading="lazy"
            alt=""
            src="/union.svg"
          />
          <h1 className="!m-[0] h-[3.094rem] absolute top-[2.644rem] left-[4.219rem] text-inherit leading-[4.063rem] font-normal font-inherit inline-block mq1025:text-[3.188rem] mq1025:leading-[3.25rem] mq450:text-[2.375rem] mq450:leading-[2.438rem]">
            CHATBOT
          </h1>
          <div className="w-[32.188rem] absolute !m-[0] top-[7.863rem] left-[0rem] text-[0.75rem] leading-[1.188rem] font-poppins whitespace-pre-wrap inline-block">{`Chatbot is specifically tailored for answering questions and providing information related to NMAMIT . It's designed to be a knowledgeable and helpful assistant for students, staff, and visitors of NMAMIT, offering detailed answers to queries about courses, faculty, campus life, and other relevant information. Leveraging advanced AI technologies, it's capable of understanding complex queries and delivering accurate, up-to-date responses.     `}</div>
          <div className="h-[4.688rem] w-[18.75rem] !m-[0] absolute top-[16.863rem] left-[0rem] rounded-11xl bg-dimgray flex flex-row items-start justify-start py-[0.781rem] pr-[2.969rem] pl-[3.281rem] box-border whitespace-nowrap text-center text-[2rem] font-open-sans">
            <div className="h-[4.688rem] w-[18.75rem] relative rounded-11xl bg-dimgray hidden z-[0]" />
            <div className="w-[12.5rem] absolute !m-[0] top-[0.781rem] left-[calc(50%_-_97.5px)] leading-[3.125rem] inline-block z-[1]">
              Get Started
            </div>
          </div>
        </div>
      </div>
      <div className="h-[31.063rem] w-[31.25rem] flex flex-row items-start justify-start py-[1.75rem] px-[4.813rem] box-border bg-[url('/public/cbremovebgpreview-1@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[31.25rem] max-w-full z-[1] mq750:min-w-full mq1025:flex-1">
        <img
          className="h-[31.063rem] w-[31.25rem] relative object-cover hidden max-w-full"
          alt=""
          src="/cbremovebgpreview-1@2x.png"
        />
        <img
          className="h-[4.481rem] w-[4.688rem] relative z-[2] mq1025:flex-1"
          loading="lazy"
          alt=""
          src="/frame-446.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
