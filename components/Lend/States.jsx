import Florida from "./Florida";
import Texas from "./Texas";

const States = () => {
  return (
    <div className="flex max-w-[1080px] gap-30 mx-auto">
      <Texas />
      <Florida />
    </div>
  );
};

export default States;
