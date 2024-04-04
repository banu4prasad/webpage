import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";

const DarkChat = () => {
  return (
    <div className="w-full relative rounded-3xl-5 bg-gray-400 flex flex-row items-start justify-start pt-[2.081rem] px-[1.25rem] pb-[2.95rem] box-border gap-[0.938rem] tracking-[normal]">
      <div className="h-[60rem] w-[100rem] relative rounded-3xl-5 bg-gray-400 hidden max-w-full" />
      <div className="h-[54.4rem] w-[13.438rem] flex flex-col items-start justify-start pt-[1.044rem] px-[0rem] pb-[0rem] box-border mq925:hidden">
        <FrameComponent7 />
      </div>
      <main className="flex-1 flex flex-col items-start justify-start max-w-[calc(100%_-_230px)] mq925:max-w-full">
        <FrameComponent4
          rectangle375="/rectangle-3751.svg"
          union="/union2.svg"
          propBackgroundColor="#2d2d2d"
          propColor="#fff"
        />
        <section className="self-stretch rounded-t-none rounded-br-none rounded-bl-3xl-5 bg-gray-100 flex flex-col items-start justify-start pt-[2.919rem] px-[2.125rem] pb-[0.519rem] box-border gap-[5.3rem] max-w-full z-[1] mt-[-0.031rem] text-left text-[1.25rem] text-white font-montserrat mq450:gap-[1.313rem_5.3rem] mq925:pb-[1.25rem] mq925:box-border mq700:gap-[2.625rem_5.3rem]">
          <div className="w-[82.5rem] h-[48.781rem] relative rounded-t-none rounded-br-none rounded-bl-3xl-5 bg-gray-100 hidden max-w-full" />
          <FrameComponent3
            mainMessageBox="/main-message-box1@2x.png"
            mainMessageBox1="/main-message-box-11@2x.png"
            propGap="3.356rem"
            propFlexWrap="wrap"
            propBackgroundColor="#141414"
            propColor="#fff"
            propBackgroundColor1="#000"
            propFlexWrap1="wrap"
            propFlexWrap2="wrap"
            propBackgroundColor2="#141414"
            propPadding="0.963rem 1.494rem 0.906rem"
            propColor1="#fff"
            propBackgroundColor3="#000"
            propFlexWrap3="wrap"
          />
          <div className="self-stretch flex flex-col items-end justify-start max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0.625rem] max-w-full">
              <div className="flex-1 rounded-3xl-5 bg-darkslategray-200 flex flex-row items-start justify-start pt-[0.031rem] px-[1.125rem] pb-[0rem] box-border min-w-[9.375rem] max-w-full z-[2]">
                <div className="self-stretch w-[74.375rem] relative rounded-3xl-5 bg-darkslategray-200 hidden max-w-full" />
                <div className="relative leading-[3.125rem] mix-blend-overlay z-[1] mq450:text-[1rem] mq450:leading-[2.5rem]">
                  Send message
                </div>
              </div>
              <div className="h-[3.125rem] w-[3.125rem] relative rounded-6xl bg-gray-400 z-[2]">
                <div className="absolute right-[0rem] bottom-[0rem] rounded-6xl bg-gray-400 w-full h-full hidden" />
                <img
                  className="absolute right-[1.031rem] bottom-[1rem] w-[1.094rem] h-[1.094rem] z-[1]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.375rem] box-border max-w-full mt-[-0.087rem] text-center text-[0.625rem] text-gray-200">
              <div className="w-[27.556rem] relative leading-[0.663rem] inline-block shrink-0 max-w-full z-[3]">{`Chatbot may produce inaccurate information `}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DarkChat;
