import { useMemo } from "react";

const FrameComponent3 = ({
  mainMessageBox,
  mainMessageBox1,
  propGap,
  propFlexWrap,
  propBackgroundColor,
  propColor,
  propBackgroundColor1,
  propFlexWrap1,
  propFlexWrap2,
  propBackgroundColor2,
  propPadding,
  propColor1,
  propBackgroundColor3,
  propFlexWrap3,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv3Style = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  const mainMessageBoxStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const loremIpsumDolorStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const frameDiv4Style = useMemo(() => {
    return {
      flexWrap: propFlexWrap1,
    };
  }, [propFlexWrap1]);

  const frameDiv5Style = useMemo(() => {
    return {
      flexWrap: propFlexWrap2,
    };
  }, [propFlexWrap2]);

  const mainMessageBox1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
      padding: propPadding,
    };
  }, [propBackgroundColor2, propPadding]);

  const loremIpsumDolor1Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const frameDiv6Style = useMemo(() => {
    return {
      flexWrap: propFlexWrap3,
    };
  }, [propFlexWrap3]);

  return (
    <div
      className="self-stretch flex flex-col items-end justify-start gap-[3.35rem] max-w-full text-justify text-[0.938rem] text-black font-inter mq850:gap-[1.688rem_3.35rem]"
      style={frameDiv2Style}
    >
      <div
        className="w-[63.3rem] flex flex-row items-end justify-start gap-[0.563rem] max-w-full mq1225:flex-wrap"
        style={frameDiv3Style}
      >
        <div
          className="flex-1 rounded-3xs bg-white shadow-[0px_0.1px_0.19px_rgba(0,_0,_0,_0.11),_0px_0.3px_0.77px_rgba(0,_0,_0,_0.13)] box-border overflow-hidden flex flex-row items-start justify-start pt-[0.938rem] pb-[0.888rem] pr-[1.188rem] pl-[1.219rem] max-w-full shrink-0 z-[2] border-[1px] border-solid border-gray-200 mq850:min-w-full"
          style={mainMessageBoxStyle}
        >
          <div
            className="h-[4.8rem] flex-1 relative inline-block max-w-full"
            style={loremIpsumDolorStyle}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            laoreet a nunc at cursus. Suspendisse quis finibus magna. Mauris
            vitae varius tellus. Proin mollis urna nec tortor vehicula
            dignissim. Etiam aliquam scelerisque tellus eu viverra. Aenean metus
            sapien, placerat fringilla commodo ac, pharetra at ipsum.
          </div>
        </div>
        <div
          className="h-[2.65rem] w-[2.488rem] relative rounded-3xl-5 bg-gray-200 z-[2]"
          style={rectangleDivStyle}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div
          className="w-[64.313rem] flex flex-row items-end justify-start gap-[0.625rem] max-w-full mq1225:flex-wrap"
          style={frameDiv4Style}
        >
          <div className="h-[2.5rem] w-[2.5rem] relative rounded-3xl-5 bg-darkslategray-100 overflow-hidden shrink-0 z-[2]" />
          <img
            className="h-[6.625rem] flex-1 relative rounded-3xs max-w-full overflow-hidden object-contain min-w-[6.625rem] z-[2]"
            loading="lazy"
            alt=""
            src={mainMessageBox}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[3.013rem] max-w-full mq850:gap-[1.5rem_3.013rem]">
        <div
          className="w-[63.688rem] flex flex-row items-end justify-start gap-[0.563rem] max-w-full mq1225:flex-wrap"
          style={frameDiv5Style}
        >
          <div
            className="flex-1 rounded-3xs bg-white shadow-[0px_0.1px_0.19px_rgba(0,_0,_0,_0.11),_0px_0.3px_0.77px_rgba(0,_0,_0,_0.13)] box-border overflow-hidden flex flex-row items-start justify-start pt-[0.969rem] px-[1.494rem] pb-[0.9rem] max-w-full shrink-0 z-[2] border-[1px] border-solid border-gray-200 mq850:min-w-full"
            style={mainMessageBox1Style}
          >
            <div
              className="h-[4.8rem] flex-1 relative inline-block max-w-full"
              style={loremIpsumDolor1Style}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              laoreet a nunc at cursus. Suspendisse quis finibus magna. Mauris
              vitae varius tellus. Proin mollis urna nec tortor vehicula
              dignissim. Etiam aliquam scelerisque tellus eu viverra. Aenean
              metus sapien, placerat fringilla commodo ac, pharetra at ipsum.
            </div>
          </div>
          <div
            className="h-[2.5rem] w-[2.5rem] relative rounded-3xl-5 bg-gray-200 z-[2]"
            style={rectangleDiv1Style}
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div
            className="w-[64.313rem] flex flex-row items-end justify-start gap-[0.625rem] max-w-full mq1225:flex-wrap"
            style={frameDiv6Style}
          >
            <div className="h-[2.5rem] w-[2.5rem] relative rounded-3xl-5 bg-darkslategray-100 overflow-hidden shrink-0 z-[2]" />
            <img
              className="h-[6.625rem] flex-1 relative rounded-3xs max-w-full overflow-hidden object-contain min-w-[6.625rem] z-[2]"
              loading="lazy"
              alt=""
              src={mainMessageBox1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
