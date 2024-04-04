import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const DarkContact = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/dark-about");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-3xl-5 bg-gray-400 flex flex-col items-end justify-start pt-[2.313rem] pb-[9.188rem] pr-[4.744rem] pl-[2.656rem] box-border gap-[1.975rem] tracking-[normal] mq450:gap-[1rem_1.975rem] mq1050:pl-[1.313rem] mq1050:pr-[2.375rem] mq1050:box-border">
      <div className="w-[100rem] h-[60rem] relative rounded-3xl-5 bg-gray-400 hidden max-w-full" />
      <header className="self-stretch flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[0.338rem] box-border max-w-full gap-[1.25rem] text-center text-[2.863rem] text-white font-mukta">
        <div className="w-[15.194rem] relative leading-[4.469rem] inline-block shrink-0 [text-shadow:0.7px_0_0_#fff,_0_0.7px_0_#fff,_-0.7px_0_0_#fff,_0_-0.7px_0_#fff] z-[1]">
          <p className="m-0">WEBSITE</p>
        </div>
        <div className="w-[29.381rem] flex flex-row items-start justify-start max-w-full text-[1.706rem]">
          <div
            className="w-[7.1rem] relative leading-[4.469rem] font-medium inline-block shrink-0 [debug_commit:f6aba90] whitespace-nowrap cursor-pointer z-[1]"
            onClick={onAboutTextClick}
          >{`About `}</div>
          <div className="flex-1 flex flex-row items-end justify-start gap-[1.656rem] shrink-0 [debug_commit:f6aba90] max-w-full ml-[-0.319rem]">
            <div className="h-[4.469rem] w-[7.813rem] relative">
              <div className="absolute top-[1.25rem] left-[0rem] rounded-[34.08px] bg-dimgray w-[7.813rem] h-[1.969rem] z-[1]" />
              <div className="absolute w-[calc(100%_-_11.4px)] top-[0rem] left-[0.319rem] leading-[4.469rem] font-medium inline-block h-[4.469rem] whitespace-nowrap z-[2]">{`Contact `}</div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.038rem] text-left">
              <div className="self-stretch flex flex-row items-start justify-start gap-[0.481rem]">
                <div className="h-[1.894rem] flex flex-col items-start justify-start pt-[0.431rem] px-[0rem] pb-[0rem] box-border">
                  <img
                    className="w-[1.35rem] h-[1.463rem] relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/subtract-stroke1.svg"
                  />
                </div>
                <div className="relative leading-[2.394rem] inline-block min-w-[7.875rem] whitespace-nowrap z-[1]">
                  Dark mode
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.319rem] px-[0rem] pb-[0rem]">
                  <div className="w-[2.944rem] h-[1.694rem] rounded-[17.04px] bg-dimgray flex flex-row items-start justify-end py-[0.106rem] px-[0.156rem] box-border z-[1]">
                    <div className="w-[2.944rem] relative rounded-[17.04px] bg-dimgray h-[1.694rem] hidden" />
                    <div className="h-[1.481rem] w-[1.475rem] relative rounded-mini-2 bg-black shadow-[0px_1.1px_2.27px_rgba(0,_0,_0,_0.1),_0px_0.6px_1.14px_rgba(0,_0,_0,_0.1),_0px_0.6px_1.7px_rgba(0,_0,_0,_0.1)] z-[2]">
                      <div className="absolute top-[0rem] left-[0rem] rounded-mini-2 bg-black shadow-[0px_1.1px_2.27px_rgba(0,_0,_0,_0.1),_0px_0.6px_1.14px_rgba(0,_0,_0,_0.1),_0px_0.6px_1.7px_rgba(0,_0,_0,_0.1)] w-full h-full hidden" />
                      <img
                        className="absolute top-[0.375rem] left-[0.438rem] w-[0.681rem] h-[0.744rem] z-[3]"
                        alt=""
                        src="/subtract-stroke-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="w-[90.463rem] flex flex-row items-start justify-center pt-[0rem] px-[0rem] pb-[1.775rem] box-border max-w-full text-left text-[2.775rem] text-white font-inter">
        <div className="w-[43.375rem] flex flex-col items-start justify-start gap-[0.438rem] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
            <div className="relative tracking-[-0.03em] font-extrabold opacity-[0.9] z-[1] mq450:text-[1.688rem] mq1050:text-[2.25rem]">
              <span>{`Get in `}</span>
              <span className="text-gray-500">touch</span>
            </div>
          </div>
          <div className="relative text-[1.525rem] tracking-[-0.02em] font-medium text-gray-600 z-[1] mq450:text-[1.25rem]">
            Reach out, and let's create a universe of possibilities together!
          </div>
        </div>
      </section>
      <div className="w-[90.463rem] h-[0.094rem] flex flex-row items-start justify-center max-w-full">
        <img
          className="h-[0.094rem] w-[75.05rem] relative object-contain max-w-full z-[1]"
          loading="lazy"
          alt=""
          src="/vector-5.svg"
        />
      </div>
      <section className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1rem] pl-[0rem] box-border max-w-full text-left text-[2.219rem] text-gray-700 font-inter">
        <div className="w-[71.931rem] flex flex-col items-start justify-start max-w-full">
          <div className="w-[12.563rem] flex flex-row items-start justify-start py-[0rem] pr-[0.188rem] pl-[0.219rem] box-border">
            <div className="h-[2.881rem] flex-1 relative tracking-[-0.03em] font-extrabold inline-block z-[1] mq450:text-[1.313rem] mq1050:text-[1.75rem]">
              Our team
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.906rem] max-w-full mt-[-0.65rem] text-[1.525rem] text-white mq750:gap-[1.438rem_2.906rem]">
            <div className="self-stretch flex flex-row items-end justify-start gap-[4.506rem] max-w-full mq1125:flex-wrap mq1125:gap-[4.506rem_2.25rem] mq750:gap-[4.506rem_1.125rem]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[3.275rem] max-w-full mq750:gap-[1.625rem_3.275rem] mq750:min-w-full">
                <div className="w-[35.019rem] flex flex-row items-start justify-start pt-[0rem] pb-[0.469rem] pr-[0.188rem] pl-[0.219rem] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[1.925rem] max-w-full mq750:flex-wrap mq750:gap-[1.925rem_0.938rem]">
                    <div className="h-[5.25rem] w-[15.156rem] relative tracking-[-0.02em] font-medium inline-block shrink-0 z-[1] mq450:text-[1.25rem]">
                      <ul className="m-0 font-inherit text-inherit pl-[1.352rem]">
                        <li className="mb-[false]">Banuprasad B</li>
                        <li>R Ajay Prabhu</li>
                      </ul>
                    </div>
                    <div className="h-[5.25rem] flex-1 relative tracking-[-0.02em] font-medium inline-block min-w-[11.375rem] z-[1] mq450:text-[1.25rem]">
                      <ul className="m-0 font-inherit text-inherit pl-[1.352rem]">
                        <li className="mb-[false]">Shetty Kirthan</li>
                        <li>Shishir S Hebbar</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <img
                  className="self-stretch h-[0.094rem] relative max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vector-6.svg"
                />
                <div className="w-[42.056rem] flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0.138rem] box-border max-w-full text-[2.219rem] text-gray-700">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[2.094rem] max-w-full mq750:gap-[1.063rem_2.094rem]">
                    <div className="relative tracking-[-0.03em] font-extrabold inline-block max-w-full z-[1] mq450:text-[1.313rem] mq1050:text-[1.75rem]">
                      Contact Information
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[1.094rem] max-w-full text-[1.525rem] text-white mq750:flex-wrap">
                      <div className="flex-1 relative tracking-[-0.02em] font-medium inline-block min-w-[13.313rem] max-w-full z-[1] mq450:text-[1.25rem]">
                        <ul className="m-0 font-inherit text-inherit pl-[1.352rem]">
                          <li className="mb-[false]">nnm22ad017@gmail.com</li>
                          <li>nnm22ad041@gmail.com</li>
                        </ul>
                      </div>
                      <div className="flex-1 relative tracking-[-0.02em] font-medium inline-block min-w-[13.313rem] max-w-full z-[1] mq450:text-[1.25rem]">
                        <ul className="m-0 font-inherit text-inherit pl-[1.352rem]">
                          <li className="mb-[false]">nnm22ad051@gmail.com</li>
                          <li>nnm22ad053@gmail.com</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[24.95rem] w-[23.769rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.975rem] box-border min-w-[23.769rem] max-w-full mq1125:flex-1 mq750:min-w-full">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1] mq1125:self-stretch mq1125:w-auto"
                  loading="lazy"
                  alt=""
                  src="/c-1@2x.png"
                />
              </div>
            </div>
            <div className="w-[44.069rem] h-[0.094rem] flex flex-row items-start justify-start py-[0rem] pr-[0.188rem] pl-[0.206rem] box-border max-w-full">
              <img
                className="h-[0.094rem] flex-1 relative max-w-full overflow-hidden object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/vector-10.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DarkContact;
