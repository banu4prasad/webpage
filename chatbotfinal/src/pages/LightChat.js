import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";

const LightChat = () => {
  return (
    <div className="w-full relative rounded-3xl-5 bg-gray-200 flex flex-row items-start justify-start pt-[2.063rem] px-[0.688rem] pb-[2.969rem] box-border gap-[0.938rem] tracking-[normal] mq1500:flex-wrap">
      <div className="h-[60rem] w-[100rem] relative rounded-3xl-5 bg-gray-200 hidden max-w-full" />
      <div className="h-[54.813rem] w-[14rem] flex flex-col items-start justify-start pt-[1.063rem] px-[0rem] pb-[0rem] box-border">
        <FrameComponent5 />
      </div>
      <main className="w-[82.5rem] flex flex-col items-start justify-start max-w-full">
        <FrameComponent4
          rectangle375="/rectangle-375.svg"
          union="/union1.svg"
        />
        <section className="self-stretch rounded-t-none rounded-br-none rounded-bl-3xl-5 bg-whitesmoke flex flex-col items-start justify-start pt-[2.919rem] px-[2.125rem] pb-[0.525rem] box-border gap-[5.3rem] max-w-full z-[1] mt-[-0.031rem] text-left text-[1.25rem] text-gray-200 font-montserrat mq450:gap-[1.313rem_5.3rem] mq850:gap-[2.625rem_5.3rem] mq850:pb-[1.25rem] mq850:box-border">
          <div className="w-[82.5rem] h-[48.781rem] relative rounded-t-none rounded-br-none rounded-bl-3xl-5 bg-whitesmoke hidden max-w-full" />
          <FrameComponent3
            mainMessageBox="/main-message-box@2x.png"
            mainMessageBox1="/main-message-box-1@2x.png"
          />
          <div className="self-stretch flex flex-col items-end justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.625rem] max-w-full mq1225:flex-wrap">
              <div className="flex-1 rounded-3xl-5 bg-lightgray flex flex-row items-start justify-start pt-[0.031rem] px-[1.125rem] pb-[0rem] box-border min-w-[9.375rem] max-w-full z-[2]">
                <div className="self-stretch w-[74.375rem] relative rounded-3xl-5 bg-lightgray hidden max-w-full" />
                <div className="relative leading-[3.125rem] mix-blend-overlay z-[1] mq450:text-[1rem] mq450:leading-[2.5rem]">
                  Send message
                </div>
              </div>
              <div className="h-[3.125rem] w-[3.125rem] relative rounded-6xl bg-gray-200 z-[2]">
                <div className="absolute right-[0rem] bottom-[0rem] rounded-6xl bg-gray-200 w-full h-full hidden" />
                <img
                  className="absolute right-[1.031rem] bottom-[1rem] w-[1.094rem] h-[1.094rem] z-[1]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.375rem] box-border max-w-full mt-[-0.094rem] text-center text-[0.625rem]">
              <div className="w-[27.556rem] relative leading-[0.663rem] inline-block shrink-0 max-w-full z-[2]">{`Chatbot may produce inaccurate information `}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LightChat;
