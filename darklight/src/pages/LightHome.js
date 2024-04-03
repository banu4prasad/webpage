import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";

const LightHome = () => {
  return (
    <div className="w-full relative bg-gray-100 flex flex-col items-start justify-start pt-[31.5px] px-[42.5px] pb-[254.7px] box-border gap-[211px] tracking-[normal] mq750:gap-[105px_211px] mq750:pl-[21px] mq750:pr-[21px] mq750:box-border mq450:gap-[53px_211px]">
      <div className="w-[1440px] h-[1024px] relative bg-gray-100 hidden max-w-full" />
      <FrameComponent2 />
      <FrameComponent />
    </div>
  );
};

export default LightHome;
