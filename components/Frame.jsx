import Title from "./Title";
import ImageComp from "./Image";

const Frame = ({ open, match = false, name = undefined }) => {
  return (
    <>
      <Title open={open} notHome={name} />
      <ImageComp open={open} name={name} match={match} />
    </>
  );
};

export default Frame;
