import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/light-chat");
  }, [navigate]);

  return (
    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-left text-[4.869rem] text-white font-mukta mq1350:flex-wrap">
      <div className="w-[39.169rem] flex flex-col items-start justify-start pt-[4.5rem] px-[0rem] pb-[0rem] box-border min-w-[39.169rem] max-w-full mq800:min-w-full mq450:pt-[2.938rem] mq450:box-border mq1350:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.281rem] max-w-full mq800:gap-[1.125rem_2.281rem]">
          <div className="flex flex-row items-start justify-start gap-[0.756rem] max-w-full shrink-0 mq450:flex-wrap">
            <img
              className="h-[4.375rem] w-[4.375rem] relative z-[1]"
              loading="lazy"
              alt=""
              src="/union.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[0.306rem] px-[0rem] pb-[0rem]">
              <div className="h-[3.763rem] relative leading-[4.944rem] inline-block shrink-0 z-[1] mq800:text-[3.875rem] mq800:leading-[3.938rem] mq450:text-[2.938rem] mq450:leading-[2.938rem]">
                CHATBOT
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-[0.913rem] leading-[1.445rem] font-poppins whitespace-pre-wrap shrink-0 z-[1]">{`Chatbot is specifically tailored for answering questions and providing information related to NMAMIT . It's designed to be a knowledgeable and helpful assistant for students, staff, and visitors of NMAMIT, offering detailed answers to queries about courses, faculty, campus life, and other relevant information. Leveraging advanced AI technologies, it's capable of understanding complex queries and delivering accurate, up-to-date responses.     `}</div>
          <div
            className="w-[22.819rem] h-[5.706rem] rounded-[36.51px] bg-dimgray flex flex-row items-start justify-start pt-[0.95rem] pb-[0.956rem] pr-[3.613rem] pl-[3.994rem] box-border relative whitespace-nowrap max-w-full cursor-pointer z-[1] text-center text-[2.431rem] font-open-sans"
            onClick={onGroupContainerClick}
          >
            <div className="h-[5.706rem] w-[22.819rem] relative rounded-[36.51px] bg-dimgray hidden max-w-full z-[0]" />
            <div className="w-[15.213rem] absolute !m-[0] top-[0.95rem] left-[3.994rem] leading-[3.8rem] inline-block z-[1]">
              Get Started
            </div>
          </div>
        </div>
      </div>
      <div className="h-[38.019rem] w-[38.25rem] flex flex-row items-start justify-start py-[2.625rem] px-[8.188rem] box-border bg-[url('/public/cbremovebgpreview-1@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[38.25rem] max-w-full z-[1] mq800:min-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1350:flex-1">
        <img
          className="h-[38.019rem] w-[38.25rem] relative object-cover hidden max-w-full"
          alt=""
          src="/cbremovebgpreview-1@2x.png"
        />
        <img
          className="h-[5.488rem] w-[5.738rem] relative z-[2] mq1350:flex-1"
          loading="lazy"
          alt=""
          src="/frame-446.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
