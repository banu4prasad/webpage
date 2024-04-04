import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent6 = ({ propPadding }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/light-contact");
  }, [navigate]);

  return (
    <div
      className="self-stretch flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[0.563rem] gap-[0.156rem] text-center text-[1.5rem] text-white font-mukta"
      style={frameDiv1Style}
    >
      <div className="self-stretch relative leading-[3.906rem] font-medium z-[1] mq450:text-[1.188rem] mq450:leading-[3.125rem]">
        Home
      </div>
      <div className="self-stretch flex flex-row items-start justify-start relative">
        <img
          className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xl-5 max-w-full overflow-hidden max-h-full [mix-blend-mode:linear-dodge] z-[1]"
          alt=""
          src="/rectangle-369.svg"
        />
        <div className="flex-1 relative leading-[3.906rem] font-medium z-[2] mq450:text-[1.188rem] mq450:leading-[3.125rem]">
          AI Chatbot
        </div>
      </div>
      <div className="self-stretch relative leading-[3.906rem] font-medium z-[1] mq450:text-[1.188rem] mq450:leading-[3.125rem]">{`Contact `}</div>
      <div
        className="self-stretch relative leading-[3.906rem] font-medium cursor-pointer z-[1] mq450:text-[1.188rem] mq450:leading-[3.125rem]"
        onClick={onAboutTextClick}
      >{`About `}</div>
    </div>
  );
};

export default FrameComponent6;
