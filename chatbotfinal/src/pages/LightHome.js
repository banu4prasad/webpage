import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const LightHome = () => {
  return (
    <div className="w-full relative rounded-3xl-5 bg-gray-200 flex flex-col items-start justify-start pt-[1.625rem] pb-[10.856rem] pr-[1.625rem] pl-[3.125rem] box-border gap-[5.031rem] tracking-[normal] mq800:gap-[2.5rem_5.031rem] mq800:pl-[1.563rem] mq800:box-border mq450:gap-[1.25rem_5.031rem]">
      <div className="w-[100rem] h-[60rem] relative rounded-3xl-5 bg-gray-200 hidden max-w-full" />
      <FrameComponent1 />
      <section className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.938rem] box-border max-w-full">
        <FrameComponent />
      </section>
    </div>
  );
};

export default LightHome;
