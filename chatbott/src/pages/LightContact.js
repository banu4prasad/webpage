import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";

const LightContact = () => {
  return (
    <div className="w-full h-[false] relative rounded-3xl-5 bg-gray-100 flex flex-col items-end justify-start pt-[1.969rem] pb-[8.85rem] pr-[3.625rem] pl-[2.656rem] box-border gap-[2.031rem] tracking-[normal] mq750:gap-[1rem_2.031rem] mq750:pl-[1.313rem] mq750:pr-[1.813rem] mq750:box-border">
      <div className="w-[false] h-[false] relative rounded-3xl-5 bg-gray-100 hidden max-w-full" />
      <FrameComponent7 />
      <FrameComponent6 />
      <div className="w-[72.813rem] h-[0.081rem] flex flex-row items-start justify-end py-[0rem] px-[2.563rem] box-border max-w-full">
        <img
          className="h-[0.081rem] flex-1 relative max-w-full overflow-hidden object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/vector-5.svg"
        />
      </div>
      <section className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.438rem] box-border max-w-full mq1125:pl-[1.688rem] mq1125:pr-[1.688rem] mq1125:box-border">
        <FrameComponent5 />
      </section>
    </div>
  );
};

export default LightContact;
