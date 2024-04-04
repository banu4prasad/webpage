import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";

const LightAbout = () => {
  return (
    <div className="w-full relative rounded-3xl-5 bg-gray-200 flex flex-col items-end justify-start pt-[2.313rem] pb-[5.988rem] pr-[4.469rem] pl-[3.125rem] box-border gap-[3.844rem] tracking-[normal] mq800:gap-[1.938rem_3.844rem] mq800:pl-[1.563rem] mq800:pr-[2.188rem] mq800:box-border mq450:gap-[0.938rem_3.844rem]">
      <img
        className="w-[100rem] h-[60rem] relative rounded-3xl-5 hidden max-w-full"
        alt=""
        src="/rectangle-382.svg"
      />
      <FrameComponent9 />
      <main className="w-[91.063rem] flex flex-row items-start justify-center max-w-full">
        <FrameComponent8 />
      </main>
    </div>
  );
};

export default LightAbout;
