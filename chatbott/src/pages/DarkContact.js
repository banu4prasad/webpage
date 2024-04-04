import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent6 from "../components/FrameComponent6";

const DarkContact = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/dark-home");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/light-about");
  }, [navigate]);

  const onFrameSwitchClick = useCallback(() => {
    navigate("/light-contact");
  }, [navigate]);

  return (
    <div className="w-full h-[false] relative rounded-3xl-5 bg-gray-200 flex flex-col items-end justify-start pt-[1.969rem] pb-[8.85rem] pr-[3.813rem] pl-[2.656rem] box-border gap-[2.031rem] tracking-[normal] mq750:gap-[1rem_2.031rem] mq750:pl-[1.313rem] mq750:pr-[1.875rem] mq750:box-border">
      <div className="w-[false] h-[false] relative rounded-3xl-5 bg-gray-200 hidden max-w-full" />
      <header className="self-stretch flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[1.519rem] box-border max-w-full gap-[1.25rem] text-center text-[2rem] text-white font-mukta">
        <div
          className="w-[10.625rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border cursor-pointer"
          onClick={onFrameContainerClick}
        >
          <div className="self-stretch relative leading-[3.125rem] [text-shadow:0.5px_0_0_#fff,_0_0.5px_0_#fff,_-0.5px_0_0_#fff,_0_-0.5px_0_#fff] z-[1]">
            <p className="m-0">WEBSITE</p>
          </div>
        </div>
        <div className="h-[3.906rem] w-[26.281rem] relative max-w-full text-[1.5rem]">
          <div
            className="absolute h-full top-[0rem] left-[0rem] leading-[3.906rem] font-medium inline-block w-[6.25rem] whitespace-nowrap cursor-pointer z-[1]"
            onClick={onAboutTextClick}
          >{`About `}</div>
          <div className="absolute h-full top-[0rem] bottom-[0rem] left-[5.969rem] w-[6.875rem]">
            <div className="absolute top-[1.094rem] left-[0rem] rounded-11xl bg-dimgray w-[6.875rem] h-[1.719rem] z-[1]" />
            <div className="absolute w-[calc(100%_-_10px)] top-[0rem] left-[0.281rem] leading-[3.906rem] font-medium inline-block h-[3.906rem] whitespace-nowrap z-[2]">{`Contact `}</div>
          </div>
          <img
            className="absolute top-[1.281rem] left-[13.531rem] w-[1.188rem] h-[1.281rem] z-[1]"
            loading="lazy"
            alt=""
            src="/subtract-stroke1.svg"
          />
          <div className="absolute top-[0.906rem] left-[15.75rem] leading-[2.125rem] text-left inline-block min-w-[6.938rem] whitespace-nowrap z-[1]">
            Dark mode
          </div>
          <div
            className="absolute top-[1.188rem] left-[23.688rem] rounded-mini bg-dimgray w-[2.594rem] h-[1.481rem] flex flex-row items-start justify-end pt-[0.094rem] px-[0.088rem] pb-[0.088rem] box-border cursor-pointer z-[1]"
            onClick={onFrameSwitchClick}
          >
            <div className="w-[2.594rem] relative rounded-mini bg-dimgray h-[1.481rem] hidden" />
            <div className="h-[1.3rem] w-[1.3rem] relative rounded-smi-5 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1),_0px_0.5px_1px_rgba(0,_0,_0,_0.1),_0px_0.5px_1.5px_rgba(0,_0,_0,_0.1)] z-[2]">
              <div className="absolute top-[0rem] left-[0rem] rounded-smi-5 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.1),_0px_0.5px_1px_rgba(0,_0,_0,_0.1),_0px_0.5px_1.5px_rgba(0,_0,_0,_0.1)] w-full h-full hidden" />
              <img
                className="absolute top-[0.325rem] left-[0.369rem] w-[0.6rem] h-[0.65rem] z-[3]"
                alt=""
                src="/subtract-stroke-11.svg"
              />
            </div>
          </div>
        </div>
      </header>
      <FrameComponent6 propWidth="72.438rem" />
      <div className="w-[72.438rem] h-[0.081rem] flex flex-row items-start justify-end py-[0rem] px-[2.375rem] box-border max-w-full">
        <img
          className="h-[0.081rem] flex-1 relative max-w-full overflow-hidden object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/vector-5.svg"
        />
      </div>
      <section className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.438rem] box-border max-w-full text-left text-[2rem] text-gray-500 font-inter mq1125:pl-[1.688rem] mq1125:pr-[1.688rem] mq1125:box-border">
        <div className="w-[65.438rem] flex flex-row items-end justify-start gap-[4.688rem] max-w-full mq750:gap-[4.688rem_1.188rem] mq1050:flex-wrap mq1125:gap-[4.688rem_2.313rem]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[2.025rem] max-w-full mq750:gap-[1rem_2.025rem] mq750:min-w-full">
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.875rem] shrink-0">
              <div className="h-[3.05rem] relative tracking-[-0.03em] font-extrabold inline-block z-[1] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                Our team
              </div>
            </div>
            <div className="w-[28.25rem] flex flex-row items-start justify-start pt-[0rem] px-[0.875rem] pb-[0.675rem] box-border max-w-full shrink-0 text-[1.5rem] text-white">
              <div className="flex-1 flex flex-row items-start justify-start gap-[2.938rem] max-w-full mq750:flex-wrap mq450:gap-[2.938rem_1.438rem]">
                <div className="h-[5.156rem] relative tracking-[-0.02em] font-medium inline-block z-[1] mq450:text-[1.188rem]">
                  <p className="[margin-block-start:0] [margin-block-end:17px]">
                    -Banuprasad B
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:17px]">
                    -R Ajay Prabhu
                  </p>
                </div>
                <div className="h-[5.188rem] flex-1 relative tracking-[-0.02em] leading-[121.05%] font-medium inline-block min-w-[8.313rem] z-[1] mq450:text-[1.188rem] mq450:leading-[1.438rem]">
                  <p className="[margin-block-start:0] [margin-block-end:17px]">
                    -Shishir S Hebbar
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:17px]">
                    -Shetty Kirthan
                  </p>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[1.7rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.613rem] box-border max-w-full">
              <img
                className="h-[0.088rem] flex-1 relative max-w-full overflow-hidden object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/vector-61.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full shrink-0">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.85rem] max-w-full">
                <div className="relative tracking-[-0.03em] font-extrabold z-[1] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                  Contact Information
                </div>
                <div className="w-[37.688rem] flex flex-row items-start justify-start gap-[1rem] max-w-full text-[1.375rem] text-white mq750:flex-wrap">
                  <div className="flex-1 relative tracking-[-0.02em] font-medium inline-block min-w-[12rem] z-[1] mq450:text-[1.125rem]">
                    <ul className="m-0 font-inherit text-inherit pl-[1.318rem]">
                      <li className="mb-[false]">nnm22ad017@gmail.com</li>
                      <li>nnm22ad041@gmail.com</li>
                    </ul>
                  </div>
                  <div className="flex-1 relative tracking-[-0.02em] font-medium inline-block min-w-[12rem] z-[1] mq450:text-[1.125rem]">
                    <ul className="m-0 font-inherit text-inherit pl-[1.318rem]">
                      <li className="mb-[false]">nnm22ad051@gmail.com</li>
                      <li>nnm22ad053@gmail.com</li>
                    </ul>
                  </div>
                </div>
                <img
                  className="self-stretch h-[0.088rem] relative max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vector-10.svg"
                />
              </div>
            </div>
          </div>
          <img
            className="h-[26.8rem] w-[21.438rem] relative object-cover max-w-full z-[1] mq1050:flex-1"
            loading="lazy"
            alt=""
            src="/c-1@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default DarkContact;
