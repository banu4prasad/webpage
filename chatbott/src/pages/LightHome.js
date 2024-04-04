import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const LightHome = () => {
  return (
    <div className="w-full h-[false] relative rounded-3xl-5 bg-gray-100 flex flex-col items-end justify-start pt-[1.969rem] pb-[14.313rem] pr-[3.625rem] pl-[2.656rem] box-border gap-[5rem] tracking-[normal] mq750:gap-[2.5rem_5rem] mq750:pl-[1.313rem] mq750:pr-[1.813rem] mq750:box-border mq450:gap-[1.25rem_5rem]">
      <div className="w-[false] h-[false] relative rounded-3xl-5 bg-gray-100 hidden max-w-full" />
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default LightHome;