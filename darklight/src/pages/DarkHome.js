import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const DarkHome = () => {
  const navigate = useNavigate();

  const onUnionToolClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-200 flex flex-col items-start justify-start pt-[31.5px] px-[43px] pb-[229.5px] box-border gap-[240px] tracking-[normal] mq750:gap-[120px_240px] mq750:pl-[21px] mq750:pr-[21px] mq750:box-border mq450:gap-[60px_240px]">
      <div className="w-[1440px] h-[1024px] relative bg-gray-200 hidden max-w-full" />
      <header className="w-[1336px] flex flex-row items-start justify-between gap-[20px] max-w-full text-center text-13xl text-gray-shades-dark-gray font-mukta mq750:w-[915.5px]">
        <div className="w-[170px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
          <div className="self-stretch relative leading-[50px] [text-shadow:0.5px_0_0_#fff,_0_0.5px_0_#fff,_-0.5px_0_0_#fff,_0_-0.5px_0_#fff] z-[1]">
            <p className="m-0">WEBSITE</p>
          </div>
        </div>
        <div className="w-[420.5px] flex flex-row items-start justify-start max-w-full text-5xl mq750:hidden">
          <div className="w-[100px] relative leading-[62.5px] font-medium inline-block shrink-0 whitespace-nowrap z-[1]">{`About `}</div>
          <div className="w-[116.5px] flex flex-col items-start justify-start py-0 pr-[16.5px] pl-0 box-border">
            <div className="self-stretch relative leading-[62.5px] font-medium whitespace-nowrap z-[1]">{`Contact `}</div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0 text-left">
            <div className="self-stretch flex flex-row items-start justify-start gap-[16.3px]">
              <div className="h-[26.5px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                <img
                  className="w-[19px] h-[20.5px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/subtract-stroke1.svg"
                />
              </div>
              <div className="relative leading-[34px] inline-block min-w-[111px] whitespace-nowrap z-[1]">
                Dark mode
              </div>
              <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                <div
                  className="w-[41.5px] h-[23.7px] rounded-mini bg-dimgray flex flex-row items-start justify-end pt-[1.5px] px-[1.4px] pb-[1.4px] box-border cursor-pointer z-[1]"
                  onClick={onUnionToolClick}
                >
                  <div className="w-[41.5px] relative rounded-mini bg-dimgray h-[23.7px] hidden" />
                  <div className="h-[20.8px] w-[20.8px] relative rounded-smi-5 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1),_0px_0.5px_1px_rgba(0,_0,_0,_0.1),_0px_0.5px_1.5px_rgba(0,_0,_0,_0.1)] z-[2]">
                    <div className="absolute top-[0px] left-[0px] rounded-smi-5 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1),_0px_0.5px_1px_rgba(0,_0,_0,_0.1),_0px_0.5px_1.5px_rgba(0,_0,_0,_0.1)] w-full h-full hidden" />
                    <img
                      className="absolute top-[5.2px] left-[5.9px] w-[9.6px] h-[10.4px] z-[3]"
                      alt=""
                      src="/subtract-stroke-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="w-[1284.5px] flex flex-row items-start justify-start py-0 px-[51px] box-border max-w-full text-left text-77xl text-gray-shades-dark-gray font-mukta lg:pl-[25px] lg:pr-[25px] lg:box-border">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[118.5px] max-w-full lg:gap-[59px] mq750:gap-[30px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[54px] min-w-[517px] max-w-full mq750:min-w-full mq450:gap-[27px_54px]">
            <div className="flex flex-row items-start justify-start py-0 pr-1 pl-[3.8px] box-border max-w-full">
              <div className="flex flex-row items-start justify-start gap-[15.7px] max-w-full mq750:flex-wrap">
                <img
                  className="h-[86.3px] w-[86.3px] relative shrink-0 [debug_commit:f6aba90] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/union.svg"
                />
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-full">
                  <h1 className="m-0 h-[74.3px] relative text-inherit leading-[97.5px] font-normal font-inherit inline-block shrink-0 [debug_commit:f6aba90] z-[1] mq450:text-10xl mq450:leading-[39px] mq1050:text-29xl mq1050:leading-[58px]">
                    CHATBOT
                  </h1>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.7px] max-w-full text-lg font-poppins">
              <div className="self-stretch h-[207px] relative leading-[28.5px] inline-block shrink-0 z-[1]">
                Chatbot is specifically tailored for answering questions and
                providing information related to NMAMIT . It's designed to be a
                knowledgeable and helpful assistant for students, staff, and
                visitors of NMAMIT, offering detailed answers to queries about
                courses, faculty, campus life, and other relevant information.
                Leveraging advanced AI technologies, it's capable of
                understanding complex queries and delivering accurate,
                up-to-date responses.
              </div>
              <div className="w-[450px] rounded-26xl bg-darkslategray flex flex-row items-start justify-start pt-[19.5px] px-[67.5px] pb-[18px] box-border whitespace-nowrap max-w-full z-[1] text-center text-29xl font-open-sans mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="h-[112.5px] w-[450px] relative rounded-26xl bg-darkslategray hidden max-w-full" />
                <div className="w-[300px] relative leading-[75px] inline-block shrink-0 z-[2]">
                  Get Started
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-[386.5px] w-[267.5px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </section>
    </div>
  );
};

export default DarkHome;
