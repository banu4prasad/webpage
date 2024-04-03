import { useMemo } from "react";

const FrameComponent11 = ({ propMinHeight, propHeight }) => {
  const unionIconStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const chatbotIsSpecificallyStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full text-left text-lg text-gray-shades-dark-gray font-poppins">
      <div
        className="self-stretch h-[190.5px] relative leading-[28.5px] inline-block shrink-0 z-[1]"
        style={chatbotIsSpecificallyStyle}
      >
        Chatbot is specifically tailored for answering questions and providing
        information related to NMAMIT . It's designed to be a knowledgeable and
        helpful assistant for students, staff, and visitors of NMAMIT, offering
        detailed answers to queries about courses, faculty, campus life, and
        other relevant information. Leveraging advanced AI technologies, it's
        capable of understanding complex queries and delivering accurate,
        up-to-date responses.
      </div>
      <div className="w-[457.6px] flex flex-row items-start justify-start py-0 pr-1 pl-[3.8px] box-border max-w-full text-center text-29xl font-open-sans">
        <div className="flex-1 rounded-26xl bg-dimgray flex flex-row items-start justify-start pt-[14.2px] px-[75px] pb-[23.3px] box-border whitespace-nowrap max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[112.5px] w-[450px] relative rounded-26xl bg-dimgray hidden max-w-full" />
          <div className="flex-1 relative leading-[75px] z-[2]">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;
