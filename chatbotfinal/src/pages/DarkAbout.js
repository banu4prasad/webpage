import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent8 from "../components/FrameComponent8";

const DarkAbout = () => {
  return (
    <div className="w-full relative rounded-3xl-5 bg-gray-400 flex flex-col items-end justify-start pt-[2.313rem] pb-[5.988rem] pr-[4.744rem] pl-[2.656rem] box-border gap-[3.813rem] tracking-[normal] mq800:gap-[1.875rem_3.813rem] mq800:pl-[1.313rem] mq800:pr-[2.375rem] mq800:box-border mq450:gap-[0.938rem_3.813rem]">
      <img
        className="w-[100rem] h-[60rem] relative rounded-3xl-5 hidden max-w-full"
        alt=""
        src="/rectangle-382.svg"
      />
      <FrameComponent10 />
      <main className="w-[90.513rem] flex flex-row items-start justify-center max-w-full">
        <FrameComponent8 />
      </main>
    </div>
  );
};

export default DarkAbout;
